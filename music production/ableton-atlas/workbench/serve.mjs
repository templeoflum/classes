import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const directory = fileURLToPath(new URL('./dist/', import.meta.url));
const allowed = new Map([['index.html','text/html'],['board.css','text/css'],['board.js','text/javascript'],['status.json','application/json'],['sketch.html','text/html'],['sketch.css','text/css'],['sketch.js','text/javascript']]);
const server = http.createServer(async (request,response) => {
  const url = new URL(request.url,'http://127.0.0.1');
  const file = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
  if (!allowed.has(file) || !['GET','HEAD'].includes(request.method)) { response.writeHead(404); response.end('Not found'); return; }
  try {
    const data = await readFile(path.join(directory,file));
    response.writeHead(200,{'Content-Type':`${allowed.get(file)}; charset=utf-8`,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"});
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch { response.writeHead(404); response.end('Not found'); }
});
server.listen(Number(process.env.ATLAS_PREVIEW_PORT || 0),'127.0.0.1',() => console.log(`Atlas workbench: http://127.0.0.1:${server.address().port}/`));
