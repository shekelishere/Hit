// Copies the website (and the icons it uses) into ./web for packaging.
const fs = require("fs"), path = require("path");
const src = path.join(__dirname, ".."), out = path.join(__dirname, "web");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of ["index.html", "manifest.webmanifest"]) fs.copyFileSync(path.join(src, f), path.join(out, f));
fs.cpSync(path.join(src, "img"), path.join(out, "img"), { recursive: true });
fs.cpSync(path.join(src, "app", "icons"), path.join(out, "app", "icons"), { recursive: true });
console.log("web/ ready");
