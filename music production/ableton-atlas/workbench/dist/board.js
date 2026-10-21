const ui = Object.fromEntries(['phase','current-title','detail','owner','next','freshness','open-sketch'].map(id => [id,document.getElementById(id)]));
let latest;
let displayedSignature;
function display(status) {
  const stamp = Date.parse(status.updatedAt);
  const stale = status.phase === 'working' && (!Number.isFinite(stamp) || Date.now() - stamp > 300000);
  const signature = JSON.stringify(status) + stale;
  if (signature === displayedSignature) return;
  displayedSignature = signature;
  ui.phase.textContent = stale ? 'Last reported work' : status.phase === 'working' ? 'In progress' : 'Ready to try';
  ui.owner.textContent = stale ? 'Activity not confirmed' : status.phase === 'working' ? 'Codex · working' : 'This build is finished';
  ui['current-title'].textContent = status.current;
  ui.detail.textContent = status.detail;
  ui.next.textContent = status.next;
  ui['open-sketch'].hidden = !status.sketchReady;
  ui.freshness.textContent = stale ? 'Status needs a fresh update; activity is not confirmed.' : `Updated ${new Date(stamp).toLocaleTimeString([], {hour:'numeric',minute:'2-digit'})}`;
  document.querySelector('.current').dataset.phase = stale ? 'stale' : status.phase;
}
async function refresh() {
  try {
    const response = await fetch('status.json', {cache:'no-store'});
    if (!response.ok) throw new Error('Status unavailable');
    latest = await response.json(); display(latest);
  } catch {
    if (latest) display(latest);
    displayedSignature = undefined;
    ui.freshness.textContent = 'Cannot refresh status. This is the last loaded record.';
    ui.phase.textContent = 'Status unavailable';
    ui.owner.textContent = 'Activity not confirmed';
    document.querySelector('.current').dataset.phase = 'stale';
  }
}
refresh(); setInterval(refresh, 3000);
