// Serveur local pour « cuire » les visuels SVG en PNG (à lancer depuis la racine du dépôt) :
//   node outils/serveur-cuisson.js
// puis ouvrir http://localhost:5300/outils/cuisson.html et cliquer sur « Cuire ».
// Les PNG sont écrits dans assets/png/. Aucune dépendance à installer.
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.');
const port = +process.env.PORT || +process.argv[3] || 5300;
const saveDir = path.resolve(process.argv[4] || path.join(root, 'assets', 'png'));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.css': 'text/css' };
http.createServer((q, r) => {
  const u = new URL(q.url, 'http://x');
  if (q.method === 'POST' && u.pathname === '/save') {
    // seuls les chemins relatifs à l'intérieur de assets/png sont acceptés
    const name = (u.searchParams.get('name') || '').replace(/\\/g, '/');
    const dest = path.resolve(saveDir, name);
    if (!name || !dest.startsWith(saveDir + path.sep)) { r.writeHead(400); return r.end('nom refusé'); }
    const chunks = []; q.on('data', c => chunks.push(c)); q.on('end', () => {
      fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, Buffer.concat(chunks)); r.end('ok');
    }); return;
  }
  let p = path.join(root, decodeURIComponent(u.pathname));
  if (!p.startsWith(root)) { r.writeHead(403); return r.end(); }
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) { r.writeHead(404); return r.end('404'); }
  r.writeHead(200, { 'content-type': types[path.extname(p).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(p).pipe(r);
}).listen(port, () => console.log('Cuisson : http://localhost:' + port + '/outils/cuisson.html  (PNG écrits dans ' + saveDir + ')'));
