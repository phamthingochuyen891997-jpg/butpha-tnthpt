/* Unit 9 (Food & Culture), Unit 10 (Cities & Transport) — chặng 3: tăng tốc */
const MAP10=`<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" role="img" aria-label="City centre map">
<rect x="2" y="2" width="556" height="376" rx="10" fill="#F4F1EA" stroke="#B9B2A3" stroke-width="2"/>
<rect x="0" y="150" width="560" height="34" fill="#D9D4C7"/><text x="20" y="172" font-size="12" fill="#1B2A4A" font-weight="700">MARKET STREET</text>
<rect x="250" y="0" width="34" height="380" fill="#D9D4C7"/><text x="262" y="360" font-size="12" fill="#1B2A4A" font-weight="700" transform="rotate(-90 262 360)">PARK ROAD</text>
<rect x="300" y="196" width="240" height="160" rx="10" fill="#CFE8C6" stroke="#7BA66F"/><text x="420" y="282" font-size="14" text-anchor="middle" fill="#1B2A4A" font-weight="700">CITY PARK</text>
<rect x="30" y="20" width="200" height="110" rx="8" fill="#FFE4B8" stroke="#E0A84B"/><text x="130" y="80" font-size="14" text-anchor="middle" fill="#1B2A4A" font-weight="700">CENTRAL MARKET</text>
<rect x="300" y="20" width="110" height="110" rx="8" fill="#DDE7F7" stroke="#86C5FF"/><text x="355" y="72" font-size="12" text-anchor="middle" fill="#1B2A4A" font-weight="700">CITY</text><text x="355" y="88" font-size="12" text-anchor="middle" fill="#1B2A4A" font-weight="700">LIBRARY</text>
<rect x="30" y="200" width="200" height="150" rx="8" fill="#EDE7F6" stroke="#B58BD6"/><text x="130" y="330" font-size="12" text-anchor="middle" fill="#1B2A4A" font-weight="700">SHOPPING CENTRE</text>
<circle cx="267" cy="167" r="9" fill="#E4572E"/><text x="292" y="146" font-size="11" fill="#E4572E" font-weight="700">★ You are here (crossroads)</text>
<g font-size="15" font-weight="700" text-anchor="middle" fill="#fff">
<rect x="430" y="40" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="444" y="59">A</text>
<rect x="196" y="104" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="210" y="123">B</text>
<rect x="306" y="200" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="320" y="219">C</text>
<rect x="196" y="204" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="210" y="223">D</text>
<rect x="500" y="200" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="514" y="219">E</text>
<rect x="36" y="104" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="50" y="123">F</text></g></svg>`;

window.UNITS.push(

/* ======================= UNIT 9 ======================= */
{
id:'u9', title:'Food & Culture', week:9, video:'',
focus:'Listening Section 2: Matching (A–G) · Reading: Summary completion (từ trong bài) · Writing Task 1: Process diagram',
voices:{'Organiser':'bf_isabella','ex':'bm_george','ans':'bf_emma'},
ltags:{},
qtags:['V','G','S','V','S','V','G','S','P','V'],
lemon:['<b>L</b> – Matching: đọc danh sách A–G trước, gạch 1 từ khóa cho mỗi phương án; đọc tên 5 địa điểm/người trong câu hỏi.','<b>E</b> – Cẩn thận phương án bị nhắc đến nhưng bị phủ định: “People often think…, but actually…”.','<b>M</b> – Process: đếm số bước, tìm điểm bắt đầu và kết thúc, nhóm các bước thành 2 giai đoạn.','<b>O</b> – Summary: chép đúng từ trong bài, đúng giới hạn từ; Task 1 viết 150 từ trong 20 phút.','<b>N</b> – Ghi vào Sổ lỗi: phương án bẫy em đã chọn, động từ bị động em chia sai.'],
goalText:'Hết tuần, em làm được dạng nối thông tin (Matching A–G) khi nghe, điền tóm tắt bằng từ lấy trong bài đọc dài ~700 từ, và mô tả một quy trình (process) bằng câu bị động và từ nối thứ tự.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','70 phút','≥ 9/13'],['7. Writing','60 phút','150 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['cuisine','n','ẩm thực (của một vùng)','Vietnamese cuisine is famous for its fresh herbs.'],
['dish','n','món ăn','Pho is the most famous dish in Vietnam.'],
['ingredient','n','nguyên liệu','Rice and water are the main ingredients.'],
['recipe','n','công thức nấu ăn','My grandmother never writes down her recipes.'],
['flavour','n','hương vị','Fish sauce gives the soup a rich flavour.'],
['spicy','adj','cay','Food in central Vietnam is often very spicy.'],
['savoury','adj','mặn, đậm đà (không ngọt)','Umami is a savoury taste.'],
['street food','n','đồ ăn đường phố','Street food is cheap and delicious.'],
['vegetarian','adj/n','chay; người ăn chay','The stall sells only vegetarian dishes.'],
['traditional','adj','truyền thống','Banh chung is a traditional Tet food.'],
['festival','n','lễ hội','The Mid-Autumn Festival is popular with children.'],
['custom','n','phong tục','It is a custom to visit relatives at Tet.'],
['celebrate','v','tổ chức mừng, kỷ niệm','We celebrate Tet with our family.'],
['generation','n','thế hệ','The recipe has been passed down for three generations.'],
['pass down','v','truyền lại (cho thế hệ sau)','My mother passed the recipe down to me.'],
['soak','v','ngâm','The rice is soaked in water overnight.'],
['grind','v','xay','The rice is ground into a smooth liquid.'],
['steam','v','hấp','The batter is steamed for about thirty seconds.'],
['ferment','v','lên men','Fish sauce is made by fermenting fish with salt.'],
['taste','n/v','vị; nếm','Babies prefer a sweet taste.'],
['nutritious','adj','bổ dưỡng','Fresh vegetables are very nutritious.'],
['takeaway','n','đồ ăn mang đi','We ordered a takeaway last night.'],
['first … next … after that','phr','đầu tiên … tiếp theo … sau đó','First, the rice is soaked. Next, it is ground.'],
['once','conj','một khi, sau khi','Once the sheets are dry, they are packed.'],
['the final stage','n','giai đoạn cuối','In the final stage, the paper is cut and sold.']],
vocabTask:'Viết 5 câu về một món ăn truyền thống ở quê em (dùng <i>dish, ingredient, flavour, traditional, pass down</i>) và 5 câu mô tả cách làm món đó bằng câu bị động + <i>first, next, after that, once, finally</i>.',
strategy:`
<h3>Listening – Matching (A–G)</h3>
<ol><li>Danh sách phương án (A–G) nhiều hơn số câu hỏi: luôn có <b>2 phương án thừa</b>.</li>
<li>Trước khi nghe, gạch <b>1 từ khóa</b> cho mỗi phương án và nghĩ trước từ đồng nghĩa (<i>discount</i> ↔ <i>ten percent off</i>).</li>
<li>Câu hỏi đi theo thứ tự bài nghe. Phương án bẫy thường được nhắc đến rồi bị phủ định: <i>“People often think they give free samples, but actually they don’t.”</i></li></ol>
<h3>Reading – Summary completion (lấy từ trong bài)</h3>
<ol><li>Đọc tiêu đề tóm tắt → xác định tóm tắt nói về <b>đoạn nào</b> (thường chỉ 1–2 đoạn).</li>
<li>Đoán loại từ cần điền: danh từ? số? tính từ? (sau <i>a/an/the</i> là danh từ).</li>
<li>Chép <b>đúng từ trong bài</b>, không đổi dạng từ, đúng giới hạn (ONE WORD ONLY).</li></ol>
<h3>Task 1 – Process diagram (quy trình)</h3>
<table><tr><th>Đoạn</th><th>Nội dung</th><th>Mẫu câu</th></tr>
<tr><td>Mở bài</td><td>Paraphrase</td><td>The diagram illustrates how rice paper is made.</td></tr>
<tr><td>Overview</td><td>Số bước, bắt đầu – kết thúc</td><td>Overall, there are seven stages, beginning with soaking rice and ending with packing the finished sheets.</td></tr>
<tr><td>Thân bài 1</td><td>Các bước đầu (chuẩn bị)</td><td>First, rice <b>is soaked</b>… Next, it <b>is ground</b>…</td></tr>
<tr><td>Thân bài 2</td><td>Các bước sau (hoàn thiện)</td><td>After that… Once the sheets are dry… Finally…</td></tr></table>
<p class="note">Process <b>không có số liệu</b>, nên điểm nằm ở: câu bị động đúng (is soaked, are dried), từ nối thứ tự đa dạng, và nhóm bước hợp lý thành 2 đoạn.</p>`,
grammar:{
 title:'Câu bị động trong mô tả quy trình',
 explain:`<table><tr><th>Chủ động</th><th>Bị động (dùng trong process)</th></tr>
<tr><td>Workers soak the rice in water.</td><td>The rice <b>is soaked</b> in water.</td></tr>
<tr><td>They dry the sheets in the sun.</td><td>The sheets <b>are dried</b> in the sun.</td></tr>
<tr><td>They must cut the paper carefully.</td><td>The paper <b>must be cut</b> carefully.</td></tr></table>
<p class="note">Quy trình dùng <b>hiện tại đơn bị động</b>: is/are + V3. Từ nối thứ tự: <i>first, next, then, after that, once + mệnh đề, after + V-ing, finally</i>. Không lặp “then” quá 2 lần.</p>`,
 qs:[
  {t:'mcq',q:'First, the rice ______ in water overnight.',opts:['soaks','is soaked','soaked'],a:1,ex:'Gạo không tự ngâm → bị động is soaked.'},
  {t:'mcq',q:'The sheets ______ in the sun for four hours.',opts:['are dried','is dried','dry'],a:0,ex:'The sheets (số nhiều) → are dried.'},
  {t:'mcq',q:'______ the batter is ready, it is spread on a cloth.',opts:['Once','First','Finally'],a:0,ex:'Once + mệnh đề = sau khi/một khi.'},
  {t:'mcq',q:'After ______, the paper is cut into circles.',opts:['dried','drying','dry'],a:1,ex:'After + V-ing.'},
  {t:'mcq',q:'The finished products ______ to shops all over the country.',opts:['are sent','sent','are sending'],a:0,ex:'Bị động hiện tại số nhiều: are sent.'},
  {t:'mcq',q:'The rice must ______ until it becomes a smooth liquid.',opts:['grind','be ground','be grinding'],a:1,ex:'must + be + V3 (grind → ground).'},
  {t:'gap',q:'Next, the batter is ______ (steam) for thirty seconds.',a:['steamed'],ex:'is + V3.'},
  {t:'gap',q:'The fish ______ (mix) with salt and left for a year. (is/are + V3)',a:['is mixed'],ex:'The fish (số ít ở đây) → is mixed.'},
  {t:'gap',q:'______, the sheets are packed and sold. (bước cuối cùng)',a:['finally','lastly','in the final stage'],ex:'Finally = cuối cùng.'},
  {t:'gap',q:'The leaves are ______ (pick) by hand in the early morning.',a:['picked'],ex:'are + V3.'}],
 pron:{title:'Dạng yếu (weak forms) của từ chức năng',
  explain:'Từ chức năng như <i>was, to, of, for, from</i> thường được đọc <b>yếu</b> với âm /ə/ khi ở giữa câu (<i>It /wəz/ made…</i>). Nhưng khi đứng <b>cuối câu</b> hoặc được nhấn mạnh, chúng được đọc <b>mạnh</b> (<i>Yes, it /wɒz/.</i>). Nghe và chọn.',
  items:[{w:'It was made in Hue.',opts:['“was” đọc mạnh','“was” đọc yếu /ə/'],a:1},{w:'Yes, it was.',opts:['“was” đọc mạnh','“was” đọc yếu /ə/'],a:0},{w:'I want to try it.',opts:['“to” đọc mạnh','“to” đọc yếu /ə/'],a:1},
   {w:'Where are you from?',opts:['“from” đọc mạnh','“from” đọc yếu /ə/'],a:0},{w:'A bowl of pho, please.',opts:['“of” đọc mạnh','“of” đọc yếu /ə/'],a:1},{w:'What are you looking for?',opts:['“for” đọc mạnh','“for” đọc yếu /ə/'],a:0}]}
},
listening:{
 lead:'Section 2: người tổ chức giới thiệu các gian hàng ở một lễ hội ẩm thực đường phố. Câu 1–5: chọn chữ cái <b>A–G</b>. Câu 6–10: chọn A, B hoặc C.',
 order:['sel','mcq'],
 sel:{title:'Questions 1–5: What does each stall offer? Choose FIVE answers from the box. Write the correct letter, A–G.',
  box:'<div class="box"><b>A</b> a cooking demonstration &nbsp; <b>B</b> free samples &nbsp; <b>C</b> a discount for students &nbsp; <b>D</b> only vegetarian food &nbsp; <b>E</b> indoor seating &nbsp; <b>F</b> live music &nbsp; <b>G</b> recipes to take home</div>',
  letters:'ABCDEFG',items:[{n:1,text:'Pho Corner'},{n:2,text:'Banh Mi Bus'},{n:3,text:'Hue Kitchen'},{n:4,text:'Southern Sweets'},{n:5,text:'Mekong Coffee Garden'}]},
 mcq:[
  {n:6,q:'When did the first festival take place?',opts:['2015','2018','2020'],a:1,ex:'“The idea came up in 2015, but the first festival actually took place in 2018.”'},
  {n:7,q:'The money from entrance tickets goes to',opts:['the stall owners.','a children’s hospital.','cleaning the park.'],a:1,ex:'“The money from entrance tickets is given to a children’s hospital.”'},
  {n:8,q:'What is the best time to avoid the crowds?',opts:['before six o’clock','between seven and eight','after nine o’clock'],a:0,ex:'“The quietest time is actually late afternoon, before six.”'},
  {n:9,q:'To enter the cooking competition, people must',opts:['be under 18.','bring their own ingredients.','register online.'],a:2,ex:'“You just need to register on our website before Friday.”'},
  {n:10,q:'Lost property can be collected from',opts:['the information desk.','the main stage.','the car park.'],a:0,ex:'“don’t go to the main stage — go to the information desk next to the entrance”.'}],
 ans:{1:{a:['D'],t:'L-match',ex:'Pho Corner: “everything on their menu is vegetarian”.'},
  2:{a:['C'],t:'L-match',ex:'Banh Mi Bus: “People often think they give away free samples, but actually they don’t… ten percent off for anyone with a student card”.'},
  3:{a:['A'],t:'L-match',ex:'Hue Kitchen: “the chef will show you how to make bun bo Hue step by step on stage”.'},
  4:{a:['G'],t:'L-match',ex:'Southern Sweets: “the owners will happily give you a printed card with the recipes”.'},
  5:{a:['E'],t:'L-match',ex:'Mekong Coffee Garden: “the only place at the festival where you can sit inside”. Live music là ở sân khấu chính (F là bẫy).'}},
 script:[['Narrator','You will hear an organiser talking to visitors at a street food festival. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Organiser',"Good evening, everyone, and welcome to the Saigon Street Food Festival. I'm Linh, one of the organisers. Before you start eating, let me tell you about some of the stalls."],
 ['Organiser',"Let's start with Pho Corner, right next to the entrance. It's run by a family from Nam Dinh, and they don't use any meat in their broth at all. In fact, everything on their menu is vegetarian, which surprises a lot of people."],
 ['Organiser',"Next to it is the Banh Mi Bus, an old bus that has been turned into a kitchen. People often think they give away free samples, but actually they don't. What they do offer is ten percent off for anyone with a student card."],
 ['Organiser',"The Hue Kitchen is famous for its spicy noodle soup. At six and at eight o'clock, the chef will show you how to make bun bo Hue step by step on stage, so come early to get a good view."],
 ['Organiser',"If you like desserts, go to Southern Sweets. The stall is quite small, and there's nowhere to sit, but the owners will happily give you a printed card with the recipes for their coconut cakes, so you can make them at home."],
 ['Organiser',"Finally, the Mekong Coffee Garden is in the big white tent at the back. It's the only place at the festival where you can sit inside, out of the heat. There's no live music there, I'm afraid. The band plays on the main stage."],
 ['Organiser',"Now, a little about the festival itself. The idea came up in 2015, but the first festival actually took place in 2018, with only twenty stalls. This year we have more than a hundred."],
 ['Organiser',"The stall owners keep everything they earn from selling food. The money from entrance tickets is given to a children's hospital in District 3, and the cleaning is paid for by the city."],
 ['Organiser',"Most people arrive after work, so it's very busy from six to nine. The quietest time is actually late afternoon, before six, if you want to avoid the queues."],
 ['Organiser',"Some of you have asked about the cooking competition on Sunday. Anyone can enter, at any age, and we provide all the ingredients. You just need to register on our website before Friday."],
 ['Organiser',"And finally, if you lose anything, don't go to the main stage. Go to the information desk next to the entrance. Enjoy the festival!"],
 ['Narrator','That is the end of the talk. You now have half a minute to check your answers.']]
},
dict:[['Organiser','Before you start eating, let me tell you about some of the stalls.'],['Organiser','Everything on their menu is vegetarian.'],['Organiser','An old bus has been turned into a kitchen.'],['Organiser','People often think they give away free samples.'],['Organiser','Come early to get a good view.'],['Organiser','There is nowhere to sit.'],['Organiser','The band plays on the main stage.'],['Organiser','This year we have more than a hundred stalls.'],['Organiser','We provide all the ingredients.'],['Organiser','Go to the information desk next to the entrance.']],
reading:{
 title:'Why Do We Like the Food We Like?', lead:'Thời gian: 20 phút · bài đọc khoảng 700 từ · 13 câu.',
 paras:[
 ['A','Ask a hundred people to name their favourite meal, and you will probably get a hundred different answers. Yet scientists have discovered that our food preferences are not as random as they seem. They are shaped by a mixture of biology, experience and culture, and many of them begin to form before we are even born.'],
 ['B','Some preferences appear to be built into the human body. Newborn babies all over the world react with pleasure to sweet tastes and pull faces when they taste something bitter. Researchers believe this makes sense from the point of view of survival. In nature, sweetness usually signals a source of energy, such as ripe fruit, while bitterness is often a warning that a plant may be poisonous. A liking for salt is also natural, because the body needs small amounts of it to work properly.'],
 ['C','For a long time, it was thought that humans could detect only four basic tastes: sweet, sour, salty and bitter. In 1908, however, a Japanese chemist named Kikunae Ikeda noticed that a traditional soup made from seaweed had a taste that did not fit into any of these groups. He called it umami, which can be translated as a pleasant savoury taste. Ikeda later showed that the taste came from a substance called glutamate, which is also found in tomatoes, cheese and meat. Umami was not accepted as a fifth basic taste by many Western scientists until the end of the twentieth century. Vietnamese cooks, of course, had been using it for centuries: fish sauce, made by fermenting fish with salt for many months, is extremely rich in glutamate.'],
 ['D','Biology, however, explains only part of the story. Experience plays an equally important role. Studies of young children show that they often refuse a new food the first few times it is offered. Many parents give up at this point, but research suggests that a child may need to try a new food eight to fifteen times before accepting it. In other words, we learn to like many foods simply by eating them again and again. This also explains why adults often enjoy bitter drinks such as coffee, which most children dislike. Interestingly, research has also found that babies whose mothers eat a varied diet during pregnancy and breastfeeding are often more willing to try new flavours later, which suggests that this learning may begin even before birth.'],
 ['E','Culture shapes our tastes in even more powerful ways. What one society considers a delicious meal, another may find strange or even unacceptable. Durian is loved in much of South-East Asia but is banned on public transport in some countries because of its strong smell. Cheese, which is eaten every day in France, was rarely eaten in Vietnam until quite recently. Food is closely connected with identity: the dishes we grow up with remind us of our family, our hometown and important celebrations, such as banh chung at Tet.'],
 ['F','Climate may also have influenced traditional cooking. In a well-known study, researchers at Cornell University analysed thousands of recipes from 36 countries. They found that dishes from hot countries used far more spices than those from cooler countries. One possible explanation is that, before refrigerators existed, food spoiled more quickly in hot weather, and many spices, such as garlic and chilli, can slow the growth of harmful bacteria. The researchers admitted, however, that other factors, such as which plants grow locally, are also likely to play a part. In northern countries, for example, fewer spice plants grow naturally, so cooks there may simply have used what was available.'],
 ['G','Today, global trade and social media are changing what people eat faster than ever before. Young people in Ho Chi Minh City can try Korean, Mexican or Italian food without leaving their district, and recipes spread around the world within hours through short videos. Some experts worry that traditional dishes may slowly disappear as a result. Others are more optimistic. They point out that street food from countries such as Vietnam has itself become fashionable abroad, and that many young people are now proudly learning to cook the dishes that their grandparents passed down to them.']],
 groups:[
 {title:'Questions 1–5: Complete the summary. Choose ONE WORD ONLY from the passage for each answer.',box:'<b>The discovery of umami</b><br>In 1908, a Japanese <b>(1)</b> ______ found that a soup made from <b>(2)</b> ______ had an unusual taste. The taste came from a substance called <b>(3)</b> ______, which also exists in tomatoes, cheese and meat. Many Western scientists only accepted umami as a basic taste at the end of the twentieth <b>(4)</b> ______. In Vietnam, fish sauce, which is produced by <b>(5)</b> ______ fish with salt, contains a lot of this substance.',qs:[
  {t:'gap',tag:'R-sum',before:'(1)',after:'',a:['chemist'],ex:'C: “a Japanese chemist named Kikunae Ikeda”.'},
  {t:'gap',tag:'R-sum',before:'(2)',after:'',a:['seaweed'],ex:'C: “a traditional soup made from seaweed”.'},
  {t:'gap',tag:'R-sum',before:'(3)',after:'',a:['glutamate'],ex:'C: “a substance called glutamate”.'},
  {t:'gap',tag:'R-sum',before:'(4)',after:'',a:['century'],ex:'C: “until the end of the twentieth century”.'},
  {t:'gap',tag:'R-sum',before:'(5)',after:'',a:['fermenting'],ex:'C: “made by fermenting fish with salt”. Sau by cần V-ing.'}]},
 {title:'Questions 6–9: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Babies in all parts of the world seem to enjoy sweet tastes.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'B: “Newborn babies all over the world react with pleasure to sweet tastes”.'},
  {t:'select',text:'Most children accept a new food the first time they try it.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'D: “they often refuse a new food the first few times it is offered”.'},
  {t:'select',text:'Durian is banned on public transport in Vietnam.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'E chỉ nói “in some countries”, không nói Việt Nam.'},
  {t:'select',text:'The Cornell researchers believed climate was the only reason for using spices.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'F: “other factors… are also likely to play a part”.'}]},
 {title:'Questions 10–13: Choose the correct letter, A, B, C or D.',box:'',qs:[
  {t:'mcq',text:'According to paragraph B, people naturally dislike bitter tastes because',opts:['bitter food has little energy.','bitterness can be a sign of poison.','bitter plants are hard to find.','babies cannot digest bitter food.'],a:1,ex:'B: “bitterness is often a warning that a plant may be poisonous”.'},
  {t:'mcq',text:'What does paragraph D suggest about adults who like coffee?',opts:['They were born with this preference.','They learned to like it through experience.','They need more energy than children.','They prefer sweet drinks.'],a:1,ex:'D: “we learn to like many foods simply by eating them again and again. This also explains why adults often enjoy bitter drinks such as coffee”.'},
  {t:'mcq',text:'Why does the writer mention banh chung?',opts:['to show that food is linked to identity and celebrations','to compare Vietnamese and French food','to give an example of street food','to explain how it is made'],a:0,ex:'E: “Food is closely connected with identity… important celebrations, such as banh chung at Tet”.'},
  {t:'mcq',text:'What is the writer’s view in paragraph G?',opts:['Traditional dishes will certainly disappear.','Social media is harmful to food culture.','There are reasons to be optimistic about traditional food.','Young people no longer cook at home.'],a:2,ex:'G: “Others are more optimistic… many young people are now proudly learning to cook…”.'}]}]
},
writing:{
 title:'Task 1 – Process diagram',
 prompt:'The diagram below shows how rice paper is made in a traditional village. Summarise the information by selecting and reporting the main features. Write at least 150 words.',
 chart:{type:'process',title:'How rice paper is made',per:4,steps:['Rice soaked|in water overnight','Ground with water|→ smooth batter','Batter spread thinly|on a cloth','Steamed|for 30 seconds','Lifted onto|bamboo racks','Dried in the sun|(4–5 hours)','Cut, packed|and sold']},
 min:150,max:200,
 wex:[
  ['Câu mở bài nào tốt nhất?',['The diagram shows how rice paper is made in a traditional village.','The diagram illustrates the process by which rice paper is produced in a traditional village.','Rice paper is very popular in Vietnam.'],1,'A chép gần nguyên đề; B đổi “shows how… is made” thành “illustrates the process by which… is produced”.'],
  ['Overview nào đúng cho process?',['Overall, there are seven stages, beginning with soaking the rice and ending with packing the finished sheets.','Overall, the rice is soaked for 8 hours.','Overall, I think rice paper is delicious.'],0,'Overview của process: số bước + bước đầu + bước cuối, không chi tiết.'],
  ['“First, the rice ______ in water overnight.”',['soaks','is soaked','soaking'],1,'Bị động hiện tại: is soaked.'],
  ['Cách chia 2 đoạn thân bài hợp lý nhất:',['Đoạn 1: bước 1–4 (làm bột và hấp); đoạn 2: bước 5–7 (phơi và hoàn thiện)','Mỗi bước một đoạn','Đoạn 1: bước 1; đoạn 2: bước 2–7'],0,'Chia theo giai đoạn giúp bài mạch lạc.'],
  ['Từ nối nào phù hợp: “______ the sheets are completely dry, they are cut and packed.”',['Once','First','Because of'],0,'Once + mệnh đề = sau khi.'],
  ['Câu nào đúng ngữ pháp?',['After steaming, the sheets are lifted onto bamboo racks.','After steamed, the sheets lifted onto bamboo racks.','After steaming, the sheets lifting onto bamboo racks.'],0,'After + V-ing; the sheets are lifted (bị động).']],
 outline:['Mở bài: paraphrase – The diagram illustrates the process by which rice paper is produced…','Overview: 7 bước, bắt đầu ngâm gạo, kết thúc đóng gói; 2 giai đoạn: làm bánh và phơi khô.','Thân bài 1: bước 1–4 – soaked overnight → ground with water into batter → spread thinly on a cloth → steamed 30 seconds.','Thân bài 2: bước 5–7 – lifted onto bamboo racks → dried in the sun 4–5 hours → cut, packed and sold.'],
 model55:'The diagram shows how rice paper is made in a village. There are seven steps in the process.<br><br>Overall, the process starts with soaking rice and ends with selling the rice paper. It has two main parts: making the sheets and drying them.<br><br>First, rice is soaked in water for one night. Then it is ground with water and it becomes a smooth batter. After that, the batter is spread on a cloth. It is very thin. Then the batter is steamed for thirty seconds on a pot of hot water.<br><br>Next, the sheets are moved onto bamboo racks. Then they are dried in the sun. This takes four or five hours. Finally, the rice paper is cut and packed, and then it is sold in shops and markets all over the country.<br><br>In conclusion, making rice paper takes seven steps and it needs a lot of time in the sun.',
 model:'The diagram illustrates the process by which rice paper <b>is produced</b> in a traditional village.<br><br><i>Overall</i>, there are seven stages, <b>beginning with</b> soaking the rice and <b>ending with</b> packing and selling the finished sheets. The process can be divided into two main phases: making the sheets and drying them.<br><br><i>In the first stage</i>, rice <b>is soaked</b> in water overnight to soften it. <i>Next</i>, it <b>is ground</b> together with water until it becomes a smooth batter. <i>After that</i>, a small amount of this batter <b>is spread</b> thinly over a cloth, which is stretched across a pot of boiling water, and it <b>is steamed</b> for approximately thirty seconds.<br><br><i>After steaming</i>, each sheet <b>is carefully lifted</b> onto a bamboo rack. The racks <b>are then placed</b> outside, where the sheets <b>are left</b> to dry in the sun for four to five hours. <i>Once</i> they are completely dry, the sheets <b>are cut</b> to the right size, <b>packed</b> and <i>finally</i> <b>sent</b> to markets to be sold.',
 note:'Khoảng 160 từ, band 6.0–6.5. Mọi động từ chính đều ở dạng bị động hiện tại. Từ nối đa dạng (In the first stage, Next, After that, After steaming, Once, finally), không lặp “then”.',
 checklist:['Mở bài paraphrase, không chép đề','Overview: số bước + bước đầu + bước cuối','Dùng bị động hiện tại cho mọi bước','Ít nhất 5 từ nối thứ tự khác nhau','Ít nhất 150 từ']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 2, gửi cô qua Zalo.',
 items:[
 ['What is your favourite food?',"My favourite food is bun bo Hue, a spicy beef noodle soup from central Vietnam. I love it because the broth is really rich and full of flavour."],
 ['Do you often eat out?',"Not very often, maybe once or twice a week. My mum usually cooks at home because it's healthier and cheaper, but at weekends we sometimes go out for hotpot."],
 ['Can you cook?',"Only a few simple dishes, like fried rice and omelettes. I'd like to learn to cook some traditional dishes from my grandmother before I go to university."],
 ['Have you ever tried food from another country?',"Yes, I've tried Korean and Japanese food. I really like kimbap, but I found sushi a bit strange at first because I'm not used to eating raw fish."]],
 part2:{cue:'Describe a traditional festival in your country.',bullets:['what the festival is','when it is celebrated','what people do during the festival','and explain why it is important to you.'],
  notes:'Mid-Autumn Festival · 15th day of 8th lunar month · lanterns, mooncakes, lion dances · childhood memories, family, grandmother makes mooncakes',
  model:"I'd like to talk about the Mid-Autumn Festival, which is one of the most popular traditional festivals in Vietnam. It's celebrated on the fifteenth day of the eighth lunar month, when the moon is said to be at its fullest and brightest. Traditionally, it was a festival for children. In the evening, children carry colourful lanterns, often shaped like stars or fish, and walk around the neighbourhood in groups. In many places, there are lion dances in the streets, with loud drums that you can hear from far away. Families also get together to eat mooncakes, which are round cakes filled with things like lotus seeds, beans or salted egg yolk, and they drink tea while looking at the moon. The festival is important to me for two reasons. First, it brings back wonderful childhood memories. When I was little, my grandmother used to make mooncakes at home, and I helped her shape them. Second, nowadays everyone is very busy, so the festival is a special chance for my whole family to sit together and enjoy each other's company."},
 part3:[
 ['Why do you think traditional festivals are still important today?','I think they help people stay connected to their culture and history. Also, in modern life people are so busy, so festivals give families a reason to get together, which is really valuable.'],
 ['Are young people less interested in traditional food than older people?',"In some ways, yes. A lot of teenagers prefer fast food or Korean food because it's trendy. However, I've noticed that many young people are now proud of Vietnamese food and share videos about it online, so I don't think traditional food will disappear."],
 ['How has globalisation changed what people eat in Vietnam?',"It has changed it a lot. Twenty years ago, it was hard to find pizza or sushi in Vietnam, but now you can find food from almost every country in big cities. On the positive side, people have more choice, but on the negative side, some fast food is quite unhealthy."]]
},
quiz:[
 ['“Ingredient” nghĩa là:',['nguyên liệu','công thức','hương vị'],0],
 ['First, the rice ______ in water overnight.',['soaks','is soaked','soaking'],1],
 ['Matching A–G có 5 câu hỏi: số phương án thừa là',['0','1','2'],2],
 ['“Pass down a recipe” nghĩa là:',['viết công thức ra giấy','truyền lại công thức cho thế hệ sau','bán công thức'],1],
 ['Summary “ONE WORD ONLY”: em viết “the seaweed” →',['đúng','sai','được nửa điểm'],1],
 ['“Savoury” là vị:',['ngọt','mặn, đậm đà','đắng'],1],
 ['After ______, the sheets are cut.',['dry','dried','drying'],2],
 ['Overview của Task 1 process nên có:',['số liệu chính xác','số bước, bước đầu và bước cuối','ý kiến cá nhân'],1],
 ['Trong câu “Where are you from?”, từ “from” được đọc:',['mạnh','yếu /ə/','không đọc'],0],
 ['“Ferment” nghĩa là:',['hấp','lên men','xay'],1]]
},

/* ======================= UNIT 10 ======================= */
{
id:'u10', title:'Cities & Transport', week:10, video:'',
focus:'Listening Section 1: Notes + map · Reading: Short-answer questions · Writing Task 2: Problem–Solution',
voices:{'Officer':'bf_alice','Huy':'am_michael','ex':'bf_emma','ans':'bm_george'},
ltags:{1:'L-num',2:'L-num',3:'L-word',4:'L-num',5:'L-spell',6:'L-word'},
qtags:['V','G','S','V','S','G','V','S','P','V'],
lemon:['<b>L</b> – Notes + map: đọc ghi chú trước (loại thông tin), rồi xem bản đồ: tìm “You are here” và tên đường.','<b>E</b> – Gạch từ hỏi trong câu short-answer: <i>What, Where, How many, Which</i> → biết loại đáp án.','<b>M</b> – Task 2 Problem–Solution: lập 2 cột “Nguyên nhân / Vấn đề” và “Giải pháp”, nối từng giải pháp với một vấn đề.','<b>O</b> – Short answer: NO MORE THAN THREE WORDS; Task 2: 250 từ trong 40 phút.','<b>N</b> – Ghi vào Sổ lỗi: chữ đánh vần sai, đáp án vượt giới hạn từ.'],
goalText:'Hết tuần, em nghe điền ghi chú và chỉ đường trên bản đồ trong cùng một bài, trả lời câu hỏi ngắn (short answer) đúng giới hạn từ, và viết Task 2 dạng Problem–Solution (vấn đề – giải pháp).',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','70 phút','≥ 9/13'],['7. Writing','70 phút','250 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['traffic congestion','n','ùn tắc giao thông','Traffic congestion wastes millions of hours every year.'],
['public transport','n','giao thông công cộng','Better public transport would reduce traffic.'],
['commute','v/n','đi lại (đi làm, đi học)','I commute to school by bus.'],
['commuter','n','người đi làm/đi học hằng ngày','Thousands of commuters use the metro every day.'],
['rush hour','n','giờ cao điểm','The roads are crowded during rush hour.'],
['pedestrian','n','người đi bộ','The street is now only for pedestrians.'],
['cycle lane','n','làn đường xe đạp','The city has built new cycle lanes.'],
['metro','n','tàu điện ngầm/đường sắt đô thị','The metro line opened at the end of 2024.'],
['infrastructure','n','cơ sở hạ tầng','The government invested in transport infrastructure.'],
['urban','adj','thuộc đô thị','Urban areas are growing quickly.'],
['residential area','n','khu dân cư','They live in a quiet residential area.'],
['overpopulated','adj','quá đông dân','Some city centres are overpopulated.'],
['air quality','n','chất lượng không khí','Air quality is poor during rush hour.'],
['emissions','n','khí thải','Cars produce harmful emissions.'],
['private vehicle','n','phương tiện cá nhân','Most people use private vehicles.'],
['car-free','adj','không có ô tô','Some streets are car-free on Sundays.'],
['congestion charge','n','phí ùn tắc (thu khi vào trung tâm)','London introduced a congestion charge.'],
['invest in','v','đầu tư vào','The city should invest in public transport.'],
['encourage','v','khuyến khích','Cheap tickets encourage people to use buses.'],
['tackle','v','giải quyết (vấn đề)','We need to tackle traffic congestion.'],
['a major cause of','phr','một nguyên nhân chính của','Motorbikes are a major cause of noise.'],
['lead to','v','dẫn đến','Traffic jams lead to stress and lost time.'],
['a few / a little','det','một vài / một chút','There are a few buses but a little space.'],
['fewer / less','det','ít hơn (đếm được / không đếm được)','Fewer cars means less pollution.'],
['plenty of','det','nhiều, dồi dào','There are plenty of parks in the city.']],
vocabTask:'Viết 5 câu về giao thông ở nơi em sống (dùng <i>commute, rush hour, traffic congestion, public transport, air quality</i>) và 5 câu dùng <i>a few, a little, fewer, less, plenty of</i>.',
strategy:`
<h3>Listening – Notes + map (cùng một bài)</h3>
<ol><li>Bài có 2 phần: <b>ghi chú</b> (điền từ/số) rồi đến <b>bản đồ</b> (chọn chữ cái). Trong 30 giây đầu, đọc lướt cả hai.</li>
<li>Phần ghi chú: chú ý <b>số</b> (giá, giờ) và <b>chữ đánh vần</b>. Phần bản đồ: tìm “You are here”, tên đường, toà nhà lớn.</li>
<li>Từ chỉ đường thường gặp: <i>go along, turn left into, on the corner of, opposite, behind, between</i>.</li></ol>
<h3>Reading – Short-answer questions</h3>
<ol><li>Đọc kỹ giới hạn: <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b>.</li>
<li>Gạch từ hỏi: <i>What</i> → vật/sự việc; <i>Where</i> → nơi chốn; <i>When</i> → thời gian; <i>How many</i> → số.</li>
<li>Câu hỏi đi theo thứ tự bài đọc. Chép đúng từ trong bài; không cần viết lại cả câu.</li></ol>
<h3>Task 2 – Problem–Solution</h3>
<table><tr><th>Đoạn</th><th>Nội dung</th><th>Mẫu câu</th></tr>
<tr><td>Mở bài</td><td>Paraphrase + giới thiệu nội dung</td><td>This essay will examine the main causes of… and suggest some solutions.</td></tr>
<tr><td>Thân bài 1</td><td>2 nguyên nhân/vấn đề + giải thích + ví dụ</td><td>One major cause of this problem is… This leads to…</td></tr>
<tr><td>Thân bài 2</td><td>2 giải pháp tương ứng + kết quả mong đợi</td><td>One effective solution would be to… As a result,…</td></tr>
<tr><td>Kết bài</td><td>Tóm tắt nguyên nhân + giải pháp</td><td>In conclusion, … can be tackled if…</td></tr></table>
<p class="note">Điểm quan trọng: mỗi giải pháp phải <b>giải quyết đúng</b> một nguyên nhân em đã nêu. Giải pháp chung chung như “the government should do something” chỉ đạt band 5.</p>`,
grammar:{
 title:'Lượng từ: many/much, a few/a little, fewer/less, plenty of',
 explain:`<table><tr><th>Danh từ đếm được (cars, buses)</th><th>Danh từ không đếm được (traffic, pollution)</th></tr>
<tr><td>many cars · a few buses · few people</td><td>much traffic · a little space · little time</td></tr>
<tr><td><b>fewer</b> cars (ít xe hơn)</td><td><b>less</b> pollution (ít ô nhiễm hơn)</td></tr>
<tr><td colspan="2" style="text-align:center">a lot of / lots of / plenty of / some / any — dùng cho cả hai</td></tr></table>
<p class="note"><b>a few / a little</b> = một vài, một ít (ý tích cực); <b>few / little</b> = rất ít, gần như không (ý tiêu cực). Trong Task 2: <i>Fewer cars on the road would mean less pollution.</i></p>`,
 qs:[
  {t:'mcq',q:'There is too ______ traffic in the city centre.',opts:['many','much','few'],a:1,ex:'traffic không đếm được → much.'},
  {t:'mcq',q:'If ______ people drove, there would be less pollution.',opts:['fewer','less','little'],a:0,ex:'people đếm được → fewer.'},
  {t:'mcq',q:'Buses produce ______ emissions per person than cars.',opts:['fewer','less','much'],a:0,ex:'emissions là danh từ đếm được số nhiều → fewer (trong văn nói hay dùng less, nhưng viết chuẩn là fewer).'},
  {t:'mcq',q:'There are only ______ cycle lanes in my town, so cycling is dangerous.',opts:['a few','a little','much'],a:0,ex:'cycle lanes đếm được → a few.'},
  {t:'mcq',q:'We have ______ time, so let\'s take a taxi.',opts:['few','little','many'],a:1,ex:'time không đếm được; “little” = gần như không có (nên phải đi taxi).'},
  {t:'mcq',q:'There are ______ of buses at rush hour.',opts:['plenty','much','a little'],a:0,ex:'plenty of + danh từ đếm được hoặc không đếm được.'},
  {t:'gap',q:'How ______ does a metro ticket cost? (many/much)',a:['much'],ex:'Hỏi giá tiền: How much.'},
  {t:'gap',q:'How ______ students cycle to school? (many/much)',a:['many'],ex:'students đếm được → How many.'},
  {t:'gap',q:'The new metro means ______ cars in the city centre. (ít hơn)',a:['fewer'],ex:'cars đếm được → fewer.'},
  {t:'gap',q:'Car-free days lead to ______ noise. (ít hơn)',a:['less'],ex:'noise không đếm được → less.'}],
 pron:{title:'Âm /θ/ và /ð/ (th)',
  explain:'Âm <b>th</b> có 2 cách đọc: /θ/ (vô thanh) như <i>think, three</i> và /ð/ (hữu thanh) như <i>they, this</i>. Đặt đầu lưỡi giữa hai hàm răng, không đọc thành /s/, /t/ hay /d/. Nghe và chọn từ em nghe được.',
  items:[{w:'think',opts:['think','sink'],a:0},{w:'sink',opts:['think','sink'],a:1},{w:'three',opts:['three','tree'],a:0},
   {w:'day',opts:['they','day'],a:1},{w:'they',opts:['they','day'],a:0},{w:'tin',opts:['thin','tin'],a:1}]}
},
listening:{
 lead:'Section 1: Huy gọi điện cho văn phòng thông tin giao thông thành phố để hỏi về vé tàu điện và xe đạp công cộng. Câu 1–6: write <b>ONE WORD AND/OR A NUMBER</b>. Câu 7–10: ghi chữ cái <b>A–F</b> trên bản đồ.',
 order:['form','sel'],
 formTitle:'Questions 1–6: Complete the notes.',
 form:[['<b>CITY TRANSPORT – information for students</b>','',null],['Monthly metro pass (students)','{1} VND',1],['Metro trains start at','{2} a.m. every day',2],['To get a student pass, bring','your student card and a {3}',3],['Shared bikes: free for the first','{4} minutes',4],['Name of the bike app','{5}',5],['Helmets available from the','{6} at each station',6]],
 sel:{title:'Questions 7–10: Label the map. Write the correct letter, A–F.',box:MAP10,letters:'ABCDEF',items:[{n:7,text:'Metro entrance'},{n:8,text:'Bike station'},{n:9,text:'Airport bus stop'},{n:10,text:'Ticket office'}]},
 mcq:[],
 ans:{1:{a:['150000','150,000','one hundred and fifty thousand'],num:true,ex:'Bẫy: vé thường 300,000; “for students it’s half price, so one hundred and fifty thousand”.'},
  2:{a:['5.30','5:30','half past five'],num:true,ex:'Bẫy: “the shops open at seven, but the first train leaves at five thirty”.'},
  3:{a:['photo','photograph'],ex:'“your student card and a photo”.'},
  4:{a:['30','thirty'],num:true,ex:'Bẫy: “It used to be fifteen, but now the first thirty minutes are free.”'},
  5:{a:['pedalo'],ex:'Đánh vần P-E-D-A-L-O.'},
  6:{a:['kiosk'],ex:'“at the small kiosk at each station”.'},
  7:{a:['D'],t:'L-map',ex:'“The metro entrance is on the corner, just across Market Street from the market, in front of the shopping centre.”'},
  8:{a:['C'],t:'L-map',ex:'“The bike station is right at the corner of the park, where Park Road meets Market Street.”'},
  9:{a:['A'],t:'L-map',ex:'“The airport bus stops on the far side of the library, at the end of the building.”'},
  10:{a:['F'],t:'L-map',ex:'“The ticket office is inside the market, at the far end, next to Market Street.”'}},
 script:[['Narrator','You will hear a student phoning a city transport information office. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Officer','City Transport Information, Lan speaking. How can I help?'],
 ['Huy',"Hi. My name's Huy. I'm a high school student, and I'd like some information about the new metro and the shared bikes."],
 ['Officer',"Sure. Let's start with the metro. A normal monthly pass costs three hundred thousand dong, but for students it's half price, so one hundred and fifty thousand."],
 ['Huy','Great. And what time do the trains start in the morning?'],
 ['Officer',"The shops in the stations open at seven, but the first train leaves at five thirty every day, including weekends."],
 ['Huy','How do I get a student pass?'],
 ['Officer',"Just bring your student card and a photo to any ticket office. It only takes five minutes."],
 ['Huy','OK. And the shared bikes, are they free?'],
 ['Officer',"It used to be fifteen minutes, but now the first thirty minutes are free. After that, it's five thousand dong for every extra half hour."],
 ['Huy','Do I need to download an app?'],
 ['Officer',"Yes. The app is called Pedalo. That's P-E-D-A-L-O."],
 ['Huy','And what about helmets?'],
 ['Officer',"You can borrow one from the small kiosk at each station. Just show the staff your app."],
 ['Huy',"Thanks. One more thing. I'm going to the city centre on Saturday. Could you tell me where everything is? I'll be at the crossroads where Park Road meets Market Street."],
 ['Officer',"Of course. The metro entrance is on the corner, just across Market Street from the market, in front of the shopping centre. You can't miss it."],
 ['Officer',"The bike station is right at the corner of the park, where Park Road meets Market Street. It's very close to where you'll be standing."],
 ['Officer',"If you need the airport bus, walk up Park Road towards the library. The airport bus stops on the far side of the library, at the end of the building."],
 ['Officer',"And the ticket office is inside the market, at the far end, next to Market Street. It's open from seven until ten."],
 ['Huy','Perfect. Thank you so much.'],
 ['Narrator','That is the end of the conversation. You now have half a minute to check your answers.']]
},
dict:[['Huy',"I'd like some information about the new metro."],['Officer',"For students it's half price."],['Officer','The first train leaves at five thirty every day.'],['Officer','Just bring your student card and a photo.'],['Officer','It only takes five minutes.'],['Officer','Now the first thirty minutes are free.'],['Officer','You can borrow one from the small kiosk at each station.'],['Huy',"I'm going to the city centre on Saturday."],['Officer',"You can't miss it."],['Officer',"It's open from seven until ten."]],
reading:{
 title:'Giving Streets Back to People', lead:'Thời gian: 20 phút · bài đọc khoảng 680 từ · 13 câu.',
 paras:[
 ['A','For most of the twentieth century, cities were designed around the car. Wide roads, large car parks and motorways running through city centres were seen as signs of progress. In recent decades, however, a growing number of cities have begun to question this approach. Faced with traffic congestion, air pollution and rising rates of illnesses linked to inactivity, they are experimenting with ways of giving streets back to people.'],
 ['B','One of the most dramatic examples is found in Seoul, the capital of South Korea. For decades, a small river called the Cheonggyecheon had been covered by a busy road and an elevated motorway. In 2003, the city government made the controversial decision to demolish the motorway and restore the stream. Many shop owners protested, fearing that they would lose customers. When the project was completed in 2005, however, the result was a green corridor almost six kilometres long, with walking paths along the water. Studies later found that temperatures near the stream were several degrees lower than in nearby parts of the city on hot summer days, and that the number of bird and fish species in the area had increased considerably.'],
 ['C','A smaller but equally striking change took place in Pontevedra, a city in north-west Spain. In 1999, the local government banned most private cars from the historic centre and replaced traffic lights and car parks with squares, trees and wide pavements. Delivery vans are still allowed at certain times, and residents can drive to their own garages, but through traffic is no longer permitted. Supporters say that the centre is now quieter, safer and more attractive to visitors, and that children are once again able to walk to school alone. The city’s population has also grown since the changes, as families have moved into the centre to enjoy its calmer streets.'],
 ['D','Not every city can remove cars completely, but many have found ways to reduce their use. In Bogotá, the capital of Colombia, more than one hundred kilometres of roads are closed to cars every Sunday and public holiday for an event called Ciclovía. On these days, the streets are filled with cyclists, runners and families. The idea has since been copied by cities on several continents. Other cities, such as London and Singapore, charge drivers a fee to enter the busiest areas at peak times, and use the money to improve public transport.'],
 ['E','Critics argue that such policies can cause problems. When cars are banned from one area, traffic may simply move to the surrounding streets. Business owners often worry that customers who drive will go elsewhere. There are also concerns about fairness: older people and people with disabilities may find it harder to reach the city centre if they cannot use a car. Experts therefore stress that car-free schemes only succeed when good alternatives, such as frequent buses, safe cycle lanes and accessible pavements, are provided first.'],
 ['F','For fast-growing cities in South-East Asia, these lessons are especially relevant. In Ho Chi Minh City, the walking street on Nguyen Hue has become one of the most popular public spaces in the city, attracting large crowds every evening and weekend. The city’s first metro line, which opened at the end of 2024, offers commuters an alternative to motorbikes for the first time. However, the motorbike remains by far the most common means of transport, and many residents depend on it for work. Street vendors, delivery drivers and small business owners, for instance, often carry goods on their motorbikes, so any plan to reduce their use will need to take these people into account.'],
 ['G','Transport planners agree that there is no single solution. Successful cities usually combine several measures: investing in public transport, making walking and cycling safer, and gradually reducing space for private vehicles. Change also requires patience. In both Seoul and Pontevedra, many people were strongly opposed at first, but once they experienced the benefits, most came to support the new streets. As one planner put it, people do not need to love their city less in order to drive in it less.']],
 groups:[
 {title:'Questions 1–5: Answer the questions below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage.',box:'',qs:[
  {t:'gap',tag:'R-short',max:3,before:'1. What covered the Cheonggyecheon river before 2003, apart from a busy road?',after:'',a:['an elevated motorway','elevated motorway','a motorway','motorway'],ex:'B: “covered by a busy road and an elevated motorway”.'},
  {t:'gap',tag:'R-short',max:3,before:'2. Which group of people protested against the Seoul project?',after:'',a:['shop owners','many shop owners'],ex:'B: “Many shop owners protested”.'},
  {t:'gap',tag:'R-short',max:3,before:'3. How long is the green corridor in Seoul? (kilometres)',after:'',a:['almost six kilometres','six kilometres','almost 6 kilometres','6 kilometres','6 km','six km','almost six','6'],ex:'B: “a green corridor almost six kilometres long”.'},
  {t:'gap',tag:'R-short',max:3,before:'4. In which year did Pontevedra ban most private cars from its centre?',after:'',a:['1999','in 1999'],ex:'C: “In 1999, the local government banned most private cars”.'},
  {t:'gap',tag:'R-short',max:3,before:'5. What is the name of Bogotá’s car-free event?',after:'',a:['ciclovia','ciclovía'],ex:'D: “an event called Ciclovía”.'}]},
 {title:'Questions 6–9: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Temperatures near the restored stream in Seoul are lower than in nearby areas on hot days.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'B: “temperatures near the stream were several degrees lower… on hot summer days”.'},
  {t:'select',text:'In Pontevedra, residents are not allowed to drive into the centre at all.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'C: “residents can drive to their own garages”.'},
  {t:'select',text:'Singapore introduced its charge before London.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'D nhắc cả hai thành phố nhưng không nói thời điểm.'},
  {t:'select',text:'Ho Chi Minh City’s first metro line opened at the end of 2024.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'F: “The city’s first metro line, which opened at the end of 2024”.'}]},
 {title:'Questions 10–13: Choose the correct letter, A, B, C or D.',box:'',qs:[
  {t:'mcq',text:'According to paragraph E, car-free schemes succeed only when',opts:['businesses agree to them.','good alternatives are provided first.','cars are banned from the whole city.','older people are allowed to drive.'],a:1,ex:'E: “car-free schemes only succeed when good alternatives… are provided first”.'},
  {t:'mcq',text:'What problem with car bans is mentioned in paragraph E?',opts:['Traffic may move to nearby streets.','Public transport becomes too crowded.','Tourists stop visiting the city.','Roads become more dangerous.'],a:0,ex:'E: “traffic may simply move to the surrounding streets”.'},
  {t:'mcq',text:'What does the writer say about motorbikes in Ho Chi Minh City?',opts:['They will soon be banned.','They are still the main form of transport.','They are less popular than the metro.','They are not allowed on Nguyen Hue.'],a:1,ex:'F: “the motorbike remains by far the most common means of transport”.'},
  {t:'mcq',text:'What does paragraph G say about public opinion in Seoul and Pontevedra?',opts:['Most people supported the changes from the start.','People changed their minds after experiencing the benefits.','People are still strongly opposed.','Only visitors liked the new streets.'],a:1,ex:'G: “many people were strongly opposed at first, but once they experienced the benefits, most came to support the new streets”.'}]}]
},
writing:{
 title:'Task 2 – Problem–Solution',
 prompt:'Traffic congestion is becoming a serious problem in many large cities. What are the main causes of this problem, and what measures could be taken to solve it? Write at least 250 words.',
 min:250,max:320,
 wex:[
  ['Đề này yêu cầu em viết gì?',['Nêu ý kiến đồng ý hay không','Nêu nguyên nhân và giải pháp','Nêu ưu điểm và nhược điểm'],1,'“What are the main causes… what measures could be taken” → Causes + Solutions.'],
  ['Câu mở bài nào tốt nhất?',['Traffic congestion is a big problem.','Traffic jams have become a daily problem in many major cities. This essay will examine the main causes of this situation and suggest some practical solutions.','I think traffic is very bad in my city.'],1,'B paraphrase + giới thiệu nội dung bài.'],
  ['Câu chủ đề hay nhất cho đoạn nguyên nhân:',['There are many reasons for traffic.','One major cause of traffic congestion is the rapid increase in the number of private vehicles.','Cars are bad.'],1,'Câu chủ đề cụ thể, dùng “one major cause of…”.'],
  ['Giải pháp nào giải quyết đúng nguyên nhân “quá nhiều phương tiện cá nhân”?',['Planting more trees in parks','Investing in fast, cheap public transport so people leave their motorbikes at home','Building more shopping centres'],1,'Giải pháp phải nối trực tiếp với nguyên nhân.'],
  ['“______ fewer people drove to work, there would be less congestion.”',['If','Because','Although'],0,'Câu điều kiện loại 2 cho kết quả của giải pháp.'],
  ['Câu kết bài phù hợp nhất:',['In conclusion, traffic congestion is mainly caused by the growing number of private vehicles and poor public transport, but it can be reduced if governments invest in public transport and limit car use in city centres.','In conclusion, I like the metro.','In conclusion, there are many problems in the world.'],0,'Kết bài tóm tắt cả nguyên nhân và giải pháp.']],
 outline:['Mở bài: paraphrase + “This essay will examine the main causes… and suggest some solutions.”','Thân bài 1 (nguyên nhân): ① số lượng xe máy, ô tô cá nhân tăng nhanh; ② giao thông công cộng chậm, ít tuyến → người dân không có lựa chọn khác. Ví dụ TP.HCM.','Thân bài 2 (giải pháp): ① đầu tư metro, xe buýt nhanh, làn riêng → giải quyết ②; ② hạn chế xe cá nhân ở trung tâm: phí ùn tắc, phố đi bộ (London, Nguyễn Huệ) → giải quyết ①.','Kết bài: tóm tắt nguyên nhân + giải pháp.'],
 model55:'Nowadays, traffic jams are a big problem in many big cities, such as Ho Chi Minh City. In this essay, I will talk about the causes of this problem and some solutions.<br><br>There are two main causes of traffic congestion. Firstly, there are too many private vehicles. Many people have motorbikes and more and more people buy cars, so the roads are very crowded, especially in rush hour. Secondly, public transport is not good enough. Buses are often slow and they do not go to many places, so people prefer to use their own motorbikes. For example, my father tried to go to work by bus, but it took him more than one hour, so now he goes by motorbike again.<br><br>There are some solutions to this problem. The first solution is to improve public transport. The government should build more metro lines and buy more buses. If public transport is fast and cheap, people will use it more, and there will be fewer motorbikes on the road. This will also help to reduce air pollution in the city. The second solution is to limit private vehicles in the city centre. For example, the city can make some streets for pedestrians only, like Nguyen Hue walking street, or ask drivers to pay money to go into the centre.<br><br>In conclusion, traffic congestion is caused by too many vehicles and bad public transport. The government can solve this problem by improving public transport and limiting private vehicles in the city centre.',
 model:'Traffic jams have become a daily reality in many of the world’s major cities, wasting time and damaging people’s health. This essay will examine the <b>main causes</b> of this situation and suggest some <b>practical measures</b> to tackle it.<br><br>The most obvious cause of congestion is the <b>rapid growth in the number of private vehicles</b>. As incomes rise, more families can afford motorbikes and cars, but roads in older city centres cannot be widened easily. In Ho Chi Minh City, <i>for example</i>, millions of motorbikes compete for space on narrow streets during rush hour. <i>A second cause</i> is the lack of <b>reliable public transport</b>. When buses are slow, infrequent or do not reach residential areas, commuters have little choice but to use their own vehicles, which <b>leads to</b> even more traffic.<br><br><i>Several measures could help to solve this problem.</i> <i>Firstly</i>, governments should <b>invest heavily in</b> fast and affordable public transport, such as metro lines and buses with dedicated lanes. <i>If</i> these services were quicker than driving, many commuters <b>would</b> willingly leave their motorbikes at home. <i>Secondly</i>, cities could <b>discourage the use of private vehicles</b> in the busiest areas. A <b>congestion charge</b>, like those used in London and Singapore, would reduce the number of cars entering the centre at peak times, while car-free streets such as Nguyen Hue would give more space to pedestrians. The money raised could then be spent on further improving public transport.<br><br><i>In conclusion</i>, traffic congestion is mainly caused by the growing number of private vehicles and the weakness of public transport. These problems can be tackled if governments provide better alternatives and, at the same time, gradually limit car and motorbike use in city centres.',
 note:'Khoảng 280 từ, band 6.0–6.5. Hai giải pháp nối trực tiếp với hai nguyên nhân (giao thông công cộng ↔ thiếu phương tiện công cộng; phí ùn tắc ↔ quá nhiều xe). Dùng câu điều kiện loại 2 để nói kết quả của giải pháp.',
 checklist:['Mở bài nêu rõ bài sẽ bàn nguyên nhân và giải pháp','Ít nhất 2 nguyên nhân, có ví dụ','Mỗi giải pháp giải quyết đúng một nguyên nhân','Kết bài tóm tắt cả nguyên nhân và giải pháp','Ít nhất 250 từ']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 1, gửi cô qua Zalo.',
 items:[
 ['How do you usually get to school?',"I usually go to school by motorbike with my dad, because it's about five kilometres from my house. When it rains heavily, he sometimes drives me by car instead."],
 ['Is there much traffic where you live?',"Yes, a lot, especially in the rush hour. The main road near my house is always crowded with motorbikes and trucks between six and eight in the morning."],
 ['Have you ever taken the metro?',"Yes, I tried it once with my friends after it opened. It was clean, cool and much faster than going by motorbike, so I'd like to use it more often."],
 ['Would you like to live in a big city in the future?',"I think so, at least while I'm studying, because big cities have more universities and job opportunities. But later I might prefer a quieter place with less pollution."]],
 part2:{cue:'Describe a crowded place you have been to.',bullets:['where it was','when you went there','why it was crowded','and explain how you felt about being there.'],
  notes:'Ben Thanh Market area · last Tet, with cousins · shopping before Tet, tourists, fireworks night · excited but tired, hot, lost my cousin for 10 minutes',
  model:"I'd like to describe Nguyen Hue walking street in Ho Chi Minh City on New Year's Eve last year. I went there with my cousins at around nine in the evening to watch the fireworks. I had seen photos of the crowds online, but I hadn't expected it to be quite so busy. There were thousands of people there: families with small children, groups of students, and a lot of foreign tourists taking photos. It was crowded for several reasons. First of all, it was a holiday, so almost nobody had to work the next day. Also, there was a music show on a big stage, and of course, everyone wanted to see the fireworks at midnight. At one point, I lost my cousin in the crowd for about ten minutes, which was quite scary because our phones had almost no signal. To be honest, I had mixed feelings about being there. On the one hand, the atmosphere was amazing, and the fireworks were absolutely beautiful. On the other hand, it was hot and noisy, and it took us more than an hour to get home afterwards. I'm glad I went once, but next time I think I'll watch the fireworks on TV!"},
 part3:[
 ['Why do so many people move from the countryside to big cities?',"I think the main reason is jobs. Big cities offer more job opportunities and higher salaries. Also, the best universities and hospitals are usually in cities, so young people move there to study and often stay after they graduate."],
 ['What can governments do to make cities less crowded?',"One solution is to develop other cities and towns, so that people don't all have to move to one place. Governments could also build better public transport, so people can live in the suburbs and commute easily to the centre."],
 ['Do you think cars will be banned from city centres in the future?',"In some cities, maybe. Several European cities have already done this successfully. In Vietnam, I think it will take a long time, because so many people depend on motorbikes for work. It would only work if public transport becomes much better first."]]
},
quiz:[
 ['“Commute” nghĩa là:',['đi lại hằng ngày (đi làm, đi học)','đi du lịch','đi bộ'],0],
 ['There is too ______ traffic in the centre.',['many','much','few'],1],
 ['Short answer “NO MORE THAN THREE WORDS”: đáp án “a busy elevated motorway road” (4 từ) →',['đúng','sai','được nửa điểm'],1],
 ['“Pedestrian” nghĩa là:',['người đi bộ','tài xế','hành khách'],0],
 ['Task 2 Problem–Solution: mỗi giải pháp nên',['giải quyết đúng một nguyên nhân đã nêu','càng nhiều càng tốt','không cần ví dụ'],0],
 ['______ cars means ______ pollution.',['Fewer / less','Less / fewer','Few / little'],0],
 ['“Infrastructure” nghĩa là:',['cơ sở hạ tầng','khu dân cư','khí thải'],0],
 ['Câu hỏi “How many…?” cần đáp án là:',['nơi chốn','con số','tên người'],1],
 ['Từ “think” bắt đầu bằng âm:',['/θ/','/s/','/t/'],0],
 ['“Tackle a problem” nghĩa là:',['giải quyết vấn đề','gây ra vấn đề','bỏ qua vấn đề'],0]]
}
);
