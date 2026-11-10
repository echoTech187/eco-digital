# Eco-Digital

Platform digital ekosistem berbasis **Next.js App Router** dengan **Clean Architecture**.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: react-hook-form
- **Architecture**: Clean Architecture (Entity → Use Case → Repository)

## Struktur Project

```
src/
├── app/                    # Routing & halaman (Next.js App Router)
├── components/             # Komponen UI reusable
│   ├── ui/                 # Komponen dasar (Button, Input, dll)
│   ├── layout/             # Navbar, Sidebar, Footer
│   └── forms/              # Komponen form
├── lib/                    # Core domain layer
│   ├── entities/           # Domain entities & DTO
│   ├── use-cases/          # Business logic
│   ├── repositories/       # Repository interfaces
│   └── utils/              # Helper functions
├── infrastructure/         # Infrastructure layer
│   ├── repositories/       # Implementasi repository (DB, API)
│   └── http/               # HTTP client config
├── actions/                # Next.js Server Actions
└── types/                  # Global TypeScript types
```

## Memulai

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Assets & Logo

Semua varian logo tersedia di folder `assets/logo/`:

| File | Keterangan |
|------|------------|
| `logo.png` | Logo utama |
| `logo-dark.png` | Logo versi dark |
| `logo-transparent.png` | Logo dengan background transparan |
| `logo-horizontal-dark.png` | Logo horizontal (dark) |
| `logo-horizontal-white.png` | Logo horizontal (white) |
| `logo-vertical-dark.jpg` | Logo vertikal (dark) |
| `logo-vertical-white.jpg` | Logo vertikal (white) |
| `favicon.ico` | Favicon utama |
| `favicon-dark.ico` | Favicon versi dark |
| `favicon-white.png` | Favicon versi white |

> File `public/favicon.ico` dan `public/logo.png` adalah salinan untuk diakses via URL publik.

## Alur Data (Clean Architecture)

```
UI (components/app)
    ↓
Server Actions (actions/)
    ↓
Use Cases (lib/use-cases/)
    ↓
Repository Interface (lib/repositories/)
    ↓
Repository Impl (infrastructure/repositories/)
    ↓
Database / External API
```
