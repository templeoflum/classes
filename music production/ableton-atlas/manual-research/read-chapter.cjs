// Private source reader: section-bounded text for fact checking, not a site asset.
const {readFileSync}=require('node:fs');
const {join}=require('node:path');
const [slug,from='',to='']=process.argv.slice(2);
if(!/^[a-z0-9-]+$/.test(slug||''))throw Error('Supply one cached chapter slug.');
let html=readFileSync(join(__dirname,slug+'.html'),'utf8');
html=html.slice(html.indexOf('<h1'));
html=html.slice(0,html.indexOf('</section>'));
const headings=[...html.matchAll(/<h([1-6])\b[^>]*id="([^"]+)"[^>]*>[\s\S]*?<\/h\1>/g)];
const start=from?headings.find(h=>h[2]===from)?.index:0;
const end=to?headings.find(h=>h[2]===to)?.index:html.length;
if(start===undefined||end===undefined)throw Error('Unknown section boundary.');
const text=html.slice(start,end)
  .replace(/<figure\b[\s\S]*?<\/figure>/g,'')
  .replace(/<img\b[^>]*alt="([^"]*)"[^>]*>/g,'$1')
  .replace(/<\/(?:p|li|h[1-6]|tr)>/g,'\n')
  .replace(/<[^>]+>/g,' ')
  .replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"')
  .replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/&#39;|&apos;/g,"'")
  .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n))
  .replace(/[ \t]+/g,' ').replace(/\n\s*\n/g,'\n');
console.log(text.trim());
