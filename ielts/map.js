/* ===== Bản đồ "Hành trình 5.5+" — 4 vùng đất, checkpoint theo tuần ===== */
window.ZONES=[
 {n:'01',name:'Bến Khởi Hành',weeks:'Tuần 1–4',strat:'Nghe số & đánh vần · tìm ý chính',ids:['u1','u2','u3','u4','r1']},
 {n:'02',name:'Thung Lũng Bẫy',weeks:'Tuần 5–8',strat:'Nhận diện bẫy · paraphrase',ids:['u5','u6','u7','u8','m1']},
 {n:'03',name:'Vách Đá Tăng Tốc',weeks:'Tuần 9–12',strat:'Bài dài · dạng mới · tốc độ',ids:['u9','u10','u11','u12','r3']},
 {n:'04',name:'Đỉnh 5.5',weeks:'Tuần 13–16',strat:'Đề trọn vẹn · quản lý thời gian',ids:['u13','u14','u15','u16','m2']}];
/* Tên checkpoint = chiến lược học chính của tuần */
window.CPS={
 start:{name:'Cổng xuất phát',strat:'Làm test đầu vào, học phương pháp LEMON, rồi mỗi ngày 15 phút.'},
 u1:{name:'Bắt số – đánh vần',strat:'Đọc câu hỏi trước, đoán loại từ, nghe chuẩn số và chữ cái.'},
 u2:{name:'Săn ý chính đoạn văn',strat:'Đọc câu đầu – câu cuối để chọn tiêu đề; biểu đồ cột: so sánh cao – thấp.'},
 u3:{name:'Theo dấu người nói',strat:'Nghe từ báo hiệu chuyển ý; biểu đồ đường: tả xu hướng tăng – giảm.'},
 u4:{name:'False hay Not Given?',strat:'Trái nghĩa → FALSE, không nhắc → NOT GIVEN; bài nghị luận: nêu rõ quan điểm.'},
 r1:{name:'Rương ôn tập 1',strat:'Kiểm tra lại Unit 1–4, ôn đúng lỗi trong Sổ lỗi.',chest:1},
 u5:{name:'Đọc bản đồ – nghe chỉ đường',strat:'Tìm “You are here”, nghe từ chỉ hướng; biểu đồ tròn: tỉ lệ phần trăm.'},
 u6:{name:'Né bẫy đổi ý',strat:'Hội thoại 3 người hay đổi ý: chờ quyết định cuối; bài thảo luận 2 quan điểm.'},
 u7:{name:'Quét bảng số liệu',strat:'Đoán loại thông tin từng cột; YES/NO/NOT GIVEN theo ý tác giả.'},
 u8:{name:'Bám dàn ý bài giảng',strat:'Nghe từ nối để theo kịp bài giảng; bài ưu – nhược điểm.'},
 m1:{name:'Trạm thi thử giữa kỳ',strat:'Làm đủ 4 kỹ năng như thi thật để biết band hiện tại.',chest:1},
 u9:{name:'Bẫy “but actually”',strat:'Nối A–G có 2 phương án thừa; tóm tắt: chép đúng từ trong bài; quy trình: câu bị động.'},
 u10:{name:'Giải pháp khớp nguyên nhân',strat:'Ghi chú + bản đồ; câu hỏi ngắn tối đa 3 từ; mỗi giải pháp gắn với một nguyên nhân.'},
 u11:{name:'Câu đầu – câu cuối',strat:'Sơ đồ quy trình: nghe quyết định cuối; bài dài: tìm ý chính nhanh; 2 biểu đồ cùng lúc.'},
 u12:{name:'Từ chỉ vị trí',strat:'Section 4 viết đúng 1 từ; sơ đồ và bản đồ: on top of, below, was replaced by…'},
 r3:{name:'Rương ôn tập 3',strat:'Ôn Unit 9–12: quiz 20 câu, Listening, Reading, Task 2 Problem–Solution trước khi lên đỉnh.',chest:1},
 u13:{name:'Chọn 2 đáp án',strat:'Choose TWO: hai ý khác nhau, loại phương án bị phủ định; tìm đoạn chứa thông tin; Task 2 hai câu hỏi.'},
 u14:{name:'Điều cả hai cùng đồng ý',strat:'Section 3: đáp án là điều hai người thống nhất; flow-chart theo thứ tự quy trình; Task 1 trong 20 phút.'},
 u15:{name:'Giữ mạch bài giảng dài',strat:'Section 4: dùng tiêu đề nhỏ làm biển chỉ đường; summary có hộp từ; Task 2 Discussion trong 40 phút.'},
 u16:{name:'Tổng duyệt như thi thật',strat:'Bấm giờ mọi phần; Writing 60 phút liền (Task 1 + Task 2); ôn 3 dạng sai nhiều nhất trong Sổ lỗi.'},
 m2:{name:'Trạm thi thử cuối khóa',strat:'Thi thử 4 kỹ năng (Section 3 + 4, bài đọc 850 từ, Task 1 + Task 2). Đạt khoảng 5.0+ thì lên chặng 6.5.',chest:1}};
window.JPH=[{band:'5.5',name:'Pre-IELTS',weeks:'Tuần 1–16',strat:'4 vùng · mỗi tuần 1 checkpoint',first:'u1'},{band:'6.5',name:'IELTS 6.5',weeks:'Tuần 17–36',strat:'3 vùng · mỗi checkpoint 2 tuần',first:'p1'},{band:'7.0+',name:'IELTS 7.0+',weeks:'Tuần 37–48',strat:'2 vùng · đề thật + tự chấm',first:'q1'}];
const STG=[['strategy','Chiến lược','▶','Video + mẹo',['strategy']],['vocab','Từ vựng','Aa','& ngữ pháp',['vocab','grammar']],['listening','Nghe','🎧','& chép chính tả',['listening','dictation']],['reading','Đọc','📖','',['reading']],['writing','Viết','✍️','',['writing']],['speaking','Nói','🎤','',['speaking']],['chest','Rương','🎁','Quiz + bài về nhà',['quiz','homework']]];
const cpOrder=()=>['start',...ZONES.flatMap(z=>z.ids)];
const uOf=id=>UNITS.find(u=>u.id===id);
const zoneOf=id=>ZONES.find(z=>z.ids.includes(id));
function stationsOf(id){
 if(id==='start') return [
  {k:'test',t:'Test đầu vào',ic:'🧭',s:'45 phút',href:'#test',done:!!state.test},
  {k:'lemon',t:'Phương pháp',ic:'🍋',s:'LEMON',href:'#lemon',done:!!state.lemonSeen},
  {k:'today',t:'Nhiệm vụ 15 phút',ic:'🎯',s:'mỗi ngày',href:'#today',done:!!(state.mis&&Object.keys(state.mis).length)},
  {k:'u1',t:'Vào Unit 1',ic:'🚩',s:'bắt đầu',href:'#u1-goals',done:!!state.done['u1-strategy'],chest:1}];
 const u=uOf(id); if(!u) return [];
 const have=partsOf(u).map(p=>p[0]);
 return STG.map(g=>{const ps=g[4].filter(p=>have.includes(p)); if(!ps.length) return null;
  const nd=ps.find(p=>!state.done[id+'-'+p]); return {k:g[0],t:g[1],ic:g[2],s:g[3],href:'#'+id+'-'+(nd||ps[0]),done:!nd,chest:g[0]==='chest'};}).filter(Boolean);}
function cpStatus(id){const c=CPS[id]||{}; if(c.soon&&!uOf(id)) return 'soon'; const st=stationsOf(id); if(st.length&&st.every(s=>s.done)) return 'done'; const u=uOf(id); if(u&&locked(u)) return 'lock'; return 'open';}
function cpNum(id){return String(cpOrder().indexOf(id)).padStart(2,'0');}
function cpTitle(id){const u=uOf(id); return id==='start'?'Bắt đầu':u?(u.review?u.title:u.title):'Sắp mở';}
function curCP(){if(!state.test&&!Object.keys(state.done).length) return 'start'; try{const t=thisUnit(); if(t) {const ids=cpOrder(); const i=ids.indexOf(t); /* nếu đã xong, sang checkpoint mở kế tiếp */ for(let k=i;k<ids.length;k++){const s=cpStatus(ids[k]); if(s==='open'||s==='lock') return ids[k];} return t;}}catch(e){} return 'u1';}

/* tranh núi đá vôi (hero) */
const MTN=`<svg class="mtn" viewBox="0 0 600 300" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
<circle cx="470" cy="70" r="34" fill="#F5E964" opacity=".9"/>
<path d="M120 300 C150 160 175 120 205 150 C225 90 250 60 280 110 C300 70 330 40 350 120 C370 150 380 210 400 300Z" fill="#45463A"/>
<path d="M300 300 C330 170 360 110 395 150 C415 80 445 40 480 120 C500 90 525 70 545 140 C565 180 585 230 600 300Z" fill="#737050"/>
<path d="M60 300 C110 230 150 205 190 225 C230 190 270 200 300 235 C340 215 380 220 420 250 C470 230 540 235 600 260 L600 300Z" fill="#1D4430"/>
<rect x="0" y="262" width="600" height="38" fill="#0E2417"/>
<g stroke="#DED3B6" stroke-opacity=".35" stroke-width="2"><path d="M330 274h60M420 284h90M250 288h40M520 272h50"/></g>
<g fill="#F5E964" opacity=".9"><path d="M455 236 l14 -12 14 12z"/><rect x="458" y="236" width="22" height="14" fill="#DED3B6"/><path d="M451 238h36" stroke="#45463A" stroke-width="3"/></g>
</svg>`;

let mapSel=null, focusEnd=0, focusTmr=null;
function viewMap(sel){view='home'; stopAudio(); if(sel) mapSel=sel; if(!mapSel||!CPS[mapSel]) mapSel=curCP();
 setHeader('Hành trình 7.0+','Từ 4.0 lên 5.5, 6.5 rồi 7.0+ · '+SITE.teacher,false);
 const now=curCP(), id=mapSel, z=zoneOf(id), u=uOf(id), cps=CPS[id], st=stationsOf(id), stt=cpStatus(id);
 const zi=z?ZONES.indexOf(z):-1;
 const hero=`<div class="hero">${MTN}<div class="kick">Lộ trình IELTS THPT · 48 tuần · ${esc(SITE.teacher)}</div>
<div class="scr">Chinh phục</div><div class="big">Hành trình 7.0+</div>
<div class="zones">${JPH.map((p,k)=>`<a href="#cp-${p.first}" class="${z&&z.phase===k+1?'on':''}"><b>${p.band}</b><span>Chặng ${k+1} · ${p.name}</span><small>${p.weeks} · ${p.strat}</small></a>`).join('')}</div></div>`;
 const focus=`<div class="focus"><span><b>Focus Mode</b> · Bấm Bắt đầu để tính 25 phút tập trung, xong nghỉ 5 phút.</span><span class="row"><span class="t" id="fT">${fmtF()}</span><button class="btn citrus sm" id="fB" onclick="toggleFocus()">${focusEnd?'⏸ Dừng':'▶ Bắt đầu'}</button></span></div>`;
 /* đường */
 const RESCP=!!(cps&&cps.res&&!u), N=st.length, gap=innerWidth<600?104:118, H=110+N*gap, AMP=innerWidth<600?13:24, pts=st.map((s,k)=>({x:50+AMP*Math.sin(k*1.25+0.4),y:90+k*gap}));
 let d=''; if(N){ d=`M ${pts[0].x} -30 C ${pts[0].x} 20 ${pts[0].x} 40 ${pts[0].x} ${pts[0].y}`;
 for(let k=1;k<N;k++){const a=pts[k-1],b=pts[k],m=(b.y-a.y)/2; d+=` C ${a.x} ${a.y+m} ${b.x} ${b.y-m} ${b.x} ${b.y}`;}
 const L=pts[N-1]; d+=` C ${L.x} ${L.y+50} ${50} ${H-20} ${50} ${H+30}`;}
 const ci=st.findIndex(s=>!s.done), pin=(stt!=='soon'&&ci>=0&&id===now&&innerWidth>=600)?pts[ci]:null;
 const road=!N?`<div class="note" style="margin-top:40px;text-align:center">🔒 Checkpoint này sẽ mở khi cô phát hành bài. Em hoàn thành các checkpoint trước nhé!</div>`:N?`<div class="road" style="height:${H}px"><svg class="path" viewBox="0 0 100 ${H}" preserveAspectRatio="none" aria-hidden="true">
<path d="${d}" fill="none" stroke="#CFC7A6" stroke-width="58" vector-effect="non-scaling-stroke" stroke-linecap="round"/>
<path d="${d}" fill="none" stroke="#7E8278" stroke-width="46" vector-effect="non-scaling-stroke" stroke-linecap="round"/>
<path d="${d}" fill="none" stroke="#F6F1E1" stroke-width="3" stroke-dasharray="14 12" vector-effect="non-scaling-stroke"/></svg>
${st.map((s,k)=>{const p=pts[k], left=p.x>56; const cls=['stn',left?'left':'',s.done?'done':'',k===ci&&id===now?'now':'',s.chest?'chest':''].join(' ');
 return `<a class="${cls}" href="${stt==='soon'?'#cp-'+id:s.href}" ${s.ext?`target="_blank" rel="noopener" onclick="markRes('${id}','${s.k}');this.classList.add('done')"`:''} style="left:${p.x}%;top:${p.y}px"><span class="ped"><span class="n">${k+1}</span>${s.ic}</span><span class="lbl">${k===ci&&id===now&&innerWidth<600?'<small style="color:var(--accent);font-weight:800">📍 Em ở đây</small>':''}${s.t}${s.s?`<small>${s.s}</small>`:''}</span></a>`;}).join('')}
${pin?`<div class="pin" style="left:${pin.x}%;top:${pin.y-40}px"><div class="bub">Em đang ở đây</div><div class="ic">🚩</div></div>`:''}</div>`:'';
 const ids=cpOrder(), k=ids.indexOf(id);
 const box=`<div class="cphead"><span class="lab">Checkpoint ${cpNum(id)}${z?' · Vùng '+z.n+' · '+z.name:''}</span><span class="lab">${u&&u.week?'Tuần '+u.week:RESCP?z.weeks:''}</span></div>
<div class="cpbox"><div class="here">${id===now?'Em đang ở đây':stt==='done'?'✓ Đã chinh phục':stt==='soon'?'Sắp mở':stt==='lock'?'🔒 Cần mã kích hoạt':'Checkpoint'}</div>
<h3>${esc(cps.name)}</h3><div class="strat">${esc(cps.strat)}</div><div class="meta">${u?esc(cpTitle(id))+' · '+N+' trạm':id==='start'?'4 trạm':RESCP?'2 tuần · 1 trạm luyện + '+(N-1)+' nguồn học chính thức':''}</div></div>`;
 const resLinks=(cps&&cps.res&&u)?`<p class="note" style="position:relative;z-index:2"><b>Nguồn học thêm:</b> ${cps.res.map(k=>`<a href="${RES[k].url}" target="_blank" rel="noopener">${RES[k].t}</a>`).join(' · ')}</p>`:'';
 const nav=`${resLinks}${RESCP?'<p class="note" style="position:relative;z-index:2">Ở chặng 2–3, mỗi trạm là một <b>nguồn học trên mạng</b> (mở tab mới). Học xong trạm nào, trạm đó tự đánh dấu ✓. Ghi kết quả vào Sổ lỗi và gửi mã kết quả cho cô như bình thường.</p>':''}<div class="cpnav"><a class="btn ghost sm" href="#cp-${ids[Math.max(0,k-1)]}" ${k<=0?'style="visibility:hidden"':''}>← Checkpoint trước</a><a class="btn sm" href="#cp-${ids[Math.min(ids.length-1,k+1)]}" ${k>=ids.length-1?'style="visibility:hidden"':''}>Checkpoint sau →</a></div>`;
 /* bảng bên */
 const built=ids.filter(i=>i==='start'||uOf(i)||(CPS[i]&&CPS[i].res)), nd=built.filter(i=>cpStatus(i)==='done').length;
 const band=state.test?state.test.level:'—';
 const side=`<div class="side"><div class="card"><h2 style="font-size:20px">Chỉ số của em</h2><div class="stats">
<div><small>Mục tiêu</small><b>${esc(state.target||'5.5')}</b></div><div><small>Band hiện tại</small><b style="${band.length>4?'font-size:18px':''}">${esc(band)}</b></div>
<div><small>Tiến độ</small><b>${nd}/${built.length}</b></div><div><small>Chuỗi ngày</small><b>🔥 ${streakOf(state.att)}</b></div></div>
${state.test?'':'<p class="note" style="margin-top:10px">Chưa có band hiện tại: làm <a href="#test">test đầu vào</a> nhé.</p>'}</div>
<div class="card"><h2 style="font-size:20px">Danh sách checkpoint</h2><ul class="cplist">
${[['start'],...ZONES.map(q=>q.ids)].map((g,gi)=>`${gi&&(gi===1||ZONES[gi-1].phase!==ZONES[gi-2].phase)?`<div class="zone" style="color:var(--accent);font-size:13px;margin-top:16px">— Chặng ${ZONES[gi-1].phase}: ${JPH[ZONES[gi-1].phase-1].band} —</div>`:''}${gi?`<div class="zone">${ZONES[gi-1].n}. ${ZONES[gi-1].name}</div>`:''}${g.map(i=>{const s=cpStatus(i); const lab=s==='done'?'Đã chinh phục':i===now?'Em đang ở đây':(window.isSkipped&&isSkipped(i))?'Miễn theo test · có thể ôn lại':s==='lock'?'Đang khoá':s==='soon'?'Sắp mở':'Đã mở';
 return `<li class="${s==='done'?'done':''} ${i===now?'cur':''} ${s==='lock'||s==='soon'?'lock':''} ${i===id?'sel':''}"><a href="#cp-${i}">${cpNum(i)} · ${esc(CPS[i].name)}<small>${uOf(i)?esc(lbl(uOf(i)))+' · ':''}${lab}</small></a></li>`;}).join('')}`).join('')}</ul></div></div>`;
 viewHome(); /* nội dung giới thiệu cũ, đặt bên dưới */
 const info=$('view'); const first=info.querySelector('.card'); if(first) first.remove();
 info.insertAdjacentHTML('afterbegin',`${hero}${focus}<div class="mapgrid"><div class="mapcard">${box}${road}${nav}</div>${side}</div><h2 style="margin:22px 0 10px">Về khóa học</h2>`);
 setHeader('Hành trình 7.0+','Từ 4.0 lên 5.5, 6.5 rồi 7.0+ · '+SITE.teacher,false);
 const sl=info.querySelector('.cplist li.sel'); if(sl) sl.scrollIntoView({block:'nearest'});
 window.scrollTo({top:0});}
function fmtF(){const s=focusEnd?Math.max(0,Math.round((focusEnd-Date.now())/1000)):1500; return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
function toggleFocus(){if(focusEnd){focusEnd=0; clearInterval(focusTmr); focusTmr=null;} else {focusEnd=Date.now()+1500e3; focusTmr=setInterval(()=>{const t=$('fT'); if(t) t.textContent=fmtF(); if(Date.now()>=focusEnd){clearInterval(focusTmr); focusTmr=null; focusEnd=0; const el=$('toast'); if(el){el.textContent='⏰ Hết 25 phút tập trung! Nghỉ 5 phút rồi học tiếp nhé.'; el.style.display='block'; setTimeout(()=>el.style.display='none',6000);} const b=$('fB'); if(b) b.textContent='▶ Bắt đầu'; if(t) t.textContent='25:00';}},1000);}
 const b=$('fB'); if(b) b.textContent=focusEnd?'⏸ Dừng':'▶ Bắt đầu'; const t=$('fT'); if(t) t.textContent=fmtF();}

/* ===== Chặng 2–3: 5.5 → 6.5 → 7.0+ (mỗi checkpoint 2 tuần, học bằng nguồn chính thức trên mạng) ===== */
window.RES={
 bcTests:{t:'Đề luyện miễn phí',s:'British Council · 4 kỹ năng',ic:'📝',url:'https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests'},
 bcFam:{t:'Thi thử trên máy',s:'British Council · giống phòng thi',ic:'💻',url:'https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/ielts-on-computer/familiarisation-test'},
 bcReady:{t:'IELTS Ready',s:'British Council · đăng ký miễn phí',ic:'🎓',url:'https://takeielts.britishcouncil.org/takeielts/prepare/ielts-ready'},
 idpType:{t:'Luyện theo dạng câu',s:'IDP · từng dạng bài',ic:'🧩',url:'https://ielts.idp.com/prepare/all-test-types/all-skills/practice-test'},
 idpFam:{t:'Đề làm quen thi máy',s:'IDP · có đáp án',ic:'🖥️',url:'https://ielts.idp.com/about/ielts-familiarisation-tests'},
 wbd:{t:'Thang chấm Writing',s:'Bản công khai, cập nhật 05/2023',ic:'✍️',url:'https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf'},
 sbd:{t:'Thang chấm Speaking',s:'Giải thích 4 tiêu chí',ic:'🎤',url:'https://ielts.com.au/australia/prepare/article-understanding-the-ielts-speaking-band-descriptors'},
 spkVid:{t:'Video so sánh band 5–8',s:'IDP Việt Nam · Speaking',ic:'🎬',url:'https://ielts.idp.com/vietnam/results/scores/speaking/en-gb'},
 ox5000:{t:'Oxford 3000 & 5000',s:'Từ vựng B2–C1 theo CEFR',ic:'Aa',url:'https://www.oxfordlearnersdictionaries.com/about/wordlists/oxford3000-5000'},
 oxLists:{t:'Danh sách từ Oxford',s:'Cụm từ & từ học thuật (OPAL)',ic:'📚',url:'https://www.oxfordlearnersdictionaries.com/about/wordlists/'},
 bbc:{t:'BBC 6 Minute English',s:'Nghe 6 phút, có transcript',ic:'🎧',url:'https://www.bbc.co.uk/learningenglish'},
 conv:{t:'The Conversation',s:'Bài báo học thuật dễ đọc',ic:'📰',url:'https://theconversation.com'},
 rTypes:{t:'14 dạng câu Reading',s:'IELTS Liz · mẹo từng dạng',ic:'📖',url:'https://ieltsliz.com/ielts-reading-question-types/'},
 cam20:{t:'Cambridge IELTS 20',s:'Đề thật · sách cô mua cho lớp',ic:'📘',url:'https://shop.cambridge.org/english/product/2700250101'},
 rScore:{t:'Quy đổi điểm Reading',s:'IDP · số câu đúng → band',ic:'🧮',url:'https://ielts.idp.com/nepal/results/scores/reading'},
 osr:{t:'IELTS One Skill Retake',s:'Thi lại 1 kỹ năng',ic:'🔁',url:'https://ielts.idp.com/vietnam/results/scores/speaking/en-gb'}};
const PH2=[
 {n:'05',name:'Hang Paraphrase',weeks:'Tuần 17–24',strat:'Đọc nhanh bài 900 từ · chọn 2 đáp án',ids:['p1','p2','p3','p4'],phase:2},
 {n:'06',name:'Sông Lập Luận',weeks:'Tuần 25–32',strat:'Ý có ví dụ · câu phức không lỗi',ids:['p5','p6','p7','p8'],phase:2},
 {n:'07',name:'Đỉnh 6.5',weeks:'Tuần 33–36',strat:'Đề Cambridge trọn vẹn',ids:['p9','p10'],phase:2},
 {n:'08',name:'Vách Chính Xác',weeks:'Tuần 37–44',strat:'Nghe – đọc 30/40 · Writing band 7',ids:['q1','q2','q3','q4'],phase:3},
 {n:'09',name:'Vương Miện 7.0+',weeks:'Tuần 45–48',strat:'Từ vựng ít phổ biến · thi thử 7.0',ids:['q5','q6'],phase:3}];
ZONES.forEach(z=>z.phase=1); ZONES.push(...PH2);
Object.assign(CPS,{
 p1:{name:'Đọc nhanh bài 900 từ',strat:'Mỗi ngày 1 bài The Conversation: đọc lướt 3 phút tìm ý chính, rồi làm 1 bài Reading 20 phút. Mục tiêu 23–26/40.',ph:1,res:['conv','rTypes','idpType','rScore']},
 p2:{name:'Chọn 2 đáp án (Choose TWO)',strat:'Hai đáp án là hai ý khác nhau; loại phương án chỉ đúng một nửa. Luyện cả Listening Section 3 và Reading.',ph:1,res:['idpType','bcTests','bbc']},
 p3:{name:'Bảng – ghi chú – flow-chart',strat:'Reading điền bảng và sơ đồ: xác định loại từ, chép đúng từ trong bài, đúng giới hạn từ.',ph:1,res:['idpType','rTypes','bcTests']},
 p4:{name:'Task 2 hai câu hỏi',strat:'Đề có 2 câu hỏi thì mỗi câu một đoạn thân bài; trả lời trực tiếp cả hai.',ph:1,res:['wbd','bcTests','bcReady']},
 p5:{name:'Ý có ví dụ cụ thể',strat:'PEEL: Point → Explain → Example (tên, nơi chốn, con số) → Link. Section 4 dài 10 câu: bám theo tiêu đề. Mệnh đề phân từ.',ph:1,res:['wbd','conv','bcReady']},
 p6:{name:'Part 3: so sánh – dự đoán',strat:'Nhận ra 3 loại câu Part 3 (so sánh – dự đoán – đánh giá) và mở đầu phù hợp. Task 1 Table: chọn số liệu nổi bật.',ph:1,res:['sbd','spkVid','bbc']},
 p7:{name:'Collocation thay từ đơn',strat:'Thay từ đơn bằng collocation (make a contribution, cause serious damage). Section 1: chỉ ghi thông tin sau khi người nói sửa. Học thêm 15 từ B2/tuần từ Oxford 5000.',ph:1,res:['ox5000','oxLists','bbc']},
 p8:{name:'Câu phức không lỗi',strat:'Mệnh đề quan hệ, câu điều kiện, bị động: viết đúng trước, đa dạng sau. Sổ lỗi ngữ pháp theo tuần.',ph:1,res:['wbd','bcReady','idpType']},
 p9:{name:'Đề Cambridge trọn vẹn',strat:'Làm đủ 1 đề thật trong đúng thời gian, ghi số câu sai theo dạng vào Sổ lỗi.',ph:1,res:['cam20','bcFam','idpFam','rScore']},
 p10:{name:'Trạm thi thử 6.5',strat:'Thi thử trên máy 4 kỹ năng. Đạt Nghe và Đọc khoảng 27/40 trở lên thì lên chặng 7.0.',ph:1,res:['bcFam','idpFam','cam20']},
 q1:{name:'Đọc 40 câu trong 55 phút',strat:'13 câu trong 18–20 phút; câu kẹt quá 90 giây thì bỏ qua. Sentence endings: đoán ý trước. Mục tiêu khoảng 30/40 (band 7).',ph:1,res:['cam20','rScore','conv']},
 q2:{name:'Section 4 không trượt chữ',strat:'Nghe bài giảng dài, ghi chú bằng ký hiệu; chính tả và số ít/số nhiều phải đúng tuyệt đối.',ph:1,res:['bbc','bcTests','cam20']},
 q3:{name:'Task 1 chọn đặc điểm chính',strat:'Overview nêu 2 xu hướng lớn nhất; chỉ đưa số liệu minh họa cho đặc điểm chính, không liệt kê hết.',ph:1,res:['wbd','bcTests','bcReady']},
 q4:{name:'Task 2 phát triển ý đầy đủ',strat:'Thang 4 bậc cho mỗi ý: ý → vì sao → ví dụ cụ thể → hệ quả. Hedging cho bằng chứng, lập trường luôn rõ.',ph:1,res:['wbd','conv','bcReady']},
 q5:{name:'Từ ít phổ biến – đúng ngữ cảnh',strat:'Dùng từ C1 và cụm từ tự nhiên, nhưng chỉ khi chắc nghĩa và collocation. Sai ngữ cảnh còn mất điểm hơn.',ph:1,res:['ox5000','oxLists','sbd','spkVid']},
 q6:{name:'Trạm thi thử 7.0+',strat:'Thi thử trên máy. Nếu thi thật thiếu 1 kỹ năng, cân nhắc thi lại riêng kỹ năng đó.',ph:1,res:['bcFam','idpFam','osr','cam20']}});
/* ghi đè: trạm của checkpoint chặng 2–3 = nguồn học trên mạng */
const _stationsOf=stationsOf;
stationsOf=function(id){const c=CPS[id]; if(c&&c.res&&!uOf(id)){state.resSeen=state.resSeen||{}; return c.res.map(k=>{const r=RES[k]; return {k,t:r.t,s:r.s,ic:r.ic,href:r.url,ext:1,done:!!state.resSeen[id+'-'+k]};});} return _stationsOf(id);};
const _cpStatus=cpStatus;
cpStatus=function(id){const c=CPS[id]; if(c&&c.res&&!uOf(id)){const st=stationsOf(id); return st.every(s=>s.done)?'done':'open';} return _cpStatus(id);};
function markRes(id,k){state.resSeen=state.resSeen||{}; state.resSeen[id+'-'+k]=true; save();}

/* ===== Trang "Nguồn học" ===== */
function viewRes(){view='nguon'; stopAudio(); setHeader('📚 Nguồn học 5.5 → 7.0+','Nguồn chính thức và uy tín, chọn theo từng kỹ năng',false);
 const card=k=>{const r=RES[k]; return `<a class="rescard" href="${r.url}" target="_blank" rel="noopener"><span class="ic">${r.ic}</span><span><b>${r.t}</b><small>${r.s}</small></span><span class="go">↗</span></a>`;};
 const G=[['Đề luyện & thi thử chính thức','Làm trong đúng thời gian, ghi số câu đúng theo dạng vào Sổ lỗi.',['bcTests','bcFam','idpFam','idpType','bcReady']],
  ['Thang chấm (để tự chấm Writing & Speaking)','Đọc tiêu chí band của mục tiêu, so bài mình với từng ý.',['wbd','sbd','spkVid']],
  ['Nghe & đọc thêm mỗi ngày','15 phút mỗi ngày: nghe có transcript, đọc bài báo học thuật ngắn.',['bbc','conv','rTypes']],
  ['Từ vựng','Từ B1–B2 cho 5.5–6.5; thêm B2–C1 cho 7.0+. Học kèm collocation, không học từ đơn lẻ.',['ox5000','oxLists']],
  ['Sách đề thật (cô mua cho lớp)','Dùng ở trạm thi thử chặng 2–3.',['cam20','rScore','osr']]];
 $('view').innerHTML=`<div class="card"><h2>Mục tiêu điểm thô</h2><p class="lead">Nghe và Đọc (Academic) có 40 câu. Bảng quy đổi có thể lệch nhẹ giữa các đề.</p>
<table><tr><th>Band</th><th>Listening (đúng/40)</th><th>Reading Academic (đúng/40)</th><th>Writing & Speaking</th></tr>
<tr><td><b>5.5</b></td><td>khoảng 18–22</td><td>khoảng 19–22</td><td>Đủ ý, bố cục rõ, lỗi chưa làm khó hiểu</td></tr>
<tr><td><b>6.5</b></td><td>khoảng 27–29</td><td>khoảng 27–29</td><td>Ý được phát triển, câu phức khá chính xác</td></tr>
<tr><td><b>7.0</b></td><td>khoảng 30–32</td><td>khoảng 30–32</td><td>Quan điểm rõ suốt bài, từ vựng linh hoạt, nhiều câu không lỗi</td></tr></table>
<p class="note">Thi tại Việt Nam hiện chỉ có hình thức <b>trên máy tính</b>: gõ đáp án, máy không sửa chính tả, cuối bài nghe có 2 phút kiểm tra. Hãy luyện đề trên máy ít nhất 2 lần trước khi thi.</p></div>
${G.map(g=>`<div class="card"><h2 style="font-size:21px">${g[0]}</h2><p class="lead">${g[1]}</p><div class="resgrid">${g[2].map(card).join('')}</div></div>`).join('')}
<div class="card"><h2 style="font-size:21px">Lưu ý bản quyền</h2><p>Các nguồn trên là trang web của đơn vị phát hành: em mở và học trực tiếp trên trang đó. Bài báo The Conversation được phép đăng lại nguyên văn kèm ghi nguồn (giấy phép CC BY-ND), nên cô có thể dùng làm bài đọc thêm trên lớp. Đề Cambridge IELTS là sách có bản quyền, lớp dùng bản sách mua.</p></div>`;
 window.scrollTo({top:0});}

/* ===== Trạm luyện tự chấm cho checkpoint chặng 2–3 ===== */
const _so2=stationsOf;
stationsOf=function(id){const st=_so2(id); if(window.DRILLS&&DRILLS[id]&&CPS[id]&&CPS[id].res) st.unshift({k:'drill',t:'Trạm luyện của cô',ic:'🎯',s:'tự chấm · 10 phút',href:'#drill-'+id,done:!!state.done['drill-'+id]}); return st;};
function viewDrill(id){const D=DRILLS[id]; if(!D) return viewMap(id); view='drill'; stopAudio(); const c=CPS[id]||{}, z=zoneOf(id);
 setHeader('🎯 '+D.title,'Checkpoint '+cpNum(id)+' · '+(c.name||'')+(z?' · Vùng '+z.n+' '+z.name:''),false);
 $('view').innerHTML=`<div class="card"><p class="lead">${D.intro}</p>${D.text?`<div class="box" style="line-height:1.7">${D.text}</div>`:''}
<div id="dq">${D.items.map((q,i)=>`<div class="q"><div>${i+1}. ${q.q}${q.t==='two'?' <i>Choose TWO.</i>':''}</div>${q.t==='gap'?`<input type="text" id="dg${i}" class="wide" style="max-width:320px" autocomplete="off" spellcheck="false">`:`<div class="opts">${q.opts.map((o,j)=>`<label id="d${i}_${j}"><input type="${q.t==='two'?'checkbox':'radio'}" name="d${i}" value="${j}" ${q.t==='two'?'onchange="lim2(this)"':''}> ${'ABCDE'[j]}. ${esc(o)}</label>`).join('')}</div>`}<div class="fb" id="df${i}"></div></div>`).join('')}</div>
<div class="row"><button class="btn" onclick="checkDrill('${id}')">Chấm điểm</button><a class="btn ghost" href="#cp-${id}">← Về bản đồ</a></div><div class="score" id="dscore"></div></div>`; window.scrollTo({top:0});}
function checkDrill(id){const D=DRILLS[id]; let n=0,tot=0,items=[];
 D.items.forEach((q,i)=>{const f=$('df'+i); let pts,max=q.t==='two'?2:1;
  if(q.t==='gap'){const el=$('dg'+i); pts=matchAns(el.value,q.a)?1:0; el.className=pts?'ok':'bad';}
  else if(q.t==='two'){const ch=[...document.querySelectorAll(`input[name=d${i}]:checked`)].map(x=>+x.value); pts=ch.filter(v=>q.a.includes(v)).length; q.opts.forEach((_,j)=>$('d'+i+'_'+j).className=q.a.includes(j)?'ok':(ch.includes(j)?'bad':''));}
  else {const s=document.querySelector(`input[name=d${i}]:checked`); const v=s?+s.value:-1; pts=v===q.a?1:0; q.opts.forEach((_,j)=>$('d'+i+'_'+j).className=j===q.a?'ok':(j===v?'bad':''));}
  n+=pts; tot+=max; for(let k=0;k<max;k++) items.push({t:q.tag||'S',ok:k<pts});
  const ans=q.t==='gap'?q.a[0]:q.t==='two'?q.a.map(x=>'ABCDE'[x]).join(' và '):'ABCDE'[q.a];
  f.className='fb '+(pts===max?'ok':'bad'); f.textContent=(pts===max?'Đúng. ':'Đáp án: '+ans+'. ')+q.ex;});
 try{record(id,'drill',items,n,tot);}catch(e){}
 const pass=n>=Math.ceil(tot*.7); if(pass){state.done['drill-'+id]=true; save();}
 const s=$('dscore'); s.classList.add('show'); s.textContent='Kết quả: '+n+'/'+tot+(pass?' — Đạt! Trạm này đã được đánh dấu ✓ trên bản đồ.':' — Cần đạt '+Math.ceil(tot*.7)+'/'+tot+'. Xem giải thích rồi làm lại nhé.');}
