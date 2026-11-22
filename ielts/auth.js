/* ===== Đăng nhập bằng tài khoản Claude (Gmail) · tự lưu hành trình của từng học sinh =====
   - Học sinh mở link khi đã đăng nhập claude.ai → tự mở khóa mọi unit, không cần mã kích hoạt.
   - Tiến độ tự lưu vào tài khoản (data/users/<id>/journey, chỉ em đó đọc được) → đổi máy vẫn còn.
   - Bản tóm tắt gửi lên progress/<id> để trang giáo viên tự thấy cả lớp, không cần mã LEMON1.
   - Không đăng nhập được → chạy như cũ (lưu trên máy + mã kích hoạt + mã đồng bộ). */
const CLOUD={on:false,id:null,db:null,user:null,owner:false,status:'wait',last:0,err:'',shareOk:true,cls:null};
function snapData(r){if(r==null) return null; if(typeof r.data==='function'){if(r.exists===false) return null; return r.data();}
 if(typeof r.exists==='boolean'&&!r.exists) return null; if(r.data!==undefined) return r.data; return r;}
function docsOf(r){const a=Array.isArray(r)?r:(r&&(r.docs||r.documents||r.items))||[]; return a.map(d=>({id:d.id||(d.ref&&d.ref.id)||(d.path||'').split('/').pop(),data:snapData(d)})).filter(d=>d.data);}

function cloudChip(){let c=$('cloudChip'); if(!c){const s=$('streakChip'); if(!s) return; c=document.createElement('a'); c.id='cloudChip'; c.className='tag'; c.href='#me'; c.style.cssText='text-decoration:none;white-space:nowrap'; s.parentNode.insertBefore(c,s);}
 const S={wait:['⏳ Đang kiểm tra đăng nhập…','Trang đang hỏi xem em đã đăng nhập chưa'],
  ok:['☁️ Đã lưu vào tài khoản','Tiến độ tự lưu vào Gmail của em – đổi máy vẫn còn'],
  saving:['☁️ Đang lưu…',''],
  ro:['⚠️ Chưa lưu lên tài khoản được','Chưa lưu lên tài khoản được (kiểm tra mạng). Tiến độ vẫn lưu trên máy này.'],
  off:['💾 Chỉ lưu trên máy này','Đăng nhập Gmail để tự lưu hành trình']}[CLOUD.status]||['',''];
 c.textContent=S[0]; c.title=S[1]; c.style.background=CLOUD.status==='ok'||CLOUD.status==='saving'?'var(--sage,#dcefe3)':CLOUD.status==='off'||CLOUD.status==='ro'?'#FDECE3':'';}
function setCloud(s){CLOUD.status=s; cloudChip();}

function cloudSummary(){return {v:1,n:state.name||CLOUD.pname||'',g:state.grade||'',tm:state.team||'',t:state.test||null,tg:state.target||'',dn:Object.values(state.done||{}).filter(Boolean).length,a:(state.att||[]).slice(-150),st:state.startAt||'',at:Date.now()};}
let _cq=null,_cbusy=false,_cagain=false;
function cloudQueue(ms){if(!CLOUD.on||CLOUD.status==='ro') return; clearTimeout(_cq); _cq=setTimeout(cloudPush,ms==null?2500:ms);}
async function cloudPush(){if(!CLOUD.on) return; if(_cbusy){_cagain=true; return;} _cbusy=true; setCloud('saving');
 try{const z=await makeSyncCode(); await CLOUD.db.doc('data/users/'+CLOUD.id+'/journey').set({z,at:Date.now()});
  if(!CLOUD.owner){try{await CLOUD.db.doc('progress/'+CLOUD.id).set(cloudSummary());}catch(e){CLOUD.shareOk=false;}}
  CLOUD.last=Date.now(); setCloud('ok');}
 catch(e){CLOUD.err=String(e&&e.message||e); setCloud('ro');}
 _cbusy=false; if(_cagain){_cagain=false; cloudQueue(800);}}
{const _save=save; save=function(){_save(); cloudQueue();};}
document.addEventListener('input',e=>{if(e.target&&e.target.tagName==='TEXTAREA') cloudQueue(8000);});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&_cq){clearTimeout(_cq); cloudPush();}});

/* khóa unit: em đã đăng nhập thì mở hết, không cần mã */
{const _locked=locked; locked=function(u){return CLOUD.on?false:_locked(u);};}
{const _lv=lockView; lockView=function(){_lv(); const v=$('view'); if(!v) return; const b=document.createElement('div'); b.className='card'; b.style.borderLeft='6px solid var(--citrus)';
 b.innerHTML=CLOUD.status==='wait'?'<p class="lead">⏳ Đang kiểm tra đăng nhập… nếu em đã đăng nhập claude.ai, unit sẽ tự mở sau vài giây.</p>'
 :`<h2>🔓 Mở khóa bằng tài khoản – không cần mã</h2><ol style="line-height:1.7;margin:6px 0"><li>Vào <b>claude.ai</b>, đăng nhập bằng <b>Gmail</b> của em (tài khoản miễn phí là đủ).</li><li>Mở lại link Hành trình 7.0+ cô gửi.</li><li>Các unit tự mở, tiến độ tự lưu vào tài khoản của em.</li></ol><p class="note">Nếu chưa đăng nhập được, em dùng mã kích hoạt cô gửi ở ô bên dưới.</p>`;
 v.insertBefore(b,v.firstChild);};}

/* gộp hành trình trên tài khoản với dữ liệu trên máy */
function freshState(){return {done:{},att:[],name:'',grade:'',test:null,target:'',deadline:'',hours:'h6'};}
function clearDrafts(){try{const ks=[]; for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i); if(k&&(k.startsWith(KEY+'-w-')||k.startsWith(KEY+'-w1-'))) ks.push(k);} ks.forEach(k=>localStorage.removeItem(k));}catch(e){}}
function mergeExtra(R){if(!R) return; const L=state;
 if(R.vsr){L.vsr=L.vsr||{}; Object.entries(R.vsr).forEach(([w,v])=>{const c=L.vsr[w]; if(!c||(v.seen||0)>(c.seen||0)||(v.n||0)>(c.n||0)) L.vsr[w]=v;});}
 ['startAt','audioHard','lemonSeen','wmode'].forEach(f=>{if(L[f]==null&&R[f]!=null) L[f]=R[f];});}
async function cloudStart(){
 if(!(window.claude&&claude.use)){setCloud('off'); if(view==='unit'&&$('licCode')) lockView(); return;}
 let db=null,user=null; try{[db,user]=await Promise.all([claude.use('db'),claude.use('user')]);}catch(e){}
 let id=null; try{id=user&&await user.id();}catch(e){}
 if(!db||!id){setCloud('off'); if(view==='unit'&&$('licCode')) lockView(); return;}
 CLOUD.db=db; CLOUD.user=user; CLOUD.id=id; try{CLOUD.owner=!!(user.isOwner&&await user.isOwner());}catch(e){}
 try{const me=await user.me(); CLOUD.pname=(me&&me.name)||''; CLOUD.email=(me&&me.email)||'';}catch(e){}
 // máy dùng chung: dữ liệu trên máy là của bạn khác → cất riêng, không trộn vào tài khoản em
 if(state.owner&&state.owner!==id){try{localStorage.setItem(KEY+'-prev-'+state.owner,JSON.stringify(state));}catch(e){} clearDrafts(); state=freshState();}
 let rep=[];
 try{const d=snapData(await db.doc('data/users/'+id+'/journey').get());
  if(d&&d.z){const inc=JSON.parse(await unzip64(d.z)); rep=mergeState(inc)||[]; mergeExtra(inc.s);}}
 catch(e){CLOUD.err='load:'+(e&&e.message||e);}
 if(!state.name&&CLOUD.pname) state.name=CLOUD.pname;
 state.owner=id; CLOUD.on=true; setCloud('ok');
 try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}
 if(typeof updateFoot==='function') updateFoot(); if(typeof updateStreakChip==='function') updateStreakChip(); if(typeof refreshPicker==='function') refreshPicker();
 const typing=document.activeElement&&/TEXTAREA|INPUT/.test(document.activeElement.tagName);
 if($('licCode')||(!typing&&rep.length)||['home','today','me','map','teacher'].includes(view)) route();
 if(rep.length&&window.uxToast) uxToast('☁️ Đã tải hành trình từ tài khoản: '+rep.join(', '));
 cloudPush();}

/* footer & trang Sổ lỗi */
{const _uf=updateFoot; updateFoot=function(){_uf(); if(CLOUD.on){const f=$('foot'); if(f) f.textContent='Tài liệu do '+SITE.teacher+' biên soạn. Học viên: '+(state.name||CLOUD.pname||'')+(CLOUD.email?' ('+CLOUD.email+')':'')+'. Vui lòng không chia sẻ lại.';}};}
{const _vm=viewMe; viewMe=function(){_vm(); const v=$('view'); if(!v) return; const b=document.createElement('div'); b.className='card'; b.style.borderLeft='6px solid '+(CLOUD.status==='ok'?'var(--sage,#7BA88E)':'var(--coral,#C4502B)');
 b.innerHTML='<h2 style="font-size:18px;margin:0 0 6px">☁️ Tài khoản của em</h2>'+(CLOUD.on?(CLOUD.status==='ro'?`<b>⚠️ Chưa lưu lên tài khoản được (có thể do mạng).</b> Tiến độ vẫn lưu trên máy này. Em vẫn gửi mã kết quả bên dưới cho cô như cũ nhé.`
  :`<b>Hành trình của em tự lưu vào tài khoản${CLOUD.email?' '+esc(CLOUD.email):''}.</b> Đổi máy hay xóa lịch sử trình duyệt vẫn không mất – chỉ cần đăng nhập đúng tài khoản. Cô tự thấy kết quả của em, em <b>không cần gửi mã</b> nữa.${CLOUD.last?` <small style="color:#6b776f;white-space:nowrap">Lưu lần cuối: ${new Date(CLOUD.last).toLocaleTimeString('vi-VN')}</small>`:''}`)
  :`<b>💾 Tiến độ đang chỉ lưu trên máy này.</b> Mạng hoặc tài khoản đang lỗi, tiến độ tạm lưu trên máy này. Em tải lại app nhé.`);
 if(CLOUD.on) b.innerHTML+=`<div class="row" style="margin-top:8px"><button class="btn ghost sm" onclick="appSignOut()">Đăng xuất${CLOUD.email?' ('+esc(CLOUD.email)+')':''}</button></div>${window.appInstallHTML?appInstallHTML():''}`;
 v.insertBefore(b,v.firstChild);};}

/* trang giáo viên: tự thấy cả lớp */
async function cloudLoadClass(){if(!CLOUD.on) return null; try{const r=await CLOUD.db.collection('progress').get(); const L=docsOf(r);
 let P={}; try{P=await CLOUD.user.profiles(L.map(d=>d.id))||{};}catch(e){}
 CLOUD.cls=L.map(d=>Object.assign({},d.data,{id:d.id,pn:(P[d.id]&&P[d.id].name)||'',pe:(P[d.id]&&P[d.id].email)||''})); return CLOUD.cls;}catch(e){CLOUD.clsErr=String(e&&e.message||e); return null;}}
{const _gi=getImports; getImports=function(){const im=_gi(); if(view==='teacher'&&CLOUD.cls) CLOUD.cls.forEach(o=>{const n=o.n||o.pn||o.pe||'(chưa ghi tên)'; im['☁'+o.id]=Object.assign({},o,{n,g:(o.g||'')+(o.pe?(o.g?' · ':'')+o.pe:''),imported:o.at?new Date(o.at).toLocaleDateString('vi-VN'):''});}); return im;};}
{const _vt=viewTeacher; viewTeacher=function(){_vt(); const v=$('view'); if(!v) return; const b=document.createElement('div'); b.className='card'; b.id='tCloud'; b.style.borderLeft='6px solid var(--sage,#7BA88E)'; v.insertBefore(b,v.firstChild); tCloudRender(true);};}
async function tCloudRender(load){const b=$('tCloud'); if(!b) return;
 if(!CLOUD.on){b.innerHTML='<h2>☁️ Lớp tự lưu</h2><p class="lead">Cô đăng nhập bằng Gmail giáo viên để xem tiến độ học sinh.</p>'; return;}
 b.innerHTML='<h2>☁️ Lớp tự lưu</h2><p class="lead">Đang tải tiến độ của học sinh…</p>';
 if(load) await cloudLoadClass(); const L=CLOUD.cls||[];
 b.innerHTML=`<h2>☁️ Lớp tự lưu (${L.length} học sinh)</h2><p class="lead">Học sinh mở app, đăng nhập Gmail là tự vào học – cô không cần tạo mã. Kết quả các em tự cập nhật vào các bảng bên dưới (dòng có email), cùng với mã LEMON1 cũ nếu có.</p>
${CLOUD.clsErr?`<p class="fb bad">Chưa đọc được danh sách: ${esc(CLOUD.clsErr)}</p>`:''}
${L.length?`<table><tr><th>Học sinh</th><th>Email</th><th>Đã xong</th><th>Bài chấm</th><th>Học gần nhất</th></tr>${L.sort((a,b)=>(b.at||0)-(a.at||0)).map(o=>`<tr><td><b>${esc(o.n||o.pn||'—')}</b>${o.g?' · '+esc(o.g):''}</td><td style="font-size:13px">${esc(o.pe||'—')}</td><td>${o.dn||0} phần</td><td>${(o.a||[]).length}</td><td>${o.at?new Date(o.at).toLocaleString('vi-VN',{dateStyle:'short',timeStyle:'short'}):'—'}</td></tr>`).join('')}</table>`:'<p class="note">Chưa có học sinh nào lưu. Khi em đầu tiên đăng nhập và làm bài, tên em sẽ hiện ở đây.</p>'}
<div class="row" style="margin-top:8px"><button class="btn sm" onclick="tCloudRender(true).then(()=>renderTeacher())">↻ Tải lại</button></div>`;
 if(load) renderTeacher();}

cloudChip(); cloudStart();
