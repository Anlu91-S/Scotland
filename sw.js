const CACHE="scotland-roadbook-v310";
const CORE=["./", "./index.html", "./styles.css?v=310", "./app.js?v=310", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./credits.html", "./images/cairngorms.jpg", "./images/callanish.jpg", "./images/clachaig-inn.jpg", "./images/conic-hill.jpg", "./images/crail.jpg", "./images/culloden.jpg", "./images/culross.jpg", "./images/edinburgh-fringe.jpg", "./images/edinburgh.jpg", "./images/glasgow.jpg", "./images/glencoe.jpg", "./images/harris.jpg", "./images/inverness.jpg", "./images/loch-lomond.jpg", "./images/loch-morlich.jpg", "./images/luskentyre.jpg", "./images/old-man-storr.jpg", "./images/pitlochry.jpg", "./images/skye.jpg", "./images/stirling-castle.jpg", "./images/stirling.jpg", "./images/three-sisters.jpg"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 event.respondWith(fetch(event.request).then(response=>{
  if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{})}
  return response;
 }).catch(()=>caches.match(event.request).then(cached=>cached||(event.request.mode==="navigate"?caches.match("./index.html"):Promise.reject(new Error("Offline resource unavailable"))))));
});
