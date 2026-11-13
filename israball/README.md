# Israball

Storefront preview for Israball: a small gadget shop that tests every product before selling it and shows the maker's claim next to the measured result. Hebrew first, with English.

- Single static page: `index.html` (inline CSS and JS, Google Fonts only). Open it in a browser or serve the folder.
- Marketplace browsing: search as you type, category strip, price filter, "only items that met the claim", and sorting. Each product card shows price, measured vs claimed result, and delivery time from stock in Israel.
- No star ratings or "sold" counts yet: add them after launch from real orders and reviews.
- Hebrew/English toggle switches text direction. ₪/$ toggle ($ is an estimate at 3.7).
- Cart persists in the browser's localStorage. Checkout is not connected: payments are out of scope until launch.
- Responsive: a bottom cart bar on phones; follows the system light/dark theme.

Product names, prices and test results are sample content for the preview. Before launch, electrical and wireless items need Israeli standards approval, and each test result must come from a real test of the unit being sold. Research behind the direction is in `../.copycat/RESULT.md`.

## Product pictures
`img/*.jpg` are 3D renders made locally with three.js (`tools/render-products.html` and `tools/render-products.js`), not photos. The site says so in the filter column. Replace each file with a photo of the unit you tested, keeping the same file name.

## PC version
- **Install from the browser:** host this folder over HTTPS, open it in Chrome or Edge on Windows or Mac, and choose Install app (the icon in the address bar). It opens in its own window and works offline (`manifest.webmanifest`, `sw.js`).
- **Desktop app (Electron):** `desktop/`. Needs Node 18+.
  ```
  cd desktop
  npm install
  npm start            # run it
  npm run build:win    # Windows installer (build on Windows, or on Linux/Mac with Wine)
  npm run build:mac    # macOS .dmg (build on a Mac)
  npm run build:linux  # Linux AppImage
  ```
  `npm run sync-web` copies the site into `desktop/web` before each run or build.
- Wide screens (1440px and up) show five product columns. Press `/` to jump to search.
