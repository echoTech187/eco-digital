const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

function fixTurbopackRscFiles(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Check if this directory contains __next.portofolio/$d$id/__PAGE__.txt
      const nestedTxt = path.join(fullPath, "__next.portofolio", "$d$id", "__PAGE__.txt");
      const flatTxt = path.join(fullPath, "__next.portofolio.$d$id.__PAGE__.txt");

      if (fs.existsSync(nestedTxt)) {
        fs.copyFileSync(nestedTxt, flatTxt);
        console.log(`Created flat RSC payload: ${flatTxt}`);
      }

      // Check for other potential dynamic routes or nested patterns
      fixTurbopackRscFiles(fullPath);
    }
  }
}

console.log("Running fix-static-export...");
fixTurbopackRscFiles(outDir);
console.log("fix-static-export complete!");
