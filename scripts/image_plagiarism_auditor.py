#!/usr/bin/env python3
"""
Image & Asset Plagiarism Auditor (Local Multi-Layer Similarity Detector)
Detects identical, resized, cropped, recompressed, or derivative visual assets.

Layers of Detection:
1. Exact Hash (SHA-256) - 100% byte-for-byte duplicate
2. Difference Hash (dHash) - Invariant to scaling, compression, minor aspect shifts
3. Perceptual Hash (pHash via 2D-DCT) - Invariant to color filtering, noise, watermark
4. Structural Similarity Index (SSIM) - Human perceptual structural fidelity score (0-100%)

Usage Examples:
  # Scan single folder for internal duplicates:
  python scripts/image_plagiarism_auditor.py --scan ./public/images

  # Compare original assets vs suspect folder:
  python scripts/image_plagiarism_auditor.py --source ./original_assets --target ./suspect_assets

  # Find matches of a single image across a folder:
  python scripts/image_plagiarism_auditor.py --file ./sample.png --target ./public/images

  # Generate interactive HTML report:
  python scripts/image_plagiarism_auditor.py --scan ./public/images --html report.html
"""

import os
import sys
import argparse
import hashlib
import json
import base64
from pathlib import Path
from typing import Dict, List, Tuple, Optional

import numpy as np
from PIL import Image, ImageOps
from scipy.fftpack import dct
from skimage.metrics import structural_similarity as compute_ssim

SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".tiff", ".ico"}


def calculate_sha256(filepath: Path) -> str:
    """Calculate standard SHA-256 hash."""
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()


def load_normalized_image(filepath: Path) -> Optional[Image.Image]:
    """Load image safely, handling transparency and rotation."""
    try:
        img = Image.open(filepath)
        img = ImageOps.exif_transpose(img)
        if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            if img.mode != "RGBA":
                img = img.convert("RGBA")
            bg.paste(img, mask=img.split()[3])
            return bg
        elif img.mode != "RGB":
            return img.convert("RGB")
        return img
    except Exception as e:
        return None


def calculate_dhash(img: Image.Image, hash_size: int = 8) -> int:
    """Calculate Difference Hash (dHash). Invariant to scaling & aspect adjustments."""
    gray = img.convert("L").resize((hash_size + 1, hash_size), Image.Resampling.LANCZOS)
    pixels = np.array(gray, dtype=np.float32)
    diff = pixels[:, 1:] > pixels[:, :-1]
    return int("".join(["1" if b else "0" for b in diff.flatten()]), 2)


def calculate_phash(img: Image.Image, hash_size: int = 8, highfreq_factor: int = 4) -> int:
    """Calculate Perceptual Hash (pHash) using 2D Discrete Cosine Transform."""
    img_size = hash_size * highfreq_factor
    gray = img.convert("L").resize((img_size, img_size), Image.Resampling.LANCZOS)
    pixels = np.array(gray, dtype=np.float32)
    dct_matrix = dct(dct(pixels, axis=0, norm="ortho"), axis=1, norm="ortho")
    dct_low = dct_matrix[:hash_size, :hash_size]
    med = np.median(dct_low[1:, 1:])
    diff = dct_low > med
    return int("".join(["1" if b else "0" for b in diff.flatten()]), 2)


def hamming_distance(h1: int, h2: int, bit_length: int = 64) -> int:
    """Compute bitwise Hamming distance between two hashes."""
    x = h1 ^ h2
    return bin(x).count("1")


def hash_similarity_pct(h1: int, h2: int, bit_length: int = 64) -> float:
    """Convert Hamming distance to similarity percentage."""
    dist = hamming_distance(h1, h2, bit_length)
    return round((1.0 - (dist / bit_length)) * 100.0, 2)


def calculate_ssim_score(img1: Image.Image, img2: Image.Image, target_size: Tuple[int, int] = (256, 256)) -> float:
    """Calculate Structural Similarity Index (SSIM) between two images normalized to target_size."""
    try:
        im1_resized = np.array(img1.convert("L").resize(target_size, Image.Resampling.LANCZOS))
        im2_resized = np.array(img2.convert("L").resize(target_size, Image.Resampling.LANCZOS))
        score, _ = compute_ssim(im1_resized, im2_resized, full=True, data_range=255)
        return round(float(score) * 100.0, 2)
    except Exception:
        return 0.0


class ImageMetadata:
    def __init__(self, path: Path):
        self.path = path
        self.sha256 = calculate_sha256(path)
        self.file_size_kb = round(os.path.getsize(path) / 1024, 2)
        
        loaded = load_normalized_image(path)
        if loaded is not None:
            self.valid = True
            self.width, self.height = loaded.size
            self.dhash = calculate_dhash(loaded)
            self.phash = calculate_phash(loaded)
            self.image_obj = loaded
        else:
            self.valid = False
            self.width = self.height = 0
            self.dhash = self.phash = 0
            self.image_obj = None


def compare_image_pair(meta_a: ImageMetadata, meta_b: ImageMetadata) -> Optional[Dict]:
    """Compare two images across all layers."""
    if not meta_a.valid or not meta_b.valid:
        return None

    is_exact_sha = meta_a.sha256 == meta_b.sha256
    dhash_sim = hash_similarity_pct(meta_a.dhash, meta_b.dhash)
    phash_sim = hash_similarity_pct(meta_a.phash, meta_b.phash)

    # Pre-filtering: Only calculate SSIM if perceptual similarity is high or exact
    if is_exact_sha:
        ssim_score = 100.0
        final_similarity = 100.0
        status = "EXACT_DUPLICATE"
    else:
        # Heuristic fast check
        max_hash_sim = max(dhash_sim, phash_sim)
        if max_hash_sim < 60.0:
            return None  # Unrelated images

        ssim_score = calculate_ssim_score(meta_a.image_obj, meta_b.image_obj)
        # Weighted composite score: 40% pHash + 30% dHash + 30% SSIM
        final_similarity = round((0.4 * phash_sim) + (0.3 * dhash_sim) + (0.3 * ssim_score), 2)

        if final_similarity >= 95.0 or ssim_score >= 95.0:
            status = "PLAGIARISM_IDENTICAL"
        elif final_similarity >= 80.0 or ssim_score >= 80.0:
            status = "HIGH_SUSPICION_DERIVATIVE"
        elif final_similarity >= 70.0:
            status = "SIMILAR_COMPOSITION"
        else:
            return None

    return {
        "file_a": str(meta_a.path),
        "file_b": str(meta_b.path),
        "name_a": meta_a.path.name,
        "name_b": meta_b.path.name,
        "is_exact_sha": is_exact_sha,
        "dhash_sim": dhash_sim,
        "phash_sim": phash_sim,
        "ssim_score": ssim_score,
        "final_similarity": final_similarity,
        "status": status,
        "dim_a": f"{meta_a.width}x{meta_a.height}",
        "dim_b": f"{meta_b.width}x{meta_b.height}",
        "size_a_kb": meta_a.file_size_kb,
        "size_b_kb": meta_b.file_size_kb,
    }


def collect_images_from_dir(directory: Path, recursive: bool = True) -> List[Path]:
    """Find all supported image paths."""
    files = []
    iterator = directory.rglob("*") if recursive else directory.glob("*")
    for f in iterator:
        if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS:
            files.append(f)
    return files


def generate_html_report(results: List[Dict], output_file: Path):
    """Generate modern, interactive HTML report with side-by-side previews."""
    def get_img_data_uri(filepath_str: str) -> str:
        try:
            with open(filepath_str, "rb") as f:
                encoded = base64.b64encode(f.read()).decode("utf-8")
                ext = Path(filepath_str).suffix.lower().replace(".", "")
                mime = f"image/{ext}" if ext != "jpg" else "image/jpeg"
                return f"data:{mime};base64,{encoded}"
        except Exception:
            return ""

    items_html = []
    for idx, r in enumerate(results, 1):
        status_badge = {
            "EXACT_DUPLICATE": ('<span class="badge badge-red">🔴 100% Exact Duplicate</span>'),
            "PLAGIARISM_IDENTICAL": ('<span class="badge badge-red">🔴 Plagiarism / Identical Copy</span>'),
            "HIGH_SUSPICION_DERIVATIVE": ('<span class="badge badge-orange">🟡 High Suspicion / Derivative</span>'),
            "SIMILAR_COMPOSITION": ('<span class="badge badge-blue">🔵 Similar Layout / Composition</span>')
        }.get(r["status"], f'<span class="badge">{r["status"]}</span>')

        img_a_src = get_img_data_uri(r["file_a"])
        img_b_src = get_img_data_uri(r["file_b"])

        item = f"""
        <div class="card" data-status="{r['status']}">
            <div class="card-header">
                <div>
                    <strong>Match #{idx}</strong> — Overall Similarity: <span class="score">{r['final_similarity']}%</span>
                </div>
                <div>{status_badge}</div>
            </div>
            <div class="card-body">
                <div class="img-col">
                    <div class="img-wrap">
                        <img src="{img_a_src}" alt="Image A" loading="lazy" />
                    </div>
                    <div class="img-meta">
                        <div class="filename" title="{r['file_a']}">{r['name_a']}</div>
                        <div>Dim: {r['dim_a']} | Size: {r['size_a_kb']} KB</div>
                    </div>
                </div>

                <div class="metrics-col">
                    <div class="metric-pill"><strong>SSIM Score:</strong> {r['ssim_score']}%</div>
                    <div class="metric-pill"><strong>pHash Sim:</strong> {r['phash_sim']}%</div>
                    <div class="metric-pill"><strong>dHash Sim:</strong> {r['dhash_sim']}%</div>
                    <div class="metric-pill"><strong>SHA-256 Match:</strong> {'YES' if r['is_exact_sha'] else 'NO'}</div>
                </div>

                <div class="img-col">
                    <div class="img-wrap">
                        <img src="{img_b_src}" alt="Image B" loading="lazy" />
                    </div>
                    <div class="img-meta">
                        <div class="filename" title="{r['file_b']}">{r['name_b']}</div>
                        <div>Dim: {r['dim_b']} | Size: {r['size_b_kb']} KB</div>
                    </div>
                </div>
            </div>
        </div>
        """
        items_html.append(item)

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asset Similarity & Plagiarism Audit Report</title>
    <style>
        :root {{
            --bg: #090d16;
            --surface: #111827;
            --border: #1f2937;
            --text: #f3f4f6;
            --muted: #9ca3af;
            --accent: #10b981;
            --red: #ef4444;
            --orange: #f59e0b;
            --blue: #3b82f6;
        }}
        * {{ box-sizing: border-box; margin: 0; padding: 0; }}
        body {{
            background: var(--bg);
            color: var(--text);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            padding: 32px 16px;
            line-height: 1.5;
        }}
        .container {{ max-width: 1200px; margin: 0 auto; }}
        header {{
            margin-bottom: 24px;
            border-bottom: 1px solid var(--border);
            padding-bottom: 20px;
        }}
        h1 {{ font-size: 26px; font-weight: 700; color: #fff; }}
        p.sub {{ color: var(--muted); font-size: 14px; margin-top: 4px; }}
        .filter-bar {{
            display: flex;
            gap: 10px;
            margin-bottom: 24px;
            flex-wrap: wrap;
        }}
        .btn-filter {{
            background: var(--surface);
            color: var(--text);
            border: 1px solid var(--border);
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.2s;
        }}
        .btn-filter:hover, .btn-filter.active {{
            background: var(--accent);
            color: #000;
            border-color: var(--accent);
            font-weight: 600;
        }}
        .card {{
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            margin-bottom: 20px;
            overflow: hidden;
        }}
        .card-header {{
            background: rgba(255, 255, 255, 0.03);
            border-bottom: 1px solid var(--border);
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
        }}
        .score {{ font-weight: 700; color: var(--accent); font-size: 16px; }}
        .badge {{
            font-size: 11px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 9999px;
            text-transform: uppercase;
        }}
        .badge-red {{ background: rgba(239, 68, 68, 0.2); color: #fca5a5; border: 1px solid #ef4444; }}
        .badge-orange {{ background: rgba(245, 158, 11, 0.2); color: #fde68a; border: 1px solid #f59e0b; }}
        .badge-blue {{ background: rgba(59, 130, 246, 0.2); color: #93c5fd; border: 1px solid #3b82f6; }}
        .card-body {{
            display: grid;
            grid-template-columns: 1fr 180px 1fr;
            gap: 20px;
            padding: 20px;
            align-items: center;
        }}
        @media (max-width: 800px) {{
            .card-body {{ grid-template-columns: 1fr; }}
        }}
        .img-col {{ display: flex; flex-direction: column; align-items: center; text-align: center; }}
        .img-wrap {{
            width: 100%;
            height: 220px;
            background: #000;
            border: 1px solid var(--border);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }}
        .img-wrap img {{
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }}
        .img-meta {{ margin-top: 10px; font-size: 12px; color: var(--muted); }}
        .filename {{ color: #fff; font-weight: 600; word-break: break-all; margin-bottom: 2px; }}
        .metrics-col {{
            display: flex;
            flex-direction: column;
            gap: 8px;
            text-align: center;
        }}
        .metric-pill {{
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
            border-radius: 6px;
            padding: 6px 8px;
            font-size: 12px;
        }}
        .empty-state {{
            text-align: center;
            padding: 60px 20px;
            color: var(--muted);
        }}
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🛡️ Visual Asset Plagiarism & Similarity Report</h1>
            <p class="sub">Total Pairings Detected: {len(results)} | Evaluated via SHA-256, Perceptual Hash (pHash/dHash), and SSIM</p>
        </header>

        <div class="filter-bar">
            <button class="btn-filter active" onclick="filterCards('ALL')">All ({len(results)})</button>
            <button class="btn-filter" onclick="filterCards('PLAGIARISM_IDENTICAL')">Identical / Plagiarism</button>
            <button class="btn-filter" onclick="filterCards('HIGH_SUSPICION_DERIVATIVE')">High Suspicion</button>
            <button class="btn-filter" onclick="filterCards('SIMILAR_COMPOSITION')">Similar Composition</button>
        </div>

        <div id="results-list">
            {"".join(items_html) if items_html else '<div class="empty-state">✅ No duplicate or plagiarized images found! All scanned assets appear unique.</div>'}
        </div>
    </div>

    <script>
        function filterCards(status) {{
            document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            
            const cards = document.querySelectorAll('.card');
            cards.forEach(c => {{
                if (status === 'ALL') {{
                    c.style.display = 'block';
                }} else if (status === 'PLAGIARISM_IDENTICAL') {{
                    const s = c.getAttribute('data-status');
                    c.style.display = (s === 'PLAGIARISM_IDENTICAL' || s === 'EXACT_DUPLICATE') ? 'block' : 'none';
                }} else {{
                    c.style.display = (c.getAttribute('data-status') === status) ? 'block' : 'none';
                }}
            }});
        }}
    </script>
</body>
</html>
"""
    output_file.write_text(html_content, encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Audit visual assets for plagiarism and duplicates.")
    parser.add_argument("--scan", type=str, help="Folder to scan for internal duplicates.")
    parser.add_argument("--source", type=str, help="Source folder of authentic/original assets.")
    parser.add_argument("--target", type=str, help="Target folder of suspect assets to check against source.")
    parser.add_argument("--file", type=str, help="Single image file to check against target folder.")
    parser.add_argument("--threshold", type=float, default=70.0, help="Minimum similarity threshold percentage (default: 70.0).")
    parser.add_argument("--html", type=str, default="", help="Path to output interactive HTML report.")
    parser.add_argument("--json", type=str, default="", help="Path to output JSON report.")

    args = parser.parse_args()

    if not args.scan and not (args.source and args.target) and not (args.file and args.target):
        parser.print_help()
        sys.exit(1)

    print("=" * 70)
    print("🛡️  VISUAL ASSET PLAGIARISM & SIMILARITY AUDITOR")
    print("=" * 70)

    results = []

    # MODE 1: Scan single directory for duplicates
    if args.scan:
        scan_dir = Path(args.scan)
        if not scan_dir.exists():
            print(f"Error: Directory '{scan_dir}' not found.")
            sys.exit(1)

        print(f"📂 Scanning directory: {scan_dir.resolve()}")
        image_paths = collect_images_from_dir(scan_dir)
        print(f"🔍 Discovered {len(image_paths)} image files.")

        print("⚡ Calculating image fingerprints (SHA256, dHash, pHash)...")
        metadata_list = []
        for p in image_paths:
            m = ImageMetadata(p)
            if m.valid:
                metadata_list.append(m)

        n = len(metadata_list)
        print(f"⚙️  Comparing {n * (n - 1) // 2} possible pairs...")

        for i in range(n):
            for j in range(i + 1, n):
                match = compare_image_pair(metadata_list[i], metadata_list[j])
                if match and match["final_similarity"] >= args.threshold:
                    results.append(match)

    # MODE 2: Source directory vs Target directory
    elif args.source and args.target:
        src_dir = Path(args.source)
        tgt_dir = Path(args.target)
        if not src_dir.exists() or not tgt_dir.exists():
            print("Error: Source or Target directory not found.")
            sys.exit(1)

        src_files = [ImageMetadata(p) for p in collect_images_from_dir(src_dir) if ImageMetadata(p).valid]
        tgt_files = [ImageMetadata(p) for p in collect_images_from_dir(tgt_dir) if ImageMetadata(p).valid]

        print(f"📂 Source ({len(src_files)} images) vs Target ({len(tgt_files)} images)...")
        for s in src_files:
            for t in tgt_files:
                match = compare_image_pair(s, t)
                if match and match["final_similarity"] >= args.threshold:
                    results.append(match)

    # MODE 3: Single file vs Target directory
    elif args.file and args.target:
        f_path = Path(args.file)
        tgt_dir = Path(args.target)
        if not f_path.exists() or not tgt_dir.exists():
            print("Error: Single file or Target directory not found.")
            sys.exit(1)

        meta_single = ImageMetadata(f_path)
        tgt_files = [ImageMetadata(p) for p in collect_images_from_dir(tgt_dir) if ImageMetadata(p).valid]

        for t in tgt_files:
            match = compare_image_pair(meta_single, t)
            if match and match["final_similarity"] >= args.threshold:
                results.append(match)

    # Sort results by similarity descending
    results.sort(key=lambda x: x["final_similarity"], reverse=True)

    # Terminal Output
    print("-" * 70)
    print(f"📊 Audit Complete: Found {len(results)} matches >= {args.threshold}%\n")

    for idx, r in enumerate(results, 1):
        status_label = {
            "EXACT_DUPLICATE": "🔴 [EXACT DUPLICATE 100%]",
            "PLAGIARISM_IDENTICAL": "🔴 [PLAGIARISM / IDENTICAL]",
            "HIGH_SUSPICION_DERIVATIVE": "🟡 [HIGH SUSPICION / DERIVATIVE]",
            "SIMILAR_COMPOSITION": "🔵 [SIMILAR COMPOSITION]"
        }.get(r["status"], r["status"])

        print(f"Match #{idx:02d} | Similarity: {r['final_similarity']}% {status_label}")
        print(f"  ├─ File A: {r['name_a']} ({r['dim_a']} - {r['size_a_kb']} KB)")
        print(f"  ├─ File B: {r['name_b']} ({r['dim_b']} - {r['size_b_kb']} KB)")
        print(f"  └─ Metrics: SSIM={r['ssim_score']}% | pHash={r['phash_sim']}% | dHash={r['dhash_sim']}% | SHA256={r['is_exact_sha']}")
        print()

    # Save HTML report if requested
    if args.html:
        html_out = Path(args.html)
        generate_html_report(results, html_out)
        print(f"✨ Interactive HTML report saved to: {html_out.resolve()}")

    # Save JSON report if requested
    if args.json:
        json_out = Path(args.json)
        json_out.write_text(json.dumps(results, indent=2), encoding="utf-8")
        print(f"📄 JSON report saved to: {json_out.resolve()}")


if __name__ == "__main__":
    main()

