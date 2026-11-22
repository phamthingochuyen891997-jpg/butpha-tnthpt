/* ===== Nhiệm vụ hôm nay (gói tối thiểu 15 phút/ngày) + Quiz khởi động cho giáo viên ===== */
const MIS=[
 {k:1,icon:'🎬',name:'Video + 8 từ mới',min:15,tip:'Xem video bài giảng, nghe 8 từ mới rồi làm 5 câu nhanh.'},
 {k:2,icon:'🎧',name:'Nghe & chép 5 câu',min:15,tip:'Nghe từng câu trong bài Listening và gõ lại. Nghe bao nhiêu lần cũng được.'},
 {k:3,icon:'📖',name:'Đọc nhanh 4 câu',min:15,tip:'Đọc bài và trả lời 4 câu đầu. Không cần làm cả bài.'},
 {k:4,icon:'✍️',name:'Viết từng bước',min:10,tip:'5 câu luyện viết ngắn, không phải viết cả bài.'},
 {k:5,icon:'🗣️',name:'Nói 30 giây + quiz',min:10,tip:'Trả lời 1 câu Speaking (ghi âm bằng điện thoại) và 4 câu quiz.'}];
const MUNITS=()=>UNITS.filter(u=>/^[upq]\d+$/.test(u.id));
const TEAMS=()=>SITE.teams&&SITE.teams.length?SITE.teams:['🍊 Đội Cam','🌊 Đội Biển','🌿 Đội Xanh'];
function seedRand(s){let h=fnv(s); return ()=>{h^=h<<13;h>>>=0;h^=h>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
function shuf(arr,seed){const r=seedRand(seed),a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a;}
function weekStart(d){const x=new Date(d); x.setHours(0,0,0,0); x.setDate(x.getDate()-((x.getDay()+6)%7)); return x;}
function thisUnit(){ if(state.tu&&MUNITS().some(u=>u.id===state.tu)) return state.tu;
 if(SITE.start){const w=Math.floor((weekStart(new Date())-weekStart(new Date(SITE.start+'T00:00')))/(7*864e5))+1; const u=MUNITS().find(x=>x.week===w)||MUNITS().filter(x=>x.week<=w).pop(); if(u) return u.id;}
 const all=MUNITS(), si=state.startAt?all.findIndex(u=>u.id===state.startAt):-1; const nd=all.slice(Math.max(si,0)).find(u=>MIS.some(m=>!misDone(u.id,m.k))); return nd?nd.id:(si>=0?all[si].id:'u1');}
const misKey=(uid,k)=>uid+'-'+k;
function misDone(uid,k){return !!(state.mis&&state.mis[misKey(uid,k)]);}
function misItems(u){const W=u.writing, wex=W.wex||(window.WEX&&WEX[u.id]), g=u.grammar||(window.GRAMMAR&&GRAMMAR[u.id]);
 const V=u.vocab.slice(0,8);
 const vq=V.slice(0,5).map((v,i)=>{const others=shuf(u.vocab.filter(x=>x!==v),u.id+'v'+i).slice(0,2).map(x=>x[2]); const opts=shuf([v[2],...others],u.id+'vo'+i); return {q:`“${v[0]}” nghĩa là gì?`,opts,a:opts.indexOf(v[2]),t:'V',ex:`${v[0]} = ${v[2]}. Ví dụ: ${v[3]}`};});
 const rq=[]; for(const gr of u.reading.groups){for(const q of gr.qs){ if(rq.length<4) rq.push(Object.assign({},q,{_g:gr}));}}
 const wq=wex&&wex.length?wex.slice(0,5).map(x=>({q:x[0],opts:x[1],a:x[2],ex:x[3],t:'W'})):g.qs.slice(0,5).map(q=>q.t==='mcq'?{q:q.q,opts:q.opts,a:q.a,ex:q.ex,t:'G'}:{q:q.q,gap:q.a,ex:q.ex,t:'G'});
 const qz=u.quiz.slice(0,4).map((x,i)=>({q:x[0],opts:x[1],a:x[2],t:(u.qtags||[])[i]||'S'}));
 return {V,vq,rq,wq,qz,D:(u.dict||[]).slice(0,5),S:u.speaking.items[0]};}
function weekStats(off){const s=weekStart(new Date()); s.setDate(s.getDate()-7*off); const e=new Date(s); e.setDate(e.getDate()+7);
 const at=state.att.filter(a=>{const d=new Date(a.d+'T12:00'); return d>=s&&d<e;}); const c=at.reduce((x,a)=>x+a.s,0), n=at.reduce((x,a)=>x+a.n,0);
 return {days:new Set(at.map(a=>a.d)).size,pct:n?Math.round(100*c/n):null,mis:at.filter(a=>/^mission/.test(a.p)).length};}
function teamPts(){let p=0; Object.values(state.mis||{}).forEach(m=>{p+=10+(m.n&&m.s/m.n>=0.8?5:0);}); return p;}

function viewToday(){view='today'; stopAudio(); wuStop(); const uid=thisUnit(); U=UNITS.find(u=>u.id===uid); preloadClips();
 setHeader('🎯 Nhiệm vụ hôm nay','Mỗi ngày 1 nhiệm vụ 15 phút · làm đều 5 ngày là theo kịp lớp',false);
 const today=dayStr(new Date()), doneToday=Object.values(state.mis||{}).some(m=>m.d===today);
 const next=MIS.find(m=>!misDone(uid,m.k)), w0=weekStats(0), w1=weekStats(1), st=streakOf(state.att);
 const cmp=(w0.pct!=null&&w1.pct!=null)?`${w1.pct}% → <b>${w0.pct}%</b> <span style="color:${w0.pct>=w1.pct?'var(--ok)':'var(--bad)'}">(${w0.pct>=w1.pct?'+':''}${w0.pct-w1.pct}) ${w0.pct>=w1.pct?'📈':'📉'}</span>`:w0.pct!=null?`<b>${w0.pct}%</b> <small>(tuần trước chưa có)</small>`:'—';
 $('view').innerHTML=`${locked(U)?`<div class="card" style="border:3px solid var(--citrus)"><h2>🔒 Unit ${U.week} cần mã kích hoạt</h2><p class="lead">Em nhập mã cô gửi để mở nhiệm vụ của unit này.</p><a class="btn citrus" href="#${uid}-goals">Nhập mã kích hoạt →</a></div>`:next?`<div class="card" style="border:3px solid var(--citrus)">
 <h2>${doneToday?'✅ Hôm nay em đã xong! Muốn làm thêm thì tiếp tục:':'👉 Nhiệm vụ của em hôm nay'}</h2>
 <p class="lead" style="font-size:18px"><b>${next.icon} Nhiệm vụ ${next.k}/5 · ${next.name}</b> · khoảng ${next.min} phút<br>${next.tip}</p>
 <button class="btn citrus" style="font-size:18px;padding:12px 22px" onclick="startMission('${uid}',${next.k})">Bắt đầu ▶</button></div>`
 :`<div class="card" style="border:3px solid var(--ok)"><h2>🎉 Em đã xong cả 5 nhiệm vụ của Unit ${U.week}!</h2><p class="lead">Em đã theo kịp lớp. Muốn lên band nhanh hơn, làm thêm bài đầy đủ trong unit (gói nâng cao).</p><a class="btn" href="#${uid}-goals">Mở Unit ${U.week} đầy đủ →</a></div>`}
${syncNudge()}
<div class="card">
 <div class="kpi"><div><b>🔥 ${st}</b><small>ngày liên tiếp</small></div><div><b>${w0.days}/5</b><small>ngày học tuần này (tuần trước ${w1.days})</small></div><div><b style="font-size:20px">${cmp}</b><small>tỷ lệ đúng: tuần trước → tuần này</small></div><div><b>${state.team?teamPts():'—'}</b><small>${state.team?'điểm em góp cho '+esc(state.team):'chưa chọn đội'}</small></div></div>
 <div class="row" style="margin-top:12px"><label>Tuần này lớp học <select id="tdUnit" onchange="state.tu=this.value;save();viewToday()">${MUNITS().map(u=>`<option value="${u.id}" ${u.id===uid?'selected':''}>Unit ${u.week}: ${u.title}</option>`).join('')}</select></label>
 <label>Đội của em <select id="tdTeam" onchange="state.team=this.value;save();viewToday()"><option value="">— chọn đội —</option>${TEAMS().map(t=>`<option ${t===state.team?'selected':''}>${esc(t)}</option>`).join('')}</select></label></div>
</div>
<div class="card"><h2>5 nhiệm vụ của Unit ${U.week}: ${U.title}</h2>
 <table><tr><th></th><th>Nhiệm vụ</th><th>Thời gian</th><th>Kết quả</th><th></th></tr>${MIS.map(m=>{const r=state.mis&&state.mis[misKey(uid,m.k)];
  return `<tr><td style="font-size:22px">${r?'✅':m.icon}</td><td><b>${m.name}</b><br><small>${m.tip}</small></td><td>${m.min} phút</td><td>${r?`${r.s}/${r.n} · ${r.d}`:'—'}</td><td><button class="btn ${r?'ghost':''} sm" onclick="startMission('${uid}',${m.k})">${r?'Làm lại':'Làm'}</button></td></tr>`;}).join('')}</table>
 <p class="note">Mỗi nhiệm vụ hoàn thành: +10 điểm cho đội, đúng từ 80% trở lên: +5 điểm thưởng. Cuối tuần em mở <a href="#me">Sổ lỗi</a> → “Sao chép mã kết quả” gửi cô để cô cộng điểm đội.</p></div>`;
 window.scrollTo({top:0});}

let MS=null;
function startMission(uid,k){ if(location.hash!=='#mis-'+uid+'-'+k){location.hash='mis-'+uid+'-'+k;return;} view='today'; stopAudio(); wuStop(); U=UNITS.find(u=>u.id===uid); if(locked(U)){location.hash=uid+'-goals';return;} preloadClips(); const I=misItems(U), m=MIS[k-1]; MS={uid,k,I};
 setHeader(`${m.icon} Nhiệm vụ ${k}/5 · ${m.name}`,`Unit ${U.week}: ${U.title} · khoảng ${m.min} phút`,false);
 let h='';
 if(k===1){h=`${VIDS.includes(uid)?`<div class="card"><h2>Bước 1 · Xem video (3–4 phút)</h2><div class="vbox"><video controls preload="none" playsinline poster="video/${uid}.jpg" src="video/${uid}.mp4" onplay="stopAudio()"></video></div></div>`:''}
<div class="card"><h2>Bước 2 · Nghe 8 từ mới</h2><table>${I.V.map((v,i)=>`<tr><td><button class="btn ghost sm" onclick="playFile('v${i+1}')">🔊</button></td><td><b>${v[0]}</b> <small>(${v[1]})</small></td><td>${v[2]}</td></tr>`).join('')}</table></div>
<div class="card"><h2>Bước 3 · Kiểm tra nhanh 5 câu</h2>${I.vq.map((q,i)=>mcqH(q,i)).join('')}</div>`;}
 if(k===2){h=`<div class="card"><h2>Nghe và gõ lại 5 câu</h2><p class="lead">Bấm 🔊 nghe câu, gõ lại chính xác. Không cần viết hoa hay dấu câu. Nghe chậm bằng nút 🐢.</p>
${I.D.map((d,i)=>`<div class="q"><div class="row"><b>Câu ${i+1}</b><button class="btn ghost sm" onclick="playFile('d${i+1}')">🔊 Nghe</button><button class="btn ghost sm" onclick="playFile('d${i+1}',0.75)">🐢 Chậm</button></div><input type="text" id="mq${i}" style="width:100%;margin-top:6px" autocomplete="off"><div class="fb" id="mf${i}"></div></div>`).join('')}</div>`;}
 if(k===3){const P=U.reading; let lastG=null; h=`<div class="card"><h2>${P.title}</h2><details open><summary class="tag">Bài đọc (bấm để ẩn/hiện)</summary><div style="max-height:46vh;overflow:auto;border:1px solid var(--line);border-radius:12px;padding:12px;margin-top:8px">${P.paras.map(p=>`<p><b>${p[0]}</b> ${p[1]}</p>`).join('')}</div></details></div>
<div class="card"><h2>Trả lời 4 câu</h2>${I.rq.map((q,i)=>{let head=''; if(q._g!==lastG){lastG=q._g; head=`<p class="lead"><b>${q._g.title}</b></p>${q._g.box?`<div class="box">${q._g.box}</div>`:''}`;}
  return head+(q.t==='gap'?`<div class="q">${i+1}. ${q.before||''} <input type="text" id="mq${i}" style="width:160px"> ${q.after||''}<div class="fb" id="mf${i}"></div></div>`
   :q.t==='select'?`<div class="q">${i+1}. ${q.text} <select id="mq${i}"><option value="">—</option>${q.opts.map(o=>`<option>${o}</option>`).join('')}</select><div class="fb" id="mf${i}"></div></div>`
   :mcqH({q:q.text,opts:q.opts},i,'ABCD'));}).join('')}</div>`;}
 if(k===4){h=`<div class="card"><h2>Luyện viết từng bước</h2><p class="lead">Mỗi câu luyện một kỹ năng nhỏ của bài ${U.writing.title}. Làm xong 5 câu là em đã có “nguyên liệu” để viết cả bài.</p>${I.wq.map((q,i)=>q.gap?`<div class="q">${i+1}. ${q.q} <input type="text" id="mq${i}" style="width:160px"><div class="fb" id="mf${i}"></div></div>`:mcqH(q,i)).join('')}</div>`;}
 if(k===5){h=`<div class="card"><h2>Bước 1 · Nói 30 giây</h2><div class="q"><button class="btn ghost sm" onclick="playFile('sq1')">🔊 Nghe câu hỏi</button> <b>${I.S[0]}</b></div>
<p class="lead">Trả lời theo <b>A–R–E</b>: <b>A</b>nswer (trả lời) → <b>R</b>eason (lý do) → <b>E</b>xample (ví dụ). Mở ghi âm trên điện thoại, nói khoảng 30 giây rồi gửi cô qua Zalo.</p>
<div class="row"><button class="btn ghost sm" onclick="toggle('mModel')">Xem câu trả lời mẫu</button><button class="btn ghost sm" onclick="playFile('sa1')">🔊 Nghe mẫu</button></div><div id="mModel" class="hidden"><div class="model">${I.S[1]}</div></div>
<label style="display:block;margin-top:10px;font-weight:600"><input type="checkbox" id="mRec"> Em đã ghi âm câu trả lời của mình</label></div>
<div class="card"><h2>Bước 2 · Quiz 4 câu</h2>${I.qz.map((q,i)=>mcqH(q,i)).join('')}</div>`;}
 $('view').innerHTML=h+`<div class="card"><div class="row"><button class="btn citrus" style="font-size:17px;padding:11px 22px" onclick="finishMission()">Chấm điểm & hoàn thành ✔</button><a class="btn ghost" href="#today">← Quay lại</a></div><div id="mRes" style="margin-top:12px"></div></div>`;
 window.scrollTo({top:0});}
function mcqH(q,i,L='ABC'){return `<div class="q"><div>${i+1}. ${q.q}</div><div class="opts">${q.opts.map((o,j)=>`<label id="mo${i}_${j}"><input type="radio" name="mq${i}" value="${j}"> ${L[j]||''}. ${o}</label>`).join('')}</div><div class="fb" id="mf${i}"></div></div>`;}
function gradeMcq(q,i){const s=document.querySelector(`input[name=mq${i}]:checked`), v=s?+s.value:-1, ok=v===q.a; q.opts.forEach((_,j)=>{const el=$('mo'+i+'_'+j); if(el) el.className=j===q.a?'ok':(j===v?'bad':'');}); return ok;}
function fbSet(i,ok,txt){const f=$('mf'+i); f.className='fb '+(ok?'ok':'bad'); f.innerHTML=(ok?'✅ Đúng. ':'❌ ')+(txt||'');}
function finishMission(){const {uid,k,I}=MS; let items=[];
 if(k===1) items=I.vq.map((q,i)=>{const ok=gradeMcq(q,i); fbSet(i,ok,q.ex); return {t:'V',ok};});
 if(k===2) items=I.D.map((d,i)=>{const v=$('mq'+i).value; if(!v.trim()){fbSet(i,false,'Em chưa gõ câu này.'); return {t:'L-dict',ok:false};} const r=diffWords(d[1],v), ok=r.ok/r.m>=0.8; const f=$('mf'+i); f.className='fb '+(ok?'ok':'bad'); f.innerHTML=(r.perfect?'✅ Chính xác! ':`${r.ok}/${r.m} từ đúng: `)+r.html; return {t:'L-dict',ok};});
 if(k===3) items=I.rq.map((q,i)=>{let ok,ans; if(q.t==='gap'){ok=matchAns($('mq'+i).value,q.a)&&norm($('mq'+i).value).split(' ').length<=(q.max||3); ans=q.a[0];} else if(q.t==='select'){ok=$('mq'+i).value===q.a; ans=q.a;} else {ok=gradeMcq({opts:q.opts,a:q.a},i); ans='ABCD'[q.a];}
  fbSet(i,ok,(ok?'':'Đáp án: <b>'+ans+'</b>. ')+(q.ex||'')); return {t:qTypeOf(q),ok};});
 if(k===4) items=I.wq.map((q,i)=>{let ok; if(q.gap){ok=matchAns($('mq'+i).value,q.gap); fbSet(i,ok,(ok?'':'Đáp án: <b>'+q.gap[0]+'</b>. ')+(q.ex||''));} else {ok=gradeMcq(q,i); fbSet(i,ok,q.ex||'');} return {t:q.t,ok};});
 if(k===5){ if(!$('mRec').checked){$('mRes').innerHTML='<p class="fb bad">Em ghi âm câu trả lời Speaking trước, rồi đánh dấu ô “Em đã ghi âm” nhé.</p>'; return;}
  items=I.qz.map((q,i)=>{const ok=gradeMcq(q,i); fbSet(i,ok,ok?'':'Đáp án: '+'ABC'[q.a]); return {t:q.t,ok};});}
 const s=items.filter(x=>x.ok).length, n=items.length; record(uid,'mission'+k,items,s,n);
 state.mis=state.mis||{}; state.mis[misKey(uid,k)]={d:dayStr(new Date()),s,n}; save(); checkBadges(); updateStreakChip();
 const pts=10+(s/n>=0.8?5:0), nextM=MIS.find(m=>!misDone(uid,m.k));
 $('mRes').innerHTML=`<div class="card" style="background:var(--ok-soft);border-color:var(--ok);margin:0"><h2 style="margin-top:0">${s/n>=0.8?'🎉 Xuất sắc!':s/n>=0.5?'👍 Tốt lắm!':'💪 Đã xong, cố lên!'} Em đúng ${s}/${n}</h2>
<p class="lead">+${pts} điểm${state.team?' cho '+esc(state.team):' (chọn đội ở trang Nhiệm vụ để góp điểm)'} · 🔥 ${streakOf(state.att)} ngày liên tiếp</p>
${s/n<0.5?'<p class="note">Câu sai không sao cả: đọc giải thích màu đỏ ở trên rồi bấm làm lại lúc khác. Điều quan trọng là em đã học hôm nay.</p>':''}
<div class="row"><a class="btn" href="#today">Về trang Nhiệm vụ</a>${nextM?`<button class="btn ghost" onclick="startMission('${uid}',${nextM.k})">Làm thêm nhiệm vụ ${nextM.k} →</button>`:`<a class="btn ghost" href="#${uid}-goals">Mở unit đầy đủ →</a>`}</div></div>`;
 $('mRes').scrollIntoView({behavior:'smooth',block:'center'});}

/* ===== Quiz khởi động 5 phút (giáo viên chiếu trong buổi online) ===== */
let WU=null;
function warmQs(u){const I=misItems(u), out=[];
 const v1=I.vq[1]; out.push({kind:'🎬 Từ vựng (Nhiệm vụ 1)',q:v1.q,opts:v1.opts,a:v1.a,ex:v1.ex});
 const v=I.V[6], wrong=shuf(I.V.filter(x=>x!==v),u.id+'wu').slice(0,2).map(x=>x[0]), o2=shuf([v[0],...wrong],u.id+'wo'); out.push({kind:'🎬 Từ vựng (Nhiệm vụ 1)',q:`Từ nào có nghĩa “${v[2]}”?`,opts:o2,a:o2.indexOf(v[0]),ex:`${v[0]}: ${v[3]}`});
 const d=I.D[2], ws=d[1].replace(/[.,!?]/g,'').split(' '), key=ws.slice().sort((a,b)=>b.length-a.length)[0];
 const pool=I.D.filter(x=>x!==d).flatMap(x=>x[1].replace(/[.,!?]/g,'').split(' ')).filter(w=>w.length>=5&&w.toLowerCase()!==key.toLowerCase());
 const dw=shuf([...new Set(pool)],u.id+'dw').slice(0,2), o3=shuf([key,...dw],u.id+'do');
 out.push({kind:'🎧 Nghe (Nhiệm vụ 2)',q:d[1].replace(key,'______'),opts:o3,a:o3.indexOf(key),clip:'d3',ex:d[1]});
 const r=I.rq[1]; if(r.t==='mcq') out.push({kind:'📖 Đọc (Nhiệm vụ 3)',q:r.text,opts:r.opts,a:r.a,ex:r.ex,L:'ABCD'});
 else if(r.t==='select') out.push({kind:'📖 Đọc (Nhiệm vụ 3)',q:r.text,opts:r.opts.length<=4?r.opts:null,a:r.opts.length<=4?r.opts.indexOf(r.a):null,ans:r.a,ex:r.ex,box:r._g.box});
 else out.push({kind:'📖 Đọc (Nhiệm vụ 3)',q:`${r.before||''} ______ ${r.after||''}`,ans:r.a[0],ex:r.ex});
 const w=I.wq[2]; out.push(w.gap?{kind:'✍️ Viết (Nhiệm vụ 4)',q:w.q,ans:w.gap[0],ex:w.ex}:{kind:'✍️ Viết (Nhiệm vụ 4)',q:w.q,opts:w.opts,a:w.a,ex:w.ex});
 return out;}
function viewWarmup(){view='warmup'; stopAudio(); setHeader('⏱ Quiz khởi động 5 phút','Cô chiếu màn hình trong 5 phút đầu buổi online · câu hỏi lấy đúng từ 5 nhiệm vụ tự học của tuần',false);
 const uid=(WU&&WU.uid)||thisUnit(); U=UNITS.find(u=>u.id===uid); preloadClips();
 if(!WU||WU.uid!==uid) WU={uid,i:0,show:false,qs:warmQs(U),sc:Object.fromEntries(TEAMS().map(t=>[t,0])),timer:null,left:30};
 renderWarm();}
function renderWarm(){const q=WU.qs[WU.i], L=q.L||'ABC';
 $('view').innerHTML=`<div class="card"><div class="row"><label>Unit <select onchange="wuStop();WU=null;state.tu=this.value;save();viewWarmup()">${MUNITS().map(u=>`<option value="${u.id}" ${u.id===WU.uid?'selected':''}>Unit ${u.week}: ${u.title}</option>`).join('')}</select></label>
 <span class="tag">Câu ${WU.i+1}/${WU.qs.length}</span><button class="btn ghost sm" onclick="wuFull()">⛶ Toàn màn hình</button></div></div>
<div class="card" id="wuStage" style="font-size:24px;line-height:1.45">
 <div class="row" style="justify-content:space-between"><span class="tag" style="font-size:16px">${q.kind}</span><b id="wuT" style="font-size:34px;color:var(--citrus)">${WU.left}s</b></div>
 <div class="progress" style="margin:10px 0"><span id="wuBar" style="width:${WU.left/30*100}%"></span></div>
 ${q.box?`<div class="box" style="font-size:17px">${q.box}</div>`:''}
 <p style="font-size:28px;font-weight:700;margin:14px 0">${q.q}</p>
 ${q.clip?`<button class="btn ghost" onclick="playFile('${q.clip}')">🔊 Nghe câu</button>`:''}
 ${q.opts?q.opts.map((o,j)=>`<div class="q" style="font-size:24px;padding:10px 16px;border-radius:12px;margin:8px 0;${WU.show?(j===q.a?'background:var(--ok-soft);border:2px solid var(--ok)':'opacity:.45'):'border:2px solid var(--line)'}"><b>${L[j]}.</b> ${o}</div>`).join(''):`<p class="lead" style="font-size:20px">Học sinh trả lời trong khung chat.</p>`}
 ${WU.show?`<div class="model" style="font-size:19px">${q.opts?'':`Đáp án: <b>${q.ans}</b><br>`}${q.ex||''}</div>`:''}
 <div class="row" style="margin-top:14px"><button class="btn" onclick="wuTimer()">▶ 30 giây</button><button class="btn citrus" onclick="WU.show=true;wuStop();renderWarm()">Hiện đáp án</button>
 <button class="btn ghost" ${WU.i===0?'disabled':''} onclick="wuGo(-1)">← Câu trước</button><button class="btn ghost" onclick="wuGo(1)">${WU.i===WU.qs.length-1?'Kết thúc ⇥':'Câu tiếp →'}</button></div>
 <div class="row" style="margin-top:14px">${Object.keys(WU.sc).map(t=>`<button class="btn ghost" onclick="WU.sc['${t.replace(/'/g,"\\'")}']++;renderWarm()">${esc(t)}: <b>${WU.sc[t]}</b> ＋</button>`).join('')}</div>
</div>`;}
function wuTimer(){wuStop(); WU.left=30; WU.timer=setInterval(()=>{WU.left--; const t=$('wuT'),b=$('wuBar'); if(t) t.textContent=WU.left+'s'; if(b) b.style.width=(WU.left/30*100)+'%'; if(WU.left<=0){wuStop(); WU.show=true; renderWarm();}},1000);}
function wuStop(){if(typeof WU!=='undefined'&&WU&&WU.timer){clearInterval(WU.timer); WU.timer=null;}}
function wuGo(d){wuStop(); if(d>0&&WU.i===WU.qs.length-1){wuEnd(); return;} WU.i=Math.max(0,WU.i+d); WU.show=false; WU.left=30; renderWarm();}
function wuEnd(){const e=Object.entries(WU.sc).sort((a,b)=>b[1]-a[1]);
 $('wuStage').innerHTML=`<h2 style="font-size:34px">🏆 Kết quả khởi động</h2>${e.map(([t,s],i)=>`<p style="font-size:28px">${['🥇','🥈','🥉'][i]||''} ${esc(t)}: <b>${s}</b> điểm</p>`).join('')}<p class="lead">Câu hỏi lấy từ 5 nhiệm vụ tự học tuần này. Em nào chưa làm thì tối nay mở “🎯 Nhiệm vụ hôm nay” nhé!</p><button class="btn ghost" onclick="WU.i=0;WU.show=false;renderWarm()">Chiếu lại từ đầu</button>`;}
function wuFull(){const el=$('wuStage'); try{(el.requestFullscreen||el.webkitRequestFullscreen).call(el);}catch(e){}}

/* bảng điểm đội cho trang giáo viên (từ mã kết quả học sinh gửi) */
function teamBoardHTML(im){const wk=weekStart(new Date()), T={};
 Object.values(im).forEach(o=>{const t=o.tm||'(chưa chọn đội)'; T[t]=T[t]||{all:0,wk:0,n:0,names:[]}; T[t].n++; T[t].names.push(o.n||'?');
  (o.a||[]).filter(a=>/^mission/.test(a.p)).forEach(a=>{const p=10+(a.n&&a.s/a.n>=0.8?5:0); T[t].all+=p; if(new Date(a.d+'T12:00')>=wk) T[t].wk+=p;});});
 const rows=Object.entries(T).sort((a,b)=>b[1].wk-a[1].wk||b[1].all-a[1].all);
 return rows.length?`<table><tr><th>#</th><th>Đội</th><th>Tuần này</th><th>Tổng</th><th>Thành viên</th></tr>${rows.map(([t,x],i)=>`<tr><td>${['🥇','🥈','🥉'][i]||i+1}</td><td><b>${esc(t)}</b></td><td><b>${x.wk}</b></td><td>${x.all}</td><td>${x.names.map(esc).join(', ')}</td></tr>`).join('')}</table>`:'<p class="lead">Chưa có dữ liệu nhiệm vụ.</p>';}
