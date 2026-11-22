/* ===== Bản APP (GitHub Pages): đăng nhập Google qua Firebase, lưu hành trình vào Firestore =====
   Cung cấp window.claude.use('db'|'user') giống trên claude.ai, nên auth.js dùng chung được.
   Firestore: ielts_journey/{uid} (riêng em đó) · ielts_progress/{uid} (tóm tắt cho cô). Cô = users/{uid}.role=="teacher". */
(function(){
const CFG={apiKey:"AIzaSyACo9wh9u1VZdBKh3cNVfdO7L3qZ_aOIsI",authDomain:"my-english-workspace-cf8d7.firebaseapp.com",projectId:"my-english-workspace-cf8d7",storageBucket:"my-english-workspace-cf8d7.firebasestorage.app",messagingSenderId:"989721870907",appId:"1:989721870907:web:e25d3c69a8e682d399d21e"};
const G="https://www.gstatic.com/firebasejs/10.12.2/";
const UA=navigator.userAgent||"", IOS=/iPhone|iPad|iPod/i.test(UA)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const INAPP=/Zalo|FBAN|FBAV|FB_IAB|FBIOS|Messenger|Instagram|Line\/|musical_ly|Bytedance|TikTok|; wv\)/i.test(UA);
const APPN=/Zalo/i.test(UA)?"Zalo":/Messenger/i.test(UA)?"Messenger":/FBAN|FBAV|FB_IAB|FBIOS/i.test(UA)?"Facebook":"ứng dụng này";
const STANDALONE=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
let fb=null, ready=null, user=null, isT=null, profCache={};
async function load(){if(fb) return fb;
 const get=async n=>{let last; for(let k=0;k<3;k++){try{return await import(G+n+(k?"?r="+k:""));}catch(e){last=e; await new Promise(r=>setTimeout(r,700*(k+1)));}} const er=new Error('load'); er.code='app/load'; throw er;};
 const [A,U,F]=await Promise.all([get('firebase-app.js'),get('firebase-auth.js'),get('firebase-firestore.js')]);
 const app=A.initializeApp(CFG,'ielts'); const auth=U.getAuth(app); auth.languageCode='vi';
 fb={auth,db:F.getFirestore(app),U,F}; return fb;}
const map=p=>{const s=p.split('/');
 if(s[0]==='data'&&s[1]==='users') return ['ielts_journey',s[2]];
 if(s[0]==='progress') return s[1]?['ielts_progress',s[1]]:['ielts_progress'];
 return s;};
function docAPI(path){const [c,id]=map(path); return {
 get:async()=>{const s=await fb.F.getDoc(fb.F.doc(fb.db,c,id)); return {exists:s.exists(),data:()=>s.data()};},
 set:async v=>{if(c==='ielts_progress') v=Object.assign({},v,{pe:(user.email||'').toLowerCase(),pn:user.displayName||''}); await fb.F.setDoc(fb.F.doc(fb.db,c,id),v);}};}
const DB={doc:docAPI,collection:p=>({get:async()=>{const [c]=map(p); const q=await fb.F.getDocs(fb.F.collection(fb.db,c));
 const docs=q.docs.map(d=>{const v=d.data(); profCache[d.id]={name:v.pn||'',email:v.pe||''}; return {id:d.id,data:()=>v};}); return {docs};}}),
 doc2:null};
const USER={id:async()=>user.uid, me:async()=>({name:user.displayName||'',email:user.email||''}),
 isOwner:async()=>{if(isT!=null) return isT; try{const s=await fb.F.getDoc(fb.F.doc(fb.db,'users',user.uid)); isT=s.exists()&&s.data().role==='teacher';}catch(e){isT=false;} return isT;},
 canEdit:async()=>USER.isOwner(), profiles:async ids=>Object.fromEntries(ids.map(i=>[i,profCache[i]||{name:'',email:''}]))};
function start(){if(ready) return ready; ready=(async()=>{try{const {auth}=await load(); await auth.authStateReady(); user=auth.currentUser;}catch(e){window.__fbErr=e;} return user;})(); return ready;}
window.claude={use:async n=>{const u=await start(); if(!u) return null; if(n==='db') return DB; if(n==='user') return USER; return null;}};

/* ---------- màn hình đăng nhập ---------- */
const GI='<svg viewBox="0 0 48 48" width="22" height="22"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.5z"/></svg>';
function err(e){const c=e&&e.code||'';
 if(c==='auth/popup-closed-by-user'||c==='auth/cancelled-popup-request') return 'Em đã đóng cửa sổ đăng nhập. Bấm lại nhé.';
 if(c==='app/load'||c==='auth/network-request-failed') return 'Mạng đang chập chờn. Em tải lại trang hoặc đổi sang 4G/Wi-Fi khác.';
 if(c==='auth/popup-blocked') return IOS?'Điện thoại đang chặn cửa sổ đăng nhập. Bấm nút thêm 1 lần nữa; nếu vẫn bị: Cài đặt → Safari → tắt “Chặn cửa sổ bật lên”.':'Trình duyệt đang chặn cửa sổ đăng nhập. Bấm lại nút, hoặc cho phép cửa sổ bật lên.';
 if(INAPP||c==='auth/web-storage-unsupported'||c==='auth/operation-not-supported-in-this-environment') return 'Trình duyệt này không cho đăng nhập Google. Em mở link bằng '+(IOS?'Safari':'Chrome')+' nhé.';
 return 'Chưa đăng nhập được (mã lỗi: '+(c||'không rõ')+'). Em tải lại trang thử lại, hoặc chụp màn hình gửi cô.';}
let dip=null; window.addEventListener('beforeinstallprompt',e=>{e.preventDefault(); dip=e; const b=document.getElementById('gInst'); if(b) b.hidden=false;});
function installHTML(){if(STANDALONE) return '';
 return `<div class="g-inst"><b>📲 Cài app lên điện thoại</b>${IOS?'<span>Mở bằng <b>Safari</b> → bấm nút <b>Chia sẻ</b> <svg width="16" height="18" viewBox="0 0 16 20" style="vertical-align:-3px"><path d="M8 1v12M4 5l4-4 4 4M3 9H1v10h14V9h-2" fill="none" stroke="#1F2A22" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> → <b>Thêm vào Màn hình chính</b>.</span>':'<span>Bấm nút dưới (hoặc ⋮ → <b>Cài đặt ứng dụng / Thêm vào màn hình chính</b>).</span><button type="button" id="gInst" hidden>Cài app</button>'}</div>`;}
function gate(msg){let g=document.getElementById('gate'); if(!g){g=document.createElement('div'); g.id='gate'; document.body.appendChild(g);}
 document.documentElement.classList.add('gated');
 g.innerHTML=`<div class="g-card"><img src="icon-512.png" alt="" class="g-logo"><h1>Hành trình 7.0+</h1><p>Lộ trình IELTS tự học của lớp cô Ngọc Huyền. Đăng nhập bằng <b>Gmail</b> để bắt đầu — hành trình của em tự lưu, đổi máy vẫn còn.</p>
${INAPP?`<div class="g-warn"><b>⚠️ Em đang mở trong ${APPN}</b><br>Google thường chặn đăng nhập ở đây. Bấm <b>⋯</b> / <b>⋮</b> → <b>Mở bằng trình duyệt</b> (${IOS?'Safari':'Chrome'}). <button type="button" id="gCopy">📋 Sao chép link</button></div>`:''}
<button type="button" class="g-btn" id="gBtn">${GI}<span>Đăng nhập bằng Google</span></button><div class="g-err" id="gErr">${msg||''}</div>${installHTML()}
<p class="g-note">Cô chỉ thấy tên, Gmail và kết quả học của em. Không cần mã kích hoạt.</p></div>`;
 document.getElementById('gBtn').onclick=signIn;
 const ib=document.getElementById('gInst'); if(ib){ib.hidden=!dip; ib.onclick=async()=>{if(!dip) return; dip.prompt(); try{await dip.userChoice;}catch(e){} dip=null; ib.hidden=true;};}
 const cp=document.getElementById('gCopy'); if(cp) cp.onclick=async()=>{const u=location.href.split('#')[0]; try{await navigator.clipboard.writeText(u); cp.textContent='✔ Đã sao chép';}catch(e){cp.textContent=u;}};}
function signIn(){const b=document.getElementById('gBtn'), e=document.getElementById('gErr'); if(b) b.disabled=true;
 const go=f=>{const p=new f.U.GoogleAuthProvider(); p.setCustomParameters({prompt:'select_account'}); return f.U.signInWithPopup(f.auth,p);};
 (fb?go(fb):load().then(go)).then(()=>location.reload()).catch(x=>{if(b) b.disabled=false; if(e) e.textContent=err(x);});}
window.appSignOut=async()=>{try{await load(); await fb.U.signOut(fb.auth);}catch(e){} try{localStorage.removeItem('preielts55');}catch(e){} location.hash=''; location.reload();};
window.appInstallHTML=installHTML;
document.addEventListener('DOMContentLoaded',()=>{start().then(u=>{if(!u) gate(window.__fbErr?err(window.__fbErr):''); else document.documentElement.classList.remove('gated');});});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
})();
