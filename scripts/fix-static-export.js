const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function fixTurbopackRscFiles() {
  console.log("Running comprehensive fix-static-export...");
  const allFiles = getAllFiles(outDir);

  for (const filePath of allFiles) {
    if (filePath.endsWith("__PAGE__.txt")) {
      const relToOut = path.relative(outDir, filePath);
      const parts = relToOut.split(path.sep);

      if (parts.length > 2) {
        const pageIdx = parts.indexOf("__PAGE__.txt");
        const nextFolderIdx = parts.findIndex((p) => p.startsWith("__next."));
        if (nextFolderIdx !== -1 && nextFolderIdx < pageIdx) {
          const routeParts = parts.slice(0, nextFolderIdx);
          const rscParts = parts.slice(nextFolderIdx);

          const routeDir = path.join(outDir, ...routeParts);
          const flatName = rscParts.join(".");
          const flatPath = path.join(routeDir, flatName);

          if (!fs.existsSync(flatPath)) {
            fs.copyFileSync(filePath, flatPath);
            console.log(`Created flat RSC payload: ${path.relative(outDir, flatPath)}`);
          }
        }
      }
    }
  }

  console.log("fix-static-export complete!");
}

fixTurbopackRscFiles();

