/* Unit 11 (Media & Advertising), Unit 12 (Science & Innovation) — chặng 3: tăng tốc */
const FILTER12=`<svg viewBox="0 0 420 330" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" role="img" aria-label="Bottle water filter">
<text x="210" y="18" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">A simple bottle water filter</text>
<path d="M140 40 L280 40 L280 200 L235 245 L235 262 L185 262 L185 245 L140 200 Z" fill="#fff" stroke="#1B2A4A" stroke-width="2"/>
<rect x="142" y="42" width="136" height="40" fill="#B9B2A3"/><circle cx="160" cy="62" r="6" fill="#8A8273"/><circle cx="190" cy="58" r="7" fill="#8A8273"/><circle cx="225" cy="66" r="6" fill="#8A8273"/><circle cx="255" cy="58" r="7" fill="#8A8273"/>
<rect x="142" y="82" width="136" height="54" fill="#F2DFA7"/>
<rect x="142" y="136" width="136" height="44" fill="#3A3A3A"/>
<path d="M142 180 L278 180 L278 200 L235 243 L185 243 L142 200 Z" fill="#DCE9F5"/>
<rect x="187" y="243" width="46" height="18" fill="#FFFFFF" stroke="#86C5FF" stroke-width="2"/>
<path d="M210 265 L210 282" stroke="#2E5AA7" stroke-width="3" stroke-dasharray="4 3"/>
<path d="M165 285 L255 285 L250 322 L170 322 Z" fill="#DDEEFF" stroke="#2E5AA7" stroke-width="2"/>
<text x="210" y="36" text-anchor="middle" font-size="11" fill="#2E5AA7">↓ dirty water poured in</text>
<g font-size="13" font-weight="700" fill="#1B2A4A">
<line x1="280" y1="62" x2="315" y2="62" stroke="#1B2A4A"/><text x="320" y="66">(1) ________</text>
<line x1="280" y1="109" x2="315" y2="109" stroke="#1B2A4A"/><text x="320" y="113">(2) ________</text>
<line x1="280" y1="158" x2="315" y2="158" stroke="#1B2A4A"/><text x="320" y="162">(3) ________</text>
<line x1="233" y1="252" x2="315" y2="252" stroke="#1B2A4A"/><text x="320" y="256">(4) ________</text>
<line x1="255" y1="305" x2="315" y2="305" stroke="#1B2A4A"/><text x="320" y="309">(5) ________</text></g>
<text x="60" y="190" font-size="11" fill="#2E5AA7">bottle placed</text><text x="60" y="204" font-size="11" fill="#2E5AA7">upside down</text></svg>`;
const MAP12=`<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" role="img" aria-label="Riverside School 2005 and 2025">
<text x="330" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">Riverside School: 2005 and 2025</text>
<g transform="translate(10,30)"><text x="150" y="14" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">2005</text>
<rect x="0" y="22" width="300" height="236" rx="8" fill="#F4F1EA" stroke="#B9B2A3"/>
<rect x="0" y="236" width="300" height="22" fill="#86C5FF"/><text x="150" y="251" text-anchor="middle" font-size="11" fill="#1B2A4A">RIVER</text>
<rect x="14" y="34" width="150" height="60" fill="#FFA62B"/><text x="89" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#1B2A4A">Classrooms</text>
<rect x="178" y="34" width="108" height="60" fill="#D9D9D9"/><text x="232" y="68" text-anchor="middle" font-size="12" fill="#1B2A4A">Car park</text>
<rect x="14" y="108" width="190" height="116" fill="#9FD68F"/><text x="109" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="#1B2A4A">Football field</text>
<rect x="216" y="108" width="70" height="50" fill="#B58BD6"/><text x="251" y="137" text-anchor="middle" font-size="11" fill="#fff">Library</text>
<g fill="#4E8F45"><circle cx="230" cy="190" r="10"/><circle cx="256" cy="200" r="10"/><circle cx="276" cy="182" r="10"/><circle cx="244" cy="214" r="9"/></g><text x="251" y="232" text-anchor="middle" font-size="10" fill="#1B2A4A">trees</text></g>
<g transform="translate(350,30)"><text x="150" y="14" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">2025</text>
<rect x="0" y="22" width="300" height="236" rx="8" fill="#F4F1EA" stroke="#B9B2A3"/>
<rect x="0" y="236" width="300" height="22" fill="#86C5FF"/><text x="150" y="251" text-anchor="middle" font-size="11" fill="#1B2A4A">RIVER</text>
<rect x="14" y="34" width="150" height="60" fill="#FFA62B"/><text x="89" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#1B2A4A">Classrooms</text><text x="89" y="78" text-anchor="middle" font-size="10" fill="#1B2A4A">+ solar panels on roof</text>
<rect x="178" y="34" width="54" height="60" fill="#C9E3F7"/><text x="205" y="62" text-anchor="middle" font-size="10" fill="#1B2A4A">Bicycle</text><text x="205" y="75" text-anchor="middle" font-size="10" fill="#1B2A4A">parking</text>
<rect x="232" y="34" width="54" height="60" fill="#CFE8C6"/><text x="259" y="68" text-anchor="middle" font-size="10" fill="#1B2A4A">Garden</text>
<rect x="14" y="108" width="110" height="116" fill="#5C7FC2"/><text x="69" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Sports hall</text>
<rect x="124" y="108" width="80" height="116" fill="#9FD68F"/><text x="164" y="170" text-anchor="middle" font-size="10" fill="#1B2A4A">Small pitch</text>
<rect x="216" y="108" width="70" height="50" fill="#B58BD6"/><text x="251" y="130" text-anchor="middle" font-size="10" fill="#fff">Library +</text><text x="251" y="143" text-anchor="middle" font-size="10" fill="#fff">computer room</text>
<rect x="216" y="172" width="70" height="52" fill="#F8E6A0"/><text x="251" y="202" text-anchor="middle" font-size="11" fill="#1B2A4A">Canteen</text></g></svg>`;

window.UNITS.push(

/* ======================= UNIT 11 ======================= */
{
id:'u11', title:'Media & Advertising', week:11, video:'',
focus:'Listening Section 3: Flow-chart completion · Reading: Matching headings (bài dài) · Writing Task 1: Mixed charts',
voices:{'Teacher':'bm_lewis','Ha':'bf_lily','Minh':'am_adam','ex':'bf_alice','ans':'am_eric'},
ltags:{1:'L-flow',2:'L-flow',3:'L-flow',4:'L-flow',5:'L-flow',6:'L-flow',7:'L-flow'},
qtags:['V','G','S','V','S','G','V','S','P','V'],
lemon:['<b>L</b> – Flow-chart: đọc các ô theo mũi tên, đoán loại từ cho mỗi ô (danh từ, số…). Matching headings: đọc danh sách tiêu đề trước.','<b>E</b> – Gạch từ khóa trong mỗi tiêu đề; trong bài dài, đọc câu đầu và câu cuối của mỗi đoạn.','<b>M</b> – Mixed charts: tìm đặc điểm chính của TỪNG biểu đồ, rồi tìm điểm liên kết giữa hai biểu đồ.','<b>O</b> – Flow-chart ONE WORD AND/OR A NUMBER; Task 1 150 từ / 20 phút (2 biểu đồ!).','<b>N</b> – Ghi vào Sổ lỗi: tiêu đề bị chọn vì trùng 1 từ, câu tường thuật sai thì.'],
goalText:'Hết tuần, em điền được sơ đồ quy trình (flow-chart) khi nghe thảo luận, chọn tiêu đề cho bài đọc dài ~700 từ, và mô tả hai biểu đồ cùng lúc (mixed charts) trong 150 từ.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','70 phút','≥ 9/13'],['7. Writing','60 phút','150 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['advertisement (advert, ad)','n','quảng cáo','I saw an advert for new trainers on TikTok.'],
['advertise','v','quảng cáo','Companies advertise their products online.'],
['consumer','n','người tiêu dùng','Consumers are influenced by adverts.'],
['target','v','nhắm đến (đối tượng)','This advert targets teenagers.'],
['influencer','n','người có ảnh hưởng trên mạng','Influencers are paid to promote products.'],
['promote','v','quảng bá','She promotes skincare products on Instagram.'],
['brand','n','thương hiệu','Nike is a famous sports brand.'],
['persuade','v','thuyết phục','Adverts try to persuade us to buy things.'],
['misleading','adj','gây hiểu lầm','Some adverts are misleading.'],
['the media','n','truyền thông','The media has a big influence on young people.'],
['social media platform','n','nền tảng mạng xã hội','TikTok is a popular social media platform.'],
['viewer','n','người xem','The video had millions of viewers.'],
['audience','n','khán giả, đối tượng người xem','The target audience is students.'],
['sponsor','v/n','tài trợ; nhà tài trợ','The match was sponsored by a bank.'],
['commercial','n/adj','quảng cáo trên TV; thương mại','The commercial was shown during the final.'],
['slogan','n','khẩu hiệu','“Just do it” is a famous slogan.'],
['catchy','adj','dễ nhớ, bắt tai','The advert has a catchy song.'],
['product placement','n','quảng cáo lồng ghép (trong phim)','There is a lot of product placement in films.'],
['regulate','v','quản lý, điều chỉnh bằng luật','Governments should regulate online advertising.'],
['ban','v/n','cấm; lệnh cấm','Some countries ban adverts aimed at children.'],
['spend money on','v','tiêu tiền vào','Teenagers spend a lot of money on clothes.'],
['impulse buying','n','mua sắm bốc đồng','Online adverts encourage impulse buying.'],
['according to','prep','theo (nguồn)','According to the survey, most students use TikTok.'],
['whereas','conj','trong khi đó','TV time fell, whereas social media time rose.'],
['respectively','adv','lần lượt (theo thứ tự)','The figures were 60 and 20 minutes respectively.']],
vocabTask:'Viết 5 câu về một quảng cáo em nhớ (dùng <i>advert, brand, target, catchy, persuade</i>) và 5 câu so sánh số liệu dùng <i>whereas, respectively, according to</i>.',
strategy:`
<h3>Listening – Flow-chart completion (Section 3)</h3>
<ol><li>Flow-chart là các bước nối bằng mũi tên. Đọc từ trên xuống, đoán loại từ cần điền ở mỗi ô.</li>
<li>Người nói đi theo đúng thứ tự các bước, thường dùng: <i>First…, Then…, After that…, Once we’ve…, Finally…</i></li>
<li>Section 3 có nhiều người nói và họ <b>đổi ý</b>: đáp án là quyết định cuối cùng (<i>We thought about…, but in the end…</i>).</li></ol>
<h3>Reading – Matching headings (bài dài)</h3>
<ol><li>Đọc danh sách tiêu đề, gạch từ khóa. Danh sách luôn có tiêu đề thừa.</li>
<li>Với mỗi đoạn: đọc <b>câu đầu + câu cuối</b>, tóm tắt ý chính bằng 3–5 từ tiếng Việt, rồi mới so với danh sách.</li>
<li>Bẫy: tiêu đề có một từ trùng với một chi tiết nhỏ trong đoạn. Tiêu đề phải bao quát <b>cả đoạn</b>.</li></ol>
<h3>Task 1 – Mixed charts (2 biểu đồ)</h3>
<table><tr><th>Đoạn</th><th>Nội dung</th></tr>
<tr><td>Mở bài</td><td>Paraphrase cả hai biểu đồ: The bar chart shows… , while the pie chart illustrates…</td></tr>
<tr><td>Overview</td><td>1 đặc điểm chính của MỖI biểu đồ (2 câu), có thể nêu điểm liên kết</td></tr>
<tr><td>Thân bài 1</td><td>Biểu đồ thứ nhất</td></tr>
<tr><td>Thân bài 2</td><td>Biểu đồ thứ hai</td></tr></table>
<p class="note">Không cần mô tả mọi con số: chọn số lớn nhất, nhỏ nhất, thay đổi lớn nhất. Dùng <i>respectively</i> để gọn câu: <i>TV and social media accounted for 12% and 55% respectively.</i></p>`,
grammar:{
 title:'Câu tường thuật (reported speech)',
 explain:`<table><tr><th>Lời nói trực tiếp</th><th>Câu tường thuật</th><th>Quy tắc</th></tr>
<tr><td>“I <b>am</b> tired.”</td><td>She said (that) she <b>was</b> tired.</td><td>Hiện tại → quá khứ</td></tr>
<tr><td>“We <b>will</b> make an advert.”</td><td>They said they <b>would</b> make an advert.</td><td>will → would</td></tr>
<tr><td>“I <b>bought</b> it online.”</td><td>He said he <b>had bought</b> it online.</td><td>Quá khứ → quá khứ hoàn thành</td></tr>
<tr><td>“<b>Do</b> you like the ad?”</td><td>She asked me <b>if</b> I liked the ad.</td><td>Câu hỏi Yes/No → if/whether</td></tr>
<tr><td>“Where <b>do</b> you live?”</td><td>He asked me where I <b>lived</b>.</td><td>Không đảo ngữ trong câu hỏi tường thuật</td></tr></table>
<p class="note"><b>say</b> + (that) …; <b>tell</b> + người + (that)… (He told <u>me</u> that…). Đổi đại từ và từ chỉ thời gian: <i>today → that day, tomorrow → the next day</i>.</p>`,
 qs:[
  {t:'mcq',q:'“I love this advert.” → She said that she ______ that advert.',opts:['loves','loved','has loved'],a:1,ex:'Hiện tại đơn → quá khứ đơn.'},
  {t:'mcq',q:'“We will finish the video tomorrow.” → They said they ______ the video the next day.',opts:['will finish','would finish','finished'],a:1,ex:'will → would.'},
  {t:'mcq',q:'He ______ me that the product was cheap.',opts:['said','told','asked'],a:1,ex:'tell + người.'},
  {t:'mcq',q:'“Do you watch TV adverts?” → She asked me ______ TV adverts.',opts:['if I watched','do I watch','if did I watch'],a:0,ex:'Câu hỏi Yes/No → if + S + V (lùi thì).'},
  {t:'mcq',q:'“Where did you buy it?” → He asked me where ______ it.',opts:['did I buy','I had bought','had I bought'],a:1,ex:'Không đảo ngữ; quá khứ đơn → quá khứ hoàn thành.'},
  {t:'mcq',q:'The influencer said that she ______ paid to promote the product.',opts:['was','is being','will'],a:0,ex:'“I am paid…” → she was paid.'},
  {t:'gap',q:'“I can’t afford it.” → He said he ______ afford it. (couldn’t / can’t)',a:['couldn\'t','could not','couldn’t'],ex:'can → could.'},
  {t:'gap',q:'“I have seen this ad before.” → She said she ______ seen that ad before.',a:['had'],ex:'have seen → had seen.'},
  {t:'gap',q:'The teacher ______ us to cut the video to thirty seconds. (tell – quá khứ)',a:['told'],ex:'tell + người + to V.'},
  {t:'gap',q:'“Are you busy?” → He asked me ______ I was busy.',a:['if','whether'],ex:'Câu hỏi Yes/No → if/whether.'}],
 pron:{title:'Nhấn mạnh từ đối lập (contrastive stress)',
  explain:'Khi <b>sửa lại</b> hoặc <b>so sánh</b> thông tin, ta nhấn mạnh từ mang thông tin mới/đối lập: <i>No, I bought it on <b>TUESDAY</b>, not Monday.</i> Nghe câu và chọn từ <b>cần nhấn mạnh nhất</b> theo quy tắc này.',
  items:[{w:'No, I bought it on Tuesday, not Monday.',opts:['bought','Tuesday'],a:1},{w:'I said the red one, not the blue one.',opts:['red','said'],a:0},{w:'She watches TikTok, but she doesn’t use Facebook.',opts:['watches','Facebook'],a:1},
   {w:'It isn’t cheap. It’s expensive.',opts:['isn’t','expensive'],a:1},{w:'We filmed it in the garden, not the library.',opts:['garden','filmed'],a:0},{w:'I don’t like the song. I like the slogan.',opts:['slogan','don’t'],a:0}]}
},
listening:{
 lead:'Section 3: hai học sinh (Hà và Minh) trình bày với thầy kế hoạch làm một video quảng cáo cho cuộc thi của trường. Câu 1–7: write <b>ONE WORD AND/OR A NUMBER</b>. Câu 8–10: chọn A, B hoặc C.',
 order:['flow','mcq'],
 flow:{title:'Questions 1–7: Complete the flow-chart.',steps:['Choose a product: the school’s reusable water {1}','Do a survey of {2} students','Decide the main message of the advert: {3}','Write the {4}','Film the advert in the school {5}','Add {6} in English and Vietnamese','Show the advert at the Monday {7}']},
 mcq:[
  {n:8,q:'Why didn’t they choose to advertise a phone?',opts:['It would be too expensive for students.','The teacher did not allow it.','It would be difficult to film.'],a:0,ex:'“a phone would be too expensive for most students to buy, so the advert wouldn’t be realistic”.'},
  {n:9,q:'What does the teacher suggest?',opts:['making the advert shorter','adding more statistics','asking a celebrity to appear'],a:0,ex:'“Ninety seconds is too long… try to cut it to thirty seconds.”'},
  {n:10,q:'Who will act in the advert?',opts:['students from their own class','some teachers','younger students'],a:0,ex:'Định nhờ học sinh lớp 10 nhưng các em đang thi → “so we’ll ask our own classmates instead”.'}],
 ans:{1:{a:['bottle'],ex:'“we chose the school’s reusable water bottle”.'},2:{a:['60','sixty'],num:true,ex:'Bẫy: “We wanted to ask a hundred students, but we only had time to ask sixty.”'},3:{a:['colour','color','colours','colors'],ex:'“colour is the main message of our advert”.'},
  4:{a:['script'],ex:'“Next we’ll write the script.”'},5:{a:['garden'],ex:'Bẫy: “We wanted to film in the library, but we’re not allowed to, so it’ll be the school garden.”'},6:{a:['subtitles'],ex:'“we’ll add subtitles in English and Vietnamese”.'},7:{a:['assembly'],ex:'“it’ll be shown at the Monday assembly”.'}},
 script:[['Narrator','You will hear two students, Ha and Minh, talking to their teacher about an advert they are making. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Teacher','So, you two are making a short advert for the school competition. Talk me through your plan.'],
 ['Ha',"Well, first we had to choose a product. We thought about advertising a new phone, but a phone would be too expensive for most students to buy, so the advert wouldn't be realistic. In the end, we chose the school's reusable water bottle, because the canteen wants to sell more of them."],
 ['Teacher','Good choice. And then?'],
 ['Minh',"Then we did a survey. We wanted to ask a hundred students, but we only had time to ask sixty."],
 ['Teacher',"That's fine for a school project. What did you find out?"],
 ['Ha',"Most students said they'd buy a bottle if it came in more colours. So colour is the main message of our advert."],
 ['Minh',"Next we'll write the script. We've got some ideas already, and a music student has offered to write a short tune for us, so we don't have to worry about copyright."],
 ['Ha',"After that, we'll film it. We wanted to film in the library, because it looks really modern, but we're not allowed to, so it'll be the school garden."],
 ['Teacher','And how long will the advert be?'],
 ['Minh','About ninety seconds.'],
 ['Teacher',"Hmm. Ninety seconds is too long. Adverts work best when they're short. Try to cut it to thirty seconds."],
 ['Minh',"OK, we'll do that. Once we've finished filming, we'll add subtitles in English and Vietnamese, so everyone can understand it."],
 ['Ha',"And finally, if the competition judges like it, it'll be shown at the Monday assembly."],
 ['Teacher','Who is going to act in it?'],
 ['Minh',"We were going to ask some grade ten students, but they've got exams next week, so we'll ask our own classmates instead."],
 ['Teacher',"Sounds like a good plan. Let me know if you need any help."],
 ['Narrator','That is the end of the discussion. You now have half a minute to check your answers.']]
},
dict:[['Teacher','Talk me through your plan.'],['Ha','In the end, we chose the school’s reusable water bottle.'],['Minh','We only had time to ask sixty students.'],['Ha','Most students said they would buy a bottle if it came in more colours.'],['Minh','Next we will write the script.'],['Ha','We are not allowed to film in the library.'],['Teacher','Adverts work best when they are short.'],['Minh','We will add subtitles in English and Vietnamese.'],['Minh','They have got exams next week.'],['Teacher','Let me know if you need any help.']],
reading:{
 title:'Selling to the Screen Generation', lead:'Thời gian: 20 phút · bài đọc khoảng 680 từ · 13 câu.',
 paras:[
 ['A','Only a generation ago, most advertising reached teenagers through television, magazines and posters. Today, the average young person sees adverts every time they open a social media app, watch a video or play a mobile game. Companies have followed young people online, and the methods they use to attract their attention have changed dramatically.'],
 ['B','The biggest change is that advertising has become personal. Social media platforms collect huge amounts of information about their users: what they watch, what they like, where they are and even how long they look at a particular picture. Advertisers can use this data to show different adverts to different people. Two classmates scrolling through the same app at the same time may see completely different products, each chosen to match their interests. This makes adverts more effective, but it also raises serious questions about privacy. Many users do not realise how much information they share simply by using an app, and few of them read the long privacy policies they agree to when they create an account.'],
 ['C','At the same time, the line between advertising and entertainment has become harder to see. On television, adverts appear in separate breaks, so viewers know when they are being sold something. Online, a funny video, a make-up tutorial or a game review may in fact be a paid promotion. Influencers, many of whom are only a few years older than their followers, are paid by companies to use and recommend products. Because followers often feel that they know these people personally, a recommendation from an influencer can be more persuasive than a traditional advert. Product placement works in a similar way: when a popular character in a film or online series drinks a certain brand of soft drink or uses a particular phone, viewers may notice the product without realising that the company has paid for it to appear.'],
 ['D','Researchers are particularly concerned about younger children. A number of studies suggest that children under about eight years old often cannot understand that adverts are designed to persuade them; they tend to see them simply as information. Even older teenagers, who understand the purpose of advertising, may find it difficult to recognise a promotion when it is hidden inside content they enjoy. For this reason, some countries have introduced strict rules. Sweden, for example, does not allow television adverts aimed at children under twelve, and in several countries influencers are now required to label paid posts clearly with words such as “ad” or “sponsored”.'],
 ['E','Supporters of modern advertising argue that these concerns are exaggerated. They point out that personalised adverts can be useful, because people see products that they are genuinely interested in rather than random ones. Advertising also pays for many free services: without it, users might have to pay to use social media, search engines or video sites. In addition, many young people say they are perfectly aware of how advertising works and enjoy following influencers whose taste they trust.'],
 ['F','Nevertheless, there is evidence that constant exposure to adverts can affect young people’s behaviour and well-being. Online shopping makes it possible to buy a product within seconds of seeing it, which encourages impulse buying. Adverts that show perfect bodies and expensive lifestyles may also make some teenagers feel dissatisfied with their own lives. Teachers and parents report that students increasingly compare themselves with the people they see online. Some young people also spend money they do not have, borrowing from friends or using their parents’ cards to buy products that influencers have promoted.'],
 ['G','Many experts believe that the most effective solution is education rather than bans. If young people learn to ask simple questions — who made this, why, and what do they want me to do — they become much harder to manipulate. Some schools have already added “media literacy” lessons to their curriculum, in which students analyse real adverts and even create their own. As one teacher explained, the goal is not to stop students enjoying social media, but to help them enjoy it with their eyes open.']],
 groups:[
 {title:'Questions 1–5: The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–F from the list of headings below.',box:'<b>i</b> Arguments in favour of today’s advertising &nbsp; <b>ii</b> Adverts chosen for each individual &nbsp; <b>iii</b> The history of television advertising &nbsp; <b>iv</b> Possible harm to young people’s behaviour and feelings &nbsp; <b>v</b> When entertainment is really advertising &nbsp; <b>vi</b> Why children need special protection &nbsp; <b>vii</b> How much companies spend on advertising &nbsp; <b>viii</b> A new subject in schools',qs:[
  {t:'select',text:'Paragraph B',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'ii',ex:'B: dữ liệu cá nhân → “show different adverts to different people”.'},
  {t:'select',text:'Paragraph C',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'v',ex:'C: “a funny video… may in fact be a paid promotion”.'},
  {t:'select',text:'Paragraph D',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'vi',ex:'D: trẻ dưới 8 tuổi không hiểu mục đích quảng cáo → các nước đặt luật. Bẫy: iii nhắc “television” nhưng không phải ý chính.'},
  {t:'select',text:'Paragraph E',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'i',ex:'E: “Supporters of modern advertising argue…”.'},
  {t:'select',text:'Paragraph F',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'iv',ex:'F: impulse buying + feel dissatisfied. viii là đoạn G.'}]},
 {title:'Questions 6–9: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Two people using the same app at the same moment may see different adverts.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'B: “Two classmates… may see completely different products”.'},
  {t:'select',text:'Most influencers are much older than their followers.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'C: “many of whom are only a few years older than their followers”.'},
  {t:'select',text:'In Sweden, television adverts aimed at children under twelve are not allowed.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'D: “Sweden… does not allow television adverts aimed at children under twelve”.'},
  {t:'select',text:'Media literacy lessons have reduced online shopping among teenagers.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'G nói về media literacy nhưng không có kết quả về mua sắm.'}]},
 {title:'Questions 10–13: Complete the sentences. Write NO MORE THAN TWO WORDS from the passage.',box:'',qs:[
  {t:'gap',before:'Collecting so much information about users raises questions about',after:'.',a:['privacy'],ex:'B: “raises serious questions about privacy”.'},
  {t:'gap',before:'Young children tend to see adverts simply as',after:'.',a:['information'],ex:'D: “they tend to see them simply as information”.'},
  {t:'gap',before:'Buying something within seconds of seeing it is known as',after:'.',a:['impulse buying'],ex:'F: “which encourages impulse buying”.'},
  {t:'gap',before:'In some schools, students analyse real adverts in',after:'lessons.',a:['media literacy'],ex:'G: ““media literacy” lessons”.'}]}]
},
writing:{
 title:'Task 1 – Mixed charts (bar + pie)',
 prompt:'The bar chart shows the average number of minutes per day that teenagers in one country spent on four types of media in 2015 and 2025. The pie chart shows where these teenagers saw most adverts in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
 chart:{type:'bar',title:'Minutes per day spent on media by teenagers',unit:'minutes',series:['2015','2025'],cats:['TV','Social media','Online video','Reading news'],data:[[150,60],[90,210],[60,150],[30,20]]},
 chart2:{type:'pie',title:'Where teenagers saw most adverts, 2025 (%)',unit:'%',series:['2025'],cats:['Social media','Video sites','TV','Other'],data:[[55],[25],[12],[8]]},
 min:150,max:200,
 wex:[
  ['Câu mở bài nào tốt nhất cho 2 biểu đồ?',['The charts show media and adverts.','The bar chart compares how long teenagers spent on four types of media in 2015 and 2025, while the pie chart illustrates where they saw most adverts in 2025.','The bar chart shows minutes. The pie chart shows percentages.'],1,'Paraphrase cả 2 biểu đồ, nối bằng while.'],
  ['Overview nào tốt nhất?',['Overall, social media replaced TV as the most popular media, and it was also where teenagers saw the majority of adverts.','Overall, TV fell from 150 to 60 minutes.','Overall, I think teenagers use their phones too much.'],0,'Nêu đặc điểm chính của cả 2 biểu đồ và liên kết chúng, không số liệu.'],
  ['“Time spent on social media rose from 90 to 210 minutes, ______ TV time fell from 150 to 60.”',['whereas','because','so'],0,'Hai xu hướng ngược nhau → whereas.'],
  ['“Social media and video sites accounted for 55% and 25% ______.”',['respectively','respective','each'],0,'respectively = lần lượt theo thứ tự.'],
  ['Cách chia thân bài hợp lý nhất:',['Thân bài 1: biểu đồ cột; thân bài 2: biểu đồ tròn','Thân bài 1: năm 2015; thân bài 2: năm 2025 + biểu đồ tròn','Mỗi loại media một đoạn'],0,'Mỗi biểu đồ một đoạn là cách rõ ràng nhất.'],
  ['Câu nào mô tả đúng “Reading news: 30 → 20 minutes”?',['Reading news rose slightly.','Time spent reading news fell slightly and remained the lowest.','Reading news was the most popular.'],1,'30 → 20: giảm nhẹ, vẫn thấp nhất.']],
 outline:['Mở bài: The bar chart compares…, while the pie chart illustrates…','Overview: social media thay TV thành phương tiện dùng nhiều nhất; social media cũng là nơi thấy quảng cáo nhiều nhất (hơn một nửa).','Thân bài 1 (bar): TV 150 → 60; social media 90 → 210 (cao nhất 2025); online video 60 → 150; reading news 30 → 20 (thấp nhất).','Thân bài 2 (pie): social media 55% (more than half), video sites 25% (a quarter), TV 12%, other 8%.'],
 model55:'The bar chart shows how many minutes per day teenagers spent on four types of media in 2015 and 2025. The pie chart shows where teenagers saw most adverts in 2025.<br><br>Overall, social media became the most popular media, and teenagers saw most adverts on social media.<br><br>In 2015, TV was the most popular with 150 minutes per day, but in 2025 it fell to 60 minutes. Social media increased a lot, from 90 minutes to 210 minutes. Online video also increased from 60 to 150 minutes. Reading news was the lowest, and it fell from 30 to 20 minutes.<br><br>The pie chart shows that more than half of the adverts, 55%, were seen on social media. Video sites were 25%, TV was only 12%, and other places were 8%.<br><br>In conclusion, teenagers used social media much more in 2025 than in 2015, and they also saw most of their adverts there.',
 model:'The bar chart compares how long teenagers in one country spent on four types of media each day in 2015 and 2025, <i>while</i> the pie chart illustrates where they saw most adverts in 2025.<br><br><i>Overall</i>, social media <b>replaced</b> television as the most popular form of media over the decade, and it was <b>also</b> the place where teenagers saw <b>the majority of</b> adverts.<br><br>In 2015, teenagers watched TV for 150 minutes a day, far more than any other type of media. By 2025, <i>however</i>, this figure had <b>fallen sharply</b> to just 60 minutes. <i>In contrast</i>, time spent on social media <b>more than doubled</b> from 90 to 210 minutes, and online video <b>rose</b> from 60 to 150 minutes. Reading the news remained the least popular activity, <b>dropping slightly</b> from 30 to 20 minutes.<br><br><i>Turning to the pie chart</i>, social media <b>accounted for</b> more than half of all adverts seen (55%), <i>followed by</i> video sites at a quarter. TV and other sources made up only 12% and 8% <b>respectively</b>.',
 note:'Khoảng 165 từ, band 6.0–6.5. Overview liên kết 2 biểu đồ (social media vừa dùng nhiều nhất, vừa là nơi thấy nhiều quảng cáo nhất). Mỗi biểu đồ một đoạn, có “Turning to the pie chart” để chuyển đoạn.',
 checklist:['Mở bài paraphrase cả 2 biểu đồ','Overview có đặc điểm chính của cả 2 biểu đồ','Mỗi biểu đồ một đoạn thân bài','Dùng whereas / respectively / followed by','Ít nhất 150 từ']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 3, gửi cô qua Zalo.',
 items:[
 ['Do you often watch adverts?',"Not on purpose, but I see them all the time, mostly on YouTube and TikTok. I usually skip them as soon as I can, unless they're really funny."],
 ['Have you ever bought something because of an advert?',"Yes, once. I saw an advert for a cheap pair of wireless earphones on social media and bought them immediately. Unfortunately, they broke after two weeks, so now I'm more careful."],
 ['Do you follow any influencers?',"I follow a few, mainly people who make study tips and English learning videos. I like them because their content is useful, not just about selling things."],
 ['Do you prefer reading news online or on paper?',"Definitely online, because it's free and much faster. I usually read the news on my phone on the way to school, although I know I should check whether the source is reliable."]],
 part2:{cue:'Describe an advertisement that you remember well.',bullets:['what the advertisement was for','where you saw it','what happened in it','and explain why you remember it.'],
  notes:'Tet advert, snack/drink brand · YouTube, 2 years ago · young man works in city, can’t afford ticket home, family surprises him · emotional, about family, music, cried a little',
  model:"I'd like to talk about a Tet advertisement that I saw on YouTube about two years ago. It was made by a famous snack company, but to be honest, the product only appeared for a few seconds at the end. The advert told the story of a young man who worked in Ho Chi Minh City and was saving money to go home for Tet. At the beginning, he was very busy and tired, and he told his mother on the phone that he couldn't afford a ticket that year. He looked really lonely as he watched other people leaving the city. Then, on New Year's Eve, there was a knock on his door, and when he opened it, he found that his whole family had travelled to the city to celebrate with him. They had brought banh chung and the snacks from the advert, of course. I remember this advert so well for two reasons. Firstly, it was very emotional, and the background music was beautiful. I have to admit that I cried a little. Secondly, it reminded me of my uncle, who works far from home and often can't come back for Tet. I think it's a great example of how an advert can sell a product without talking about the product at all."},
 part3:[
 ['Why do companies use influencers to advertise their products?',"Mainly because young people trust influencers more than traditional adverts. Followers feel that they know these people personally, so a recommendation from them seems like advice from a friend rather than an advert."],
 ['Should advertising aimed at children be banned?',"I think it should be strictly controlled, especially for young children, because they can't really tell the difference between an advert and normal content. However, a complete ban might be difficult, because a lot of free content for children is paid for by advertising."],
 ['How can young people avoid being influenced too much by adverts?',"I think they should learn to ask simple questions, like who made this advert and what they want me to do. Also, it's a good idea to wait a day before buying something you saw online. Often, you realise you didn't really need it."]]
},
quiz:[
 ['“Target” (v) trong quảng cáo nghĩa là:',['nhắm đến đối tượng','thuyết phục','tài trợ'],0],
 ['“I am busy.” → She said she ______ busy.',['is','was','has been'],1],
 ['Flow-chart trong Listening: thông tin xuất hiện',['theo đúng thứ tự các ô','ngẫu nhiên','ngược lại'],0],
 ['“Misleading” nghĩa là:',['gây hiểu lầm','bắt tai','hấp dẫn'],0],
 ['Matching headings: tiêu đề phải',['trùng nhiều từ nhất với đoạn','bao quát ý chính của cả đoạn','nói về câu đầu tiên'],1],
 ['He ______ me that the advert was funny.',['said','told','spoke'],1],
 ['“Catchy” nghĩa là:',['dễ nhớ, bắt tai','đắt tiền','gây hiểu lầm'],0],
 ['Mixed charts: overview nên',['chỉ nói về biểu đồ đầu','có đặc điểm chính của cả hai biểu đồ','liệt kê mọi số liệu'],1],
 ['“No, I bought it on TUESDAY.” Từ nhấn mạnh là:',['bought','Tuesday','I'],1],
 ['“55% and 25% ______” (lần lượt):',['respectively','respective','totally'],0]]
},

/* ======================= UNIT 12 ======================= */
{
id:'u12', title:'Science & Innovation', week:12, video:'',
focus:'Listening Section 4: Sentence completion · Reading: Diagram labelling + TFNG · Writing Task 1: Map (changes)',
voices:{'Lecturer':'bm_george','ex':'bf_emma','ans':'am_michael'},
ltags:{1:'L-word',2:'L-word',3:'L-word',4:'L-word',5:'L-word',6:'L-word',7:'L-word',8:'L-word',9:'L-word',10:'L-word'},
qtags:['V','G','S','V','S','G','V','S','P','V'],
lemon:['<b>L</b> – Section 4: đọc hết 10 câu, gạch từ khóa và đoán loại từ; Diagram: xem sơ đồ, tìm các nhãn đã có.','<b>E</b> – Diagram labelling: tìm đoạn mô tả cấu tạo/các bộ phận (thường chỉ 1 đoạn), đọc theo thứ tự từ trên xuống.','<b>M</b> – Map Task 1: so sánh 2 bản đồ theo vùng (bắc/nam, trái/phải): cái gì bị bỏ, thêm, thay đổi.','<b>O</b> – Sentence completion ONE WORD ONLY; Task 1 bản đồ dùng bị động + hiện tại hoàn thành / quá khứ.','<b>N</b> – Ghi vào Sổ lỗi: từ sai chính tả trong bài giảng, câu bị động sai thì.'],
goalText:'Hết tuần, em nghe bài giảng khoa học và hoàn thành câu (Section 4), điền nhãn cho sơ đồ trong bài đọc, và mô tả sự thay đổi trên hai bản đồ (Task 1 Map). Tuần sau là Ôn tập chặng 3.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','70 phút','≥ 9/13'],['7. Writing','60 phút','150 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['invention','n','phát minh','The smartphone is an amazing invention.'],
['invent','v','phát minh','Who invented the telephone?'],
['discovery','n','khám phá','The discovery of penicillin saved millions of lives.'],
['innovation','n','sự đổi mới, sáng kiến','Innovation is important for economic growth.'],
['inspire','v','truyền cảm hứng','The design was inspired by a bird.'],
['device','n','thiết bị','A smartwatch is a small device.'],
['experiment','n/v','thí nghiệm; làm thí nghiệm','We did an experiment in the chemistry lab.'],
['researcher','n','nhà nghiên cứu','Researchers studied the feet of geckos.'],
['laboratory (lab)','n','phòng thí nghiệm','The samples were tested in a laboratory.'],
['material','n','vật liệu','This material is light but very strong.'],
['efficient','adj','hiệu quả (tiết kiệm)','LED lights are more energy-efficient.'],
['filter','n/v','bộ lọc; lọc','Sand is used to filter dirty water.'],
['purify','v','làm sạch, tinh lọc','Sunlight can help to purify water.'],
['bacteria','n','vi khuẩn','Boiling water kills most bacteria.'],
['layer','n','lớp','The filter has four layers.'],
['technology','n','công nghệ','Technology has changed the way we learn.'],
['artificial intelligence (AI)','n','trí tuệ nhân tạo','AI can translate languages instantly.'],
['solar panel','n','tấm pin mặt trời','Solar panels were installed on the roof.'],
['replace','v','thay thế','The car park was replaced by a garden.'],
['demolish','v','phá bỏ (công trình)','The old library was demolished.'],
['construct','v','xây dựng','A new sports hall was constructed.'],
['convert into','v','chuyển đổi thành','The car park was converted into a garden.'],
['the + -er, the + -er','phr','càng… càng…','The more you practise, the better you get.'],
['far / much + comparative','phr','hơn nhiều','This model is far more efficient.'],
['not as … as','phr','không … bằng','Old phones were not as fast as new ones.']],
vocabTask:'Viết 5 câu về một phát minh em thấy hữu ích (dùng <i>invention, device, efficient, replace, technology</i>) và 5 câu so sánh dùng <i>the more… the more, far/much + comparative, not as… as</i>.',
strategy:`
<h3>Listening Section 4 – Sentence completion</h3>
<ol><li>Bài giảng khoa học, một người nói, không nghỉ giữa. Câu hỏi thường được viết lại bằng <b>từ khác</b> so với lời giảng (paraphrase), nhưng từ cần điền giữ nguyên.</li>
<li>Đọc từng câu và đoán: cần danh từ số ít/số nhiều? tính từ? (sau <i>a</i> là danh từ số ít, sau <i>many</i> là số nhiều).</li>
<li>Viết <b>ONE WORD ONLY</b>, kiểm tra chính tả và đuôi -s.</li></ol>
<h3>Reading – Diagram labelling</h3>
<ol><li>Nhìn sơ đồ trước: đó là vật gì, có những bộ phận nào, mũi tên chỉ hướng nào.</li>
<li>Tìm <b>đoạn</b> mô tả cấu tạo (thường chỉ 1 đoạn). Thông tin thường đi theo thứ tự sơ đồ (trên → dưới, trái → phải).</li>
<li>Chú ý từ chỉ vị trí: <i>at the top, below, underneath, next, finally, at the bottom</i>.</li></ol>
<h3>Task 1 – Map (so sánh 2 thời điểm)</h3>
<table><tr><th>Loại thay đổi</th><th>Mẫu câu (bị động)</th></tr>
<tr><td>Bị phá bỏ</td><td>The football field <b>was replaced by</b> a sports hall. / The old library <b>was demolished</b>.</td></tr>
<tr><td>Xây mới</td><td>A canteen <b>was built / constructed</b> to the south of the library.</td></tr>
<tr><td>Chuyển đổi</td><td>The car park <b>was converted into</b> bicycle parking and a garden.</td></tr>
<tr><td>Giữ nguyên</td><td>The classroom block <b>remained</b> in the same place.</td></tr></table>
<p class="note">Overview của bản đồ: nhận xét chung (khu vực hiện đại hơn, xanh hơn, có thêm tiện ích…), KHÔNG liệt kê chi tiết.</p>`,
grammar:{
 title:'So sánh nâng cao',
 explain:`<table><tr><th>Cấu trúc</th><th>Ví dụ</th></tr>
<tr><td><b>far / much / a lot</b> + so sánh hơn (hơn nhiều)</td><td>LED lights are <b>far more efficient</b> than old bulbs.</td></tr>
<tr><td><b>slightly / a bit</b> + so sánh hơn (hơn một chút)</td><td>This phone is <b>slightly cheaper</b>.</td></tr>
<tr><td><b>the + so sánh hơn…, the + so sánh hơn</b> (càng… càng)</td><td><b>The more</b> you practise, <b>the better</b> you get.</td></tr>
<tr><td><b>(not) as + adj + as</b> (bằng / không bằng)</td><td>Old phones were <b>not as fast as</b> new ones.</td></tr>
<tr><td><b>twice / three times as + adj + as</b></td><td>The new train is <b>twice as fast as</b> the old one.</td></tr></table>
<p class="note">Không dùng <i>very</i> trước so sánh hơn: ❌ very faster → ✅ <b>much</b> faster.</p>`,
 qs:[
  {t:'mcq',q:'Electric cars are ______ quieter than petrol cars.',opts:['very','much','more'],a:1,ex:'much + so sánh hơn. Không dùng very.'},
  {t:'mcq',q:'The ______ you read, the more you learn.',opts:['more','most','much'],a:0,ex:'the more…, the more….'},
  {t:'mcq',q:'This laptop is not as heavy ______ my old one.',opts:['than','as','like'],a:1,ex:'not as … as.'},
  {t:'mcq',q:'The new train is twice as ______ as the old one.',opts:['fast','faster','fastest'],a:0,ex:'twice as + tính từ nguyên mẫu + as.'},
  {t:'mcq',q:'The bigger the screen, ______ the battery life.',opts:['the shorter','shorter','the shortest'],a:0,ex:'the + so sánh hơn ở cả hai vế.'},
  {t:'mcq',q:'Solar power is ______ cheaper than it was ten years ago.',opts:['far','very','too'],a:0,ex:'far + so sánh hơn = hơn rất nhiều.'},
  {t:'gap',q:'The new model is ______ more efficient than the old one. (hơn một chút)',a:['slightly','a bit','a little'],ex:'slightly + so sánh hơn.'},
  {t:'gap',q:'The ______ (early) you start, the easier it is.',a:['earlier'],ex:'the + so sánh hơn.'},
  {t:'gap',q:'Paper books are not as convenient ______ e-books.',a:['as'],ex:'not as … as.'},
  {t:'gap',q:'Robots are much ______ (accurate) than humans at some jobs. (more/less + adj)',a:['more accurate'],ex:'Tính từ dài → more accurate.'}],
 pron:{title:'Ngắt cụm (chunking) khi nói câu dài',
  explain:'Người bản xứ chia câu dài thành các <b>cụm nghĩa</b> và ngắt nhẹ giữa các cụm, không ngắt giữa một cụm (ví dụ không tách <i>a solar | panel</i>). Nghe câu và chọn cách ngắt <b>tự nhiên</b> hơn.',
  items:[{w:'The design was inspired by a bird that lives near rivers.',opts:['The design was inspired by a bird | that lives near rivers.','The design was inspired | by a bird that | lives near rivers.'],a:0},
   {w:'If you want to purify water, you can use sunlight.',opts:['If you want | to purify water you | can use sunlight.','If you want to purify water, | you can use sunlight.'],a:1},
   {w:'Solar panels were installed on the roof of the school.',opts:['Solar panels were installed | on the roof of the school.','Solar | panels were installed on the | roof of the school.'],a:0},
   {w:'In my opinion, the most useful invention is the internet.',opts:['In my | opinion the most useful | invention is the internet.','In my opinion, | the most useful invention | is the internet.'],a:1},
   {w:'The more you practise, the better you get.',opts:['The more you practise, | the better you get.','The more | you practise the better | you get.'],a:0},
   {w:'Researchers at the university tested the new material.',opts:['Researchers at the | university tested | the new material.','Researchers at the university | tested the new material.'],a:1}]}
},
listening:{
 lead:'Section 4: bài giảng ngắn về phỏng sinh học (biomimicry) – những phát minh lấy cảm hứng từ thiên nhiên. Câu 1–10: write <b>ONE WORD ONLY</b>.',
 formTitle:'Questions 1–10: Complete the sentences. Write ONE WORD ONLY for each answer.',
 form:[['<b>Biomimicry: learning from nature</b>','',null],['Definition','Biomimicry means solving human problems by copying designs found in {1}.',1],
  ['<b>Velcro</b>','',null],['Origin','The inventor noticed seeds stuck to his {2}’s fur after a walk.',2],['Method','He looked at the seeds under a {3}.',3],
  ['<b>The bullet train (Japan)</b>','',null],['Problem','Early trains made a loud noise when they came out of {4}.',4],['Idea','The engineer was a keen {5}.',5],['Result','The new nose shape meant the train used less {6}.',6],
  ['<b>Buildings</b>','',null],['Example','A building in Zimbabwe was designed like the mounds built by {7}.',7],['Result','It uses far less {8} than similar buildings.',8],
  ['<b>Future research</b>','',null],['Example','Scientists are studying the feet of the {9} to make new glues.',9],['Advice','Engineers need to study {10} as well as technology.',10]],
 mcq:[],
 ans:{1:{a:['nature'],ex:'“copying designs that are found in nature”.'},2:{a:['dog'],ex:'“seeds… stuck to his dog’s fur”.'},3:{a:['microscope'],ex:'“he looked at them under a microscope”.'},
  4:{a:['tunnels','tunnel'],ex:'“a loud bang whenever it came out of tunnels”.'},5:{a:['birdwatcher','bird-watcher'],ex:'“he was a keen birdwatcher”.'},6:{a:['electricity','energy','power'],ex:'“used less electricity”.'},
  7:{a:['termites'],ex:'“copied the mounds that termites build”.'},8:{a:['energy','electricity'],ex:'“far less energy for cooling”.'},9:{a:['gecko','geckos'],ex:'“the feet of the gecko”.'},10:{a:['biology'],ex:'“engineers should study biology, not just technology”.'}},
 script:[['Narrator','You will hear part of a lecture about inventions inspired by nature. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Lecturer',"Good morning. Today's topic is biomimicry. The word may sound complicated, but the idea is simple: biomimicry means solving human problems by copying designs that are found in nature. After all, plants and animals have had millions of years to find solutions."],
 ['Lecturer',"Let's begin with a famous example: Velcro. In the 1940s, a Swiss engineer called George de Mestral went for a walk in the mountains. When he got home, he noticed that small seeds had stuck to his trousers and to his dog's fur. Curious, he looked at them under a microscope and saw that they were covered in tiny hooks. This gave him the idea for a fastener with hooks on one side and loops on the other."],
 ['Lecturer',"Now I'd like to look at transport. Japan's first high-speed bullet trains were fast, but they had a problem. Because of the air pressure, they made a loud bang whenever they came out of tunnels, which disturbed people living nearby."],
 ['Lecturer',"One of the engineers, Eiji Nakatsu, was a keen birdwatcher. He remembered how the kingfisher dives into water to catch fish without making a splash. So the team redesigned the front of the train to look like the kingfisher's long, narrow beak. Not only was the new train quieter, it also used less electricity and travelled faster."],
 ['Lecturer',"Biomimicry is also used in buildings. In Zimbabwe, an architect designed an office and shopping centre that copied the mounds that termites build. These insects keep the inside of their mounds at a steady temperature, even in very hot weather. The building uses a similar system of air passages, and as a result it uses far less energy for cooling than similar buildings."],
 ['Lecturer',"So what comes next? Researchers are now studying the feet of the gecko, a small lizard that can walk up walls and even across ceilings. They hope to make new kinds of glue that are very strong but can be removed easily."],
 ['Lecturer',"To finish, I'd like to stress one point. If we want more inventions like these, engineers should study biology, not just technology. Some of the best ideas are waiting for us in the natural world."],
 ['Narrator','That is the end of the lecture. You now have half a minute to check your answers.']]
},
dict:[['Lecturer',"Today's topic is biomimicry."],['Lecturer','Plants and animals have had millions of years to find solutions.'],['Lecturer','Small seeds had stuck to his trousers.'],['Lecturer','They were covered in tiny hooks.'],['Lecturer','The trains made a loud bang whenever they came out of tunnels.'],['Lecturer','One of the engineers was a keen birdwatcher.'],['Lecturer','The new train was quieter and used less electricity.'],['Lecturer','These insects keep their mounds at a steady temperature.'],['Lecturer','The gecko can walk up walls.'],['Lecturer','Engineers should study biology, not just technology.']],
reading:{
 title:'Clean Water from Simple Science', lead:'Thời gian: 20 phút · bài đọc khoảng 650 từ · 13 câu.',
 paras:[
 ['A','For people in most cities, clean water is something that comes from a tap and is rarely thought about. Yet according to international organisations, hundreds of millions of people around the world still do not have reliable access to safe drinking water. Dirty water can carry bacteria and parasites that cause serious illnesses, and young children are especially at risk. While large treatment plants are the long-term solution, building them takes many years and a great deal of money. In the meantime, scientists and engineers have developed a range of simple, low-cost methods that families can use at home.'],
 ['B','The oldest and most widely known method is boiling. Heating water until it bubbles for at least one minute kills almost all harmful organisms. However, boiling has several disadvantages. It requires fuel, such as wood or gas, which can be expensive or difficult to find, and burning wood indoors produces smoke that damages people’s lungs. Boiling also does nothing to remove dirt, sand or chemicals from the water.'],
 ['C','A second method uses nothing but sunlight. In a technique known as SODIS, short for solar water disinfection, clear plastic bottles are filled with water and placed in direct sunlight for at least six hours, or for two days if the sky is cloudy. Ultraviolet light from the sun, together with the heat, destroys most bacteria and viruses. The method is free and easy to learn, and the bottles can be reused many times. However, it only works with clear water. If the water is very muddy, the sunlight cannot pass through it properly.'],
 ['D','For this reason, cloudy water often needs to be filtered first. One of the simplest designs can be made from a large plastic bottle. The bottom of the bottle is cut off, and the bottle is turned upside down, with its neck pointing downwards. A layer of gravel is placed at the top to catch leaves, insects and other large pieces of dirt. Below the gravel is a thick layer of fine sand, which traps smaller particles. Underneath the sand is a layer of charcoal, which removes many unpleasant smells and some chemicals. Finally, a piece of clean cloth is fixed over the neck of the bottle to stop the charcoal from falling out. Dirty water is poured in at the top, and the filtered water drips slowly into a jar placed below.'],
 ['E','It is important to understand, however, that a filter like this mainly improves how water looks and smells. Although it removes much of the dirt, it cannot be relied on to remove all bacteria. Experts therefore recommend that filtered water should still be boiled or treated with sunlight before it is drunk, especially when it is given to babies or people who are already ill. Combining two methods in this way is far safer than using either one on its own.'],
 ['F','In recent years, a number of more advanced but still affordable products have appeared. Ceramic pot filters, made from clay mixed with sawdust and fired in a kiln, contain millions of tiny holes that are too small for most bacteria to pass through. Personal filter straws allow a person to drink directly from a river or lake through a tube containing special filtering materials. These products are more expensive than homemade filters, but they are light, easy to carry and can last for many months. Some charities give them to families after floods or other disasters, when normal water supplies have been damaged.'],
 ['G','None of these methods is perfect, and none can replace the need for proper water systems run by governments. Nevertheless, they show how a basic understanding of science can make a real difference to people’s lives. Many schools now teach students to build simple filters as part of science lessons, not only to learn about physics and chemistry, but also to understand how lucky they are to have clean water at home.']],
 groups:[
 {title:'Questions 1–5: Label the diagram below. Choose ONE WORD ONLY from the passage for each answer.',box:`<div class="mapbox" style="max-width:420px">${FILTER12}</div>`,qs:[
  {t:'gap',tag:'R-diag',before:'(1)',after:'',a:['gravel'],ex:'D: “A layer of gravel is placed at the top”.'},
  {t:'gap',tag:'R-diag',before:'(2)',after:'',a:['sand'],ex:'D: “Below the gravel is a thick layer of fine sand”.'},
  {t:'gap',tag:'R-diag',before:'(3)',after:'',a:['charcoal'],ex:'D: “Underneath the sand is a layer of charcoal”.'},
  {t:'gap',tag:'R-diag',before:'(4)',after:'',a:['cloth'],ex:'D: “a piece of clean cloth is fixed over the neck of the bottle”.'},
  {t:'gap',tag:'R-diag',before:'(5)',after:'',a:['jar'],ex:'D: “the filtered water drips slowly into a jar placed below”.'}]},
 {title:'Questions 6–9: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Boiling removes sand and chemicals from water.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'B: “Boiling also does nothing to remove dirt, sand or chemicals”.'},
  {t:'select',text:'In the SODIS method, bottles should stay in the sun longer on cloudy days.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'C: “at least six hours, or for two days if the sky is cloudy”.'},
  {t:'select',text:'SODIS was invented by a university in Switzerland.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'Bài không nói ai phát minh SODIS.'},
  {t:'select',text:'A homemade bottle filter removes all bacteria from water.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'E: “it cannot be relied on to remove all bacteria”.'}]},
 {title:'Questions 10–13: Choose the correct letter, A, B, C or D.',box:'',qs:[
  {t:'mcq',text:'What is one disadvantage of boiling mentioned in paragraph B?',opts:['It takes several hours.','Burning wood indoors can harm people’s health.','It does not kill bacteria.','It makes water taste bad.'],a:1,ex:'B: “burning wood indoors produces smoke that damages people’s lungs”.'},
  {t:'mcq',text:'Why does very muddy water need to be filtered before using SODIS?',opts:['Mud contains more bacteria.','Sunlight cannot pass through it properly.','The bottles become too heavy.','Mud blocks the bottle neck.'],a:1,ex:'C: “If the water is very muddy, the sunlight cannot pass through it properly.”'},
  {t:'mcq',text:'What do experts recommend in paragraph E?',opts:['using only ceramic filters','drinking filtered water immediately','combining filtering with boiling or sunlight','avoiding homemade filters'],a:2,ex:'E: “filtered water should still be boiled or treated with sunlight… Combining two methods”.'},
  {t:'mcq',text:'According to paragraph F, what is an advantage of filter straws?',opts:['They are cheaper than homemade filters.','They are easy to carry.','They remove all chemicals.','They need no special materials.'],a:1,ex:'F: “they are light, easy to carry and can last for many months”.'}]}]
},
writing:{
 title:'Task 1 – Map (changes over time)',
 prompt:'The maps below show Riverside School in 2005 and in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
 chart:{type:'html',html:`<div style="max-width:660px;margin:10px auto">${MAP12}</div>`},
 min:150,max:200,
 wex:[
  ['Câu mở bài nào tốt nhất?',['The maps show Riverside School in 2005 and 2025.','The maps illustrate the changes that took place at Riverside School between 2005 and 2025.','The school is near a river.'],1,'Paraphrase: show → illustrate the changes that took place.'],
  ['Overview nào tốt nhất?',['Overall, the school became more modern and environmentally friendly, with new sports and study facilities, although the classroom block remained unchanged.','Overall, the football field was replaced by a sports hall.','Overall, I think the new school is better.'],0,'Overview: nhận xét chung + điều không đổi, không chi tiết.'],
  ['“The car park ______ into bicycle parking and a garden.”',['converted','was converted','has converting'],1,'Bị động quá khứ: was converted.'],
  ['Câu nào mô tả đúng sự thay đổi của sân bóng?',['The football field was replaced by a sports hall and a smaller pitch.','The football field was built.','The football field remained the same.'],0,'replaced by = bị thay thế bằng.'],
  ['“The trees ______ to make room for a new canteen.”',['were cut down','cut down','was cut down'],0,'The trees (số nhiều) → were cut down.'],
  ['Câu nào dùng từ chỉ vị trí đúng?',['A canteen was built to the south of the library, where the trees used to be.','A canteen was built in the library.','A canteen was built on the river.'],0,'to the south of / where … used to be.']],
 outline:['Mở bài: The maps illustrate the changes that took place at Riverside School between 2005 and 2025.','Overview: hiện đại hơn, thân thiện môi trường hơn, thêm tiện ích thể thao và học tập; khối lớp học giữ nguyên.','Thân bài 1 (phía bắc): khối lớp giữ nguyên + thêm solar panels; car park → bicycle parking + garden.','Thân bài 2 (phía nam): football field → sports hall + small pitch; library mở rộng thêm phòng máy tính; trees cut down → canteen.'],
 model55:'The maps show Riverside School in 2005 and in 2025. There are many changes.<br><br>Overall, the school is more modern in 2025 and it has more facilities, but the classrooms are still in the same place.<br><br>In 2005, there was a car park next to the classrooms. In 2025, the car park was changed into bicycle parking and a garden. The classrooms are in the same place, but now they have solar panels on the roof.<br><br>In 2005, there was a big football field. In 2025, there is a sports hall and a small pitch in this place. The library is still there, but now it has a computer room. In 2005, there were some trees next to the river, but in 2025 the trees were cut down and a canteen was built there.<br><br>In conclusion, the school has many new facilities in 2025, and it is greener than before.',
 model:'The maps illustrate the changes that <b>took place</b> at Riverside School between 2005 and 2025.<br><br><i>Overall</i>, the school became <b>more modern and environmentally friendly</b>, with new sports and study facilities, <i>although</i> the main classroom block <b>remained</b> in the same position.<br><br><i>In the northern part of the site</i>, the classroom block was kept, but solar panels <b>were installed</b> on its roof. Next to it, the car park that existed in 2005 <b>was converted into</b> two smaller areas: bicycle parking and a garden. This suggests that fewer people now travel to school by car.<br><br><i>The southern half of the school</i> changed even more dramatically. The large football field <b>was replaced by</b> a sports hall and a much smaller pitch. The library remained in the same place, but it <b>was extended</b> to include a computer room. <i>Finally</i>, the trees that <b>used to stand</b> near the river <b>were cut down</b>, and a canteen <b>was constructed</b> in their place, to the south of the library.',
 note:'Khoảng 160 từ, band 6.0–6.5. Chia theo khu vực (northern part / southern half). Dùng nhiều động từ bị động khác nhau: were installed, was converted into, was replaced by, was extended, were cut down, was constructed.',
 checklist:['Mở bài paraphrase','Overview: nhận xét chung + điều không đổi','Chia thân bài theo khu vực','Ít nhất 4 động từ bị động khác nhau','Dùng từ chỉ vị trí (next to, to the south of…)']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 1, gửi cô qua Zalo.',
 items:[
 ['Do you like science?',"Yes, especially physics, because I like understanding how things work. Our physics teacher often does experiments in class, which makes the lessons really interesting."],
 ['What technology do you use every day?',"Mainly my smartphone and my laptop. I use my phone for almost everything, from messaging friends to learning English vocabulary, and I use my laptop for homework."],
 ['Is there any invention you could not live without?',"Probably the internet. Without it, I couldn't study online, contact my friends or look things up quickly. It would be very hard to imagine my life without it."],
 ['Would you like to work in science in the future?',"Maybe. I'm interested in environmental science, so I'd like to work on clean energy or water projects. I think that kind of work can really help people."]],
 part2:{cue:'Describe a useful invention that you use.',bullets:['what it is','how often you use it','what you use it for','and explain why you think it is useful.'],
  notes:'translation app (on phone) · every day · English homework, menus, signs, talking to tourists · fast, free, camera translation, but don’t rely too much',
  model:"The invention I'd like to describe is the translation app on my phone. It's not as old as inventions like the telephone, but I think it's one of the most useful things I have. I use it almost every day, mostly for studying. When I'm reading an English article and come across a word I don't know, I can look it up in a few seconds, and the app even shows me how to pronounce it. It also has a camera function, which is amazing. You just point your phone at a sign or a menu, and the translation appears on the screen. Last summer, I used it to help some tourists from Korea who were lost near my house. They spoke Korean into my phone, and it translated their words into Vietnamese, so I was able to show them the way. I think it's useful for several reasons. It's free, it's fast, and it helps people communicate even when they don't share a language. However, I try not to depend on it too much, because the more I use it, the less I remember new words myself. So now I only use it after I've tried to guess the meaning first."},
 part3:[
 ['What are the most important inventions of the last hundred years?',"I'd say the internet and the smartphone, because they've completely changed the way we communicate, study and work. Medical inventions such as vaccines are also extremely important, as they have saved millions of lives."],
 ['Do you think technology makes people lazier?',"In some ways, yes. For example, people use calculators instead of doing simple maths and rely on GPS instead of remembering directions. However, technology also saves time, which people can use for more creative or important activities."],
 ['Should students spend more time learning science at school?',"I think science is very important, especially as the world faces problems like climate change. But rather than more time, students need more practical lessons, like experiments and projects, so they can see how science is used in real life."]]
},
quiz:[
 ['“Inspire” trong câu “The design was inspired by a bird” nghĩa là:',['truyền cảm hứng','phá bỏ','thay thế'],0],
 ['Electric cars are ______ quieter than petrol cars.',['very','much','more'],1],
 ['Section 4 “ONE WORD ONLY”: em viết “a microscope” →',['đúng','sai','được nửa điểm'],1],
 ['“Convert into” nghĩa là:',['chuyển đổi thành','phá bỏ','xây mới'],0],
 ['Diagram labelling: thông tin thường nằm ở',['khắp bài','một đoạn mô tả cấu tạo','câu đầu tiên của bài'],1],
 ['The ______ you practise, the better you get.',['more','most','much'],0],
 ['“Efficient” nghĩa là:',['hiệu quả, tiết kiệm','đắt tiền','cũ'],0],
 ['Task 1 Map: “The car park ______ into a garden.”',['converted','was converted','converting'],1],
 ['Cách ngắt cụm tự nhiên hơn:',['In my opinion, | the most useful invention | is the internet.','In my | opinion the most | useful invention is the internet.','Không cần ngắt'],0],
 ['“Purify water” nghĩa là:',['làm sạch nước','đun sôi nước','lọc cà phê'],0]]
}
);
