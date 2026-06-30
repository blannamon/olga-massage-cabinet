import { cp, mkdir, rm } from "node:fs/promises";

const publicPaths = [
  "index.html",
  "404.html",
  "en",
  "assets/images",
  "favicon.ico",
  "google6059771f3b4ecdc0.html",
  "robots.txt",
  "sitemap.xml",
  "script.js",
  "styles.css",
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

for (const path of publicPaths) {
  await cp(path, `dist/${path}`, { recursive: true });
}

await rm("dist/assets/images/.DS_Store", { force: true });
