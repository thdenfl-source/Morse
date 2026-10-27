/* 웹 파일을 www/ 로 모읍니다 — 앱 껍데기가 읽는 폴더입니다.
   저장소 뿌리의 index.html 하나만 고치면 웹과 앱 양쪽에 그대로 반영됩니다.
   sw.js(오프라인 캐시)는 넣지 않습니다. 앱은 파일이 이미 기기에 있어 필요 없고,
   오히려 옛 화면을 물고 있을 수 있기 때문입니다. */
import { mkdirSync, copyFileSync, rmSync, existsSync } from "node:fs";

const FILES = ["index.html", "manifest.json", "icon.svg"];

rmSync("www", { recursive: true, force: true });
mkdirSync("www", { recursive: true });

for (const f of FILES) {
  if (!existsSync(f)) { console.error(`✗ ${f} 을 찾을 수 없습니다`); process.exit(1); }
  copyFileSync(f, `www/${f}`);
}
console.log(`www/ 준비 완료 — ${FILES.join(", ")}`);
