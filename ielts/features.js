/* ===== Ôn từ hôm nay (lặp lại ngắt quãng) + Mã lỗi Writing ===== */
(function(){
const DAY=864e5;
const dstr=d=>d.toLocaleDateString('sv-SE');
const today=()=>dstr(new Date());
const addDays=n=>dstr(new Date(Date.now()+n*DAY));
const IV=[1,2,4,7,15,30];           /* số ngày tới lần ôn sau, theo hộp 0–5 */
const PHN={u:'Chặng 1',r:'Chặng 1',m:'Chặng 1',p:'Chặng 2',q:'Chặng 3'};
const shuf=a=>{a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a;};
const unitName=id=>{const u=UNITS.find(x=>x.id===id); return u?lbl(u)+': '+u.title:id;};

/* ---------- dữ liệu từ ---------- */
function vsr(){state.vsr=state.vsr||{}; return state.vsr;}
function studiedIds(){const s=new Set(); Object.keys(state.done||{}).forEach(k=>s.add(k.split('-')[0])); (state.att||[]).forEach(a=>s.add(a.u)); return s;}
function wordsOf(filter){const out=[]; UNITS.forEach(u=>{ if(!u.vocab||!filter(u)) return; u.vocab.forEach((v,i)=>out.push({k:u.id+':'+i,u:u.id,i,v})); }); return out;}
function poolFor(src){
 if(src==='all') return wordsOf(u=>studiedIds().has(u.id));
 return wordsOf(u=>PHN[u.id[0]]===src);}
const WMAP={}; UNITS.forEach(u=>(u.vocab||[]).forEach((v,i)=>{ if(!WMAP[v[0]]) WMAP[v[0]]=u.id+':'+i; }));
function mark(k,ok){const S=vsr(); const r=S[k]||{b:0,w:0,n:0}; r.n=(r.n||0)+1;
 if(ok){r.b=Math.min((r.seen?r.b+1:r.b),IV.length-1); r.due=addDays(IV[r.b]);} else {r.b=0; r.w=(r.w||0)+1; r.due=addDays(1);}
 r.seen=1; S[k]=r;}
/* từ ôn trong từng unit cũng được tính vào lịch ôn */
window.vsrMarkWord=function(v,ok){const k=WMAP[v[0]]; if(k) mark(k,ok);};

/* ---------- âm thanh từng từ ---------- */
window.playVocab=async function(uid,i){const c=window.CLIPS&&CLIPS[uid]&&CLIPS[uid]['v'+(i+1)]; if(!c) return; stopAudio();
 const src=await clipSrc(uid); const same=player.src===src||player.src.endsWith(src); if(!same) player.src=src;
 const go=()=>{clipEnd=c[0]+c[1]+0.2; player.currentTime=c[0]; player.playbackRate=1; player.play().catch(()=>{});};
 if(same&&player.readyState>=1) go(); else player.addEventListener('loadedmetadata',go,{once:true});};

/* ---------- tạo phiên ôn ---------- */
let SES=[], SRC='all';
function canGap(w){const h=w.v[0]; return /^[A-Za-z][A-Za-z' -]*$/.test(h)&&h.length>2&&new RegExp('\\b'+h.replace(/[-]/g,'\\-')+'\\b','i').test(w.v[3]);}
function build(src){SRC=src; const pool=poolFor(src), S=vsr(), t=today();
 const due=pool.filter(w=>S[w.k]&&S[w.k].due<=t).sort((a,b)=>(S[b.k].w||0)-(S[a.k].w||0)||(S[a.k].due<S[b.k].due?-1:1));
 const fresh=shuf(pool.filter(w=>!S[w.k]));
 let pick=due.slice(0,15); const room=Math.min(15-pick.length, pick.length?6:15); pick=pick.concat(fresh.slice(0,Math.max(room,0)));
 SES=shuf(pick).map(w=>{const gap=canGap(w)&&Math.random()<.5;
  if(gap){const others=shuf(pool.filter(x=>x.k!==w.k&&x.v[1]===w.v[1]&&/^[A-Za-z' -]+$/.test(x.v[0]))).slice(0,2).map(x=>x.v[0]);
   while(others.length<2){const o=pool[Math.floor(Math.random()*pool.length)].v[0]; if(o!==w.v[0]&&!others.includes(o)) others.push(o); if(pool.length<4) break;}
   const opts=shuf([w.v[0],...others]); const sent=w.v[3].replace(new RegExp('\\b'+w.v[0].replace(/[-]/g,'\\-')+'\\b','i'),'______');
   return {w,type:'gap',q:sent,opts,a:opts.indexOf(w.v[0])};}
  const others=shuf(pool.filter(x=>x.k!==w.k).map(x=>x.v[2]).filter(m=>m!==w.v[2])).filter((m,i,arr)=>arr.indexOf(m)===i).slice(0,3);
  const opts=shuf([w.v[2],...others]); return {w,type:'mean',q:w.v[0],opts,a:opts.indexOf(w.v[2])};});
 return {due:due.length,fresh:Math.max(0,SES.length-Math.min(due.length,15)),pool:pool.length};}

/* ---------- trang Ôn từ hôm nay ---------- */
window.viewOntu=function(src){view='ontu'; stopAudio(); setHeader('🔁 Ôn từ hôm nay','Từ của các bài em đã học quay lại đúng lúc em sắp quên · từ hay sai được hỏi lại nhiều hơn',false);
 src=src||SRC; const info=build(src); const S=vsr(); const pool=poolFor(src);
 const known=pool.filter(w=>S[w.k]&&S[w.k].b>=3).length, learning=pool.filter(w=>S[w.k]&&S[w.k].b<3).length;
 const hard=pool.filter(w=>S[w.k]&&S[w.k].w>0).sort((a,b)=>S[b.k].w-S[a.k].w).slice(0,10);
 const nextDue=pool.filter(w=>S[w.k]&&S[w.k].due>today()).map(w=>S[w.k].due).sort()[0];
 $('view').innerHTML=`<div class="card"><h2>Hôm nay em ôn ${SES.length} từ</h2>
<div class="row"><label>Lấy từ <select id="otSrc" onchange="viewOntu(this.value)"><option value="all">Các bài em đã học</option><option value="Chặng 1">Chặng 1 (Unit 1–16)</option><option value="Chặng 2">Chặng 2 (Checkpoint 21–30)</option><option value="Chặng 3">Chặng 3 (Checkpoint 31–36)</option></select></label></div>
<div class="kpi" style="margin-top:10px"><div><b>${info.due}</b><small>Từ đến hạn ôn</small></div><div><b>${known}</b><small>Từ đã thuộc</small></div><div><b>${learning}</b><small>Từ đang học</small></div><div><b>${pool.length}</b><small>Tổng số từ</small></div></div>
${pool.length?'':`<p class="lead">Em chưa học bài nào nên chưa có từ để ôn. Hãy chọn một chặng ở trên, hoặc học phần Từ vựng của bài đầu tiên.</p>`}
<p class="note">Trả lời đúng: từ được hẹn ôn lại sau 1 → 2 → 4 → 7 → 15 → 30 ngày. Trả lời sai: từ quay lại ngay ngày mai. Mỗi ngày làm 1 lượt khoảng 5 phút là đủ.</p></div>
${SES.length?`<div class="card"><h2>Bài ôn</h2>${SES.map((s,i)=>`<div class="q" id="ot${i}"><div>${i+1}. ${s.type==='gap'?`Chọn từ đúng: <i>${esc(s.q)}</i>`:`“<b>${esc(s.q)}</b>” nghĩa là gì?`} <button class="btn ghost sm" onclick="playVocab('${s.w.u}',${s.w.i})" aria-label="Nghe">🔊</button></div>
<div class="opts">${s.opts.map((o,j)=>`<label id="ot${i}_${j}"><input type="radio" name="ot${i}" value="${j}"> ${'ABCD'[j]}. ${esc(o)}</label>`).join('')}</div><div class="fb" id="otf${i}"></div></div>`).join('')}
<div class="row" style="margin-top:10px"><button class="btn citrus" onclick="checkOntu()">Chấm bài ôn</button><button class="btn ghost" onclick="viewOntu()">Đổi lượt khác</button></div><div class="score" id="otScore"></div></div>`:
`<div class="card"><h2>🎉 Hôm nay em không còn từ nào đến hạn</h2><p class="lead">${nextDue?'Lần ôn tiếp theo: '+new Date(nextDue).toLocaleDateString('vi-VN')+'.':''} Em có thể chọn chặng khác ở trên để học thêm từ mới.</p></div>`}
${hard.length?`<div class="card"><h2>Từ em hay sai</h2><table><tr><th>Từ</th><th>Nghĩa</th><th>Số lần sai</th><th>Bài</th><th></th></tr>${hard.map(w=>`<tr><td><b>${esc(w.v[0])}</b></td><td>${esc(w.v[2])}</td><td>${S[w.k].w}</td><td><a href="#${w.u}-vocab">${esc(unitName(w.u))}</a></td><td><button class="btn ghost sm" onclick="playVocab('${w.u}',${w.i})">🔊</button></td></tr>`).join('')}</table></div>`:''}`;
 $('otSrc').value=src; window.scrollTo({top:0});};
window.checkOntu=function(){let n=0; const items=[];
 SES.forEach((s,i)=>{const c=document.querySelector(`input[name=ot${i}]:checked`); const v=c?+c.value:-1; const ok=v===s.a; if(ok)n++; items.push({t:'V',ok}); mark(s.w.k,ok);
  s.opts.forEach((_,j)=>{const l=$('ot'+i+'_'+j); if(l) l.className=j===s.a?'ok':(j===v?'bad':'');});
  const f=$('otf'+i); f.className='fb '+(ok?'ok':'bad'); f.textContent=(ok?'Đúng. ':'Đáp án: '+s.opts[s.a]+'. ')+s.w.v[0]+' = '+s.w.v[2]+' · '+s.w.v[3];});
 record('ontu','review',items,n,SES.length); state.rvCount=(state.rvCount||0)+SES.length; save();
 const sc=$('otScore'); sc.textContent='Kết quả: '+n+'/'+SES.length+'. Từ sai sẽ quay lại vào ngày mai.'; sc.classList.add('show'); if(window.checkBadges) checkBadges();};
window.ontuDueCount=function(){const S=vsr(), t=today(); return Object.values(S).filter(r=>r.due<=t).length;};

/* ---------- trang Mã lỗi Writing ---------- */
const CODE=Object.fromEntries((window.WCODES||[]).map(c=>[c[0],c]));
function codeCard(c,cnt){return `<div class="q"><div><b class="tag" style="background:var(--citrus);color:#1A1B16">${c[0]}</b> <b>${c[2]}</b>${cnt?` · <b>${cnt} lần</b>`:''} <small style="color:var(--muted)">(${c[1]})</small></div>
<div style="margin:6px 0">${c[3]}</div><div>❌ <i>${esc(c[4])}</i></div><div>✅ <i>${esc(c[5])}</i></div>
<div style="margin-top:4px"><a href="#cp-${c[6]}">Ôn lại: ${esc(unitName(c[6]))} →</a></div></div>`;}
window.viewMaloi=function(){view='maloi'; stopAudio(); setHeader('✍️ Mã lỗi Writing','Cô ghi mã trên bài, em tra cách sửa ở đây và lưu vào Sổ lỗi',false);
 const hist=(state.att||[]).filter(a=>a.u==='maloi'); const tot={}; hist.forEach(a=>a.it.forEach(([t])=>{const k=t.replace(/^WC-/,''); tot[k]=(tot[k]||0)+1;}));
 const top=Object.entries(tot).sort((a,b)=>b[1]-a[1]).slice(0,5);
 $('view').innerHTML=`<div class="card"><h2>Nhập mã lỗi cô ghi trên bài của em</h2>
<p class="lead">Gõ các mã, cách nhau bằng dấu cách hoặc dấu phẩy. Mã lặp lại bao nhiêu lần thì gõ bấy nhiêu lần, ví dụ: <code>CL CL AG EX T</code></p>
<div class="row"><label>Bài <select id="mlUnit">${UNITS.filter(u=>u.writing).map(u=>`<option value="${u.id}">${esc(lbl(u)+': '+u.title)}</option>`).join('')}</select></label></div>
<textarea id="mlIn" rows="2" style="width:100%;margin-top:8px" placeholder="CL CL AG EX"></textarea>
<div class="row" style="margin-top:8px"><button class="btn citrus" onclick="maloiShow()">Xem cách sửa</button></div><div id="mlOut"></div></div>
${top.length?`<div class="card"><h2>Lỗi em gặp nhiều nhất</h2><table><tr><th>Mã</th><th>Lỗi</th><th>Số lần</th></tr>${top.map(([k,n])=>`<tr><td><b>${k}</b></td><td>${CODE[k]?CODE[k][2]:k}</td><td>${n}</td></tr>`).join('')}</table><p class="note">Trước khi nộp bài tiếp theo, đọc lại bài của em và soát riêng 3 lỗi này.</p></div>`:''}
<div class="card"><h2>Bảng mã lỗi đầy đủ</h2>${Object.entries(WCRIT).map(([k,name])=>`<h3>${name}</h3><table><tr><th>Mã</th><th>Lỗi</th><th>Sửa như thế nào</th></tr>${WCODES.filter(c=>c[1]===k).map(c=>`<tr><td><b>${c[0]}</b></td><td>${c[2]}</td><td>${c[3]}<br><small>❌ ${esc(c[4])}<br>✅ ${esc(c[5])}</small></td></tr>`).join('')}</table>`).join('')}</div>`;
 const lastU=state.lastWU; if(lastU&&$('mlUnit').querySelector(`option[value="${lastU}"]`)) $('mlUnit').value=lastU; window.scrollTo({top:0});};
window.maloiParse=function(txt){return (txt||'').toUpperCase().split(/[^A-Z]+/).filter(x=>CODE[x]);};
window.maloiShow=function(){const codes=maloiParse($('mlIn').value); const out=$('mlOut');
 if(!codes.length){out.innerHTML='<p class="fb bad">Không nhận ra mã nào. Kiểm tra lại các mã trong bảng bên dưới.</p>'; return;}
 const cnt={}; codes.forEach(c=>cnt[c]=(cnt[c]||0)+1); const list=Object.entries(cnt).sort((a,b)=>b[1]-a[1]);
 out.innerHTML=`<h3>Bài này có ${codes.length} lỗi, ${list.length} loại</h3>${list.map(([k,n])=>codeCard(CODE[k],n)).join('')}
<div class="row" style="margin-top:8px"><button class="btn" id="mlSave" onclick="maloiSave()">Lưu vào Sổ lỗi</button></div>`;};
window.maloiSave=function(){const codes=maloiParse($('mlIn').value); if(!codes.length) return; const uid=$('mlUnit').value; state.lastWU=uid;
 record('maloi',uid,codes.map(c=>({t:'WC-'+c,ok:false})),0,codes.length); save(); const b=$('mlSave'); b.textContent='✓ Đã lưu'; b.disabled=true;};
/* thẻ tóm tắt lỗi Writing cho Sổ lỗi */
window.maloiSummaryHTML=function(){const hist=(state.att||[]).filter(a=>a.u==='maloi'); if(!hist.length) return '';
 const tot={}; hist.forEach(a=>a.it.forEach(([t])=>{const k=t.replace(/^WC-/,''); tot[k]=(tot[k]||0)+1;}));
 return `<div class="card"><h2>✍️ Lỗi Writing cô đánh dấu (${hist.length} bài)</h2><table><tr><th>Mã</th><th>Lỗi</th><th>Số lần</th></tr>${Object.entries(tot).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,n])=>`<tr><td><b>${k}</b></td><td>${CODE[k]?CODE[k][2]:k}</td><td>${n}</td></tr>`).join('')}</table><a class="btn ghost sm" href="#maloi">Xem cách sửa →</a></div>`;};
})();
/* số từ đến hạn trên menu */
(function(){function upd(){try{const b=document.getElementById('ontuBadge'); if(!b||!window.ontuDueCount) return; const n=ontuDueCount(); b.textContent=n?' '+n:''; b.style.cssText=n?'background:var(--citrus);color:#1A1B16;border-radius:999px;padding:0 6px;margin-left:4px;font-weight:800':'';}catch(e){}}
window.addEventListener('hashchange',upd); window.addEventListener('load',upd);})();
/* ===== Âm thanh sát thi thật (Chặng 2–3): nhanh hơn 10% + tiếng ồn phòng ===== */
(function(){
const noise=new Audio('noise.mp3'); noise.loop=true; noise.volume=0.3; noise.preload='none';
const isHard=()=>{const id=(typeof LID!=='undefined'&&LID)||''; if(!/^[pq]\d+$/.test(id)) return false; return state.audioHard==null?/^q/.test(id):!!state.audioHard;};
window.audioModeHTML=function(id){ if(!/^[pq]\d+$/.test(id||'')) return '';
 const on=state.audioHard==null?/^q/.test(id):!!state.audioHard;
 return `<div class="row" style="margin-top:8px"><label>🎧 Âm thanh <select onchange="setAudioHard(this.value==='1')"><option value="0"${on?'':' selected'}>Chuẩn</option><option value="1"${on?' selected':''}>Sát thi thật: nhanh hơn 10% + tiếng ồn phòng</option></select></label></div>`;};
window.setAudioHard=function(v){state.audioHard=v; save(); const la=document.getElementById('laudio'); if(la){la.playbackRate=v?1.1:1; if(!la.paused) sync(la);}};
function sync(la){ if(isHard()&&!la.paused){la.playbackRate=1.1; noise.play().catch(()=>{});} else {noise.pause(); if(la) la.playbackRate=1;} }
document.addEventListener('play',e=>{if(e.target&&e.target.id==='laudio') sync(e.target);},true);
['pause','ended'].forEach(ev=>document.addEventListener(ev,e=>{if(e.target&&e.target.id==='laudio') noise.pause();},true));
window.addEventListener('hashchange',()=>noise.pause());
})();
/* ===== Điểm xuất phát theo test đầu vào ===== */
(function(){
const NOTE={
 u1:'Em bắt đầu từ đầu hành trình để làm quen đủ 4 kỹ năng và các dạng đề.',
 u5:'Em đã có nền tảng cơ bản nên bỏ qua Vùng 01 (Unit 1–4). Nếu chưa quen dạng đề IELTS, em xem nhanh video Unit 1–4 trước.',
 u9:'Em bắt đầu ở Vùng 03, nơi luyện tốc độ và các dạng đề khó hơn của Chặng 1.',
 u13:'Em học 4 unit cuối của Chặng 1, rồi làm Thi thử cuối khóa. Đạt thì sang thẳng Chặng 2.',
 p1:'Em vào thẳng Chặng 2 (mục tiêu 6.5). Nên xem lại Sổ lỗi sau mỗi checkpoint vì bài dài và khó hơn rõ rệt.',
 p5:'Em bắt đầu ở Vùng 06 của Chặng 2. Nếu thấy Checkpoint 25 quá khó, em lùi về Checkpoint 21.',
 p10:'Em làm Thi thử 6.5 (Checkpoint 30) trước: đạt Listening ≥ 14/20 và Reading ≥ 9/13 thì vào thẳng Checkpoint 31 (Chặng 3); chưa đạt thì bắt đầu từ Checkpoint 21.',
 q1:'Em vào thẳng Chặng 3 (mục tiêu 7.0+).'};
const CHOICES=['u1','u5','u9','u13','p1','p5','p10','q1'];
window.startOf=function(T){ if(!T) return 'u1'; if(T.start) return T.start; return ['u1','u1','p1','p10'][Math.min(T.phase||0,3)];};
window.startLabel=function(id){const u=UNITS.find(x=>x.id===id); const z=(window.ZONES||[]).find(z=>z.ids.includes(id)); return (u?lbl(u)+': '+u.title:id)+(z?' · Vùng '+z.n+' '+z.name:'');};
window.startNote=id=>NOTE[id]||'';
window.startChoicesHTML=function(cur){return `<select onchange="if(this.value) setStart(this.value)"><option value="">— Chọn điểm xuất phát khác —</option>${CHOICES.map(i=>`<option value="${i}"${i===cur?' disabled':''}>${esc(startLabel(i))}</option>`).join('')}</select>`;};
window.setStart=function(id){state.startAt=id; if(state.tu&&typeof cpOrder==='function'&&cpOrder().indexOf(state.tu)<cpOrder().indexOf(id)) delete state.tu; save(); location.hash='#cp-'+id;};
window.isSkipped=function(id){ if(!state.startAt||typeof cpOrder!=='function') return false; const o=cpOrder(); const a=o.indexOf(id), b=o.indexOf(state.startAt); return a>0&&b>0&&a<b;};
})();
