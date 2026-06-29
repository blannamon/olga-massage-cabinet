import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import puppeteer from "puppeteer";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] ? `-${process.argv[3].replace(/[^a-z0-9_-]/gi, "-")}` : "";
const dir = join(process.cwd(), "temporary_screenshots");

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const next = readdirSync(dir)
  .map((file) => file.match(/^screenshot-(\d+)/)?.[1])
  .filter(Boolean)
  .map(Number)
  .reduce((max, current) => Math.max(max, current), 0) + 1;

const output = join(dir, `screenshot-${next}${label}.png`);
const chromeCache = join(homedir(), ".cache", "puppeteer", "chrome-headless-shell");
const cachedChrome = existsSync(chromeCache)
  ? readdirSync(chromeCache)
      .sort()
      .reverse()
      .map((version) => join(chromeCache, version, "chrome-headless-shell-mac-arm64", "chrome-headless-shell"))
      .find((candidate) => existsSync(candidate))
  : undefined;

const browser = await puppeteer.launch({
  headless: "new",
  executablePath: cachedChrome,
  defaultViewport: { width: 900, height: 1600, deviceScaleFactor: 1 }
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0" });
await page.addStyleTag({
  content: ".reveal{opacity:1!important;transform:none!important;transition:none!important}"
});
await page.screenshot({ path: output, fullPage: true });
await browser.close();
console.log(output);
