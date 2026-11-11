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
    // Look for any __PAGE__.txt inside a subfolder
    if (filePath.endsWith("__PAGE__.txt")) {
      const relToOut = path.relative(outDir, filePath);
      const parts = relToOut.split(path.sep);

      // We need at least: [routeDir, ..., "__PAGE__.txt"]
      if (parts.length > 2) {
        // e.g. contact/__next.contact/__PAGE__.txt -> parts: ['contact', '__next.contact', '__PAGE__.txt']
        // target directory is the route dir: 'contact'
        // target flat name: '__next.contact.__PAGE__.txt'
        
        // Find the route directory:
        // For portofolio/simpelantas/__next.portofolio/$d$id/__PAGE__.txt:
        // parts: ['portofolio', 'simpelantas', '__next.portofolio', '$d$id', '__PAGE__.txt']
        // routeDir: 'portofolio/simpelantas'
        // subParts: ['__next.portofolio', '$d$id', '__PAGE__.txt']
        // flatName: '__next.portofolio.$d$id.__PAGE__.txt'

        const pageIdx = parts.indexOf("__PAGE__.txt");
        // find where the __next.* folder starts
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
