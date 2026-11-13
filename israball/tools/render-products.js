const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ids = (process.argv[2] || 'pb10,gan65,cable2m,hub7,scale,thermo,lamp,headlamp,inflator,vac,mount,bits').split(',');
const types = { '.html': 'text/html', '.js': 'text/javascript' };
const srv = http.createServer((q, r) => { const f = path.join(__dirname, decodeURIComponent(q.url.split('?')[0])); fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); r.end(d); }); }).listen(8765, async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  fs.mkdirSync('out', { recursive: true });
  for (const id of ids) {
    const p = await b.newPage({ viewport: { width: 900, height: 900 } });
    p.on('pageerror', e => console.log(id, 'ERR', e.message)); p.on('console', m => { if (m.type() === 'error') console.log(id, m.text()); });
    await p.goto('http://localhost:8765/render.html#' + id);
    await p.waitForFunction(() => window.__done, null, { timeout: 60000 }).catch(() => console.log(id, 'timeout'));
    await p.screenshot({ path: 'out/' + id + '.jpg', type: 'jpeg', quality: 84 });
    await p.close(); console.log('ok', id);
  }
  await b.close(); srv.close();
});
