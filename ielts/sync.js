/* ===== Học trên 2 máy: chuyển & gộp tiến độ bằng "mã đồng bộ" (điện thoại ↔ máy tính) ===== */
async function zip64(str){const bytes=new TextEncoder().encode(str);
 if(window.CompressionStream){try{const cs=new CompressionStream('deflate-raw'); const out=await new Response(new Blob([bytes]).stream().pipeThrough(cs)).arrayBuffer(); return 'SYNC1:'+b64(new Uint8Array(out));}catch(e){}}
 return 'SYNC0:'+b64(bytes);}
async function unzip64(code){const m=code.trim().match(/^(SYNC[01]):([A-Za-z0-9_-]+)/); if(!m) throw new Error('format');
 const bytes=unb64(m[2]); if(m[1]==='SYNC0') return new TextDecoder().decode(bytes);
 const ds=new DecompressionStream('deflate-raw'); return await new Response(new Blob([bytes]).stream().pipeThrough(ds)).text();}
function b64(u8){let s=''; for(let i=0;i<u8.length;i+=8192) s+=String.fromCharCode.apply(null,u8.subarray(i,i+8192)); return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}
function unb64(t){t=t.replace(/-/g,'+').replace(/_/g,'/'); while(t.length%4) t+='='; const s=atob(t), u=new Uint8Array(s.length); for(let i=0;i<s.length;i++) u[i]=s.charCodeAt(i); return u;}
function draftsGet(){const d={}; try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i); if(k&&(k.startsWith(KEY+'-w-')||k.startsWith(KEY+'-w1-'))) d[k.slice(KEY.length)]=localStorage.getItem(k);}}catch(e){} return d;}
async function makeSyncCode(){const o={v:2,at:Date.now(),s:state,w:draftsGet()}; return zip64(JSON.stringify(o));}
let SYC='';
function mergeState(inc){const L=state, R=inc.s||{}, rep=[];
 const ids=new Set(L.att.map(a=>a.id)); let na=0; (R.att||[]).forEach(a=>{if(!ids.has(a.id)){L.att.push(a); ids.add(a.id); na++;}}); L.att.sort((a,b)=>a.id<b.id?-1:1); if(L.att.length>400) L.att=L.att.slice(-400); if(na) rep.push(na+' bài đã chấm');
 let nd=0; Object.entries(R.done||{}).forEach(([k,v])=>{if(v&&!L.done[k]){L.done[k]=v; nd++;}}); if(nd) rep.push(nd+' phần đã hoàn thành');
 L.mis=L.mis||{}; let nm=0; Object.entries(R.mis||{}).forEach(([k,v])=>{const c=L.mis[k]; if(!c||(v.d>c.d)){L.mis[k]=v; nm++;}}); if(nm) rep.push(nm+' nhiệm vụ');
 L.badges=[...new Set([...(L.badges||[]),...(R.badges||[])])];
 L.vbox=L.vbox||{}; Object.entries(R.vbox||{}).forEach(([w,n])=>{L.vbox[w]=Math.max(L.vbox[w]||0,n);});
 L.rvCount=Math.max(L.rvCount||0,R.rvCount||0);
 ['name','grade','team','tu','target','deadline','hours'].forEach(f=>{if(!L[f]&&R[f]) L[f]=R[f];});
 if(R.test&&!L.test){L.test=R.test; rep.push('kết quả test đầu vào');}
 if(R.lic&&validCode(R.lic.code)&&!(L.lic&&validCode(L.lic.code))){L.lic=R.lic; rep.push('mã kích hoạt');}
 let nw=0; Object.entries(inc.w||{}).forEach(([k,v])=>{try{const cur=localStorage.getItem(KEY+k)||''; if(v&&v.length>cur.length){localStorage.setItem(KEY+k,v); nw++;}}catch(e){}}); if(nw) rep.push(nw+' bài viết nháp');
 L.lastSync=dayStr(new Date()); save(); return rep;}
async function applySyncCode(txt){const inc=JSON.parse(await unzip64(txt)); if(!inc||!inc.s) throw new Error('data'); return mergeState(inc);}

function viewSync(){view='sync'; stopAudio(); setHeader('📱💻 Học trên điện thoại và máy tính','Chuyển tiến độ giữa 2 máy bằng mã đồng bộ · gửi mã qua “Cloud của tôi” trên Zalo',false);
 $('view').innerHTML=`<div class="card"><h2>Cách làm (1 phút)</h2>
<ol style="font-size:16px;line-height:1.7"><li><b>Học xong trên máy nào</b> → mở trang này → bấm <b>“Sao chép mã đồng bộ”</b>.</li>
<li>Mở Zalo → <b>Cloud của tôi</b> → dán mã và gửi.</li>
<li><b>Sang máy kia</b> → mở trang này → sao chép mã mới nhất trong Cloud của tôi → dán vào ô bên dưới → bấm <b>“Nhập mã”</b>.</li></ol>
<p class="note">Mã chứa toàn bộ tiến độ: bài đã làm, nhiệm vụ, chuỗi ngày, huy hiệu, Sổ lỗi, bài viết nháp và mã kích hoạt. Hai máy được <b>gộp</b> lại, không ghi đè: bài làm ở máy nào cũng được giữ, nên nhập theo thứ tự nào cũng được.</p></div>
<div class="card"><h2>① Máy này → gửi đi</h2><p class="lead">Tiến độ trên máy này: <b>${state.att.length}</b> bài đã chấm · <b>${Object.keys(state.mis||{}).length}</b> nhiệm vụ · 🔥 ${streakOf(state.att)} ngày liên tiếp${state.lastSync?` · lần đồng bộ gần nhất ${state.lastSync}`:''}.</p>
<div class="row"><button class="btn citrus" id="syBtn" onclick="syCopy(this)">Sao chép mã đồng bộ</button><span class="tag hidden" id="syLen"></span></div>
<textarea id="syOut" class="hidden" readonly style="min-height:80px;margin-top:8px;font-size:12px" onclick="this.select()"></textarea></div>
<div class="card"><h2>② Nhận từ máy kia</h2><textarea id="syIn" style="min-height:90px;font-size:12px" placeholder="Dán mã bắt đầu bằng SYNC1: hoặc SYNC0: vào đây"></textarea>
<div class="row" style="margin-top:8px"><button class="btn" onclick="syImport()">Nhập mã</button></div><div id="syMsg" style="margin-top:8px"></div></div>`;
 window.scrollTo({top:0}); SYC=''; makeSyncCode().then(c=>{SYC=c; const l=$('syLen'); if(l){l.textContent='Mã dài '+Math.round(c.length/100)/10+' nghìn ký tự'; l.classList.remove('hidden');}});}
function syCopy(btn){if(!SYC){btn.textContent='Đang tạo mã… bấm lại sau 1 giây'; return;} const o=$('syOut'); o.value=SYC; o.classList.remove('hidden'); copyText(SYC,btn); state.lastSync=dayStr(new Date()); save();}
async function syImport(){const t=$('syIn').value.trim(), m=$('syMsg'); if(!t){m.innerHTML='<p class="fb bad">Em dán mã vào ô trước nhé.</p>';return;}
 try{const rep=await applySyncCode(t); updateFoot(); updateStreakChip(); checkBadges();
  m.innerHTML=`<p class="fb ok">✅ Đã gộp tiến độ${rep.length?': thêm '+rep.join(', '):' (máy này đã có đủ, không có gì mới)'}. Chuỗi ngày hiện tại: 🔥 ${streakOf(state.att)}.</p><a class="btn" href="#today">Tiếp tục học →</a>`; $('syIn').value='';}
 catch(e){m.innerHTML='<p class="fb bad">Mã không đúng hoặc bị thiếu. Em sao chép lại <b>toàn bộ</b> mã (bắt đầu bằng SYNC1:) rồi dán lại nhé.</p>';}}
function syncNudge(){const d=state.lastSync?Math.floor((new Date()-new Date(state.lastSync+'T00:00'))/864e5):99;
 return state.att.length&&d>=3?`<div class="card" style="border-left:6px solid var(--sea)"><b>📱💻 Em học trên cả điện thoại và máy tính?</b> Đã ${d>90?'lâu':d+' ngày'} em chưa đồng bộ. <a href="#sync">Sao chép mã đồng bộ</a> gửi vào Zalo “Cloud của tôi” để không mất tiến độ.</div>`:'';}
