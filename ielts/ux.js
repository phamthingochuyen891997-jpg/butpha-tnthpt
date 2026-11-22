/* ===== UX layer: mascot "Chanh", motion, mobile navigation ===== */
(function(){
const $=id=>document.getElementById(id);
const mq=window.matchMedia('(max-width:700px)');
const isMob=()=>mq.matches;
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- mascot: Chanh 🍋 (nhân vật riêng của bộ tài liệu) ---------- */
window.mascot=function(mood,size,cls){mood=mood||'happy'; size=size||64; cls=cls==null?'bob':cls;
 const eyeY=mood==='think'?66:70;
 const eyes=mood==='sleep'
  ?'<path d="M40 71 Q46 76 52 71" stroke="#1A1B16" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M68 71 Q74 76 80 71" stroke="#1A1B16" stroke-width="3" fill="none" stroke-linecap="round"/>'
  :`<g class="blink"><ellipse cx="46" cy="${eyeY}" rx="5" ry="6.5" fill="#1A1B16"/><ellipse cx="74" cy="${eyeY}" rx="5" ry="6.5" fill="#1A1B16"/><circle cx="47.8" cy="${eyeY-2.5}" r="1.8" fill="#fff"/><circle cx="75.8" cy="${eyeY-2.5}" r="1.8" fill="#fff"/></g>`;
 const mouth={happy:'<path d="M49 86 Q60 97 71 86" stroke="#1A1B16" stroke-width="3.2" fill="none" stroke-linecap="round"/>',
  cheer:'<path d="M47 84 Q60 106 73 84 Z" fill="#7A2E1E"/><path d="M53 95 Q60 101 67 95 Q60 92 53 95Z" fill="#E77B6B"/>',
  think:'<ellipse cx="63" cy="90" rx="4" ry="4.5" fill="#1A1B16"/>',
  sleep:'<path d="M54 89 Q60 92 66 89" stroke="#1A1B16" stroke-width="3" fill="none" stroke-linecap="round"/>',
  soft:'<path d="M51 91 Q60 86 69 91" stroke="#1A1B16" stroke-width="3" fill="none" stroke-linecap="round"/>'}[mood]||'';
 const arms=mood==='cheer'
  ?'<path d="M20 70 L7 48" stroke="#2E3B1F" stroke-width="5" stroke-linecap="round"/><circle cx="7" cy="46" r="5" fill="#2E3B1F"/><path d="M100 70 L113 48" stroke="#2E3B1F" stroke-width="5" stroke-linecap="round"/><circle cx="113" cy="46" r="5" fill="#2E3B1F"/>'
  :mood==='think'?'<path d="M20 82 L10 94" stroke="#2E3B1F" stroke-width="5" stroke-linecap="round"/><path d="M100 82 L86 92" stroke="#2E3B1F" stroke-width="5" stroke-linecap="round"/><circle cx="84" cy="93" r="5" fill="#2E3B1F"/>'
  :'<path d="M20 82 L10 96" stroke="#2E3B1F" stroke-width="5" stroke-linecap="round"/><path d="M100 82 L110 96" stroke="#2E3B1F" stroke-width="5" stroke-linecap="round"/>';
 const extra=mood==='sleep'?'<text x="92" y="30" font-size="16" font-weight="700" fill="#2E3B1F">z</text><text x="102" y="18" font-size="12" font-weight="700" fill="#2E3B1F">z</text>':mood==='think'?'<text x="96" y="30" font-size="20" font-weight="800" fill="#2E3B1F">?</text>':'';
 return `<svg class="mascot ${cls}" width="${size}" height="${Math.round(size*1.08)}" viewBox="0 0 120 130" aria-hidden="true">
<ellipse cx="60" cy="124" rx="28" ry="4" fill="rgba(0,0,0,.12)"/>
${arms}
<ellipse cx="46" cy="118" rx="9" ry="5" fill="#2E3B1F"/><ellipse cx="74" cy="118" rx="9" ry="5" fill="#2E3B1F"/>
<path d="M60 22 C92 22 108 48 106 74 C104 102 84 118 60 118 C36 118 16 102 14 74 C12 48 28 22 60 22 Z" fill="#F5E964" stroke="#C9B12A" stroke-width="3"/>
<path d="M56 24 C55 16 58 11 63 9" stroke="#6B5A1E" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M63 12 C74 2 92 4 96 12 C86 20 72 20 63 12 Z" fill="#7DA33A" stroke="#4F6E1F" stroke-width="2"/>
<ellipse cx="38" cy="48" rx="10" ry="6" fill="#fff" opacity=".45" transform="rotate(-30 38 48)"/>
${eyes}
<ellipse cx="35" cy="84" rx="7" ry="4.5" fill="#F29C8A" opacity=".7"/><ellipse cx="85" cy="84" rx="7" ry="4.5" fill="#F29C8A" opacity=".7"/>
${mouth}${extra}</svg>`;};
window.mbub=(mood,html,size)=>`<div class="mbub">${mascot(mood,size||58)}<div class="bubble">${html}</div></div>`;

/* ---------- toast + confetti ---------- */
let tt=null;
window.uxToast=function(msg,mood,ms){let el=$('uxToast'); if(!el){el=document.createElement('div'); el.id='uxToast'; document.body.appendChild(el);}
 el.innerHTML=mascot(mood||'happy',40,mood==='cheer'?'cheer':'')+'<div>'+msg+'</div>'; requestAnimationFrame(()=>el.classList.add('show'));
 clearTimeout(tt); tt=setTimeout(()=>el.classList.remove('show'),ms||3200);};
window.confetti=function(n){if(reduce) return; n=n||40; const c=document.createElement('div'); c.className='ux-confetti';
 const cols=['#F5E964','#7DA33A','#E4572E','#2E5AA7','#FFA62B','#ffffff'];
 for(let i=0;i<n;i++){const s=document.createElement('i'); s.style.left=Math.random()*100+'vw'; s.style.background=cols[i%cols.length]; s.style.setProperty('--dx',(Math.random()*160-80)+'px'); s.style.setProperty('--r',(Math.random()*720-360)+'deg'); s.style.animationDelay=(Math.random()*.35)+'s'; c.appendChild(s);}
 document.body.appendChild(c); setTimeout(()=>c.remove(),2300);};

/* ---------- âm thanh: báo đang tải ---------- */
let lt=null; const ld=document.createElement('div'); ld.id='uxLoad'; ld.textContent='⏳ Đang tải âm thanh…'; document.body.appendChild(ld);
const loadOn=()=>{clearTimeout(lt); lt=setTimeout(()=>ld.classList.add('show'),350);}, loadOff=()=>{clearTimeout(lt); ld.classList.remove('show');};
function watchMedia(a){ if(!a||a.dataset.uxw) return; a.dataset.uxw=1; ['waiting','loadstart','stalled'].forEach(e=>a.addEventListener(e,()=>{if(!a.paused||e==='waiting') loadOn();})); ['playing','canplay','pause','ended','error'].forEach(e=>a.addEventListener(e,loadOff));}
try{watchMedia(player);}catch(e){}
if(typeof playFile==='function'){const _pf=playFile; playFile=function(){loadOn(); return _pf.apply(this,arguments);};}
if(window.playVocab){const _pv=window.playVocab; window.playVocab=function(){loadOn(); return _pv.apply(this,arguments);};}

/* ---------- thanh điều hướng dưới (điện thoại) ---------- */
const BB=[['today','🎯','Hôm nay'],['home','🗺️','Bản đồ'],['ontu','🔁','Ôn từ'],['me','📒','Sổ lỗi']];
const bb=document.createElement('nav'); bb.className='ux-bbar'; bb.setAttribute('aria-label','Điều hướng chính');
bb.innerHTML=BB.map(b=>`<a href="#${b[0]}" data-k="${b[0]}"><span class="ic">${b[1]}</span>${b[2]}${b[0]==='ontu'?'<span class="dot" id="bbDot" hidden></span>':''}</a>`).join('')+'<button type="button" data-k="more" onclick="uxMore()"><span class="ic">☰</span>Thêm</button>';
document.body.appendChild(bb);
function bbActive(){const h=location.hash.slice(1); const k=(h===''||h==='home'||/^cp-/.test(h))?'home':/^(today|mis-)/.test(h)?'today':h==='ontu'?'ontu':h==='me'?'me':'';
 bb.querySelectorAll('[data-k]').forEach(a=>a.classList.toggle('on',a.dataset.k===k));
 const d=$('bbDot'); if(d&&window.ontuDueCount){const n=ontuDueCount(); d.hidden=!n; d.textContent=n;}}

/* ---------- bottom sheet ---------- */
const sh=document.createElement('div'); sh.className='ux-sheet'; sh.innerHTML='<div class="bg"></div><div class="panel" role="dialog" aria-modal="true"><div class="grab"></div><div id="uxSheetBody"></div></div>'; document.body.appendChild(sh);
sh.querySelector('.bg').onclick=()=>uxClose();
window.uxClose=()=>sh.classList.remove('open');
window.uxSheet=html=>{$('uxSheetBody').innerHTML=html; sh.classList.add('open');};
window.uxMore=function(){const t=$('nv-teacher'); const items=[['#test','🧭','Test đầu vào & điểm xuất phát'],['#maloi','✍️','Mã lỗi Writing'],['#nguon','📚','Nguồn học thêm'],['#sync','📱💻','Học trên 2 máy'],['#lemon','🍋','Phương pháp LEMON']]; if(t&&!t.classList.contains('hidden')) items.push(['#teacher','👩‍🏫','Trang giáo viên']);
 const pick=$('unitPick');
 uxSheet(`<h3 style="margin:0 0 6px">Thêm</h3>${items.map(i=>`<a class="item" href="${i[0]}" onclick="uxClose()"><span style="font-size:22px">${i[1]}</span>${i[2]}</a>`).join('')}
<label style="display:block;margin-top:10px;font-weight:700">Mở một bài bất kỳ<select onchange="uxClose();var v=+this.value;location.hash=v<0?'home':UNITS[v].id+'-goals'">${pick?pick.innerHTML:''}</select></label>`);
 const s=$('uxSheetBody').querySelector('select'); if(s&&pick) s.value=pick.value;};

/* ---------- thanh "Phần k/N" trong bài ---------- */
const step=document.createElement('div'); step.className='ux-step'; step.innerHTML='<button type="button" onclick="uxParts()" aria-label="Chọn phần"><span class="k" id="uxK"></span><span id="uxN" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></span>▾</button><div class="bar"><span id="uxBar"></span></div>';
const main=document.querySelector('main'); if(main) main.insertBefore(step,main.firstChild);
const pname=p=>(U&&U.review?p[1].replace(/^\d+\.\s/,''):p[1]);
function stepUpd(){ if(view!=='unit'||typeof UP==='undefined'||!UP||!UP.length) return; const NP=UP.length-1; const n=UP.slice(1).filter(p=>state.done[U.id+'-'+p[0]]).length;
 $('uxK').textContent=cur===0?'Bắt đầu':'Phần '+cur+'/'+NP; $('uxN').textContent=pname(UP[cur]).replace(/^\d+\.\s/,''); $('uxBar').style.width=(n/NP*100)+'%';
 const pv=$('prevBtn'),nx=$('nextBtn'); if(isMob()){pv.textContent='←'; nx.textContent=cur<UP.length-1?'Tiếp →':'Hết'; const d=$('doneBtn'); d.textContent=state.done[U.id+'-'+UP[cur][0]]?'✓ Đã xong':'✓ Xong phần này';}}
window.uxParts=function(){uxSheet(`<h3 style="margin:0 0 6px">${esc(lbl(U))}: ${esc(U.title)}</h3>${UP.map((p,i)=>`<button class="item ${i===cur?'on':''}" onclick="uxClose();go(${i})">${pname(p)}${state.done[U.id+'-'+p[0]]?'<span class="tick">✓</span>':''}</button>`).join('')}`);};

/* ---------- hook: header, bài, các trang ---------- */
const _sh=setHeader; setHeader=function(t,s,p){_sh.apply(this,arguments); document.body.classList.toggle('unitv',view==='unit'); const h=$('hTitle'); h.classList.toggle('long',(t||'').length>30); $('hSub').classList.remove('full'); bbActive();};
$('hSub').addEventListener('click',()=>$('hSub').classList.toggle('full'));
const _show=show; show=function(){_show.apply(this,arguments); stepUpd(); if(view==='unit'&&UP[cur]&&UP[cur][0]==='listening') listenDefault();};
const _md=markDone; markDone=function(){const k=U.id+'-'+UP[cur][0]; const was=!!state.done[k]; _md.apply(this,arguments); if(!was&&state.done[k]){confetti(30); const NP=UP.length-1, n=UP.slice(1).filter(p=>state.done[U.id+'-'+p[0]]).length; uxToast(n===NP?'Tuyệt vời! Em đã xong cả <b>'+esc(lbl(U))+'</b> 🎉':'Xong <b>'+pname(UP[cur]).replace(/^\d+\.\s/,'')+'</b>. Còn '+(NP-n)+' phần nữa thôi!',n===NP?'cheer':'happy'); if(n===NP) confetti(80);}};
if(typeof setDone==='function'){const _sd=setDone; setDone=function(part){const was=!!state.done[U.id+'-'+part]; _sd.apply(this,arguments); if(!was) confetti(24);};}

/* Listening: mặc định chế độ luyện tập; thi thật là một lựa chọn */
function listenDefault(){const la=$('laudio'); if(!la||la.dataset.exam||la.dataset.uxd) return; la.dataset.uxd=1; practiceMode(); watchMedia(la);
 const pb=document.querySelector('#view button[onclick="practiceMode()"]'); if(pb) pb.style.display='none';}
const _pm=practiceMode; practiceMode=function(){_pm.apply(this,arguments); const b=$('examBtn'); if(b) b.textContent='🎯 Chuyển sang thi thật (nghe 1 lần)'; const n=$('examNote'); if(n){n.classList.remove('hidden'); n.textContent='Chế độ luyện tập: nghe, dừng, tua thoải mái. Khi đã quen, bấm “Thi thật” để nghe 1 lần như phòng thi.';}};
const _em=examMode; examMode=function(){_em.apply(this,arguments); const pb=document.querySelector('#view button[onclick="practiceMode()"]'); if(pb){pb.style.display=''; pb.textContent='↩ Quay lại luyện tập';}};

/* Kết quả bài làm: phản hồi so với lần trước */
const SKIP={test:1,maloi:1}; const PNM={listening:'Listening',reading:'Reading',gv:'Ngữ pháp',quiz:'Mini quiz',dictation:'Chép chính tả',review:'Ôn từ',homework:'Bài về nhà'};
const _rec=record; record=function(scope,part,items,score,total){const prev=(state.att||[]).filter(a=>a.u===scope&&a.p===part).pop(); _rec.apply(this,arguments);
 if(SKIP[scope]||!total||total<4) return; const r=score/total, nm=PNM[part]||'bài này'; let msg,mood;
 const better=prev&&prev.n===total?score-prev.s:null;
 if(r>=.8){mood='cheer'; msg=`<b>${score}/${total}</b> ở ${nm}!`+(better>0?` Hơn lần trước ${better} câu. 🎉`:' Đúng mức mục tiêu rồi đó. 🎉'); confetti(r===1?90:45);}
 else if(r>=.5){mood='happy'; msg=`<b>${score}/${total}</b> ở ${nm}.`+(better>0?` Tiến bộ ${better} câu so với lần trước!`:' Xem lại các câu sai, bấm “Nghe lại đoạn này” nếu có.');}
 else {mood='soft'; msg=`<b>${score}/${total}</b>. Không sao đâu!`+(better>0?` Vẫn hơn lần trước ${better} câu.`:'')+' Xem đáp án và lời giải, rồi làm lại sau 1 ngày nhé.';}
 setTimeout(()=>uxToast(msg,mood,4200),250);};

/* Writing: báo đã lưu nháp + lựa chọn viết tay */
let svT=null; function saved(id){const s=$(id); if(!s) return; s.classList.add('on'); s.textContent='✓ Đã lưu nháp trên máy này'; clearTimeout(svT); svT=setTimeout(()=>s.classList.remove('on'),2200);}
if(typeof wcount==='function'){const _wc=wcount; wcount=function(){_wc.apply(this,arguments); saved('uxSaved');};}
if(typeof wcount1==='function'){const _wc1=wcount1; wcount1=function(){_wc1.apply(this,arguments); saved('uxSaved1');};}
function writingHelpers(){ if($('wc')&&!$('uxSaved')) $('wc').insertAdjacentHTML('afterend','<span class="ux-saved" id="uxSaved"></span>');
 if($('wc1')&&!$('uxSaved1')) $('wc1').insertAdjacentHTML('afterend','<span class="ux-saved" id="uxSaved1"></span>');
 const cp=[...document.querySelectorAll('#view button')].find(b=>/Sao chép bài để gửi cô/.test(b.textContent));
 if(cp&&!document.querySelector('.ux-photo')) cp.parentElement.insertAdjacentHTML('afterend','<details class="ux-photo"><summary>📷 Không tiện gõ trên điện thoại? Viết tay rồi chụp ảnh</summary><ol style="margin:8px 0 0"><li>Viết bài ra giấy, ghi tên và tên bài ở đầu trang.</li><li>Đặt đồng hồ đúng thời gian như thi (Task 1: 20 phút, Task 2: 40 phút).</li><li>Chụp ảnh rõ nét, đủ sáng, gửi cô qua Zalo.</li><li>Đọc lại bài theo danh sách tự kiểm tra ở trên, rồi bấm “✓ Xong phần này”.</li></ol></details>');}

/* Reading trên điện thoại: chuyển Bài đọc ↔ Câu hỏi */
function readingTabs(){ if(!isMob()) return; document.querySelectorAll('#view .cbt').forEach(cbt=>{ if(cbt.classList.contains('mob')) return; const bar=cbt.previousElementSibling; if(!bar||!bar.classList.contains('cbt-bar')) return;
 cbt.classList.add('mob','sp'); const pos={sp:0,sq:0};
 const t=document.createElement('div'); t.className='ux-rtabs'; t.style.cssText='position:static;width:100%;background:none;margin:6px 0 0;padding:0';
 t.innerHTML='<button type="button" class="on" data-m="sp">📖 Bài đọc</button><button type="button" data-m="sq">❓ Câu hỏi <span class="qc"></span></button>'; bar.appendChild(t);
 const cnt=()=>{const all=cbt.querySelectorAll('.qnav button').length, d=cbt.querySelectorAll('.qnav button.done,.qnav button.ok,.qnav button.bad').length; t.querySelector('.qc').textContent='('+d+'/'+all+')';}; cnt();
 cbt.addEventListener('change',cnt); cbt.addEventListener('input',cnt);
 t.querySelectorAll('button').forEach(b=>b.onclick=()=>{const m=b.dataset.m, from=cbt.classList.contains('sp')?'sp':'sq'; if(m===from) return; pos[from]=window.scrollY; cbt.classList.remove('sp','sq'); cbt.classList.add(m);
  t.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b)); cnt(); const top=bar.getBoundingClientRect().top+window.scrollY-60; window.scrollTo({top:pos[m]||top});});
 cbt.querySelectorAll('.qnav button').forEach(b=>b.addEventListener('click',()=>{ if(cbt.classList.contains('sp')) t.querySelector('[data-m="sq"]').click(); },true));});}

/* Tiêu đề dài: bỏ kiểu chữ đứng in hoa */
function longHeads(){document.querySelectorAll('#view h2').forEach(h=>h.classList.toggle('long',h.textContent.trim().length>32));}

/* ---------- trang chủ: thẻ "Tiếp tục" hoặc lời chào lần đầu ---------- */
function homeCard(){ const h=location.hash.slice(1); if(!(h===''||h==='home')) return; if(window.homeV2){homeV2(); return;} const v=$('view'); if(!v||$('uxCont')) return;
 const fresh=!state.test&&!Object.keys(state.done||{}).length&&!(state.att||[]).length;
 let html='';
 if(fresh&&!state.uxOnb){html=`<div class="ux-cont" id="uxCont">${mascot('cheer',76,'cheer')}<div style="flex:1;min-width:220px"><h3>Chào em! Mình là Chanh 🍋</h3><p>Mình sẽ đi cùng em suốt Hành trình 7.0+. Bắt đầu chỉ với 3 bước:</p>
<div class="ux-steps"><div><b>①</b>Làm test đầu vào khoảng 45 phút</div><div><b>②</b>Nhận điểm xuất phát hợp với trình độ của em</div><div><b>③</b>Mỗi ngày 1 nhiệm vụ khoảng 15 phút</div></div>
<div class="row"><a class="btn" href="#test">🧭 Làm test đầu vào</a><button class="btn ghost" style="background:transparent;color:#1A1B16;border-color:#1A1B16" onclick="state.uxOnb=1;save();this.closest('.ux-cont').remove()">Xem bản đồ trước</button></div></div></div>`;}
 else if(!fresh&&typeof thisUnit==='function'){const uid=thisUnit(), u=UNITS.find(x=>x.id===uid); if(!u) return; const nx=(typeof MIS!=='undefined'?MIS:[]).find(m=>!misDone(uid,m.k));
  const due=window.ontuDueCount?ontuDueCount():0;
  html=`<div class="ux-cont" id="uxCont">${mascot(nx?'happy':'cheer',64)}<div style="flex:1;min-width:200px"><h3>${nx?'Tiếp tục: '+esc(lbl(u)):'Em đã xong 5 nhiệm vụ của '+esc(lbl(u))+' 🎉'}</h3><p>${nx?`${nx.icon} Nhiệm vụ ${nx.k}/5 · ${nx.name} · khoảng ${nx.min} phút`:'Học sâu từng phần của bài, hoặc ôn từ hôm nay.'}${due?`<br>🔁 Có <b>${due}</b> từ đến hạn ôn.`:''}</p>
<div class="row">${nx?`<a class="btn" href="#mis-${uid}-${nx.k}">Tiếp tục ▶</a>`:`<a class="btn" href="#${uid}-goals">Mở ${esc(lbl(u))} →</a>`}${due?`<a class="btn ghost" style="background:transparent;color:#1A1B16;border-color:#1A1B16" href="#ontu">Ôn từ</a>`:''}</div></div></div>`;}
 if(html) v.insertAdjacentHTML('afterbegin',html);}

/* ---------- Nhiệm vụ hôm nay: lời chào + trạng thái trống ---------- */
function todayCard(){ if(!/^#?today$/.test(location.hash)&&location.hash!=='#today') return; if(window.todayV2) todayV2(); const v=$('view'); if(!v||$('uxHi')) return;
 const hr=new Date().getHours(), part=hr<11?'buổi sáng':hr<14?'buổi trưa':hr<18?'buổi chiều':'buổi tối'; const nm=state.name?', '+esc(state.name.split(' ').pop()):'';
 const st=typeof streakOf==='function'?streakOf(state.att||[]):0;
 const msg=st>=3?`Chuỗi <b>${st} ngày</b> rồi đó! Giữ lửa thêm hôm nay nhé 🔥`:st>=1?'Hôm qua em đã học rồi. Làm tiếp 1 nhiệm vụ để giữ chuỗi nhé!':'Chỉ cần 15 phút hôm nay là em đã bắt đầu chuỗi ngày học 🔥';
 v.insertAdjacentHTML('afterbegin',`<div id="uxHi">${mbub(st>=3?'cheer':'happy',`Chào ${part}${nm}! ${msg}`)}</div>`);
 if(!(state.att||[]).length){const k=v.querySelector('.kpi'); if(k) k.outerHTML=`<p class="lead" style="margin:6px 0 0">Chưa có số liệu. Làm xong nhiệm vụ đầu tiên, em sẽ thấy chuỗi ngày học và tỷ lệ đúng ở đây.</p>`;}}

/* ---------- Sổ lỗi: điều quan trọng lên trước ---------- */
function meReorder(){ if(location.hash!=='#me') return; const v=$('view'); if(!v||v.dataset.uxr) return; v.dataset.uxr=1; const cards=[...v.children];
 const by=t=>cards.find(c=>{const h=c.querySelector('h2'); return h&&h.textContent.includes(t);});
 const order=['Tài khoản của em','Dạng bài em hay sai','Lỗi Writing','Ôn từ hôm nay','Test đầu vào','Chuỗi ngày học','Lịch sử làm bài','Gửi kết quả cho cô','Học trên điện thoại','Hồ sơ'].map(by).filter(Boolean);
 order.forEach(c=>v.appendChild(c)); cards.filter(c=>!order.includes(c)).forEach(c=>v.appendChild(c));
 const st=statsOf(state.att||[]); const rows=Object.entries(st).filter(([t,[c,n]])=>TYPES[t]&&n>=3).map(([t,[c,n]])=>({t,p:Math.round(c/n*100)})).sort((a,b)=>a.p-b.p).slice(0,3);
 v.insertAdjacentHTML('afterbegin',rows.length?`<div class="card">${mbub('think',`3 dạng em cần luyện nhất: ${rows.map(r=>`<b>${TYPES[r.t][0]}</b> (${r.p}%)`).join(', ')}. Gợi ý cách luyện nằm ngay bảng bên dưới.`)}</div>`:`<div class="card">${mbub('happy','Làm thêm vài bài, mình sẽ chỉ ra những dạng em cần luyện nhất ở đây.')}</div>`);}

/* ---------- Ôn từ: không còn từ đến hạn ---------- */
function ontuCard(){ if(location.hash!=='#ontu') return; const v=$('view'); if(!v) return; const h=[...v.querySelectorAll('h2')].find(x=>/không còn từ nào/.test(x.textContent)); if(h&&!h.dataset.ux){h.dataset.ux=1; h.insertAdjacentHTML('beforebegin',mascot('sleep',70));}}

/* ---------- mọi lần đổi trang ---------- */
const vw=$('view');
let busy=false;
function after(){ if(busy) return; busy=true; try{ vw.classList.remove('ux-enter'); void vw.offsetWidth; if(!reduce) vw.classList.add('ux-enter');
 document.body.classList.toggle('unitv',view==='unit'); {const h=$('hTitle'); h.classList.toggle('long',h.textContent.length>30);} homeCard(); todayCard(); meReorder(); ontuCard(); longHeads(); writingHelpers(); readingTabs(); stepUpd(); bbActive(); if($('laudio')) watchMedia($('laudio')); if(view==='unit'&&UP&&UP[cur]&&UP[cur][0]==='listening') listenDefault(); } finally { setTimeout(()=>{busy=false;},0); } }
new MutationObserver(()=>after()).observe(vw,{childList:true});
window.addEventListener('hashchange',()=>{uxClose(); setTimeout(bbActive,0);});
mq.addEventListener&&mq.addEventListener('change',()=>{stepUpd(); readingTabs();});
after();
})();
