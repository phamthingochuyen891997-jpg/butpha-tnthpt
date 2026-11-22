/* shared chart renderers: bar, line, pie, table */
function chartSVG(c){if(c.type==='html') return c.html; if(c.type==='process') return processSVG(c); if(c.type==='line') return lineSVG(c); if(c.type==='pie') return pieSVG(c); if(c.type==='table') return tableChart(c); const W=640,H=340,pl=48,pr=16,pt=40,pb=58,mx=Math.max(...c.data.flat()),st=mx>200?50:mx>100?20:mx>40?10:mx>20?5:2,max=Math.ceil(mx/st)*st+st,cw=(W-pl-pr)/c.cats.length,bw=Math.min(34,cw/3.2),cols=['#86C5FF','#2E5AA7'],y=v=>pt+(H-pt-pb)*(1-v/max);
 let g=`<text x="${W/2}" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">${c.title}</text>`;
 for(let v=0;v<=max;v+=st) g+=`<line x1="${pl}" x2="${W-pr}" y1="${y(v)}" y2="${y(v)}" stroke="currentColor" stroke-opacity=".12"/><text x="${pl-8}" y="${y(v)+4}" text-anchor="end" font-size="12" fill="currentColor" fill-opacity=".7">${v}</text>`;
 g+=`<text transform="translate(14 ${(pt+H-pb)/2}) rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity=".7">${c.unit}</text>`;
 c.cats.forEach((cat,i)=>{const cx=pl+cw*i+cw/2; c.data[i].forEach((v,s)=>{const x=cx+(s-c.series.length/2)*bw+2*(s-.5); g+=`<rect x="${x}" y="${y(v)}" width="${bw-2}" height="${y(0)-y(v)}" rx="3" fill="${cols[s]}"/><text x="${x+(bw-2)/2}" y="${y(v)-5}" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">${v}</text>`;}); g+=`<text x="${cx}" y="${H-pb+20}" text-anchor="middle" font-size="13" fill="currentColor">${cat}</text>`;});
 c.series.forEach((s,i)=>{const lx=W/2-70+i*90; g+=`<rect x="${lx}" y="${H-22}" width="14" height="14" rx="3" fill="${cols[i]}"/><text x="${lx+20}" y="${H-10}" font-size="13" fill="currentColor">${s}</text>`;});
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${c.title}">${g}</svg>`;}
function lineSVG(c){const W=640,H=360,pl=48,pr=20,pt=40,pb=74,max=c.max||100,step=c.step||20,cols=['#2E5AA7','#FFA62B','#86C5FF'],dash=['','6 4','2 4'],n=c.cats.length,x=i=>pl+(W-pl-pr)*i/(n-1),y=v=>pt+(H-pt-pb)*(1-v/max);
 let g=`<text x="${W/2}" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">${c.title}</text>`;
 for(let v=0;v<=max;v+=step) g+=`<line x1="${pl}" x2="${W-pr}" y1="${y(v)}" y2="${y(v)}" stroke="currentColor" stroke-opacity=".12"/><text x="${pl-8}" y="${y(v)+4}" text-anchor="end" font-size="12" fill="currentColor" fill-opacity=".7">${v}</text>`;
 c.cats.forEach((cat,i)=>g+=`<text x="${x(i)}" y="${H-pb+20}" text-anchor="middle" font-size="13" fill="currentColor">${cat}</text>`);
 c.data.forEach((s,k)=>{g+=`<polyline fill="none" stroke="${cols[k]}" stroke-width="3" stroke-dasharray="${dash[k]}" points="${s.map((v,i)=>x(i)+','+y(v)).join(' ')}"/>`; s.forEach((v,i)=>g+=`<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="${cols[k]}"/>`);});
 c.series.forEach((s,i)=>{const lx=40+i*200; g+=`<line x1="${lx}" x2="${lx+26}" y1="${H-18}" y2="${H-18}" stroke="${cols[i]}" stroke-width="3" stroke-dasharray="${dash[i]}"/><text x="${lx+32}" y="${H-14}" font-size="13" fill="currentColor">${s}</text>`;});
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${c.title}">${g}</svg>`;}

const PIECOLS=['#2E5AA7','#FFA62B','#86C5FF','#7BC47F','#E46F6F','#B58BD6','#F8E6A0'];
function pieSVG(c){const n=c.series.length,R=95,W=Math.max(640,n*270),H=360,cy=170,tot=s=>c.cats.reduce((t,_,i)=>t+c.data[i][s],0);
 let g=`<text x="${W/2}" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">${c.title}</text>`;
 c.series.forEach((sname,s)=>{const cx=W/(n*2)*(2*s+1); let ang=-Math.PI/2; const T=tot(s);
  c.cats.forEach((cat,i)=>{const v=c.data[i][s]; if(!v) return; const a2=ang+2*Math.PI*v/T, large=a2-ang>Math.PI?1:0;
   const p=v===T?`<circle cx="${cx}" cy="${cy}" r="${R}" fill="${PIECOLS[i]}"/>`:`<path d="M${cx},${cy} L${cx+R*Math.cos(ang)},${cy+R*Math.sin(ang)} A${R},${R} 0 ${large} 1 ${cx+R*Math.cos(a2)},${cy+R*Math.sin(a2)} Z" fill="${PIECOLS[i]}" stroke="#fff" stroke-width="2"/>`;
   const m=(ang+a2)/2; g+=p+`<text x="${cx+R*.62*Math.cos(m)}" y="${cy+R*.62*Math.sin(m)+4}" text-anchor="middle" font-size="12" font-weight="700" fill="${i===1||i===2||i===6?'#1B2A4A':'#fff'}">${v}${c.unit==='%'?'%':''}</text>`; ang=a2;});
  g+=`<text x="${cx}" y="${cy+R+24}" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">${sname}</text>`;});
 const per=Math.min(c.cats.length,4),lw=W/per; c.cats.forEach((cat,i)=>{const lx=20+(i%per)*lw, ly=H-38+Math.floor(i/per)*20; g+=`<rect x="${lx}" y="${ly-11}" width="14" height="14" rx="3" fill="${PIECOLS[i]}"/><text x="${lx+20}" y="${ly}" font-size="13" fill="currentColor">${cat}</text>`;});
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${c.title}">${g}</svg>`;}
function tableChart(c){return `<div class="tchart"><div class="tct">${c.title}</div><table><tr><th>${c.corner||''}</th>${c.series.map(s=>`<th>${s}</th>`).join('')}</tr>${c.cats.map((cat,i)=>`<tr><td><b>${cat}</b></td>${c.data[i].map(v=>`<td style="text-align:center">${v}</td>`).join('')}</tr>`).join('')}</table>${c.unit?`<div class="tcu">${c.unit}</div>`:''}</div>`;}

/* process diagram: steps laid out in a snake (left→right, then right→left) */
function processSVG(c){const per=c.per||4, bw=138, bh=78, gx=26, gy=52, rows=Math.ceil(c.steps.length/per), W=per*bw+(per-1)*gx+40, H=rows*bh+(rows-1)*gy+70;
 let g=`<defs><marker id="pa" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2E5AA7"/></marker></defs><text x="${W/2}" y="22" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">${c.title}</text>`;
 const pos=c.steps.map((_,i)=>{const r=Math.floor(i/per), k=i%per, col=r%2?per-1-k:k; return [20+col*(bw+gx), 40+r*(bh+gy)];});
 c.steps.forEach((s,i)=>{const [x,y]=pos[i]; const lines=s.split('|');
  g+=`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="12" fill="${i===0||i===c.steps.length-1?'#FFF4E2':'#EEF5FF'}" stroke="${i===0||i===c.steps.length-1?'#FFA62B':'#86C5FF'}" stroke-width="2"/><circle cx="${x+16}" cy="${y+16}" r="11" fill="#2E5AA7"/><text x="${x+16}" y="${y+20}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">${i+1}</text>`;
  lines.forEach((t,j)=>{g+=`<text x="${x+bw/2+6}" y="${y+bh/2+5+(j-(lines.length-1)/2)*16}" text-anchor="middle" font-size="13" fill="#1B2A4A">${t}</text>`;});
  if(i<c.steps.length-1){const [x2,y2]=pos[i+1]; if(y2===y){const a=x2>x?x+bw:x, b=x2>x?x2:x2+bw; g+=`<line x1="${a+3}" y1="${y+bh/2}" x2="${b-5}" y2="${y+bh/2}" stroke="#2E5AA7" stroke-width="2.5" marker-end="url(#pa)"/>`;} else g+=`<line x1="${x+bw/2}" y1="${y+bh+3}" x2="${x+bw/2}" y2="${y2-5}" stroke="#2E5AA7" stroke-width="2.5" marker-end="url(#pa)"/>`;}});
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${c.title}">${g}</svg>`;}
