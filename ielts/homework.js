/* ===== 10. Bài tập về nhà (homework) — dạng bài mới, chấm tự động, ghi vào Sổ lỗi ===== */
window.HW={
u1:{
 para:[['hometown','the place where I grew up'],['peaceful','quiet and calm'],['crowded','full of people'],['entrance exam','a test to get into a school'],['scholarship','money to pay for your studies'],['suburban area','a district outside the city centre']],
 coll:[
  {q:'I ______ my homework every evening.',opts:['do','make','take'],a:0,ex:'do homework (không dùng make homework).'},
  {q:'She ______ an English course last summer.',opts:['took','made','did'],a:0,ex:'take a course = tham gia một khóa học.'},
  {q:'My hometown is famous ______ its beaches.',opts:['of','for','with'],a:1,ex:'be famous for something.'},
  {q:'There is often a traffic ______ near my school.',opts:['jam','crowd','line'],a:0,ex:'traffic jam = kẹt xe.'},
  {q:'He wants to ______ an exam to get a scholarship.',opts:['pass','win','get through to'],a:0,ex:'pass an exam = thi đỗ.'},
  {q:'My city has changed a lot ______ I was a child.',opts:['for','since','ago'],a:1,ex:'since + mốc thời gian; dùng với hiện tại hoàn thành.'}],
 order:['I have lived in Binh Chanh since 2015.','My hometown has become much busier.','We moved to the city three years ago.','She has never been to Hanoi.'],
 err:[
  {parts:['Last year,','I have visited','my grandparents','in Hue.'],a:1,fix:'visited',ex:'Last year = mốc quá khứ đã kết thúc → quá khứ đơn.'},
  {parts:['I have studied','English','since','five years.'],a:2,fix:'for',ex:'for + khoảng thời gian (five years); since + mốc thời gian.'},
  {parts:['My hometown','is','more peaceful','that Ho Chi Minh City.'],a:3,fix:'than Ho Chi Minh City',ex:'So sánh hơn dùng than, không dùng that.'},
  {parts:['She','didn\'t went','to school','yesterday.'],a:1,fix:'didn\'t go',ex:'Sau did/didn\'t dùng động từ nguyên mẫu.'}],
 task:{title:'Viết đoạn văn về quê hương (80–100 từ)',prompt:'Write a paragraph about your hometown. Say where it is, what it is like, how it has changed and how you feel about it.',min:80,check:['Có câu chủ đề ở đầu đoạn','Dùng ít nhất 1 câu hiện tại hoàn thành (has changed, has become…)','Dùng ít nhất 1 câu quá khứ đơn có mốc thời gian','Có lý do và ví dụ cụ thể']}},
u2:{
 para:[['work out','exercise'],['stay in shape','keep fit'],['relieve stress','reduce pressure'],['sign up for','register for'],['cut down on','reduce'],['outdoor activity','something you do outside']],
 coll:[
  {q:'I ______ yoga twice a week.',opts:['do','play','go'],a:0,ex:'do yoga / do karate; play + môn có bóng; go + V-ing (go swimming).'},
  {q:'My brother ______ football every Saturday.',opts:['does','plays','goes'],a:1,ex:'play football.'},
  {q:'We usually ______ swimming in summer.',opts:['do','play','go'],a:2,ex:'go swimming / go cycling.'},
  {q:'The number of students who play sports fell ______.',opts:['sharp','sharply','sharpness'],a:1,ex:'Động từ fell + trạng từ sharply.'},
  {q:'There was a ______ increase in the time spent online.',opts:['dramatic','dramatically','drama'],a:0,ex:'Trước danh từ increase cần tính từ dramatic.'},
  {q:'Reading time was ______ than TV time in 2025.',opts:['lower','more low','lowest'],a:0,ex:'low → lower than.'}],
 order:['Social media became the most popular activity.','The time spent watching TV fell sharply.','Sports were less popular than social media.','I go swimming twice a week.'],
 err:[
  {parts:['The number of','students','increased','dramatic.'],a:3,fix:'dramatically',ex:'Bổ nghĩa cho động từ increased → trạng từ dramatically.'},
  {parts:['Watching TV','was','more popular','as reading in 2015.'],a:3,fix:'than reading',ex:'more … than.'},
  {parts:['I','play','yoga','every morning.'],a:1,fix:'do',ex:'do yoga, không dùng play yoga.'},
  {parts:['Social media','is','the most','popular activity in 2025.'],a:1,fix:'was',ex:'Năm 2025 trong biểu đồ đã qua → quá khứ đơn was.'}],
 task:{title:'Viết mở bài + overview + 2 câu (60–80 từ)',prompt:'The table shows the hours per week teenagers spent on two activities. Gaming: 4 hours (2015) → 9 hours (2025). Outdoor sports: 7 hours (2015) → 4 hours (2025). Write an introduction, an overview and two sentences comparing the data.',min:60,check:['Mở bài paraphrase, không chép đề','Overview không có số liệu','Có ít nhất 1 câu so sánh (more/less … than)','Dùng ít nhất 2 động từ xu hướng (rose, fell, more than doubled…)']}},
u3:{
 para:[['keep in touch with','stay in contact with'],['access information','find information'],['rely on','depend on'],['time-consuming','taking a lot of time'],['fake news','false information'],['share content','post things online']],
 coll:[
  {q:'I use social media to ______ in touch with old friends.',opts:['keep','make','take'],a:0,ex:'keep in touch with = giữ liên lạc.'},
  {q:'Many teenagers spend too much time ______ their phones.',opts:['in','on','at'],a:1,ex:'spend time on something.'},
  {q:'You should ______ your password every few months.',opts:['change','do','make'],a:0,ex:'change a password.'},
  {q:'She ______ a video of the concert on TikTok.',opts:['posted','made up','put on'],a:0,ex:'post a video = đăng video.'},
  {q:'Students often ______ on the internet for homework.',opts:['rely','depend to','trust in'],a:0,ex:'rely on = depend on.'},
  {q:'Cyberbullying can have a negative ______ on young people.',opts:['affect','effect','effective'],a:1,ex:'have an effect on (danh từ effect); affect là động từ.'}],
 order:['I have an app which helps me learn English.','The teacher who taught me IT was very kind.','This is the phone that I bought last year.','Students who use TikTok watch short videos.'],
 err:[
  {parts:['The app','who','I use most','is YouTube.'],a:1,fix:'which / that',ex:'Vật (the app) → which hoặc that, không dùng who.'},
  {parts:['My friend','which','lives in Da Nang','plays online games.'],a:1,fix:'who',ex:'Người (my friend) → who.'},
  {parts:['Social media','have','a big effect','on teenagers.'],a:1,fix:'has',ex:'Social media được xem là danh từ số ít → has.'},
  {parts:['I','spend','three hours','in my phone every day.'],a:3,fix:'on my phone',ex:'spend time on something.'}],
 task:{title:'Mô tả biểu đồ đường mini (4–5 câu)',prompt:'The percentage of students at a school who owned a smartphone: 40% in 2016, 75% in 2020, 95% in 2024. Write an introduction, an overview and two sentences describing the trend.',min:50,check:['Mở bài paraphrase','Overview nêu xu hướng chính (rose steadily…)','Có từ chỉ mức độ (sharply, steadily, slightly)','Có mốc thời gian (from … to …, by 2024)']}},
u4:{
 para:[['put on weight','become heavier'],['give up','stop doing'],['in moderation','not too much'],['harmful','bad for you'],['prevent disease','stop illness from happening'],['mental health','emotional well-being']],
 coll:[
  {q:'Doctors advise people to ______ more exercise.',opts:['do','make','have'],a:0,ex:'do exercise / take exercise.'},
  {q:'It is important to ______ a balanced diet.',opts:['eat','have','make'],a:1,ex:'have / follow a balanced diet.'},
  {q:'My father ______ smoking last year.',opts:['gave up','gave in','gave out'],a:0,ex:'give up = bỏ (thói quen).'},
  {q:'Junk food has a negative effect ______ health.',opts:['to','on','for'],a:1,ex:'have an effect on.'},
  {q:'I go to bed early ______ I can feel fresh in the morning.',opts:['so that','because of','although'],a:0,ex:'so that = để mà (mục đích).'},
  {q:'______ he is busy, he goes jogging every day.',opts:['Because','Although','So'],a:1,ex:'Although = mặc dù (ý trái ngược).'}],
 order:['Although I am busy, I exercise every day.','She drinks water because it keeps her healthy.','Schools should ban sugary drinks completely.','I believe that sleep is very important.'],
 err:[
  {parts:['Although','he eats healthy food,','but','he is still tired.'],a:2,fix:'(bỏ but)',ex:'Although và but không dùng cùng nhau trong một câu.'},
  {parts:['Because of','she was ill,','she','stayed at home.'],a:0,fix:'Because',ex:'Because of + danh từ; Because + mệnh đề (she was ill).'},
  {parts:['Eating','too much sugar','are','harmful.'],a:2,fix:'is',ex:'Chủ ngữ V-ing (Eating…) → động từ số ít is.'},
  {parts:['My sister','go','to the gym','three times a week.'],a:1,fix:'goes',ex:'Ngôi 3 số ít ở hiện tại đơn → goes.'}],
 task:{title:'Viết mở bài Task 2 (40–60 từ)',prompt:'Some people think that teenagers should do at least one hour of exercise every day. To what extent do you agree or disagree? Write ONLY the introduction: paraphrase the question and give a clear opinion.',min:40,check:['Câu 1 paraphrase đề, không chép nguyên văn','Câu 2 nêu quan điểm rõ (I agree / I disagree / I partly agree)','Có nêu ngắn gọn lý do','Không có ví dụ chi tiết trong mở bài']}},
u5:{
 para:[['dispose of waste','get rid of rubbish'],['renewable energy','clean power from the sun or wind'],['habitat','the natural home of animals'],['endangered species','animals that may disappear'],['reduce','cut down on'],['raise awareness','help people understand a problem']],
 coll:[
  {q:'We should ______ action to protect the environment.',opts:['take','do','make'],a:0,ex:'take action.'},
  {q:'Factories ______ a lot of greenhouse gases.',opts:['release','throw','drop'],a:0,ex:'release / produce gases.'},
  {q:'Please don\'t ______ litter in the park.',opts:['drop','fall','leave out'],a:0,ex:'drop litter = xả rác.'},
  {q:'Most of the waste ______ to landfill in 2005.',opts:['sent','was sent','is sending'],a:1,ex:'Bị động quá khứ: was sent.'},
  {q:'Recycling ______ for a third of the total in 2025.',opts:['accounted','made','took'],a:0,ex:'account for = chiếm.'},
  {q:'Many forests ______ down every year.',opts:['cut','are cut','are cutting'],a:1,ex:'Bị động hiện tại: are cut.'}],
 order:['Plastic bottles can be recycled easily.','Most waste was sent to landfill in 2005.','Many trees have been planted in the city.','Landfill accounted for over half of the waste.'],
 err:[
  {parts:['Glass','can','recycled','many times.'],a:2,fix:'be recycled',ex:'Bị động với modal: can + be + V3.'},
  {parts:['In 2025,','recycling','accounted','35% of waste.'],a:2,fix:'accounted for',ex:'account for + số liệu.'},
  {parts:['Many animals','have','lost','their habitat because people cut down forests.'],a:3,fix:'their habitats',ex:'Many animals → số nhiều: habitats.'},
  {parts:['The park','was opened','to the public','since 2015.'],a:3,fix:'in 2015',ex:'Quá khứ đơn với mốc thời gian → in 2015.'}],
 task:{title:'Mô tả biểu đồ tròn mini (70–90 từ)',prompt:'How students travelled to a school. 2015: motorbike 50%, bicycle 30%, school bus 20%. 2025: motorbike 40%, bicycle 10%, school bus 50%. Write an introduction, an overview and 3 sentences. Use at least 2 fractions (a half, a third, a fifth…).',min:70,check:['Mở bài paraphrase','Overview không số liệu','Dùng ít nhất 2 phân số (a half, a fifth…)','Có ít nhất 1 câu bị động hoặc account for']}},
u6:{
 para:[['compulsory','required'],['memorise','learn by heart'],['drop out of','leave without finishing'],['motivate','encourage'],['tuition','extra teaching that you pay for'],['higher education','university or college']],
 coll:[
  {q:'Students have to ______ an exam at the end of grade 12.',opts:['take','make','do up'],a:0,ex:'take an exam (do an exam cũng được, không dùng make).'},
  {q:'She ______ good marks in maths.',opts:['gets','makes','takes'],a:0,ex:'get good marks / get good grades.'},
  {q:'He ______ a lot of progress in English this year.',opts:['did','made','got'],a:1,ex:'make progress.'},
  {q:'You ______ wear a uniform at our school. It\'s a rule.',opts:['have to','might','don\'t have to'],a:0,ex:'Quy định → have to.'},
  {q:'Students ______ use their phones during the exam.',opts:['mustn\'t','don\'t have to','might'],a:0,ex:'Bị cấm → mustn\'t.'},
  {q:'Online learning ______ reduce the cost of education.',opts:['could','must to','has'],a:0,ex:'Khả năng → could + V.'}],
 order:['Schools should teach practical skills.','Students don\'t have to buy the textbook.','Online courses might be cheaper than classes.','On the other hand, exams cause a lot of stress.'],
 err:[
  {parts:['Students','should to','learn','life skills.'],a:1,fix:'should',ex:'Sau should không có to.'},
  {parts:['You','don\'t have to','talk','during the test. It is not allowed.'],a:1,fix:'mustn\'t',ex:'Bị cấm → mustn\'t; don\'t have to = không cần.'},
  {parts:['Teachers','must','encourages','students to ask questions.'],a:2,fix:'encourage',ex:'Sau modal dùng động từ nguyên mẫu.'},
  {parts:['On the one hand,','homework is useful.','In the other hand,','it can cause stress.'],a:2,fix:'On the other hand,',ex:'Cụm cố định: on the other hand.'}],
 task:{title:'Viết mở bài + 1 đoạn thân bài Discussion (120–150 từ)',prompt:'Some people think homework should be banned, while others believe it is necessary for students. Discuss both views and give your own opinion. Write the introduction and ONE body paragraph (the view you disagree with).',min:120,check:['Mở bài có đủ 2 quan điểm và ý kiến của em','Thân bài có câu chủ đề rõ ràng','Có lý do + ví dụ','Dùng ít nhất 2 động từ khuyết thiếu (should, might, could…)']}},
u7:{
 para:[['salary','monthly pay'],['employer','the person or company you work for'],['promotion','a higher position at work'],['in demand','wanted by many employers'],['apply for','ask for (a job) officially'],['work-life balance','time for both work and personal life']],
 coll:[
  {q:'I want to ______ a living as a designer.',opts:['earn','win','gain up'],a:0,ex:'earn a living = kiếm sống.'},
  {q:'She ______ for a job at a bank last week.',opts:['applied','asked','requested'],a:0,ex:'apply for a job.'},
  {q:'Good communication skills help you ______ a job.',opts:['get','take','do'],a:0,ex:'get a job / find a job.'},
  {q:'If I ______ rich, I would travel around the world.',opts:['am','were','will be'],a:1,ex:'Câu điều kiện loại 2: If I were…'},
  {q:'If you practise every day, you ______ improve quickly.',opts:['will','would','had'],a:0,ex:'Loại 1: will + V.'},
  {q:'IT graduates earned twice as ______ as teachers.',opts:['much','more','many'],a:0,ex:'twice as much as (tiền, số lượng không đếm được).'}],
 order:['If I were you, I would apply for that job.','IT salaries more than doubled over the period.','If you work hard, you will get a promotion.','Teachers earned less than bankers in 2025.'],
 err:[
  {parts:['If I','will get','the job,','I will be very happy.'],a:1,fix:'get',ex:'Mệnh đề if của loại 1 dùng hiện tại đơn.'},
  {parts:['If I','had','more time,','I will learn to code.'],a:3,fix:'I would learn to code.',ex:'Loại 2: If + quá khứ, would + V.'},
  {parts:['IT workers','earned','more higher salaries','than teachers.'],a:2,fix:'higher salaries',ex:'Không dùng more với tính từ đã có -er.'},
  {parts:['She','is responsible','to','training new staff.'],a:2,fix:'for',ex:'be responsible for + V-ing.'}],
 task:{title:'So sánh bảng số liệu mini (4–5 câu)',prompt:'Average hourly wage for part-time jobs (VND): café assistant 25,000 (2020) → 30,000 (2025); tutor 50,000 → 80,000; delivery driver 30,000 → 35,000. Write an overview and 3–4 comparison sentences.',min:60,check:['Overview nêu nghề cao nhất và xu hướng chung','Có ít nhất 2 cấu trúc so sánh (more than, twice as much as…)','Không liệt kê đủ mọi con số theo thứ tự bảng','Dùng whereas hoặc while ít nhất 1 lần']}},
u8:{
 para:[['accommodation','a place to stay'],['destination','a place you travel to'],['broaden your horizons','learn about the world'],['overcrowded','too full of people'],['revenue','money earned'],['drawback','disadvantage']],
 coll:[
  {q:'We ______ a hotel room two weeks in advance.',opts:['booked','made','took'],a:0,ex:'book a hotel room.'},
  {q:'They ______ a trip to Da Lat last summer.',opts:['did','took','made up'],a:1,ex:'take a trip (go on a trip cũng đúng).'},
  {q:'Tourism ______ a lot of jobs for local people.',opts:['creates','does','takes'],a:0,ex:'create jobs.'},
  {q:'We were walking on the beach when it ______ to rain.',opts:['started','was starting','had started'],a:0,ex:'Việc xen vào → quá khứ đơn.'},
  {q:'When we arrived, the bus ______ already left.',opts:['has','had','was'],a:1,ex:'Việc xảy ra trước → had + V3.'},
  {q:'The advantages of tourism ______ the disadvantages.',opts:['outweigh','overweight','weigh out'],a:0,ex:'outweigh = lớn hơn (về tầm quan trọng).'}],
 order:['We were having dinner when the lights went out.','I had never seen the sea before that trip.','The benefits of tourism outweigh its drawbacks.','Admittedly, mass tourism can damage the environment.'],
 err:[
  {parts:['While','I was taking photos,','someone','was stealing my bag.'],a:3,fix:'stole',ex:'Hành động xen vào (ngắn) → quá khứ đơn stole.'},
  {parts:['By the time','we got there,','the shop','has closed.'],a:3,fix:'had closed',ex:'Việc xảy ra trước một mốc quá khứ → quá khứ hoàn thành.'},
  {parts:['Tourism','brings','a lot of money','for local people.'],a:3,fix:'to local people',ex:'bring something to somebody.'},
  {parts:['Travelling abroad','can','broaden','your horizon.'],a:3,fix:'your horizons',ex:'Cụm cố định: broaden your horizons (số nhiều).'}],
 task:{title:'Viết mở bài + 1 đoạn thân bài “outweigh” (120–150 từ)',prompt:'More and more people now work from home. Do the advantages of this outweigh the disadvantages? Write the introduction and ONE body paragraph.',min:120,check:['Mở bài trả lời rõ: bên nào lớn hơn','Thân bài có câu chủ đề + lý do + ví dụ','Dùng ít nhất 1 cụm: Admittedly / One major advantage is that / The main drawback is','Ít nhất 120 từ']}}
};

/* ---------- builder & checker ---------- */
function hwData(){const H=HW[U.id]; const sp=U.vocab.slice(8,16).map((v,i)=>({w:v[0].split(' (')[0],alt:v[0].includes('(')?[v[0].split(' (')[0],v[0].match(/\(([^)]+)\)/)[1]]:[v[0]],vi:v[2],clip:'v'+(i+9)}));
 const rightOrder=shuf(H.para.map((_,i)=>i),U.id+'para'); return {H,sp,rightOrder};}
let HWS=null;
function bHomework(){const {H,sp,rightOrder}=hwData(); HWS={sp,rightOrder,ord:H.order.map((s,i)=>({words:shuf(s.split(' '),U.id+'ord'+i),picked:[]}))}; const L='ABCDEF';
 return `<div class="card"><h2>Bài tập về nhà</h2><p class="lead">Làm sau buổi học online, khoảng 35–40 phút. Phần A–E chấm tự động và ghi vào Sổ lỗi; phần F em gửi cô chấm. Đạt từ 70% là hoàn thành.</p>
<h3>A. Nghe và gõ từ (8 từ)</h3><p class="note">Bấm 🔊 nghe từ (kèm câu ví dụ), gõ lại đúng chính tả. Gợi ý nghĩa tiếng Việt ở bên cạnh.</p>
${sp.map((x,i)=>`<div class="q"><button class="btn ghost sm" onclick="playFile('${x.clip}')">🔊</button> <input type="text" id="hwA${i}" autocomplete="off" spellcheck="false" style="width:220px"> <small style="color:var(--muted)">(${x.vi})</small><div class="fb" id="hwAf${i}"></div></div>`).join('')}
<h3>B. Nối từ đồng nghĩa (paraphrase)</h3><p class="note">IELTS luôn đổi từ: đề bài và bài đọc/bài nghe nói cùng một ý bằng từ khác. Chọn chữ cái có nghĩa giống nhất.</p>
<div class="box">${rightOrder.map((k,j)=>`<b>${L[j]}</b> ${H.para[k][1]}`).join(' &nbsp;·&nbsp; ')}</div>
${H.para.map((p,i)=>`<div class="q">${i+1}. <b>${p[0]}</b> <select id="hwB${i}"><option value="">—</option>${rightOrder.map((_,j)=>`<option>${L[j]}</option>`).join('')}</select><div class="fb" id="hwBf${i}"></div></div>`).join('')}
<h3>C. Cụm từ đi kèm & dạng từ</h3>${H.coll.map((q,i)=>`<div class="q"><div>${i+1}. ${q.q}</div><div class="opts">${q.opts.map((o,j)=>`<label id="hwC${i}_${j}"><input type="radio" name="hwC${i}" value="${j}"> ${'ABC'[j]}. ${o}</label>`).join('')}</div><div class="fb" id="hwCf${i}"></div></div>`).join('')}
<h3>D. Sắp xếp thành câu đúng</h3><p class="note">Bấm lần lượt các từ theo đúng thứ tự. Bấm vào từ đã chọn để bỏ ra.</p><div id="hwD"></div>
<h3>E. Tìm lỗi sai</h3><p class="note">Mỗi câu có 1 phần sai. Chọn phần sai, sau khi chấm sẽ hiện cách sửa.</p>
${H.err.map((e,i)=>`<div class="q"><div>${i+1}. ${e.parts.map((p,j)=>`<u>${p}</u><sub>${'ABCD'[j]}</sub>`).join(' ')}</div><div class="opts row" style="gap:6px">${e.parts.map((p,j)=>`<label id="hwE${i}_${j}"><input type="radio" name="hwE${i}" value="${j}"> ${'ABCD'[j]}</label>`).join('')}</div><div class="fb" id="hwEf${i}"></div></div>`).join('')}
<div class="row" style="margin-top:14px"><button class="btn citrus" onclick="checkHomework()">Chấm phần A–E</button></div><div class="score" id="hwScore"></div>
<h3 style="margin-top:22px">F. ${H.task.title} · gửi cô chấm</h3><p><b>Đề:</b> ${H.task.prompt}</p>
<textarea id="hwF" spellcheck="false" autocorrect="off" placeholder="Viết bài ở đây…" oninput="hwCount()"></textarea><div class="wc" id="hwFc"></div>
<div class="checklist">${H.task.check.map((c,i)=>`<label style="display:block"><input type="checkbox"> ${c}</label>`).join('')}</div>
<div class="row" style="margin-top:8px"><button class="btn" onclick="copyText('BÀI TẬP VỀ NHÀ – '+lbl(U)+' – '+(state.name||'')+'\\n'+$('hwF').value,this)">Sao chép bài để gửi cô (Zalo)</button></div></div>`;}
function hwInit(){ if(!$('hwD')) return; renderOrder(); try{const d=localStorage.getItem(KEY+'-hw-'+U.id); if(d) $('hwF').value=d;}catch(e){} hwCount();}
function hwCount(){const t=$('hwF'); if(!t) return; const n=(t.value.trim().match(/\S+/g)||[]).length, m=HW[U.id].task.min; $('hwFc').textContent=n+' từ'+(n<m?' (cần ít nhất '+m+')':' ✓'); try{localStorage.setItem(KEY+'-hw-'+U.id,t.value);}catch(e){}}
function renderOrder(){$('hwD').innerHTML=HWS.ord.map((o,i)=>`<div class="q"><div class="ordline" id="hwDl${i}" style="min-height:40px;border:2px dashed var(--line);border-radius:10px;padding:6px 8px;margin-bottom:6px">${o.picked.map((k,p)=>`<button class="btn sm" onclick="hwUnpick(${i},${p})">${esc(o.words[k])}</button>`).join(' ')||'<small style="color:var(--muted)">Câu của em sẽ hiện ở đây</small>'}</div>
 <div>${o.words.map((w,k)=>o.picked.includes(k)?'':`<button class="btn ghost sm" onclick="hwPick(${i},${k})">${esc(w)}</button>`).join(' ')}</div><div class="fb" id="hwDf${i}"></div></div>`).join('');}
function hwPick(i,k){HWS.ord[i].picked.push(k); renderOrder();}
function hwUnpick(i,p){HWS.ord[i].picked.splice(p,1); renderOrder();}
function checkHomework(){const H=HW[U.id], items=[]; let n=0; const fb=(id,ok,t)=>{const f=$(id); f.className='fb '+(ok?'ok':'bad'); f.innerHTML=(ok?'✅ ':'❌ ')+t;};
 HWS.sp.forEach((x,i)=>{const v=$('hwA'+i).value, ok=x.alt.some(a=>norm(a)===norm(v)); if(ok)n++; items.push({t:'L-spell',ok}); fb('hwAf'+i,ok,ok?'':'Đúng là: <b>'+x.w+'</b>');});
 H.para.forEach((p,i)=>{const L='ABCDEF', right=L[HWS.rightOrder.indexOf(i)], ok=$('hwB'+i).value===right; if(ok)n++; items.push({t:'V-para',ok}); fb('hwBf'+i,ok,(ok?'':'Đáp án '+right+': ')+p[0]+' = '+p[1]);});
 H.coll.forEach((q,i)=>{const s=document.querySelector(`input[name=hwC${i}]:checked`), v=s?+s.value:-1, ok=v===q.a; if(ok)n++; items.push({t:'V',ok}); q.opts.forEach((_,j)=>$('hwC'+i+'_'+j).className=j===q.a?'ok':(j===v?'bad':'')); fb('hwCf'+i,ok,q.ex);});
 H.order.forEach((s,i)=>{const o=HWS.ord[i], got=o.picked.map(k=>o.words[k]).join(' '), ok=got===s; if(ok)n++; items.push({t:'G-order',ok}); fb('hwDf'+i,ok,ok?'':'Câu đúng: <b>'+s+'</b>');});
 H.err.forEach((e,i)=>{const s=document.querySelector(`input[name=hwE${i}]:checked`), v=s?+s.value:-1, ok=v===e.a; if(ok)n++; items.push({t:'W-err',ok}); e.parts.forEach((_,j)=>$('hwE'+i+'_'+j).className=j===e.a?'ok':(j===v?'bad':'')); fb('hwEf'+i,ok,`Sai ở ${'ABCD'[e.a]}: “${e.parts[e.a]}” → <b>${e.fix}</b>. ${e.ex}`);});
 const T=items.length; record(U.id,'homework',items,n,T); const sc=$('hwScore'); sc.textContent='Kết quả: '+n+'/'+T+(n>=Math.ceil(T*.7)?' — Đạt! Nhớ làm phần F và gửi cô.':' — Xem phần giải thích màu đỏ rồi làm lại nhé.')+' (đã ghi vào Sổ lỗi)'; sc.classList.add('show'); if(n>=Math.ceil(T*.7)) setDone('homework');}
Object.assign(window.HW,{
u9:{
 para:[['ingredient','something used to make a dish'],['flavour','taste'],['pass down','give to the next generation'],['celebrate','mark a special occasion'],['nutritious','good for your health'],['savoury','salty rather than sweet']],
 coll:[
  {q:'My grandmother ______ a delicious meal for Tet.',opts:['cooked','did','made up'],a:0,ex:'cook a meal (make a meal cũng đúng).'},
  {q:'This dish is ______ with rice, beef and herbs.',opts:['made','done','cooked up'],a:0,ex:'be made with + nguyên liệu.'},
  {q:'Pho is ______ for its rich broth.',opts:['famous','popular to','known with'],a:0,ex:'be famous for something.'},
  {q:'The rice ______ into a smooth liquid.',opts:['grinds','is ground','is grinding'],a:1,ex:'Bị động quy trình: is ground (grind → ground).'},
  {q:'______ the sheets are dry, they are packed.',opts:['Once','First','Because of'],a:0,ex:'Once + mệnh đề.'},
  {q:'Fish sauce is made by ______ fish with salt.',opts:['ferment','fermenting','fermented'],a:1,ex:'by + V-ing.'}],
 order:['First, the rice is soaked in water.','The sheets are dried in the sun.','Once the batter is ready, it is steamed.','Finally, the rice paper is packed and sold.'],
 err:[
  {parts:['The rice','is soak','in water','overnight.'],a:1,fix:'is soaked',ex:'Bị động: is + V3.'},
  {parts:['After','dry,','the sheets','are cut.'],a:1,fix:'drying,',ex:'After + V-ing.'},
  {parts:['The sheets','is dried','in the sun','for four hours.'],a:1,fix:'are dried',ex:'The sheets (số nhiều) → are.'},
  {parts:['Tet','is celebrated','in','the first day of the lunar year.'],a:2,fix:'on',ex:'on + ngày cụ thể.'}],
 task:{title:'Mô tả quy trình làm một món ăn (90–120 từ)',prompt:'Describe how a traditional dish from your hometown is made (for example banh chung, spring rolls or pho). Use the present passive and at least five sequencing words.',min:90,check:['Có câu giới thiệu món ăn và số bước','Mọi bước dùng bị động hiện tại (is/are + V3)','Ít nhất 5 từ nối thứ tự khác nhau (First, Next, After that, Once, Finally…)','Không lặp “then” quá 2 lần']}},
u10:{
 para:[['commute','travel to work or school'],['traffic congestion','heavy traffic'],['tackle','deal with'],['encourage','persuade people to do something'],['pedestrian','a person who walks'],['urban','related to cities']],
 coll:[
  {q:'The government should ______ in public transport.',opts:['invest','spend','pay'],a:0,ex:'invest in something.'},
  {q:'Heavy traffic ______ to air pollution.',opts:['leads','causes','makes'],a:0,ex:'lead to = dẫn đến.'},
  {q:'I ______ the bus to school every morning.',opts:['take','go','ride on'],a:0,ex:'take the bus.'},
  {q:'There are too ______ cars in the city centre.',opts:['much','many','little'],a:1,ex:'cars đếm được → many.'},
  {q:'If ______ people drove, there would be less traffic.',opts:['fewer','less','little'],a:0,ex:'people đếm được → fewer.'},
  {q:'One effective ______ would be to build more cycle lanes.',opts:['solution','solve','solving'],a:0,ex:'Sau One effective cần danh từ: solution.'}],
 order:['One major cause of traffic is private vehicles.','The government should invest in public transport.','Fewer cars would mean less pollution.','This would encourage people to cycle.'],
 err:[
  {parts:['There is','too many','traffic','in my city.'],a:1,fix:'too much',ex:'traffic không đếm được → much.'},
  {parts:['Less','people','use buses','in my town.'],a:0,fix:'Fewer',ex:'people đếm được → fewer.'},
  {parts:['The government','should invest','on','public transport.'],a:2,fix:'in',ex:'invest in.'},
  {parts:['Public transport','in my city','are','very cheap.'],a:2,fix:'is',ex:'Public transport là danh từ không đếm được → is.'}],
 task:{title:'Viết 1 đoạn thân bài “Solutions” (120–150 từ)',prompt:'Many cities have serious air pollution. Write ONE body paragraph suggesting two solutions to this problem. Explain how each solution would help and give an example.',min:120,check:['Câu chủ đề nêu rõ đoạn này nói về giải pháp','2 giải pháp cụ thể, mỗi giải pháp có kết quả mong đợi','Có ví dụ thật (một thành phố, một chính sách…)','Dùng ít nhất 1 câu điều kiện (If… would…)']}},
u11:{
 para:[['persuade','convince'],['misleading','giving the wrong idea'],['promote','advertise'],['consumer','a person who buys things'],['audience','the people who watch or listen'],['catchy','easy to remember']],
 coll:[
  {q:'Companies ______ a lot of money on advertising.',opts:['spend','pay','use'],a:0,ex:'spend money on something.'},
  {q:'The advert is ______ at teenagers.',opts:['aimed','pointed','directed to'],a:0,ex:'be aimed at = nhắm đến.'},
  {q:'She ______ me that the advert was funny.',opts:['said','told','spoke'],a:1,ex:'tell + người.'},
  {q:'“I like this song.” → He said he ______ that song.',opts:['likes','liked','has liked'],a:1,ex:'Lùi thì: likes → liked.'},
  {q:'He asked me ______ I had seen the advert.',opts:['if','that','what'],a:0,ex:'Câu hỏi Yes/No tường thuật → if.'},
  {q:'TV and radio accounted for 12% and 8% ______.',opts:['respectively','respective','totally'],a:0,ex:'respectively = lần lượt.'}],
 order:['She said that she had bought it online.','He asked me where I lived.','The advert is aimed at young people.','Social media accounted for more than half.'],
 err:[
  {parts:['He','said me','that the product','was cheap.'],a:1,fix:'told me',ex:'say không có tân ngữ người; tell + người.'},
  {parts:['She asked me','where','did I buy','the phone.'],a:2,fix:'I had bought',ex:'Câu hỏi tường thuật không đảo ngữ, lùi thì.'},
  {parts:['They said','they','will','make an advert.'],a:2,fix:'would',ex:'will → would.'},
  {parts:['Social media','and TV','accounted for','55% and 12% respective.'],a:3,fix:'55% and 12% respectively',ex:'Trạng từ respectively.'}],
 task:{title:'Mô tả biểu đồ tròn + bảng mini (80–100 từ)',prompt:'A survey asked 200 students which advert they remembered best. Social media adverts: 60%; YouTube adverts: 25%; TV adverts: 10%; posters: 5%. Write an introduction, an overview and 2–3 sentences. Use “respectively” at least once.',min:80,check:['Mở bài paraphrase','Overview không số liệu','Dùng respectively đúng','Dùng ít nhất 1 phân số (more than half, a quarter…)']}},
u12:{
 para:[['invention','something created for the first time'],['inspire','give someone an idea'],['efficient','using less energy'],['purify','make clean'],['replace','take the place of'],['device','a small machine']],
 coll:[
  {q:'Scientists ______ an experiment to test the new material.',opts:['carried out','made up','did up'],a:0,ex:'carry out an experiment (do an experiment cũng được).'},
  {q:'The design was inspired ______ a bird.',opts:['by','from','with'],a:0,ex:'be inspired by.'},
  {q:'LED lights are ______ more efficient than old bulbs.',opts:['very','far','too'],a:1,ex:'far + so sánh hơn.'},
  {q:'The ______ you practise, the better you become.',opts:['more','most','much'],a:0,ex:'the more…, the better….'},
  {q:'The car park was converted ______ a garden.',opts:['into','to be','for'],a:0,ex:'convert into.'},
  {q:'A new canteen ______ near the library.',opts:['built','was built','has building'],a:1,ex:'Bị động quá khứ (Task 1 map).'}],
 order:['The football field was replaced by a sports hall.','The more you practise, the better you get.','Electric cars are much quieter than petrol cars.','Solar panels were installed on the roof.'],
 err:[
  {parts:['This phone','is','very faster','than my old one.'],a:2,fix:'much faster',ex:'Không dùng very với so sánh hơn.'},
  {parts:['The car park','was converted','to','a garden.'],a:2,fix:'into',ex:'convert into.'},
  {parts:['The more','you read,','the most','you learn.'],a:2,fix:'the more',ex:'Cả hai vế dùng so sánh hơn.'},
  {parts:['The trees','was cut down','to build','a canteen.'],a:1,fix:'were cut down',ex:'The trees (số nhiều) → were.'}],
 task:{title:'Mô tả bản đồ thay đổi (100–130 từ)',prompt:'Describe how your school (or your neighbourhood) has changed in the last ten years, as if you were describing two maps. Mention at least four changes: things that were built, removed, converted or kept.',min:100,check:['Có câu overview nhận xét chung','Ít nhất 4 thay đổi, dùng bị động (was built, was replaced by…)','Có từ chỉ vị trí (next to, to the north of…)','Có ít nhất 1 thứ giữ nguyên (remained)']}}
});
Object.assign(window.HW,{
u13:{
 para:[['endangered','at risk of disappearing'],['habitat','natural home'],['release','set free'],['injured','hurt'],['decline','fall in number'],['protect','keep safe']],
 coll:[
  {q:'Documentaries can ______ awareness of endangered species.',opts:['raise','rise','make'],a:0,ex:'raise awareness (of).'},
  {q:'Cuc Phuong is ______ to many rare animals.',opts:['house','home','place'],a:1,ex:'be home to.'},
  {q:'The turtles were released ______ the wild.',opts:['in','into','on'],a:1,ex:'release into the wild (sống in the wild).'},
  {q:'Some rhinos are on the ______ of extinction.',opts:['edge','brink','side'],a:1,ex:'on the brink of extinction.'},
  {q:'The woman ______ founded the centre was a teacher.',opts:['which','who','where'],a:1,ex:'Người → who.'},
  {q:'This is the beach ______ turtles lay their eggs.',opts:['which','where','whose'],a:1,ex:'Nơi chốn → where.'}],
 order:['Pangolins are hard to see in the wild.','The forest where the deer live is protected.','Poaching is a serious threat to elephants.','Volunteers help to clean the cages every morning.'],
 err:[
  {parts:['Cuc Phuong,','that is in Ninh Binh,','is a national park','with many rare species.'],a:1,fix:'which is in Ninh Binh,',ex:'Sau dấu phẩy không dùng that.'},
  {parts:['The pangolin','is an animal','who','is hunted for its scales.'],a:2,fix:'which / that',ex:'Con vật → which/that.'},
  {parts:['Many animals','are losing','their natural','habitation.'],a:3,fix:'habitat',ex:'Môi trường sống: habitat.'},
  {parts:['The number of tigers','have','fallen','sharply.'],a:1,fix:'has',ex:'The number of… + động từ số ít.'}],
 task:{title:'Task 2 hai câu hỏi (dàn ý + 2 đoạn, 150–180 từ)',prompt:'Many wild animals are kept as pets in some countries. Why do people do this? What problems can it cause? Write an introduction that answers both questions, then one paragraph for each question.',min:150,check:['Mở bài trả lời ngắn cả hai câu hỏi','Đoạn 1 chỉ nói lý do','Đoạn 2 chỉ nói vấn đề','Có ít nhất 2 mệnh đề quan hệ']}},
u14:{
 para:[['spacious','large, with plenty of room'],['cramped','too small'],['affordable','not too expensive'],['renovate','repair and improve'],['durable','lasting a long time'],['suburb','area outside the city centre']],
 coll:[
  {q:'Many young people cannot ______ to buy a flat.',opts:['afford','spend','pay'],a:0,ex:'afford to + V.'},
  {q:'The city needs more ______ housing.',opts:['affordable','afforded','afford'],a:0,ex:'affordable housing.'},
  {q:'Good ______ keeps a house cool in summer.',opts:['insulation','isolation','island'],a:0,ex:'insulation = cách nhiệt.'},
  {q:'If I had more money, I ______ a bigger flat.',opts:['will rent','would rent','rent'],a:1,ex:'Điều kiện loại 2.'},
  {q:'______ we use better materials, the house will not last long.',opts:['If','Unless','When'],a:1,ex:'Unless = if not.'},
  {q:'Apartments ______ tube houses as the most common type of home.',opts:['overtook','overtake','were overtaking'],a:0,ex:'overtake → overtook (quá khứ).'}],
 order:['If the city builds more parks, people will be healthier.','The proportion of families living in tube houses fell steadily.','Treated bamboo can last for decades.','We have only got ten minutes for the presentation.'],
 err:[
  {parts:['If it','will rain','tomorrow, we','will stay at home.'],a:1,fix:'rains',ex:'Không dùng will trong mệnh đề if.'},
  {parts:['If I','was','the mayor, I','would build more parks.'],a:1,fix:'were',ex:'Điều kiện loại 2 với to be: were (văn viết).'},
  {parts:['High-rise buildings','saves','land in','crowded cities.'],a:1,fix:'save',ex:'buildings số nhiều → save.'},
  {parts:['Apartments','has become','more popular','since 1995.'],a:1,fix:'have become',ex:'Apartments số nhiều → have become.'}],
 task:{title:'Task 1 bấm giờ 20 phút',prompt:'Rewrite the Task 1 bar chart in 20 minutes without looking at the model. Then compare with the model and underline 3 phrases you can use next time.',min:150,check:['Overview có 2 xu hướng','Thân bài nhóm theo xu hướng','Có overtook / halved / tripled','Xong trong 20 phút']}},
u15:{
 para:[['bring up','raise a child'],['look after','take care of'],['elderly','old'],['rely on','depend on'],['close-knit','very close'],['independent','not needing help']],
 coll:[
  {q:'My grandmother played a big role in my ______.',opts:['upbringing','bringing up','raising up'],a:0,ex:'upbringing (danh từ).'},
  {q:'Life ______ has risen in most countries.',opts:['expectancy','expectation','expecting'],a:0,ex:'life expectancy.'},
  {q:'The ______ rate has fallen in many countries.',opts:['born','birth','bear'],a:1,ex:'birth rate.'},
  {q:'I’m used to ______ with my grandparents.',opts:['live','living','lived'],a:1,ex:'be used to + V-ing.'},
  {q:'My family ______ live in Hue before we moved.',opts:['used to','would','is used to'],a:0,ex:'Tình trạng quá khứ → used to.'},
  {q:'The average household size ______ since 1990.',opts:['fell','has fallen','used to fall'],a:1,ex:'since → hiện tại hoàn thành.'}],
 order:['Households have become smaller in almost every country.','My grandmother would tell me stories every night.','Many grandparents provide free childcare.','Young adults move to cities to find jobs.'],
 err:[
  {parts:['We','would live','in the countryside','when I was small.'],a:1,fix:'used to live',ex:'Không dùng would với động từ trạng thái live.'},
  {parts:['Did you','used to','visit','your grandparents?'],a:1,fix:'use to',ex:'Did … use to (không -d).'},
  {parts:['Life expectancy','has risen','a lot','in 1980.'],a:3,fix:'since 1980',ex:'Hiện tại hoàn thành + since.'},
  {parts:['She','is used to','cook','for her family.'],a:2,fix:'cooking',ex:'be used to + V-ing.'}],
 task:{title:'Task 2 Discussion (mở bài + 1 thân bài, 150 từ)',prompt:'Some people think grandparents should help to bring up their grandchildren, while others believe this should be the parents’ job only. Write the introduction and ONE body paragraph.',min:150,check:['Mở bài: 2 quan điểm + ý kiến của em','Thân bài có câu chủ đề rõ','Có ví dụ cụ thể','Dùng ít nhất 1 cấu trúc used to / would / have changed']}},
u16:{
 para:[['purchase','buy'],['refund','money given back'],['bargain','something cheap and good'],['second-hand','used before'],['budget','plan for spending'],['convenient','easy and saving time']],
 coll:[
  {q:'I’m ______ up for a new laptop.',opts:['saving','keeping','spending'],a:0,ex:'save up for.'},
  {q:'Online ads encourage ______ buying.',opts:['impulse','sudden','quick'],a:0,ex:'impulse buying.'},
  {q:'Food ______ for a third of spending.',opts:['accounted','counted','made'],a:0,ex:'account for.'},
  {q:'Can I ______ this shirt for a bigger size?',opts:['exchange','change over','swap off'],a:0,ex:'exchange A for B.'},
  {q:'The number of online shoppers ______ grown.',opts:['have','has','are'],a:1,ex:'The number of + động từ số ít.'},
  {q:'A number of shops ______ closed.',opts:['has','have','is'],a:1,ex:'A number of + động từ số nhiều.'}],
 order:['Members get ten percent off every book.','The proportion spent on food fell considerably.','Please keep your receipt in case you need a refund.','Online shopping is very convenient for busy people.'],
 err:[
  {parts:['The online shopping','saves','a lot of','time.'],a:0,fix:'Online shopping',ex:'Nói chung → không mạo từ.'},
  {parts:['I bought','a','umbrella','yesterday.'],a:1,fix:'an',ex:'umbrella bắt đầu bằng nguyên âm.'},
  {parts:['The information','on the website','were','wrong.'],a:2,fix:'was',ex:'information không đếm được.'},
  {parts:['Each of the students','have','a membership','card.'],a:1,fix:'has',ex:'Each of… + động từ số ít.'}],
 task:{title:'Viết 60 phút như thi thật',prompt:'Do the Unit 16 writing (Task 1 pie charts + Task 2) again in exactly 60 minutes, then check articles and subject–verb agreement in both tasks.',min:400,check:['Task 1 ≥ 150 từ trong 20 phút','Task 2 ≥ 250 từ trong 40 phút','Đã soát mạo từ','Đã soát hòa hợp chủ ngữ – động từ']}}
});
Object.assign(window.HW,{
p1:{
 para:[['urbanisation','growth of cities'],['vulnerable','easily harmed'],['mitigate','make less severe'],['infrastructure','roads, drains and power systems'],['level off','stop rising'],['densely populated','with many people in a small area']],
 coll:[
  {q:'There was a sharp ______ in urban temperatures.',opts:['rise','raise','rising'],a:0,ex:'a sharp rise in.'},
  {q:'The figure is projected ______ 45% by 2030.',opts:['reaching','to reach','reach'],a:1,ex:'be projected to + V.'},
  {q:'Trees can ______ the effects of heat waves.',opts:['mitigate','motivate','migrate'],a:0,ex:'mitigate the effects.'},
  {q:'The urban population ______ the rural population in 2020.',opts:['overtook','overtake','overtaken'],a:0,ex:'overtake → overtook.'},
  {q:'Cities ______ for most energy use.',opts:['account','count','make'],a:0,ex:'account for.'},
  {q:'The figures were 30% and 45% ______.',opts:['respectively','respectfully','respective'],a:0,ex:'respectively = lần lượt.'}],
 order:['There was a steady rise in the urban population.','Old car parks will be turned into green spaces.','Dark surfaces absorb more heat than light ones.','Country B is expected to level off at around 56%.'],
 err:[
  {parts:['There was','a rapid growth','of','the population of Country A.'],a:2,fix:'in',ex:'a growth/rise in + thứ tăng.'},
  {parts:['The figure','rose','to','45% in 2030 (projected).'],a:1,fix:'is projected to rise',ex:'Số liệu dự báo dùng is projected/expected to.'},
  {parts:['Elderly people','are','vulnerable','for heat.'],a:3,fix:'to heat',ex:'vulnerable to.'},
  {parts:['Country B','was','the most urbanised','in all the period.'],a:3,fix:'throughout the period',ex:'throughout the period.'}],
 task:{title:'Task 1 Line graph lần 2 (20 phút)',prompt:'Rewrite the Checkpoint 21 line graph report in 20 minutes without looking at the model. Include at least three direct comparisons and two noun phrases (a rise in…, a decline in…).',min:150,check:['Overview 2–3 đặc điểm, không số liệu','Ít nhất 3 câu so sánh trực tiếp','Ít nhất 2 cụm danh từ','Dùng is projected/expected to cho 2030']}},
p2:{
 para:[['automation','use of machines instead of people'],['retrain','learn new job skills'],['redundant','no longer employed'],['productivity','amount of work produced'],['in demand','wanted by many employers'],['outweigh','be greater than']],
 coll:[
  {q:'Hundreds of workers were made ______.',opts:['redundant','redundancy','redundantly'],a:0,ex:'be made redundant.'},
  {q:'By 2035, AI ______ many routine jobs.',opts:['will replace','will have replaced','replaces'],a:1,ex:'by + mốc → will have + V3.'},
  {q:'This time next year, I ______ at university.',opts:['will study','will be studying','will have studied'],a:1,ex:'will be V-ing.'},
  {q:'The internet gave ______ to entirely new industries.',opts:['rise','raise','arise'],a:0,ex:'give rise to.'},
  {q:'Data analysts are in great ______.',opts:['demand','request','need of'],a:0,ex:'in great demand.'},
  {q:'I firmly ______ that education is the key.',opts:['believe','think of','know about'],a:0,ex:'firmly believe.'}],
 order:['What employers value most is communication.','Automation may increase income inequality.','By 2030, technology will have changed many jobs.','Workers should be retrained when jobs disappear.'],
 err:[
  {parts:['By 2030,','AI','will replace','many routine tasks already.'],a:2,fix:'will have replaced',ex:'by + mốc + already → tương lai hoàn thành.'},
  {parts:['Many workers','were made','redundancy','last year.'],a:2,fix:'redundant',ex:'made redundant (tính từ).'},
  {parts:['The benefits','outweighs','the risks','in my view.'],a:1,fix:'outweigh',ex:'benefits (số nhiều) → outweigh.'},
  {parts:['AI','will create','more jobs','then it destroys.'],a:3,fix:'than it destroys',ex:'so sánh: than.'}],
 task:{title:'Task 2 Opinion: mở bài + 1 thân bài (180 từ)',prompt:'“Young people should choose a career based on job security rather than personal interest.” Write an introduction with a clear position and one body paragraph that includes a concession (Admittedly… However…).',min:170,check:['Mở bài có lập trường rõ','Thân bài có ví dụ cụ thể','Có Admittedly… However…','Có 1 câu tương lai hoàn thành hoặc tiếp diễn']}},
p3:{
 para:[['decompose','break down naturally'],['generate','produce (electricity)'],['by-product','something produced in addition'],['sustainable','able to continue without harm'],['emissions','gases released into the air'],['landfill','place where rubbish is buried']],
 coll:[
  {q:'It is ______ that most household waste is organic.',opts:['estimated','estimating','estimate'],a:0,ex:'It is estimated that.'},
  {q:'Methane is thought ______ very harmful.',opts:['being','to be','be'],a:1,ex:'be thought to + V.'},
  {q:'The waste is fed ______ a sealed tank.',opts:['into','onto','by'],a:0,ex:'be fed into.'},
  {q:'The material is broken ______ by bacteria.',opts:['down','up','off'],a:0,ex:'break down.'},
  {q:'Families can cut ______ on energy use.',opts:['down','off','out'],a:0,ex:'cut down on.'},
  {q:'Biogas is produced on a large ______ in some countries.',opts:['scale','size','level'],a:0,ex:'on a large scale.'}],
 order:['The waste is shredded and mixed with water.','It is estimated that half of household waste is organic.','The gas is transferred to a storage tank.','Floating panels reduce evaporation from the reservoir.'],
 err:[
  {parts:['The biogas,','which collected','in a tank,','is used for cooking.'],a:1,fix:'which is collected',ex:'Bị động: which is collected (hoặc rút gọn: collected).'},
  {parts:['It is said','that','methane is','more harmful as CO2.'],a:3,fix:'more harmful than CO2',ex:'so sánh hơn: than.'},
  {parts:['The waste','is shred','into','small pieces.'],a:1,fix:'is shredded',ex:'V3: shredded.'},
  {parts:['Solar power','is expected','become','cheaper.'],a:2,fix:'to become',ex:'be expected to + V.'}],
 task:{title:'Task 1 Process (20 phút)',prompt:'Describe how rubbish is collected and recycled in your area, as if you were describing a process diagram with 6–8 stages. Use at least six passive verbs.',min:150,check:['Overview: số bước, đầu – cuối','Ít nhất 6 động từ bị động','Có 1 mệnh đề quan hệ rút gọn','Từ nối thứ tự đa dạng']}},
p4:{
 para:[['sedentary','involving little exercise'],['detrimental','harmful'],['supervise','watch over'],['addictive','hard to stop using'],['moderation','avoiding too much'],['face-to-face','in person']],
 coll:[
  {q:'______ the risks, most parents allow some screen time.',opts:['Despite','Although','However'],a:0,ex:'Despite + N.'},
  {q:'Lack of sleep has a detrimental effect ______ concentration.',opts:['on','to','for'],a:0,ex:'a detrimental effect on.'},
  {q:'Technology is fine in ______.',opts:['moderation','moderate','moderately'],a:0,ex:'in moderation.'},
  {q:'Parents should ______ limits on phone use.',opts:['set','make up','do'],a:0,ex:'set limits.'},
  {q:'Children develop social ______ through play.',opts:['skills','abilities to','knowledge'],a:0,ex:'social skills.'},
  {q:'______ balance, I believe screens do more harm than good.',opts:['On','In','At'],a:0,ex:'on balance.'}],
 order:['Although screens can support learning, they reduce sleep.','Peer pressure makes children want phones early.','Phones will be kept in lockers during lessons.','On balance, the effects are more negative than positive.'],
 err:[
  {parts:['Although','screens are useful,','but','they are addictive.'],a:2,fix:'(bỏ but)',ex:'Although và but không đi cùng.'},
  {parts:['Despite','screens are useful,','they','can be harmful.'],a:0,fix:'Although',ex:'Despite + N; mệnh đề → Although.'},
  {parts:['Lack of sleep','is detrimental','for','learning.'],a:2,fix:'to',ex:'detrimental to.'},
  {parts:['Children','spends','too much time','on screens.'],a:1,fix:'spend',ex:'Children (số nhiều) → spend.'}],
 task:{title:'Task 2 hai câu hỏi (thân bài 2, 150 từ)',prompt:'Write only the second body paragraph for: “Why do children spend so much time on screens? What effects does this have on their development?” Include a concession with Admittedly or Although and a clear final position.',min:140,check:['Có câu nhượng bộ đúng ngữ pháp','Có Nevertheless/However phản bác','Ít nhất 2 ảnh hưởng có giải thích','Lập trường rõ ở câu cuối']}}
,p5:{
 para:[['tuition fees','money paid for teaching'],['deterrent','something that discourages'],['disadvantaged','poor, with fewer chances'],['foster','encourage the growth of'],['hands-on','practical'],['abolish','end officially']],
 coll:[
  {q:'Free university promotes equal ______.',opts:['opportunities','chances to','possibility'],a:0,ex:'equal opportunities.'},
  {q:'Many students take ______ a loan to pay fees.',opts:['out','up','on'],a:0,ex:'take out a loan.'},
  {q:'Governments should invest ______ teacher training.',opts:['in','on','for'],a:0,ex:'invest in.'},
  {q:'Some students drop ______ because of costs.',opts:['out','off','down'],a:0,ex:'drop out.'},
  {q:'Students ______ from poor families need support.',opts:['coming','come','came'],a:0,ex:'who come → coming.'},
  {q:'______ finished school, she applied for a scholarship.',opts:['Having','Have','Had'],a:0,ex:'Having + V3.'}],
 order:['The main argument for free tuition is equal opportunities.','When fees are high, poorer students may not apply.','For instance, university is almost free in Germany.','In this sense, free tuition benefits society as a whole.'],
 err:[
  {parts:['Having finished','the exam,','the results','were posted online.'],a:2,fix:'we checked the results',ex:'Chủ ngữ câu chính phải là người làm bài.'},
  {parts:['Students','live','in rural areas','have fewer options.'],a:1,fix:'living',ex:'who live → living.'},
  {parts:['For example,','many people','think','education is good.'],a:1,fix:'in Finland, schools…',ex:'Ví dụ phải cụ thể (tên, nơi chốn, con số).'}],
 task:{title:'Task 2 Discussion (một đoạn PEEL, 130 từ)',prompt:'Write one PEEL body paragraph for: “Some people think university should be free; others think students should pay. Discuss both views.” Choose ONE view. Include a specific example (a country, a policy or a real experience) and one participle clause.',min:120,check:['Point rõ ở câu đầu','Có câu Explain giải thích cơ chế','Ví dụ cụ thể có tên/nơi chốn','Câu Link liên hệ lại đề','Có 1 mệnh đề phân từ đúng']}}
,p6:{
 para:[['obesity','being very overweight'],['sedentary','with little physical activity'],['consumption','the amount used or eaten'],['preventable','able to be stopped before it happens'],['in moderation','not too much'],['peak','reach the highest point']],
 coll:[
  {q:'Teenagers eat ______ more sugar than older adults.',opts:['far','very','too'],a:0,ex:'far + so sánh hơn.'},
  {q:'Adults cut back, ______ children ate more.',opts:['whereas','despite','because'],a:0,ex:'whereas: đối lập.'},
  {q:'It is ______ that more countries will tax sugar.',opts:['likely','like','likes'],a:0,ex:'it is likely that.'},
  {q:'Sweets are fine ______ moderation.',opts:['in','with','by'],a:0,ex:'in moderation.'},
  {q:'Consumption ______ in 2015 and then fell.',opts:['peaked','peaks','peak'],a:0,ex:'quá khứ: peaked.'},
  {q:'______ the whole, I support the tax.',opts:['On','In','At'],a:0,ex:'on the whole.'}],
 order:['Overall, teenagers consumed the most sugar.','Consumption in every group peaked in 2015.','Children’s intake rose from 40 to 58 grams.','By contrast, older adults consumed the least.'],
 err:[
  {parts:['Teenagers','ate','very more sugar','than adults.'],a:2,fix:'far more sugar',ex:'far/much + so sánh hơn, không dùng very.'},
  {parts:['The consumption','of older adults','were','the lowest.'],a:2,fix:'was',ex:'The consumption (số ít) → was.'},
  {parts:['I expect','people will','eating','more healthily.'],a:2,fix:'eat',ex:'will + V nguyên mẫu.'}],
 task:{title:'Part 3 viết ra (3 câu trả lời, mỗi câu 60–80 từ)',prompt:'Write answers to: (1) How do people’s diets now compare with the past? (2) Will people eat more healthily in the future? (3) Is a sugar tax a good idea? Use a different opening for each type: Compared with… / I expect… / On the whole…',min:180,check:['Câu so sánh có whereas hoặc compared with','Câu dự đoán có I expect / it’s likely','Câu đánh giá có on the whole + That said','Mỗi câu có lý do + ví dụ']}}
,p7:{
 para:[['boost','increase or improve'],['preserve','keep in its original state'],['overcrowding','too many people in one place'],['outweigh','be greater than'],['heritage','history and traditions passed down'],['revenue','money that is earned']],
 coll:[
  {q:'Tourism ______ a significant contribution to the economy.',opts:['makes','does','gives'],a:0,ex:'make a contribution.'},
  {q:'Visitors can cause ______ damage to old buildings.',opts:['serious','big','strong'],a:0,ex:'serious damage.'},
  {q:'Homestays ______ income for farmers.',opts:['generate','do','take'],a:0,ex:'generate income.'},
  {q:'Cities must strike a ______ between visitors and residents.',opts:['balance','line','deal'],a:0,ex:'strike a balance.'},
  {q:'Crowds put pressure ______ the water supply.',opts:['on','to','at'],a:0,ex:'put pressure on.'},
  {q:'Travel ______ young people’s horizons.',opts:['broadens','opens up to','grows'],a:0,ex:'broaden horizons.'}],
 order:['Although mass tourism can cause serious damage, the advantages outweigh the disadvantages.','Admittedly, overcrowding is a serious problem in peak season.','Nevertheless, tourism generates income for conservation.','For instance, Hội An uses entrance fees to restore old houses.'],
 err:[
  {parts:['Tourism','does','a big contribution','to the economy.'],a:1,fix:'makes',ex:'make a contribution.'},
  {parts:['Visitors','have','a strong impact','to local culture.'],a:3,fix:'on local culture',ex:'impact on.'},
  {parts:['The benefits','outweighs','the','drawbacks.'],a:1,fix:'outweigh',ex:'The benefits (số nhiều) → outweigh.'}],
 task:{title:'Viết lại bằng collocation (120 từ)',prompt:'Rewrite this paragraph using at least 6 collocations from Checkpoint 27: “Tourism is good for my province. It gives many jobs and money to people. But in summer there are too many tourists, and they make the beaches dirty. The government should do something to make it better.”',min:110,check:['Ít nhất 6 collocation đúng','Không còn good / many / dirty / do something','Có 1 ví dụ cụ thể của tỉnh em','Câu cuối đề xuất giải pháp rõ ràng']}}
,p8:{
 para:[['compulsory','required by law'],['enforce','make sure a rule is obeyed'],['allocate','give money for a purpose'],['incentive','something that encourages action'],['citizen','a member of a country'],['comply with','obey']],
 coll:[
  {q:'People ______ in cities often have long commutes.',opts:['who live','who they live','which live'],a:0,ex:'who + V.'},
  {q:'If fines ______ higher, fewer people would speed.',opts:['were','are','will be'],a:0,ex:'Điều kiện loại 2.'},
  {q:'A new law ______ in 2007.',opts:['was introduced','introduced','was introduce'],a:0,ex:'Bị động quá khứ.'},
  {q:'Students ______ parents work abroad need support.',opts:['whose','who','which'],a:0,ex:'whose + N.'},
  {q:'Laws do not work ______ they are enforced.',opts:['unless','if','so'],a:0,ex:'unless = if not.'},
  {q:'Companies must comply ______ the rules.',opts:['with','to','for'],a:0,ex:'comply with.'}],
 order:['The bar chart compares the proportion of a city’s budget allocated to five areas.','Overall, transport spending fell, while health and parks rose.','In 2005, 28% of the budget was spent on transport.','Spending on parks, which was the smallest category, more than doubled.'],
 err:[
  {parts:['Spending on parks','which','more than doubled,','reached 12%.'],a:1,fix:', which',ex:'Mệnh đề không xác định cần dấu phẩy trước which.'},
  {parts:['28% of the budget','spent','on transport','in 2005.'],a:1,fix:'was spent',ex:'Bị động thiếu be.'},
  {parts:['If the city','will build','more parks,','people will exercise more.'],a:1,fix:'builds',ex:'Mệnh đề If loại 1 dùng hiện tại đơn.'}],
 task:{title:'5 câu phức không lỗi + 1 đoạn Task 1 (130 từ)',prompt:'Using the bar chart in Checkpoint 28, write the second body paragraph (areas that increased). Include at least two non-defining relative clauses with which and one passive sentence. Then underline every main verb and check that each clause has exactly one.',min:120,check:['2 mệnh đề which có dấu phẩy','1 câu bị động đúng','Số liệu chính xác theo biểu đồ','Mỗi mệnh đề có đúng 1 động từ chia thì']}}
,q1:{
 para:[['thrive','grow strongly'],['habitat','natural home'],['deter','discourage'],['coexist','live together peacefully'],['abundant','plentiful'],['vulnerable','easily harmed']],
 coll:[
  {q:'It is food ______ attracts animals to cities.',opts:['that','what','which it'],a:0,ex:'It is … that.'},
  {q:'______ surprised researchers was the speed of change.',opts:['What','That','It'],a:0,ex:'What … was.'},
  {q:'Not only ______ foxes eat rubbish, but they also hunt rats.',opts:['do','are','have'],a:0,ex:'Not only + do.'},
  {q:'Birds sing louder in response ______ traffic.',opts:['to','for','with'],a:0,ex:'in response to.'},
  {q:'Housing encroaches ______ forests.',opts:['on','in','to'],a:0,ex:'encroach on.'},
  {q:'Only by working together ______ the problem.',opts:['can we solve','we can solve','we solve'],a:0,ex:'Only by + đảo ngữ.'}],
 order:['Wild animals are increasingly seen in cities.','The primary reason is the loss of their natural habitats.','It is the combination of food and low risk that allows them to thrive.','A case in point is the macaques on the Sơn Trà peninsula.'],
 err:[
  {parts:['It is','the food','what','attracts monkeys.'],a:2,fix:'that',ex:'It is … that.'},
  {parts:['Not only','foxes eat','rubbish,','but they also hunt rats.'],a:1,fix:'do foxes eat',ex:'Đảo ngữ sau Not only.'},
  {parts:['What','surprised us','were','the speed of change.'],a:2,fix:'was',ex:'What-clause → động từ số ít.'}],
 task:{title:'Đọc 1 passage Cambridge bấm giờ',prompt:'Làm 1 passage trong Cambridge IELTS (link ở mục Nguồn học thêm) trong đúng 20 phút. Ghi lại: số câu đúng, thời gian làm từng dạng, và 2 câu sai vì sao sai. Gửi ảnh chụp bảng ghi này cho cô.',min:40,check:['Bấm giờ đúng 20 phút','Ghi thời gian từng dạng','Phân tích 2 câu sai','Đạt ≥ 10/13 hoặc ghi rõ cần luyện dạng nào']}}
,q2:{
 para:[['reliance on','dependence on'],['accuracy','exactness'],['spatial','relating to space'],['decline','decrease'],['landmark','easily recognised place'],['participant','person who takes part']],
 coll:[
  {q:'Our reliance ______ GPS is growing.',opts:['on','in','of'],a:0,ex:'reliance on.'},
  {q:'There was a sharp reduction ______ errors.',opts:['in','of','on'],a:0,ex:'reduction in.'},
  {q:'The ______ of smartphones has changed travel.',opts:['availability','available','avail'],a:0,ex:'availability.'},
  {q:'A lack ______ practice weakens skills.',opts:['of','in','for'],a:0,ex:'lack of.'},
  {q:'The decline may be attributed ______ technology.',opts:['to','for','on'],a:0,ex:'attributed to.'},
  {q:'The ______ of printing made maps cheaper.',opts:['development','develop','developed'],a:0,ex:'development.'}],
 order:['The availability of navigation apps has transformed travel.','However, our reliance on them may weaken spatial memory.','Research suggests that GPS users pay less attention to landmarks.','A reduction in this skill could be reversed with practice.'],
 err:[
  {parts:['Our reliance','in','GPS','is increasing.'],a:1,fix:'on',ex:'reliance on.'},
  {parts:['The','accurate','of early maps','was poor.'],a:1,fix:'accuracy',ex:'Cần danh từ.'},
  {parts:['Several','participant','were asked','to draw a map.'],a:1,fix:'participants',ex:'Several + số nhiều.'}],
 task:{title:'Chép chính tả 30 từ học thuật + viết lại 5 câu',prompt:'Nhờ bạn đọc 30 từ học thuật (accommodation, environment, government, necessary, accuracy…) và chép lại. Sau đó viết lại 5 câu của em bằng danh từ hóa (the development of, a decline in, reliance on…).',min:60,check:['Chép đúng ≥ 27/30 từ','5 câu danh từ hóa đúng giới từ','Ghi các từ sai vào Sổ chính tả']}}
,q3:{
 para:[['account for','make up (a proportion)'],['overtake','go past'],['plateau','stop changing'],['scarcity','shortage'],['respectively','in the order mentioned'],['a fraction of','a small part of']],
 coll:[
  {q:'48% = ______ half.',opts:['just under','just over','exactly'],a:0,ex:'just under half.'},
  {q:'5 → 30 is a ______ increase.',opts:['sixfold','fivefold','threefold'],a:0,ex:'×6.'},
  {q:'Industry ______ agriculture in 2015.',opts:['overtook','overtake','overtaken'],a:0,ex:'quá khứ.'},
  {q:'The number of plants ______ risen.',opts:['has','have','are'],a:0,ex:'The number of → số ít.'},
  {q:'Demand is projected ______ 30 billion m³.',opts:['to reach','reaching','reached'],a:0,ex:'projected to + V.'},
  {q:'The figures were 20% and 30% ______.',opts:['respectively','respective','in respect'],a:0,ex:'respectively.'}],
 order:['The graph illustrates water consumption by sector from 1990 to 2030.','Overall, agriculture was by far the largest consumer.','The most striking feature is the rapid growth in industrial use.','Industrial demand is expected to rise sixfold over the period.'],
 err:[
  {parts:['Overall,','agriculture','used 40 billion m³','in 1990.'],a:2,fix:'was the largest consumer (không số liệu)',ex:'Overview không đưa số liệu.'},
  {parts:['The number of','desalination plants','have','risen.'],a:2,fix:'has',ex:'The number of → số ít.'},
  {parts:['Demand','is projected','reaching','30 billion m³.'],a:2,fix:'to reach',ex:'projected to + V.'}],
 task:{title:'Task 1: viết lại overview cho 3 biểu đồ',prompt:'Mở lại biểu đồ ở Checkpoint 21 (line), 26 (table) và 28 (bar). Với mỗi biểu đồ, viết lại phần overview band 7: đúng 2 đặc điểm chính, không có số liệu, 2 câu.',min:90,check:['3 overview, mỗi cái 2 câu','Mỗi overview có 2 đặc điểm chính','Không có số liệu','Có so sánh nhất/xu hướng chung']}}
,q4:{
 para:[['enforce','make people obey'],['safeguard','protect'],['far-reaching','having wide effects'],['arguably','it can be argued'],['accountable','responsible'],['unintended','not planned']],
 coll:[
  {q:'Teenagers ______ underestimate online risks.',opts:['tend to','are tend to','tending'],a:0,ex:'tend to.'},
  {q:'There is some ______ that heavy use affects sleep.',opts:['evidence','evidences','proves'],a:0,ex:'evidence (không đếm được).'},
  {q:'Australia’s law is a case in ______.',opts:['point','fact','example'],a:0,ex:'a case in point.'},
  {q:'Platforms should be held ______.',opts:['accountable','account','accounting'],a:0,ex:'held accountable.'},
  {q:'This is not to say ______ technology is harmful.',opts:['that','what','which'],a:0,ex:'This is not to say that.'},
  {q:'Parents must strike the right ______.',opts:['balance','line','weight'],a:0,ex:'strike the right balance.'}],
 order:['A ban would cut children off from their friends.','This is because most teenagers organise their social lives online.','A case in point is class group chats used to share homework.','As a result, a ban may simply encourage children to lie about their age.'],
 err:[
  {parts:['I','may perhaps possibly','disagree','with a ban.'],a:1,fix:'firmly',ex:'Lập trường không hedging.'},
  {parts:['Research','proves that','all social media','causes depression.'],a:1,fix:'suggests that heavy use may be linked to',ex:'Bằng chứng cần hedging.'},
  {parts:['Teenagers','tends to','compare themselves','with others.'],a:1,fix:'tend to',ex:'Teenagers (số nhiều).'}],
 task:{title:'Viết lại 1 thân bài cũ theo thang 4 bậc',prompt:'Chọn một bài Task 2 em đã viết ở chặng 2. Viết lại MỘT đoạn thân bài sao cho ý chính đi đủ 4 bậc (ý → vì sao → ví dụ cụ thể → hệ quả). Tô màu từng bậc khi gửi cô.',min:130,check:['Đủ 4 bậc, mỗi bậc ≥ 1 câu','Ví dụ có tên/nơi chốn/sự kiện','1–2 cụm hedging đúng chỗ','Lập trường không bị rào đón']}}
,q5:{
 para:[['exacerbate','make worse'],['dwindle','gradually decrease'],['revive','bring back to life'],['detrimental','harmful'],['viable','able to succeed'],['enrich','improve the quality of']],
 coll:[
  {q:'Art has a profound impact ______ identity.',opts:['on','to','for'],a:0,ex:'impact on.'},
  {q:'Cuts are detrimental ______ young people.',opts:['to','for','on'],a:0,ex:'detrimental to.'},
  {q:'Budget cuts ______ inequality.',opts:['exacerbate','foster','enrich'],a:0,ex:'exacerbate + vấn đề.'},
  {q:'Traditional crafts are rarely commercially ______.',opts:['viable','visible','valuable'],a:0,ex:'commercially viable.'},
  {q:'Arts funding pales in ______ with sport.',opts:['comparison','compare','comparing'],a:0,ex:'pales in comparison with.'},
  {q:'Group projects ______ creativity.',opts:['foster','exacerbate','dwindle'],a:0,ex:'foster creativity.'}],
 order:['Supporters argue that the arts have a profound impact on cultural identity.','Many traditional art forms are by no means commercially viable.','Ca trù, for instance, had dwindled before state support helped to revive it.','Cutting arts education would exacerbate inequality.'],
 err:[
  {parts:['The festival','exacerbated','the town’s','happiness.'],a:1,fix:'increased',ex:'exacerbate chỉ dùng cho vấn đề xấu.'},
  {parts:['Art','has a profound impact','to','children.'],a:2,fix:'on',ex:'impact on.'},
  {parts:['Audiences','have been dwindled','over','the years.'],a:1,fix:'have dwindled',ex:'dwindle là nội động từ, không bị động.'}],
 task:{title:'Sổ từ C1: 15 cụm + câu của em',prompt:'Chọn 15 cụm C1 trong Checkpoint 35. Với mỗi cụm, viết: collocation/giới từ đi kèm + 1 câu về Việt Nam. Đánh dấu ★ 5 cụm em chắc chắn dùng được trong phòng thi.',min:150,check:['15 cụm, mỗi cụm có giới từ/collocation','15 câu, mỗi câu về Việt Nam','5 cụm ★ dùng tự tin','Không câu nào “nhét từ”']}}
});
