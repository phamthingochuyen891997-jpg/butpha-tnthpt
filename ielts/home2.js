/* ===== Giao diện "hành trình" mới: tranh vùng, thẻ checkpoint, đảo bản đồ, dòng thời gian nhiệm vụ ===== */
(function(){
const $=id=>document.getElementById(id);
const Z=()=>(typeof ZONES!=='undefined'?ZONES:[]);
const BAND={1:'5.5',2:'6.5',3:'7.0+'};
const zoneOf=id=>Z().find(z=>z.ids.includes(id));
const unitOf=id=>UNITS.find(u=>u.id===id);
const ICO={
 cal:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>',
 star:'<svg width="14" height="14" viewBox="0 0 24 24" fill="#E3B23C" aria-hidden="true"><path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/></svg>',
 L:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C4502B" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="6" rx="2"/><rect x="16" y="14" width="5" height="6" rx="2"/></svg>',
 R:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#4F7A3A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/></svg>',
 W:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7A5BA8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/></svg>',
 S:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2E5AA7" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
 V:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#B07A12" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 21v-5h-5"/></svg>',
 flag:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2E3B1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
 fire:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4502B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/></svg>',
 book:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4F7A3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/></svg>',
 clock:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2E5AA7" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>'};

/* ---------- tranh minh họa cho 9 vùng (vẽ phẳng, màu pastel) ---------- */
const PAL={1:{sky:'#EEF3EC',far:'#C7D6C2',near:'#A9C29F',tree:'#6F8F6A'},2:{sky:'#EAF1F3',far:'#BFD2D4',near:'#9DBAB4',tree:'#5F8A7C'},3:{sky:'#EFEDF4',far:'#CBC7DA',near:'#AEB3C6',tree:'#6E7A8E'}};
window.zoneArt=function(n){const z=Z().find(x=>x.n===n)||{phase:1}; const P=PAL[z.phase]||PAL[1];
 const house=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="0" y="18" width="52" height="34" fill="#F6E7D2"/><path d="M-6 20 L26 0 L58 20 Z" fill="#D97A55"/><rect x="20" y="32" width="12" height="20" fill="#9D6B4E"/><rect x="6" y="26" width="9" height="8" fill="#A9C8D6"/><rect x="37" y="26" width="9" height="8" fill="#A9C8D6"/></g>`;
 const trees=(arr,c)=>arr.map(([x,y,h])=>`<path d="M${x} ${y} L${x+h*.32} ${y-h} L${x+h*.64} ${y} Z" fill="${c}"/>`).join('');
 const F={
 '01':`<path d="M0 132 C60 124 140 128 300 120 L300 180 L0 180 Z" fill="#A9C8D6"/><path d="M40 140 q10 -4 20 0 M120 150 q10 -4 20 0 M210 142 q10 -4 20 0" stroke="#fff" stroke-width="2" fill="none" opacity=".7" class="wave"/><rect x="150" y="112" width="110" height="8" fill="#B08A6A"/><g fill="#8A6A50"><rect x="160" y="118" width="5" height="26"/><rect x="200" y="118" width="5" height="26"/><rect x="240" y="118" width="5" height="26"/></g><g transform="translate(70 128)"><path d="M0 0 h56 l-8 12 h-40 z" fill="#D97A55"/><path d="M26 0 V-32 L48 -4 Z" fill="#FFFBEA"/><path d="M26 -32 V0" stroke="#5A4A3A" stroke-width="2"/></g>`,
 '02':`${trees([[30,128,30],[52,132,22],[250,124,28]],P.tree)}${[60,90,130,170,200,230].map((x,i)=>`<circle cx="${x}" cy="${150+(i%2)*10}" r="4" fill="${['#F29C8A','#F5E964','#FFFFFF'][i%3]}"/>`).join('')}${house(120,86,.9)}`,
 '03':`<path d="M190 180 L200 40 L250 30 L272 70 L300 60 L300 180 Z" fill="#9A9A90"/><path d="M200 40 L250 30 L262 52 L214 58 Z" fill="#B7B6AA"/><path d="M226 50 C220 90 236 120 224 170" stroke="#C4502B" stroke-width="2" stroke-dasharray="4 5" fill="none"/>${trees([[30,140,30],[60,146,22],[110,150,26]],P.tree)}`,
 '04':`<path d="M60 160 L150 34 L240 160 Z" fill="#B9C2CC"/><path d="M126 68 L150 34 L174 68 L162 62 L150 72 L138 62 Z" fill="#FFFFFF"/><path d="M150 34 V8" stroke="#2E3B1F" stroke-width="2.5"/><path d="M150 8 L172 15 L150 22 Z" fill="#C4502B"/>${trees([[20,160,26],[250,160,28],[272,164,20]],P.tree)}`,
 '05':`<path d="M30 180 C40 90 110 50 170 54 C240 58 280 110 290 180 Z" fill="#9FA99A"/><path d="M128 180 C128 128 150 108 170 108 C190 108 212 128 212 180 Z" fill="#3E4A3A"/><path d="M146 180 C150 150 160 140 170 140 C180 140 190 150 194 180 Z" fill="#2A3328"/><circle cx="160" cy="132" r="3" fill="#F5E964"/><circle cx="182" cy="126" r="2" fill="#F5E964"/>${trees([[18,166,24],[260,170,22]],P.tree)}`,
 '06':`<path d="M110 180 C125 152 165 146 178 132 C192 118 236 114 300 112 L300 128 C246 130 206 136 196 146 C180 164 158 170 152 180 Z" fill="#A9C8D6"/>${house(40,96,1)}${trees([[130,140,34],[150,144,26],[250,110,30]],P.tree)}`,
 '07':`<path d="M0 150 C60 90 140 80 200 110 C240 130 270 120 300 104 L300 180 L0 180 Z" fill="${P.near}"/><g transform="translate(120 60)"><path d="M0 18 C20 8 40 8 60 18 V58 C40 48 20 48 0 58 Z" fill="#FFFBEA" stroke="#6F7F68" stroke-width="2"/><path d="M60 18 C80 8 100 8 120 18 V58 C100 48 80 48 60 58 Z" fill="#FFFBEA" stroke="#6F7F68" stroke-width="2"/><path d="M12 26 h36 M12 34 h30 M72 26 h36 M72 34 h30" stroke="#B9C4BB" stroke-width="2"/></g>${trees([[20,150,26],[250,124,26]],P.tree)}`,
 '08':`<path d="M150 180 L160 30 L240 24 L300 60 L300 180 Z" fill="#9097A6"/><g transform="translate(220 92)"><circle r="26" fill="#FFFFFF"/><circle r="18" fill="#C4502B"/><circle r="10" fill="#FFFFFF"/><circle r="4" fill="#C4502B"/></g>${trees([[24,160,28],[56,164,20],[100,166,24]],P.tree)}`,
 '09':`<path d="M50 170 L150 30 L250 170 Z" fill="#AEB3C6"/><path d="M124 66 L150 30 L176 66 L164 60 L150 70 L136 60 Z" fill="#FFFFFF"/><g transform="translate(130 4)"><path d="M0 22 L0 6 L10 14 L20 0 L30 14 L40 6 L40 22 Z" fill="#E3B23C" stroke="#B07A12" stroke-width="1.5"/></g>${trees([[16,172,24],[262,172,24]],P.tree)}`};
 return `<svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="300" height="180" fill="${P.sky}"/><circle cx="236" cy="44" r="22" fill="#F7EFC4"/><g class="cloud"><ellipse cx="70" cy="36" rx="22" ry="8" fill="#fff" opacity=".8"/><ellipse cx="86" cy="32" rx="14" ry="8" fill="#fff" opacity=".8"/></g><path d="M0 110 C50 80 100 84 150 100 C200 116 240 86 300 94 L300 180 L0 180 Z" fill="${P.far}"/><path d="M0 140 C60 124 120 128 170 140 C220 152 260 136 300 136 L300 180 L0 180 Z" fill="${P.near}"/>${F[n]||''}</svg>`;};

/* ---------- dữ liệu tiến độ ---------- */
function partsDone(u){const ps=partsOf(u).slice(1); const n=ps.filter(p=>state.done[u.id+'-'+p[0]]).length; return [n,ps.length];}
function counts(){const ids=cpOrder().filter(i=>i!=='start'&&unitOf(i)); const done=ids.filter(i=>cpStatus(i)==='done').length;
 const words=Object.values(state.vsr||{}).filter(r=>r.b>=3).length; const st=typeof streakOf==='function'?streakOf(state.att||[]):0;
 const cur=curCP(), i=ids.indexOf(cur); const left=ids.slice(Math.max(i,0)).reduce((a,id)=>a+(/^[pq]/.test(id)?2:1),0);
 return {done,total:ids.length,words,st,left};}
function countUp(el){const to=+el.dataset.count; if(!to||matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=to;return;} const t0=performance.now(); const tick=t=>{const k=Math.min(1,(t-t0)/900); el.textContent=Math.round(to*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(tick);}; requestAnimationFrame(tick);}

/* ---------- thẻ checkpoint ---------- */
function cpCard(id,isCur){const u=unitOf(id); const z=zoneOf(id); if(!u||!z) return ''; const [n,t]=partsDone(u); const pct=Math.round(n/t*100);
 const uid=u.id; const nx=(typeof MIS!=='undefined'?MIS:[]).find(m=>!misDone(uid,m.k));
 const href=isCur&&nx&&/^[upq]\d+$/.test(uid)?`#mis-${uid}-${nx.k}`:`#cp-${id}`;
 return `<a class="cpc ${isCur?'cur':''}" href="${href}"><div class="art">${zoneArt(z.n)}<span class="band">${BAND[z.phase]}${ICO.star}</span>${isCur?'<span class="now">Em đang ở đây</span>':''}</div>
<div class="bd"><div class="z">${esc(lbl(u))} · Vùng ${z.n} ${esc(z.name)}</div><div class="t">${esc(u.title)}</div>
<div class="row2"><span>${u.review?'Ôn tập':'Tuần '+u.week}${isCur&&nx?' · nhiệm vụ '+nx.k+'/5':''}</span><span class="pc">${pct}%</span></div><div class="bar"><span style="width:${pct}%"></span></div></div></a>`;}

/* ---------- đảo bản đồ 9 vùng ---------- */
const PINS={'01':[104,290],'02':[86,200],'03':[160,164],'04':[148,92],'05':[226,96],'06':[292,150],'07':[264,222],'08':[206,266],'09':[298,276]};
const PIC={'01':'<path d="M-8 2 h16 l-3 5 h-10 z M0 -9 v11 M0 -9 l7 5 h-7" stroke="#2E3B1F" stroke-width="1.8" fill="none" stroke-linejoin="round"/>',
 '02':'<path d="M-7 5 L-2 -4 L2 1 L5 -3 L8 5 Z" fill="#7DA33A"/>','03':'<path d="M-7 6 L-3 -6 L1 0 L7 -8 L7 6 Z" fill="#8C8A80"/>',
 '04':'<path d="M-8 7 L0 -7 L8 7 Z" fill="#9AA6B8"/><path d="M0 -7 V-13 L6 -11 L0 -9" stroke="#C4502B" stroke-width="1.6" fill="#C4502B"/>','05':'<path d="M-8 6 C-8 -5 8 -5 8 6 Z" fill="#5A5F6B"/>',
 '06':'<path d="M-9 2 C-5 -3 -2 -3 0 0 C2 3 6 3 9 -2" stroke="#2E5AA7" stroke-width="2.6" fill="none" stroke-linecap="round"/>','07':'<path d="M-8 -3 C-4 -6 0 -6 0 -3 V6 C0 3 -4 3 -8 6 Z M8 -3 C4 -6 0 -6 0 -3 V6 C0 3 4 3 8 6 Z" fill="#FFFBEA" stroke="#6F7F68" stroke-width="1.4"/>',
 '08':'<circle r="7" fill="#C4502B"/><circle r="4" fill="#fff"/><circle r="1.6" fill="#C4502B"/>','09':'<path d="M-9 5 L-9 -5 L-4 0 L0 -7 L4 0 L9 -5 L9 5 Z" fill="#E3B23C"/>'};
function island(){const zs=Z(); if(!zs.length) return ''; const cur=curCP(); const cz=zoneOf(cur);
 const st=z=>{const s=z.ids.filter(i=>unitOf(i)).map(cpStatus); if(s.length&&s.every(x=>x==='done')) return 'done'; return cz&&cz.n===z.n?'cur':(window.isSkipped&&z.ids.every(i=>isSkipped(i))?'done':'todo');};
 const route='M104 290 C80 256 66 226 86 200 C108 174 148 188 160 164 C172 140 140 120 148 92 C160 66 204 74 226 96 C250 120 284 120 292 150 C300 182 276 200 264 222 C248 248 224 252 206 266 C230 296 272 298 298 276';
 const pins=zs.map((z,i)=>{const p=PINS[z.n]; if(!p) return ''; const s=st(z); const r=s==='cur'?21:16;
  return `<a class="ipin" href="#cp-${z.ids[0]}" aria-label="Vùng ${z.n}: ${esc(z.name)}"><title>Vùng ${z.n} · ${esc(z.name)}</title><g transform="translate(${p[0]} ${p[1]})">${s==='cur'?`<circle r="${r+6}" fill="none" stroke="#F5E964" stroke-width="4" class="ring"/>`:''}<g class="pp" style="animation-delay:${.25+i*.09}s"><circle r="${r}" fill="${s==='cur'?'#F5E964':s==='done'?'#C5D7BF':'#FFFFFF'}" stroke="${s==='cur'?'#2E3B1F':s==='done'?'#7E9A79':'#B9C4D6'}" stroke-width="${s==='cur'?2.5:2}"/>${PIC[z.n]||''}${s==='done'?'<circle cx="11" cy="-11" r="6" fill="#4F7A3A"/><path d="M8 -11 l2 2 4 -4" stroke="#fff" stroke-width="1.8" fill="none"/>':''}</g></g></a>`;}).join('');
 const cp=PINS[cz?cz.n:'01'];
 return `<svg viewBox="0 0 362 330" role="img" aria-label="Bản đồ 9 vùng của hành trình${cz?', em đang ở Vùng '+cz.n:''}">
<defs><mask id="rmask"><path d="${route}" stroke="#fff" stroke-width="8" fill="none" stroke-dasharray="1200" class="route"/></mask></defs>
<path d="M40 120 C30 60 90 30 150 40 C200 20 270 30 300 70 C340 100 352 160 330 210 C318 260 270 300 210 304 C160 320 100 310 70 270 C40 250 20 190 40 120 Z" fill="#C9D3E0" opacity=".7"/>
<path d="M34 110 C26 54 86 22 146 32 C196 12 266 22 296 62 C334 92 346 152 324 202 C312 252 264 292 204 296 C154 312 94 302 64 262 C34 242 14 182 34 110 Z" fill="#C5D7BF" stroke="#7E9A79" stroke-width="2.5"/>
<g class="cloud"><ellipse cx="300" cy="34" rx="20" ry="7" fill="#fff" opacity=".9"/><ellipse cx="314" cy="30" rx="12" ry="7" fill="#fff" opacity=".9"/></g>
<path d="M60 140 C90 150 110 120 140 128 M180 66 C200 100 230 96 250 120 M120 230 C150 214 180 236 210 222" stroke="#E8EFE2" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M150 300 C162 270 190 262 200 240 C210 220 240 214 256 196" stroke="#A9C8D6" stroke-width="10" fill="none" stroke-linecap="round"/>
<g fill="#6F8F6A"><path d="M84 92 L92 72 L100 92 Z"/><path d="M98 96 L104 80 L110 96 Z"/><path d="M262 132 L270 112 L278 132 Z"/><path d="M58 236 L64 220 L70 236 Z"/><path d="M120 258 L126 242 L132 258 Z"/></g>
<g fill="#9AA6B8"><path d="M180 56 L196 30 L212 56 Z"/><path d="M202 58 L214 40 L226 58 Z"/></g>
<path d="${route}" stroke="#C9D3E0" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round" fill="none"/>
<path d="${route}" stroke="#C4502B" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round" fill="none" mask="url(#rmask)"/>
${pins}
${cp?`<g transform="translate(${cp[0]} ${cp[1]-36})"><rect x="-34" y="-12" width="68" height="22" rx="11" fill="#2E3B1F"/><text x="0" y="3" text-anchor="middle" font-family="Be Vietnam Pro, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">Em ở đây</text></g>`:''}
</svg>`;}

/* ---------- trang chủ ---------- */
window.homeV2=function(){const v=$('view'); if(!v||$('home2')) return; const fresh=!state.test&&!Object.keys(state.done||{}).length&&!(state.att||[]).length;
 const hr=new Date().getHours(), part=hr<11?'buổi sáng':hr<14?'buổi trưa':hr<18?'buổi chiều':'buổi tối'; const nm=state.name?esc(state.name.trim().split(/\s+/).pop()):'em';
 const C=counts(); const cur=curCP(); const uid=typeof thisUnit==='function'?thisUnit():'u1';
 const ids=cpOrder().filter(i=>i!=='start'&&unitOf(i)); const ci=Math.max(0,ids.indexOf(cur)); const show=ids.slice(Math.max(0,ci-1),ci+5);
 const cz=zoneOf(cur); const nz=cz?Z()[Z().indexOf(cz)+1]:null;
 const date=new Date().toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'numeric'});
 const html=`<div id="home2">
<div class="h2-top"><div><div class="hello">Chào ${part},<b>${nm}</b></div><div class="chip"><i>${ICO.cal}</i>${date.charAt(0).toUpperCase()+date.slice(1)}${C.st?` · chuỗi ${C.st} ngày`:''}</div></div>${mascot(fresh?'cheer':'happy',86,fresh?'cheer':'bob')}</div>
${fresh&&!state.uxOnb?`<div class="card" style="margin-bottom:14px">${mbub('cheer','Chào em! Mình là <b>Chanh</b>. Bắt đầu chỉ với 3 bước: ① làm test đầu vào khoảng 45 phút → ② nhận điểm xuất phát → ③ mỗi ngày 1 nhiệm vụ 15 phút.')}<div class="row"><a class="btn citrus" href="#test">Làm test đầu vào</a><button class="btn ghost" onclick="state.uxOnb=1;save();document.getElementById('home2').remove();homeV2()">Xem bản đồ trước</button></div></div>`:''}
<div class="skills" role="navigation" aria-label="Luyện theo kỹ năng"><a href="#${uid}-listening">${ICO.L}Listening</a><a href="#${uid}-reading">${ICO.R}Reading</a><a href="#${uid}-writing">${ICO.W}Writing</a><a href="#${uid}-speaking">${ICO.S}Speaking</a><a href="#ontu">${ICO.V}Ôn từ${window.ontuDueCount&&ontuDueCount()?' · '+ontuDueCount():''}</a></div>
<div class="homegrid"><div>
<div class="sec-h"><h3>Checkpoint của em</h3><a href="#today">Nhiệm vụ hôm nay →</a></div>
<div class="cpcar">${show.map(id=>cpCard(id,id===cur)).join('')}</div></div>
<div><div class="sec-h"><h3>Bản đồ 7.0+</h3><a href="#cp-${cur}">Chi tiết →</a></div>
<div class="island">${island()}<div class="ihead"><span class="b">${state.test?esc(state.test.level):'?'}${ICO.star}<small style="font-weight:500;color:var(--muted)">band ước tính</small></span></div>
<div class="ihead"><div class="zn">${cz?`<em>${esc(cz.name)},</em>`:''} ${nz?'tiếp theo '+esc(nz.name):'đích đến 7.0+'}</div></div>
<div class="istats"><div><i>${ICO.flag}</i><span><b data-count="${C.done}">${C.done}</b>/${C.total}<small>checkpoint đã xong</small></span></div><div><i>${ICO.fire}</i><span><b data-count="${C.st}">${C.st}</b> ngày<small>học liên tiếp</small></span></div><div><i>${ICO.book}</i><span><b data-count="${C.words}">${C.words}</b> từ<small>đã thuộc</small></span></div><div><i>${ICO.clock}</i><span><b data-count="${C.left}">${C.left}</b> tuần<small>tới đỉnh 7.0+</small></span></div></div></div></div></div>
<div class="sec-h" style="margin-top:6px"><h3>Chi tiết từng checkpoint</h3></div></div>`;
 v.insertAdjacentHTML('afterbegin',html); v.querySelectorAll('#home2 [data-count]').forEach(countUp);
 const c=v.querySelector('.cpc.cur'); if(c){const car=c.parentElement; car.scrollLeft=c.offsetLeft-car.offsetLeft-8;}};

/* ---------- Nhiệm vụ hôm nay: tranh vùng + dòng thời gian ---------- */
window.todayV2=function(){const v=$('view'); if(!v||$('tl2')) return; const uid=typeof thisUnit==='function'?thisUnit():null; const u=unitOf(uid); const z=u&&zoneOf(uid); if(!u||!z) return;
 const ms=typeof MIS!=='undefined'?MIS:[]; const doneN=ms.filter(m=>misDone(uid,m.k)).length; const nx=ms.find(m=>!misDone(uid,m.k));
 const card=[...v.querySelectorAll('.card')].find(c=>{const h=c.querySelector('h2'); return h&&/^5 nhiệm vụ/.test(h.textContent);});
 const rows=ms.map(m=>{const r=state.mis&&state.mis[misKey(uid,m.k)]; const isC=nx&&nx.k===m.k;
  return `<div class="r ${r?'done':''} ${isC?'cur':''}"><div class="tm"><b>${m.min}</b><small>phút</small></div><div class="bx"><div class="tx"><b>${m.name}</b><small>Nhiệm vụ ${m.k}${r?' · '+r.s+'/'+r.n+' · '+r.d:' · '+m.tip}</small></div>${r?'<span class="ok" aria-label="Đã xong">✓</span>':''}<button class="btn ${isC?'':'ghost'} sm" onclick="startMission('${uid}',${m.k})">${r?'Làm lại':isC?'Làm ngay':'Làm'}</button></div></div>`;}).join('');
 const hero=`<div class="card" id="tl2"><div class="tl-hero"><div class="tl-art"><div class="art">${zoneArt(z.n)}</div></div><div class="tl-info"><div class="z" style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)">Vùng ${z.n} · ${esc(z.name)}</div><div class="k">${esc(lbl(u))},</div><div class="t">${esc(u.title)}</div><div class="m"><span>${u.review?'Ôn tập':'Tuần '+u.week} · 5 nhiệm vụ nhỏ</span><b>${doneN}/5</b></div></div></div>
<div class="tl" style="margin-top:16px">${rows}</div><p class="note" style="margin-top:12px">Mỗi nhiệm vụ hoàn thành: +10 điểm cho đội, đúng từ 80% trở lên: +5 điểm thưởng. Cuối tuần mở <a href="#me">Sổ lỗi</a> → “Sao chép mã kết quả” gửi cô.</p></div>`;
 if(card) card.outerHTML=hero; else v.insertAdjacentHTML('beforeend',hero);};
})();
