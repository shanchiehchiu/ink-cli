# ink-cli

華麗互動式 CLI 展示範例

---

本專案以 [Ink](https://github.com/vadimdemedes/ink)、React、[ink-gradient](https://github.com/sindresorhus/ink-gradient)、[ink-big-text](https://github.com/sindresorhus/ink-big-text) 打造現代化 CLI 體驗，支援彩色 ASCII 藝術字、漸層、互動式輸入等豐富效果。

## 功能特色
- 彩色漸層大字 LOGO
- CLI 互動式輸入框
- 動態歡迎訊息（含表情符號與框線）
- 完整繁體中文註解

## 快速開始

1. 安裝相依套件：
   ```bash
   npm install
   ```

2. 執行 CLI：
   ```bash
   npm run start
   # 或直接 node dist/cli.js
   ```
![image](https://github.com/shanchiehchiu/ink-cli/blob/main/截圖%202025-07-15%2002.34.14.png)

## 主要技術
- ink
- react
- ink-text-input
- ink-gradient
- ink-big-text

## 專案結構
- `cli.tsx`：主 CLI 互動邏輯
- `package.json`：相依套件與指令
- `.gitignore`：忽略不需追蹤的檔案

## 授權
MIT License
