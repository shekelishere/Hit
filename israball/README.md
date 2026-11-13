# Israball

Storefront preview for Israball: a small gadget shop that tests every product before selling it and shows the maker's claim next to the measured result. Hebrew first, with English.

- Single static page: `index.html` (inline CSS and JS, Google Fonts only). Open it in a browser or serve the folder.
- Test log: each product row shows what was tested, the claimed value, the measured value, and how far short it falls when it does.
- Hebrew/English toggle switches text direction. ₪/$ toggle ($ is an estimate at 3.7).
- Cart persists in the browser's localStorage. Checkout is not connected: payments are out of scope until launch.
- Responsive: a bottom cart bar on phones; follows the system light/dark theme.

Product names, prices and test results are sample content for the preview. Before launch, electrical and wireless items need Israeli standards approval, and each test result must come from a real test of the unit being sold. Research behind the direction is in `../.copycat/RESULT.md`.
