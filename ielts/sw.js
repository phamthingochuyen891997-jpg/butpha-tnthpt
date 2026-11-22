const C="ielts70-v1";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","icon-192.png","icon-512.png"]).catch(()=>{})))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const r=e.request,u=new URL(r.url);
 if(r.method!=="GET"||u.origin!==location.origin||/\.(mp3|mp4)$/i.test(u.pathname)||r.headers.has("range"))return;
 e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));}return res}).catch(()=>caches.match(r)))});
