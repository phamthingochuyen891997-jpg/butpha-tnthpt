/* Unit 5 (Environment), Unit 6 (Education) — chặng 2: mở rộng dạng bài */
const MAP5=`<svg viewBox="0 0 560 390" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" role="img" aria-label="Green Hill Nature Reserve map">
<rect x="2" y="2" width="556" height="386" rx="10" fill="#EAF6E6" stroke="#7BA66F" stroke-width="2"/>
<text x="16" y="24" font-size="15" font-weight="700" fill="#1B2A4A">Green Hill Nature Reserve</text>
<ellipse cx="280" cy="78" rx="150" ry="44" fill="#86C5FF" stroke="#2E5AA7"/><text x="280" y="83" font-size="14" text-anchor="middle" fill="#1B2A4A" font-weight="700">LAKE</text>
<path d="M440 120 C420 170 450 220 430 260 C415 300 440 340 430 388" fill="none" stroke="#86C5FF" stroke-width="10"/><text x="452" y="300" font-size="11" fill="#2E5AA7">stream</text>
<rect x="268" y="120" width="24" height="268" fill="#E8D9B0"/><path d="M130 112 C180 128 380 128 430 112" fill="none" stroke="#E8D9B0" stroke-width="12"/>
<rect x="292" y="204" width="160" height="16" fill="#E8D9B0"/><rect x="420" y="198" width="26" height="28" fill="#A0785A"/><text x="433" y="246" font-size="11" text-anchor="middle" fill="#1B2A4A">bridge</text>
<rect x="305" y="290" width="104" height="50" rx="6" fill="#FFA62B"/><text x="357" y="311" font-size="12" text-anchor="middle" fill="#1B2A4A" font-weight="700">Visitor centre</text><text x="357" y="328" font-size="11" text-anchor="middle" fill="#1B2A4A">★ You are here</text>
<rect x="18" y="300" width="112" height="62" rx="6" fill="#D9D9D9"/><text x="74" y="336" font-size="12" text-anchor="middle" fill="#1B2A4A">Car park</text>
<text x="280" y="382" font-size="12" text-anchor="middle" fill="#1B2A4A" font-weight="700">▲ Main entrance</text>
<g fill="#5E9E57"><circle cx="60" cy="170" r="13"/><circle cx="90" cy="200" r="11"/><circle cx="130" cy="160" r="12"/><circle cx="230" cy="250" r="10"/><circle cx="520" cy="160" r="12"/><circle cx="500" cy="340" r="11"/></g>
<g font-size="15" font-weight="700" text-anchor="middle" fill="#fff">
<rect x="152" y="256" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="166" y="275">A</text>
<rect x="222" y="300" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="236" y="319">B</text>
<rect x="84" y="62" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="98" y="81">C</text>
<rect x="364" y="170" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="378" y="189">D</text>
<rect x="488" y="40" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="502" y="59">E</text>
<rect x="468" y="198" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="482" y="217">F</text>
<rect x="196" y="198" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="210" y="217">G</text>
<rect x="424" y="302" width="28" height="26" rx="5" fill="#2E5AA7"/><text x="438" y="321">H</text></g></svg>`;

window.UNITS.push(

/* ======================= UNIT 5 ======================= */
{
id:'u5', title:'Environment', week:5, video:'',
focus:'Listening Section 2: Map labelling · Reading: Sentence completion + MCQ · Writing Task 1: Pie chart',
voices:{'Ranger':'bm_lewis','ex':'bf_alice','ans':'am_michael'},
ltags:{},
qtags:['V','V','G','S','V','S','V','G','S','V'],
lemon:['<b>L</b> – Nhìn bản đồ 30 giây: tìm “You are here”, lối vào, các hướng Bắc/Nam, tên các địa điểm đã có sẵn.','<b>E</b> – Gạch từ chỉ vị trí người nói dùng: <i>opposite, next to, just past, at the end of, on your left</i>.','<b>M</b> – Đặt ngón tay ở “You are here” và di chuyển theo lời người nói; Task 1: nhóm các phần tăng / giảm / không đổi.','<b>O</b> – Bản đồ chỉ điền chữ cái (A–H); Task 1 viết 150 từ trong 20 phút.','<b>N</b> – Ghi vào Sổ lỗi: từ chỉ vị trí em nghe nhầm, từ vựng môi trường viết sai chính tả.'],
goalText:'Hết tuần, em nghe và theo dõi được đường đi trên bản đồ (Section 2), làm được bài đọc dài ~500 từ với dạng Sentence completion và trắc nghiệm, và mô tả biểu đồ tròn (pie chart) trong 150 từ.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','60 phút','≥ 9/13'],['7. Writing','60 phút','150 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['environment','n','môi trường','We all have a duty to protect the environment.'],
['pollution','n','sự ô nhiễm','Air pollution is a serious problem in big cities.'],
['waste','n','rác thải','Households produce a lot of plastic waste.'],
['single-use plastic','n','nhựa dùng một lần','Many cafés have stopped using single-use plastic straws.'],
['recycle','v','tái chế','Paper and glass can be recycled easily.'],
['reduce','v','giảm bớt','We should reduce the amount of rubbish we throw away.'],
['landfill','n','bãi chôn lấp rác','Most of the city’s rubbish still goes to landfill.'],
['compost','n/v','phân ủ; ủ phân','Food waste can be turned into compost for gardens.'],
['incineration','n','đốt rác','Incineration produces energy but also releases smoke.'],
['climate change','n','biến đổi khí hậu','Climate change is causing more extreme weather.'],
['global warming','n','sự nóng lên toàn cầu','Global warming is melting the ice at the poles.'],
['greenhouse gas','n','khí nhà kính','Cars release greenhouse gases such as carbon dioxide.'],
['renewable energy','n','năng lượng tái tạo','Solar and wind power are forms of renewable energy.'],
['fossil fuel','n','nhiên liệu hóa thạch','Coal and oil are fossil fuels.'],
['wildlife','n','động vật hoang dã','The reserve is home to a lot of wildlife.'],
['habitat','n','môi trường sống','Cutting down forests destroys animals’ habitats.'],
['endangered species','n','loài có nguy cơ tuyệt chủng','The tiger is an endangered species.'],
['deforestation','n','nạn phá rừng','Deforestation leads to floods and landslides.'],
['flood','n/v','lũ lụt; ngập','Heavy rain flooded many streets in the city.'],
['litter','n/v','rác vứt bừa; xả rác','Visitors must not drop litter in the park.'],
['eco-friendly','adj','thân thiện với môi trường','She uses eco-friendly bags when she goes shopping.'],
['take action','v','hành động','Governments need to take action on pollution.'],
['raise awareness','v','nâng cao nhận thức','The campaign raised awareness of plastic waste.'],
['account for','v','chiếm (tỉ lệ)','Landfill accounted for 60% of all waste.'],
['a quarter / a third','n','một phần tư / một phần ba','Recycling made up about a third of the total.']],
vocabTask:'Viết 5 câu về vấn đề môi trường ở nơi em sống (dùng <i>pollution, litter, flood, waste, take action</i>) và 5 câu mô tả tỉ lệ bằng <i>account for, make up, a quarter, a third, the majority of</i>.',
strategy:`
<h3>Listening – Map / plan labelling (Section 2)</h3>
<ol><li><b>Trước khi nghe (30 giây):</b> tìm “You are here” hoặc lối vào; đọc tên các địa điểm đã có trên bản đồ (lake, car park, bridge…). Đây là “mốc” người nói sẽ dùng.</li>
<li><b>Khi nghe:</b> đặt ngón tay ở điểm bắt đầu và di chuyển theo lời người nói. Câu hỏi đi theo thứ tự đường đi.</li>
<li>Chỉ cần ghi <b>chữ cái</b>. Có nhiều chữ cái thừa (8 chữ cho 5 câu).</li></ol>
<table><tr><th>Từ chỉ vị trí</th><th>Nghĩa</th><th>Từ chỉ hướng đi</th><th>Nghĩa</th></tr>
<tr><td>opposite</td><td>đối diện</td><td>go straight ahead</td><td>đi thẳng</td></tr>
<tr><td>next to / beside</td><td>bên cạnh</td><td>turn left / right</td><td>rẽ trái / phải</td></tr>
<tr><td>just past / just before</td><td>vừa qua / ngay trước</td><td>where the path divides</td><td>chỗ đường chia nhánh</td></tr>
<tr><td>at the far end of</td><td>ở cuối</td><td>cross the bridge</td><td>qua cầu</td></tr>
<tr><td>on the other side of</td><td>ở phía bên kia</td><td>follow the path round</td><td>đi men theo lối đi</td></tr>
<tr><td>in the corner</td><td>ở góc</td><td>halfway up the path</td><td>giữa đường đi lên</td></tr></table>
<h3>Reading – Sentence completion & Multiple choice</h3>
<ol><li><b>Sentence completion:</b> đọc giới hạn từ (NO MORE THAN TWO WORDS). Đoán loại từ cần điền (danh từ? số?). Câu hỏi đi theo thứ tự bài đọc.</li>
<li>Chép <b>đúng từ trong bài</b>, không đổi dạng từ, kiểm tra chính tả.</li>
<li><b>Multiple choice (A–D):</b> gạch từ khóa ở câu hỏi, tìm đoạn chứa thông tin, đọc kỹ 2–3 câu quanh đó. Loại phương án <i>có trong bài nhưng không trả lời câu hỏi</i>.</li></ol>
<h3>Task 1 – Pie chart (biểu đồ tròn)</h3>
<table><tr><th>Đoạn</th><th>Nội dung</th><th>Mẫu câu</th></tr>
<tr><td>Mở bài</td><td>Paraphrase đề</td><td>The pie charts compare the proportions of…</td></tr>
<tr><td>Overview</td><td>2 đặc điểm chính, KHÔNG số liệu</td><td>Overall, landfill was the most common method, but its share fell, while…</td></tr>
<tr><td>Thân bài 1</td><td>Phần lớn nhất / thay đổi nhiều nhất</td><td>Landfill accounted for 60% in 2005, but this figure halved to 30%…</td></tr>
<tr><td>Thân bài 2</td><td>Các phần còn lại</td><td>By contrast, the proportion of… rose from… to… · …remained unchanged at…</td></tr></table>
<p class="note">Cách nói tỉ lệ: 50% = a half · 25% = a quarter · 33% = a third · 60–70% = the majority / well over half · 10% = one in ten. Nhớ dùng <b>the proportion / the percentage / the share of</b> thay vì lặp lại “the number of”.</p>`,
grammar:{
 title:'Câu bị động (Passive voice) cho môi trường và Task 1',
 explain:`<table><tr><th>Thì</th><th>Cấu trúc bị động</th><th>Ví dụ</th></tr>
<tr><td>Hiện tại đơn</td><td>am/is/are + V3</td><td>Plastic <b>is used</b> every day.</td></tr>
<tr><td>Quá khứ đơn</td><td>was/were + V3</td><td>60% of waste <b>was sent</b> to landfill in 2005.</td></tr>
<tr><td>Hiện tại hoàn thành</td><td>has/have been + V3</td><td>Many trees <b>have been cut down</b>.</td></tr>
<tr><td>Động từ khuyết thiếu</td><td>can/should/must + be + V3</td><td>Glass <b>can be recycled</b>.</td></tr></table>
<p class="note">Dùng bị động khi <b>không quan trọng ai làm</b> (Waste is collected every morning). Trong Task 1, bị động giúp câu tự nhiên hơn: <i>30% of waste was recycled</i> thay vì <i>People recycled 30% of waste</i>.</p>`,
 qs:[
  {t:'mcq',q:'Every year, millions of tonnes of plastic ______ into the ocean.',opts:['are thrown','throw','are throwing'],a:0,ex:'Nhựa không tự ném → bị động hiện tại: are thrown.'},
  {t:'mcq',q:'In 2005, 60% of household waste ______ to landfill.',opts:['sent','was sent','has been sent'],a:1,ex:'Mốc quá khứ 2005 → was sent.'},
  {t:'mcq',q:'Since 2010, thousands of trees ______ in the city.',opts:['have been planted','were planted','are planted'],a:0,ex:'Since + mốc → hiện tại hoàn thành bị động.'},
  {t:'mcq',q:'Food waste can ______ into compost.',opts:['turn','be turned','been turned'],a:1,ex:'can + be + V3.'},
  {t:'mcq',q:'Visitors ______ not allowed to feed the animals.',opts:['is','are','be'],a:1,ex:'Visitors (số nhiều) → are allowed.'},
  {t:'mcq',q:'The proportion of waste that ______ rose from 15% to 35%.',opts:['recycled','was recycled','was recycling'],a:1,ex:'Rác “được tái chế” → was recycled.'},
  {t:'gap',q:'Glass bottles should be ______ (recycle) after use.',a:['recycled'],ex:'should be + V3.'},
  {t:'gap',q:'The reserve was ______ (open) to the public in 2015.',a:['opened'],ex:'was + V3.'},
  {t:'gap',q:'Solar panels have been ______ (install) on the school roof.',a:['installed'],ex:'have been + V3.'},
  {t:'gap',q:'Litter ______ collected every morning by volunteers. (be – hiện tại)',a:['is'],ex:'Litter không đếm được → is.'}],
 pron:{title:'Trọng âm danh từ ghép (compound nouns)',
  explain:'Danh từ ghép thường nhấn vào <b>từ đầu tiên</b>: <b>GREEN</b>house, <b>CAR</b> park, <b>BUS</b> stop. Bấm 🔊, nghe và chọn phần được nhấn mạnh.',
  items:[{w:'greenhouse',opts:['GREEN-house','green-HOUSE'],a:0},{w:'car park',opts:['CAR park','car PARK'],a:0},{w:'rainforest',opts:['RAIN-forest','rain-FOREST'],a:0},
   {w:'bus stop',opts:['BUS stop','bus STOP'],a:0},{w:'wildlife',opts:['WILD-life','wild-LIFE'],a:0},{w:'rubbish bin',opts:['RUBBISH bin','rubbish BIN'],a:0}]}
},
listening:{
 lead:'Section 2: một kiểm lâm (ranger) giới thiệu khu bảo tồn với học sinh. Câu 1–5: ghi chữ cái <b>A–H</b> trên bản đồ. Câu 6–10: chọn A, B hoặc C.',
 order:['sel','mcq'],
 sel:{title:'Questions 1–5: Label the map. Write the correct letter, A–H.',box:MAP5,letters:'ABCDEFGH',items:[{n:1,text:'Café'},{n:2,text:'Picnic area'},{n:3,text:'Recycling point'},{n:4,text:'Butterfly garden'},{n:5,text:'Bird hide'}]},
 mcq:[
  {n:6,q:'The nature reserve was created mainly to',opts:['provide a place for school trips.','protect birds that stop there in winter.','supply clean water to the town.'],a:1,ex:'“the main reason… was to protect the birds that stop here every winter”.'},
  {n:7,q:'What does the ranger say about the paths?',opts:['Some are closed after heavy rain.','Bicycles are allowed on all of them.','They were rebuilt last year.'],a:0,ex:'“after heavy rain… we close the lake path”.'},
  {n:8,q:'Visitors who bring food should',opts:['eat it only in the café.','take their rubbish home.','share it with the animals.'],a:1,ex:'“please take all your rubbish home with you”.'},
  {n:9,q:'The volunteer programme for students takes place',opts:['every Saturday morning.','on the first Sunday of each month.','during the summer holidays only.'],a:1,ex:'“on the first Sunday of every month”.'},
  {n:10,q:'Students who join the programme will mainly',opts:['plant trees.','count birds.','clean the lake.'],a:0,ex:'“most of the time you’ll be planting young trees”.'}],
 ans:{1:{a:['B'],t:'L-map',ex:'“The café is directly opposite the visitor centre, on the other side of the main path.”'},
  2:{a:['G'],t:'L-map',ex:'“on your left, among the trees, is the picnic area”.'},
  3:{a:['D'],t:'L-map',ex:'“turn right… just before you reach the bridge, on your left, you’ll see the recycling point”.'},
  4:{a:['F'],t:'L-map',ex:'“cross the bridge, and the butterfly garden is straight ahead of you”.'},
  5:{a:['C'],t:'L-map',ex:'“at the far western end of the lake… the bird hide”.'}},
 script:[['Narrator','You will hear a ranger talking to a group of students who are visiting a nature reserve. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Ranger',"Good morning, everyone, and welcome to Green Hill Nature Reserve. My name's David, and I'm one of the rangers here. Before you go off and explore, I'd like to tell you where everything is, so please look at the map in your information pack."],
 ['Ranger',"We're standing in the visitor centre, which is just inside the main entrance, on the right. If you need a drink or a snack, the café is directly opposite the visitor centre, on the other side of the main path. It's open until four o'clock."],
 ['Ranger',"Now, the main path goes straight ahead from here, all the way up to the lake. About halfway up, the path divides. If you look to your left at that point, among the trees, is the picnic area. There are tables there, and it's a lovely place for lunch."],
 ['Ranger',"If you turn right where the path divides, you'll be walking towards the stream. Just before you reach the bridge, on your left, you'll see the recycling point. There are separate bins for paper, plastic and food waste, so please use them."],
 ['Ranger',"Then cross the bridge, and the butterfly garden is straight ahead of you. It's at its best in the late morning, when the sun is out."],
 ['Ranger',"Finally, if you're interested in birds, go back to the main path and follow it up to the lake. Turn left and follow the path round the lake. At the far western end of the lake, you'll find the bird hide. It's a small wooden building, so you can watch the birds without disturbing them."],
 ['Ranger',"Now, a little about the reserve itself. People often think it was created for school trips, and we do welcome lots of schools, but the main reason the reserve was set up, back in 2009, was to protect the birds that stop here every winter on their way south."],
 ['Ranger',"A few rules before you go. Bicycles are only allowed on the main path, not on the smaller paths. And after heavy rain, the ground near the water gets very muddy, so we close the lake path for a day or two. Today it's open, so you're lucky."],
 ['Ranger',"If you've brought food, that's fine, but please don't feed the animals, and please take all your rubbish home with you. We don't have bins along the paths, because they attract animals."],
 ['Ranger',"Lastly, some of you asked about volunteering. We run a volunteer programme for students on the first Sunday of every month. You might imagine you'd be cleaning the lake or counting birds. Actually, the bird counts are done by experts, so most of the time you'll be planting young trees along the stream."],
 ['Ranger',"If you're interested, leave your name at the visitor centre. Right, enjoy your visit!"],
 ['Narrator','That is the end of the talk. You now have half a minute to check your answers.']]
},
dict:[['Ranger',"I'd like to tell you where everything is."],['Ranger','The café is directly opposite the visitor centre.'],['Ranger','About halfway up, the path divides.'],['Ranger',"It's a lovely place for lunch."],['Ranger',"You'll be walking towards the stream."],['Ranger','There are separate bins for paper, plastic and food waste.'],['Ranger','Follow the path round the lake.'],['Ranger','Bicycles are only allowed on the main path.'],['Ranger','Please take all your rubbish home with you.'],['Ranger',"Most of the time you'll be planting young trees."]],
reading:{
 title:'Rivers of Plastic', lead:'Thời gian: 20 phút · bài đọc khoảng 500 từ · 13 câu.',
 paras:[
 ['A','Every year, millions of tonnes of plastic waste end up in the world’s oceans. For a long time, scientists believed that most of this plastic was dropped directly into the sea by ships or by people on beaches. However, recent research has shown a different picture. Today, experts estimate that around 80 percent of ocean plastic comes from the land, and that rivers are the main route by which it reaches the sea.'],
 ['B','A study published in 2021 found that just 1,000 rivers are responsible for most of the plastic that flows into the oceans. Surprisingly, many of them are not large rivers. Small rivers that run through busy cities often carry more plastic than huge rivers in the countryside, because there are more people living close to their banks and fewer systems to collect waste.'],
 ['C','Several factors explain why so much plastic enters rivers. The first is the rapid growth in the use of single-use products such as bags, bottles and food packaging. The second is poor waste management. In many fast-growing cities, rubbish is not collected regularly, so it is left in the street or thrown into canals. When it rains heavily, this waste is washed into rivers and carried towards the sea.'],
 ['D','Once plastic is in the water, it does not disappear. Sunlight and waves slowly break it into tiny pieces called microplastics, which are often smaller than a grain of rice. These pieces are eaten by fish and other sea creatures, and some scientists worry that they may also enter the human body through the food we eat. Larger pieces of plastic are also dangerous: sea turtles, for example, often mistake floating bags for jellyfish, which are their natural food.'],
 ['E','Fortunately, a number of solutions are being tested. In the Netherlands, an organisation has designed floating barriers that guide plastic towards a collection point while allowing fish to swim underneath. In the United States, a machine known as “Mr Trash Wheel” has removed hundreds of tonnes of rubbish from a river in Baltimore. It is powered by the river current and by solar panels, so it does not need fuel.'],
 ['F','However, most experts agree that cleaning rivers is not enough on its own. Collecting plastic after it has entered the water is expensive and slow. The most effective approach is to stop plastic from reaching rivers in the first place. This means improving rubbish collection in cities, encouraging recycling and reducing the use of single-use plastic. Some countries have already banned plastic bags, and in several of them the amount of plastic found in rivers has fallen noticeably.'],
 ['G','Individuals can also make a difference. Carrying a reusable bottle, refusing plastic straws and taking part in local clean-up days may seem like small actions, but if millions of people change their habits, the effect on the world’s rivers – and oceans – could be enormous.']],
 groups:[
 {title:'Questions 1–6: Complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage.',box:'',qs:[
  {t:'gap',before:'Most of the plastic that flows into the oceans comes from about',after:'rivers.',a:['1000','1,000','one thousand'],ex:'B: “just 1,000 rivers are responsible for most of the plastic”.'},
  {t:'gap',before:'One reason for plastic pollution is the rapid',after:'in single-use products.',a:['growth'],ex:'C: “the rapid growth in the use of single-use products”.'},
  {t:'gap',before:'In some cities, uncollected rubbish is thrown into',after:'.',a:['canals'],ex:'C: “left in the street or thrown into canals”.'},
  {t:'gap',before:'Tiny pieces of broken plastic are known as',after:'.',a:['microplastics'],ex:'D: “tiny pieces called microplastics”.'},
  {t:'gap',before:'Sea turtles sometimes think plastic bags are',after:'.',a:['jellyfish'],ex:'D: “mistake floating bags for jellyfish”.'},
  {t:'gap',before:'Mr Trash Wheel uses the river current and',after:'for power.',a:['solar panels'],ex:'E: “powered by the river current and by solar panels”.'}]},
 {title:'Questions 7–10: Choose the correct letter, A, B, C or D.',box:'',qs:[
  {t:'mcq',text:'According to paragraph A, recent research shows that most ocean plastic',opts:['comes from the land.','is dropped by ships.','is left on beaches.','is found near the coast.'],a:0,ex:'A: “around 80 percent of ocean plastic comes from the land”. B, C là quan niệm cũ.'},
  {t:'mcq',text:'Why do some small rivers carry more plastic than large ones?',opts:['They flow more quickly.','More people live near them.','They are closer to the sea.','They are cleaned less often.'],a:1,ex:'B: “more people living close to their banks and fewer systems to collect waste”.'},
  {t:'mcq',text:'What does the writer say about the floating barriers in the Netherlands?',opts:['They are powered by the sun.','They do not harm fish.','They have removed hundreds of tonnes of rubbish.','They are cheap to build.'],a:1,ex:'E: “allowing fish to swim underneath”. C nói về Mr Trash Wheel.'},
  {t:'mcq',text:'Most experts believe the best way to deal with river plastic is to',opts:['build more cleaning machines.','prevent it from entering rivers.','punish people who drop litter.','collect it at the coast.'],a:1,ex:'F: “The most effective approach is to stop plastic from reaching rivers in the first place.”'}]},
 {title:'Questions 11–13: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Cleaning plastic from rivers is cheap and fast.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'F: “expensive and slow”.'},
  {t:'select',text:'Some countries that banned plastic bags now have less plastic in their rivers.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'F: “the amount of plastic found in rivers has fallen noticeably”.'},
  {t:'select',text:'Local clean-up days are more effective than recycling.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'G có nhắc clean-up days nhưng không so sánh với recycling.'}]}]
},
writing:{
 title:'Task 1 – Pie chart',
 prompt:'The pie charts below show how household waste was dealt with in a city in 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
 chart:{type:'pie',title:'Household waste disposal in a city (%)',unit:'%',series:['2005','2025'],cats:['Landfill','Recycling','Composting','Incineration'],data:[[60,30],[15,35],[5,15],[20,20]]},
 min:150,max:200,
 wex:[
  ['Câu mở bài nào paraphrase tốt nhất?',['The pie charts show how household waste was dealt with in a city in 2005 and 2025.','The pie charts compare the proportions of household waste in a city that were disposed of in four different ways in 2005 and 2025.','The charts show rubbish.'],1,'A chép nguyên đề; C quá chung chung.'],
  ['Câu overview nào tốt nhất?',['Overall, landfill was the most common method in both years, although its share halved, while recycling and composting became much more popular.','Overall, landfill fell from 60% to 30%.','Overall, I think recycling is the best way to deal with waste.'],0,'Overview nêu xu hướng chính, không có số liệu, không có ý kiến cá nhân.'],
  ['“Landfill ______ 60% of all household waste in 2005.”',['accounted for','accounted','was accounted for'],0,'account for + số liệu (chủ động).'],
  ['Cách chia 2 đoạn thân bài hợp lý nhất:',['Thân bài 1: landfill và recycling (thay đổi lớn nhất); thân bài 2: composting và incineration','Thân bài 1: năm 2005; thân bài 2: năm 2025','Mỗi phương pháp một đoạn'],0,'Nhóm theo đặc điểm giúp so sánh; chia theo năm làm bài thành liệt kê.'],
  ['Câu nào mô tả đúng incineration?',['Incineration rose sharply to 20%.','The proportion of waste that was burned remained unchanged at a fifth.','Incineration was the least common method.'],1,'20% cả hai năm = remained unchanged at a fifth (1/5).'],
  ['“The share of recycled waste more than doubled, ______ 15% to 35%.”',['from','by','at'],0,'rise from… to…; by = mức chênh lệch (by 20 percentage points).']],
 outline:['Mở bài: paraphrase – The pie charts compare the proportions of household waste… disposed of in four ways… 2005 and 2025.','Overview: landfill vẫn phổ biến nhất nhưng giảm một nửa; recycling và composting tăng mạnh; incineration không đổi.','Thân bài 1: landfill 60% → 30%; recycling 15% → 35% (more than doubled) → năm 2025 recycling vượt landfill.','Thân bài 2: composting 5% → 15% (tripled); incineration giữ nguyên 20% (a fifth).'],
 model55:'The pie charts show the percentage of household waste in a city that was dealt with in four ways in 2005 and 2025.<br><br>Overall, landfill was the most popular way in 2005, but in 2025 recycling was the most popular. Recycling and composting increased, while landfill decreased.<br><br>In 2005, 60% of waste went to landfill. This figure fell to 30% in 2025. Recycling was only 15% in 2005, but it increased to 35% in 2025, so it became the biggest part.<br><br>Composting also increased a lot, from 5% to 15%, so it was three times bigger than before. Incineration was 20% in 2005 and it was still 20% in 2025, so it did not change. However, it was the second biggest part in 2005 and only the third biggest part in 2025.<br><br>In conclusion, the city recycled and composted more waste in 2025 and sent less waste to landfill than in 2005.',
 model:'The pie charts compare the proportions of household waste in a city that <b>were disposed of</b> in four different ways in 2005 and 2025.<br><br><i>Overall</i>, landfill was by far the most common method in 2005, but its share <b>halved</b> over the period. <i>By contrast</i>, recycling and composting became much more popular, and by 2025 recycling had <b>overtaken</b> landfill as the main method.<br><br>In 2005, landfill <b>accounted for</b> 60% of all household waste, <i>while</i> only 15% <b>was recycled</b>. Twenty years later, the proportion of waste sent to landfill had fallen to 30%. <i>Meanwhile</i>, the share of recycled waste <b>more than doubled</b> to 35%, making it the largest category in 2025.<br><br>Composting, which had been the least common method, showed the most dramatic relative growth, <b>tripling</b> from just 5% to 15%. <i>In contrast</i>, the percentage of waste that was burned <b>remained unchanged</b> at a fifth of the total in both years, which meant that incineration fell from second place to third.',
 note:'159 từ, band 6.0–6.5. Overview đứng ngay sau mở bài và không có số liệu. Dùng bị động (was recycled, were disposed of) và nhiều cách nói tỉ lệ (halved, more than doubled, tripling, a fifth).',
 checklist:['Mở bài paraphrase, không chép đề','Có overview không số liệu','So sánh 2 năm, không liệt kê từng con số','Dùng ít nhất 3 cách nói tỉ lệ (a fifth, halved, doubled…)','Ít nhất 150 từ']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 1, gửi cô qua Zalo.',
 items:[
 ['Is there much pollution where you live?',"Yes, quite a lot, unfortunately. I live near a main road in Ho Chi Minh City, so the air is often dusty and full of exhaust fumes, especially in the rush hour."],
 ['Do you recycle at home?',"We try to. My mum keeps plastic bottles and cardboard boxes separately and gives them to a woman who collects recyclable materials. It's not a perfect system, but it helps."],
 ['Do you like spending time in nature?',"I really do. Whenever I can, I go to a park near my house to walk and get some fresh air. It helps me relax after a long day at school."],
 ['Have you ever taken part in an environmental activity?',"Yes, last year my class joined a clean-up day at a beach in Vung Tau. We collected a lot of plastic bottles and bags, which made me realise how much rubbish people leave behind."]],
 part2:{cue:'Describe a natural place you visited and enjoyed.',bullets:['where it is','when you went there','what you did there','and explain why you enjoyed it.'],
  notes:'Cát Tiên National Park · Đồng Nai, 150 km · last summer, family · cycled through forest, crocodile lake, night safari · quiet, fresh air, saw wild animals, no phone signal',
  model:"I'd like to talk about Cat Tien National Park, which is a large forest in Dong Nai province, about a hundred and fifty kilometres from Ho Chi Minh City. I went there with my family last summer, during the school holidays. We stayed for two nights in a small guesthouse inside the park. On the first day, we rented bicycles and rode along a path through the forest. The trees were enormous, and it was much cooler than in the city. The next morning, we walked to a place called Crocodile Lake. It took about three hours, and it was quite tiring, but the view at the end was amazing. In the evening, we joined a night safari, and we saw deer and some wild birds. I enjoyed this trip for several reasons. First, the park was so quiet and peaceful, and the air was fresh. Second, there was no phone signal, so I spent real time with my family instead of looking at my screen. Overall, it reminded me how important it is to protect places like this."},
 part3:[
 ['Why is it important to protect natural areas?','I think there are two main reasons. Firstly, forests and wetlands are home to many plants and animals, and if we destroy them, some species could disappear forever. Secondly, natural areas help people too, because they clean the air and reduce the risk of floods.'],
 ['Who should be responsible for protecting the environment: governments or individuals?',"In my view, both have a role, but governments have more power. They can make laws, for example banning single-use plastic bags, and invest in public transport. However, individuals also need to change their daily habits, like recycling and using less plastic."],
 ['Do you think young people care more about the environment than older people?',"Generally, yes. Young people learn about climate change at school and see a lot of information about it online, so they are more aware of the problem. That said, many older people in Vietnam are very careful not to waste anything, which is also good for the environment."]]
},
quiz:[
 ['Food waste can be turned into ______ for gardens.',['compost','landfill','incineration'],0],
 ['“Renewable energy” gồm:',['coal and oil','solar and wind power','plastic and glass'],1],
 ['Glass bottles should ______ after use.',['recycle','be recycled','recycled'],1],
 ['Bản đồ: “The café is ______ the visitor centre, on the other side of the path.”',['opposite','behind','inside'],0],
 ['“Habitat” nghĩa là:',['thói quen','môi trường sống','khí hậu'],1],
 ['Sentence completion “NO MORE THAN TWO WORDS”: đáp án “the plastic bottles” (3 từ) sẽ:',['được chấm đúng','bị chấm sai','được nửa điểm'],1],
 ['25% = ',['a quarter','a third','a half'],0],
 ['Since 2010, many trees ______ in the city.',['have been planted','were planted','are planting'],0],
 ['Overview của Task 1 pie chart nên:',['có thật nhiều số liệu','nêu đặc điểm chính, không số liệu','nêu ý kiến của em'],1],
 ['Landfill ______ 60% of all waste in 2005.',['accounted for','took for','made for'],0]]
},

/* ======================= UNIT 6 ======================= */
{
id:'u6', title:'Education', week:6, video:'',
focus:'Listening Section 3: MCQ + Matching · Reading: Matching features · Writing Task 2: Discussion',
voices:{'Tutor':'bf_isabella','Mai':'bf_emma','Tom':'am_puck','ex':'bm_george','ans':'bf_alice'},
ltags:{},
qtags:['V','G','S','V','S','V','G','S','V','S'],
lemon:['<b>L</b> – Section 3 có 2–3 người nói: đọc trước câu hỏi để biết ai sẽ nói về điều gì.','<b>E</b> – Chú ý ai <i>đồng ý</i> / <i>không đồng ý</i>: “I’m not so sure…”, “Exactly!”, “That’s a good point, but…”.','<b>M</b> – Matching: đọc danh sách A–F trước, gạch 1 từ khóa cho mỗi phương án; Task 2 Discussion: lập dàn ý 2 quan điểm + ý kiến em.','<b>O</b> – Viết Task 2 250 từ trong 40 phút; nói Part 2 đủ 2 phút.','<b>N</b> – Ghi vào Sổ lỗi: câu sai vì nghe đúng từ nhưng sai người nói; dạng Matching features.'],
goalText:'Hết tuần, em theo dõi được cuộc thảo luận giữa nhiều người (Section 3), nối được ý kiến với người nói trong bài đọc (Matching features), và viết được bài Task 2 dạng Discussion (bàn cả hai quan điểm và nêu ý kiến).',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','60 phút','≥ 9/13'],['7. Writing','70 phút','250 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['curriculum','n','chương trình học','The school curriculum includes ten subjects.'],
['compulsory','adj','bắt buộc','English is a compulsory subject in Vietnam.'],
['optional','adj','tự chọn','Music is optional in grade 11.'],
['academic','adj','thuộc học thuật','She has excellent academic results.'],
['vocational training','n','đào tạo nghề','Vocational training prepares students for specific jobs.'],
['practical skills','n','kỹ năng thực hành','Students need practical skills such as cooking and first aid.'],
['critical thinking','n','tư duy phản biện','Debates help students develop critical thinking.'],
['memorise','v','học thuộc','Many students memorise answers before exams.'],
['rote learning','n','học vẹt','Rote learning does not help students understand ideas.'],
['tuition','n','việc dạy kèm, học phí','Many parents pay for extra tuition.'],
['extra classes','n','học thêm','He goes to extra classes four evenings a week.'],
['pressure','n','áp lực','Students face a lot of pressure before the national exam.'],
['assessment','n','sự đánh giá','Continuous assessment is less stressful than one final exam.'],
['qualification','n','bằng cấp, chứng chỉ','An IELTS certificate is a useful qualification.'],
['higher education','n','giáo dục đại học','More young people now go on to higher education.'],
['tertiary','adj','bậc đại học, cao đẳng','Tertiary education can be expensive.'],
['enrol (in)','v','ghi danh','She enrolled in an online course.'],
['drop out (of)','v','bỏ học','Some students drop out of university after one year.'],
['self-study','n','tự học','Self-study requires a lot of discipline.'],
['motivate','v','tạo động lực','A good teacher motivates students to work hard.'],
['inspire','v','truyền cảm hứng','My English teacher inspired me to study abroad.'],
['discipline','n','kỷ luật','Online learning requires discipline.'],
['interactive','adj','có tương tác','Interactive lessons keep students interested.'],
['distance learning','n','học từ xa','Distance learning became popular during the pandemic.'],
['on the one hand… on the other hand','phr','một mặt… mặt khác','On the one hand, exams are fair; on the other hand, they cause stress.']],
vocabTask:'Viết 5 câu về việc học ở trường em (dùng <i>compulsory, curriculum, pressure, extra classes, assessment</i>) và 5 câu nêu hai mặt của một vấn đề bằng <i>On the one hand… On the other hand…, While some people…, others…</i>.',
strategy:`
<h3>Listening Section 3 – thảo luận nhiều người</h3>
<ol><li>Thường là 2 sinh viên và 1 giảng viên bàn về bài tập, dự án. Câu hỏi hỏi <b>ý kiến</b> và <b>quyết định</b>, không chỉ thông tin.</li>
<li>Đáp án là <b>ý cuối cùng mọi người thống nhất</b>. Nghe kỹ các cụm đổi ý: <i>Actually…, I’m not sure that’s a good idea…, Maybe we should…</i></li>
<li><b>Matching:</b> danh sách phương án A–F thường có 1–2 phương án thừa. Người nói <b>không đọc đúng chữ</b> trong đề mà dùng từ đồng nghĩa (<i>too difficult</i> = <i>hard to understand</i>).</li></ol>
<table><tr><th>Đồng ý</th><th>Không đồng ý / nghi ngờ</th></tr>
<tr><td>Exactly. · That’s a good point. · I couldn’t agree more.</td><td>I’m not so sure. · That’s true, but… · I don’t think that would work.</td></tr></table>
<h3>Reading – Matching features</h3>
<ol><li>Danh sách “features” thường là <b>tên người</b> (nhà nghiên cứu) hoặc nhóm. Quét bài, <b>gạch tất cả tên người</b> trước.</li>
<li>Câu hỏi <b>không theo thứ tự bài đọc</b>. Một tên có thể dùng nhiều lần, có tên không dùng.</li>
<li>Đọc kỹ câu quanh tên người: ý kiến thường nằm sau <i>argues, claims, believes, found that, points out</i>.</li></ol>
<h3>Task 2 – Discussion (Discuss both views and give your opinion)</h3>
<table><tr><th>Đoạn</th><th>Nội dung</th><th>Mẫu câu</th></tr>
<tr><td>Mở bài</td><td>Paraphrase 2 quan điểm + ý kiến em</td><td>While some people believe…, others argue that… In my opinion, …</td></tr>
<tr><td>Thân bài 1</td><td>Quan điểm A + lý do + ví dụ</td><td>On the one hand, those who support… argue that…</td></tr>
<tr><td>Thân bài 2</td><td>Quan điểm B (em đồng ý) + lý do + ví dụ</td><td>On the other hand, … I believe this view is more convincing because…</td></tr>
<tr><td>Kết bài</td><td>Tóm tắt 2 bên + nhắc lại ý kiến</td><td>In conclusion, although…, I believe…</td></tr></table>
<p class="note">Lỗi hay gặp: chỉ bàn 1 quan điểm, hoặc quên nêu ý kiến của mình → Task Response tối đa band 5. Ý kiến phải có ở <b>mở bài</b> và <b>kết bài</b>.</p>`,
grammar:{
 title:'Động từ khuyết thiếu: should, must, have to, can, might',
 explain:`<table><tr><th>Ý nghĩa</th><th>Động từ</th><th>Ví dụ</th></tr>
<tr><td>Lời khuyên, ý kiến</td><td>should / ought to</td><td>Schools <b>should</b> teach practical skills.</td></tr>
<tr><td>Bắt buộc (luật, người nói thấy cần)</td><td>must / have to</td><td>Students <b>have to</b> wear a uniform.</td></tr>
<tr><td>Không cần</td><td>don’t have to</td><td>You <b>don’t have to</b> buy the book; it’s online.</td></tr>
<tr><td>Cấm</td><td>mustn’t / can’t</td><td>You <b>mustn’t</b> use your phone in the exam.</td></tr>
<tr><td>Khả năng (không chắc)</td><td>might / may / could</td><td>Online learning <b>might</b> reduce costs.</td></tr></table>
<p class="note">Trong Task 2, dùng <b>might, may, could</b> để nói về kết quả có thể xảy ra (hedging) giúp lập luận chặt chẽ hơn: <i>This <b>could</b> lead to…</i> thay vì <i>This leads to…</i>. Sau modal luôn là <b>động từ nguyên mẫu</b>.</p>`,
 qs:[
  {t:'mcq',q:'In my opinion, schools ______ teach students how to manage money.',opts:['should','mustn’t','don’t have to'],a:0,ex:'Ý kiến / lời khuyên → should.'},
  {t:'mcq',q:'You ______ use a calculator in this test; it is not allowed.',opts:['don’t have to','mustn’t','might'],a:1,ex:'Bị cấm → mustn’t.'},
  {t:'mcq',q:'Students ______ buy the textbook because all materials are online.',opts:['don’t have to','mustn’t','have to'],a:0,ex:'Không cần thiết → don’t have to.'},
  {t:'mcq',q:'Too much homework ______ cause stress for some students.',opts:['might','must','has to'],a:0,ex:'Khả năng, không chắc chắn → might.'},
  {t:'mcq',q:'All students in Vietnam ______ take the national exam to graduate.',opts:['have to','might','should to'],a:0,ex:'Quy định bắt buộc → have to. “should to” sai.'},
  {t:'mcq',q:'Teachers should ______ students to ask questions.',opts:['encourage','encouraging','to encourage'],a:0,ex:'Sau modal → động từ nguyên mẫu.'},
  {t:'gap',q:'Online courses ______ be cheaper than traditional ones. (có thể – chỉ khả năng)',a:['can','could','may','might'],ex:'can / could / may / might + V.'},
  {t:'gap',q:'Last year, I ______ to go to extra classes every evening. (phải – quá khứ)',a:['had'],ex:'Quá khứ của have to → had to.'},
  {t:'gap',q:'Parents ______ not put too much pressure on their children. (không nên)',a:['should'],ex:'should not = không nên.'},
  {t:'gap',q:'If you are late, you ______ wait outside. (phải – quy định)',a:['must','have to'],ex:'must / have to + V.'}],
 pron:{title:'Trọng âm câu: từ nội dung được nhấn',
  explain:'Trong câu, <b>từ nội dung</b> (danh từ, động từ chính, tính từ, trạng từ, từ phủ định) được nhấn; <b>từ chức năng</b> (a, the, to, of, is, can, and…) đọc nhẹ. Nghe câu và chọn từ <b>KHÔNG</b> được nhấn.',
  items:[{w:'Students should learn practical skills.',opts:['should','learn','skills'],a:0},{w:'I want to study abroad.',opts:['want','to','abroad'],a:1},{w:'The exam was really difficult.',opts:['exam','was','difficult'],a:1},
   {w:'She can speak three languages.',opts:['can','speak','languages'],a:0},{w:'My teacher inspired me a lot.',opts:['teacher','inspired','me'],a:2},{w:'We have a test on Friday.',opts:['test','on','Friday'],a:1}]}
},
listening:{
 lead:'Section 3: hai học sinh (Mai và Tom) thảo luận với giáo viên hướng dẫn về dự án nghiên cứu “học trực tuyến”. Câu 1–5: chọn A, B hoặc C. Câu 6–10: chọn chữ cái A–F.',
 order:['mcq','sel'],
 mcqTitle:'Questions 1–5: Choose the correct letter, A, B or C.',
 mcq:[
  {n:1,q:'Why did Mai and Tom choose online learning as their topic?',opts:['Their teacher suggested it.','It affects students at their school.','There is a lot of research on it.'],a:1,ex:'“most students at our school now do at least one online course, so it affects everyone”.'},
  {n:2,q:'How many students answered their questionnaire?',opts:['48','84','120'],a:1,ex:'“We sent it to a hundred and twenty… eighty-four replied.”'},
  {n:3,q:'What surprised Tom about the results?',opts:['Most students preferred online lessons.','Few students had a quiet place to study.','Students spent less time studying online.'],a:1,ex:'“what surprised me was how few students have a quiet place to study at home”.'},
  {n:4,q:'The tutor says the main weakness of their project is that',opts:['the questions were unclear.','they only asked students.','the sample was too small.'],a:1,ex:'“you only asked students… you should talk to some teachers too”.'},
  {n:5,q:'What will they do next?',opts:['interview two teachers','send a second questionnaire','read more articles'],a:0,ex:'“So we’ll interview two teachers next week.”'}],
 sel:{title:'Questions 6–10: What does each student say about each type of course? Choose FIVE answers from the box. Write the correct letter, A–F.',
  box:'<div class="box"><b>A</b> too expensive &nbsp; <b>B</b> hard to stay motivated &nbsp; <b>C</b> helped improve exam results &nbsp; <b>D</b> good for shy students &nbsp; <b>E</b> needs a fast internet connection &nbsp; <b>F</b> useful for revision</div>',
  letters:'ABCDEF',items:[{n:6,text:'video lessons'},{n:7,text:'live online classes'},{n:8,text:'language apps'},{n:9,text:'online quizzes'},{n:10,text:'paid tutoring websites'}]},
 ans:{6:{a:['F'],t:'L-match',ex:'Video lessons: “you can watch them again before a test… really useful for revision”.'},
  7:{a:['E'],t:'L-match',ex:'Live classes: “if your connection is slow, the picture freezes… you need good internet”.'},
  8:{a:['B'],t:'L-match',ex:'Language apps: “after two weeks most people just stop… it’s hard to keep going”.'},
  9:{a:['D'],t:'L-match',ex:'Quizzes: “students who never speak in class… feel more comfortable”.'},
  10:{a:['A'],t:'L-match',ex:'Tutoring websites: “the fees are really high… not many families can afford it”.'}},
 script:[['Narrator','You will hear two students, Mai and Tom, talking to their tutor about a research project on online learning. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Tutor','Come in, Mai, Tom. So, how is your research project going? Remind me why you chose online learning.'],
 ['Mai',"Well, at first we wanted to do something about school uniforms, but then we realised that most students at our school now do at least one online course, so it affects everyone. That's why we changed."],
 ['Tutor','Good reason. And you used a questionnaire?'],
 ['Tom',"Yes. We sent it to a hundred and twenty students in grades ten to twelve. We hoped for about a hundred replies, but in the end eighty-four replied."],
 ['Tutor',"That's quite a good response rate. What did you find?"],
 ['Tom',"I expected most students to say they preferred online lessons, but actually it was about half and half. What surprised me was how few students have a quiet place to study at home. Only about a quarter said they did."],
 ['Tutor',"Interesting. Now, the sample size is fine for a school project. My main concern is that you only asked students. To get a fuller picture, you should talk to some teachers too."],
 ['Mai',"We thought about sending a second questionnaire to teachers, but they're so busy. Maybe interviews would be better?"],
 ['Tutor',"Yes, even two short interviews would make a big difference. You don't need to read any more articles for now."],
 ['Tom',"OK. So we'll interview two teachers next week."],
 ['Tutor',"Great. Now, in the second part of your questionnaire you asked about different types of online courses. What did students say?"],
 ['Mai',"Video lessons were the most popular. Students said you can watch them again before a test, so they're really useful for revision."],
 ['Tom',"Live online classes got mixed reviews. Students like being able to ask the teacher questions, but if your connection is slow, the picture freezes and you miss things. So you need good internet."],
 ['Tutor','And language apps?'],
 ['Mai',"Everyone starts using them with lots of energy, but after two weeks most people just stop. They said it's hard to keep going when nobody is checking on you."],
 ['Tom',"Online quizzes were interesting. Some teachers use them in class, and students who never speak in class said they feel more comfortable answering on a screen."],
 ['Tutor','That makes sense. And the paid tutoring websites?'],
 ['Mai',"Students who used them said their exam results improved a little, but the main problem is that the fees are really high. Not many families can afford it."],
 ['Tutor',"Well, you've got some very useful data. Write it up, and come and see me after the interviews."],
 ['Narrator','That is the end of the discussion. You now have half a minute to check your answers.']]
},
dict:[['Tutor','Remind me why you chose online learning.'],['Mai','Most students at our school now do at least one online course.'],['Tom','In the end eighty-four replied.'],['Tom','Only about a quarter said they did.'],['Tutor','You should talk to some teachers too.'],['Mai',"They're so busy."],['Mai','Video lessons were the most popular.'],['Tom','Live online classes got mixed reviews.'],['Mai',"It's hard to keep going when nobody is checking on you."],['Mai','The fees are really high.']],
reading:{
 title:'Does Homework Help?', lead:'Thời gian: 20 phút · bài đọc khoảng 470 từ · 13 câu.',
 paras:[
 ['A','Few topics in education cause as much debate as homework. Parents complain that their children spend whole evenings on it, while teachers argue that practice at home is essential. Over the past thirty years, researchers in several countries have tried to answer a simple question: does homework actually help students learn?'],
 ['B','One of the best-known researchers in this field is Harris Cooper of Duke University in the United States. After reviewing more than a hundred studies, Cooper concluded that homework has a clear positive effect on the results of secondary school students, but very little effect on younger children. He suggested a simple guideline: about ten minutes of homework per night for each school grade, so a student in grade 10 might do around 100 minutes.'],
 ['C','However, more is not always better. Spanish researcher Javier Suárez studied over 7,000 teenagers and found that students who did about one hour of homework a day performed best in maths and science tests. Those who spent much longer than this did not get higher scores; in some cases, their scores were slightly lower. Suárez also found that how students did their homework mattered more than how long they spent on it. Students who worked alone, without help from parents, tended to do better.'],
 ['D','Other researchers are concerned about the effect of homework on well-being. Denise Pope of Stanford University surveyed students at high-achieving schools in California and found that many of them were doing more than three hours of homework a night. These students reported high levels of stress, headaches and sleep problems. Pope argues that schools should look carefully at the total amount of work they give, because students are often given homework by several teachers at once, and nobody checks the overall load.'],
 ['E','In Finland, a country famous for its education system, students receive relatively little homework, yet they perform well in international tests. Finnish educator Pasi Sahlberg points out that this is not because homework is bad, but because Finnish teachers focus on making lessons effective, so that less practice is needed at home. He believes the quality of classroom teaching is far more important than the quantity of homework.'],
 ['F','Researchers also disagree about the type of homework that works best. Cooper found that short, regular tasks, such as practising vocabulary or maths problems, were more useful than long projects. By contrast, Pope believes that homework should be meaningful and connected to students’ interests; otherwise they simply copy answers from friends or the internet.'],
 ['G','What does this mean for students preparing for important exams? Most experts would agree on three points. First, a moderate amount of homework is helpful for teenagers. Second, students benefit most when they work independently and concentrate fully. Finally, sleep and rest are not a waste of time: a tired brain learns very little.']],
 groups:[
 {title:'Questions 1–6: Look at the following statements and the list of researchers below. Match each statement with the correct researcher, A–D. NB You may use any letter more than once.',
  box:'<b>A</b> Harris Cooper &nbsp; <b>B</b> Javier Suárez &nbsp; <b>C</b> Denise Pope &nbsp; <b>D</b> Pasi Sahlberg',qs:[
  {t:'select',tag:'R-feat',text:'Students who spend too long on homework may not get better results.',opts:['A','B','C','D'],a:'B',ex:'C: “Those who spent much longer than this did not get higher scores”.'},
  {t:'select',tag:'R-feat',text:'Good lessons reduce the need for practice at home.',opts:['A','B','C','D'],a:'D',ex:'E: “making lessons effective, so that less practice is needed at home”.'},
  {t:'select',tag:'R-feat',text:'Homework has little effect on the results of young children.',opts:['A','B','C','D'],a:'A',ex:'B: “very little effect on younger children”.'},
  {t:'select',tag:'R-feat',text:'Nobody checks how much homework students receive in total.',opts:['A','B','C','D'],a:'C',ex:'D: “nobody checks the overall load”.'},
  {t:'select',tag:'R-feat',text:'Students do better when they do their homework without help.',opts:['A','B','C','D'],a:'B',ex:'C: “Students who worked alone, without help from parents, tended to do better.”'},
  {t:'select',tag:'R-feat',text:'Short, regular tasks are more effective than long projects.',opts:['A','B','C','D'],a:'A',ex:'F: “Cooper found that short, regular tasks… were more useful than long projects”.'}]},
 {title:'Questions 7–10: Complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage.',box:'',qs:[
  {t:'gap',before:'Cooper’s guideline is about',after:'minutes of homework per night for each school grade.',a:['10','ten'],ex:'B: “about ten minutes of homework per night for each school grade”.'},
  {t:'gap',before:'Suárez found that students who did about',after:'of homework a day did best.',a:['one hour','1 hour','an hour'],ex:'C: “about one hour of homework a day performed best”.'},
  {t:'gap',before:'Students in Pope’s survey reported stress, headaches and',after:'.',a:['sleep problems'],ex:'D: “high levels of stress, headaches and sleep problems”.'},
  {t:'gap',before:'Pope believes homework that is not meaningful leads students to',after:'answers.',a:['copy'],ex:'F: “otherwise they simply copy answers from friends or the internet”.'}]},
 {title:'Questions 11–13: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Finnish students are given a lot of homework.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'E: “relatively little homework”.'},
  {t:'select',text:'Sahlberg thinks homework is harmful.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'E: “this is not because homework is bad”.'},
  {t:'select',text:'Most experts recommend that teenagers do no homework at all before exams.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'G: “a moderate amount of homework is helpful for teenagers”.'}]}]
},
writing:{
 title:'Task 2 – Discussion essay',
 prompt:'Some people believe that students should study a wide range of subjects at school, while others think they should focus only on the subjects they are good at or interested in. Discuss both views and give your own opinion. Write at least 250 words.',
 min:250,max:320,
 wex:[
  ['Đề yêu cầu em làm gì?',['Chỉ nêu ý kiến của em','Bàn cả hai quan điểm và nêu ý kiến của em','Nêu ưu điểm và nhược điểm'],1,'“Discuss both views and give your own opinion” → phải bàn đủ 2 quan điểm + ý kiến.'],
  ['Câu mở bài nào tốt nhất?',['While some people think students should learn many subjects, others believe they should concentrate on the ones they are strongest in. In my opinion, a broad education is more beneficial up to the age of 16.','Students should study a wide range of subjects at school.','There are many subjects at school and they are all important and interesting.'],0,'A paraphrase cả 2 quan điểm và nêu ý kiến rõ ràng.'],
  ['Câu chủ đề phù hợp nhất cho thân bài về quan điểm “focus on strengths”:',['On the one hand, those who support specialisation argue that it allows students to develop their talents more deeply.','Maths is very difficult for many students.','In conclusion, students should choose their subjects.'],0,'Câu chủ đề nêu quan điểm + lý do chính.'],
  ['Ví dụ nào phù hợp nhất cho ý “a broad education helps students discover new interests”?',['Many students do not enjoy history.','A student who was never interested in science might discover a passion for biology after a good lesson.','Schools in Vietnam have many subjects.'],1,'Ví dụ cụ thể, minh họa đúng ý.'],
  ['Từ nối phù hợp: “Specialisation allows students to develop their talents. ______, it may limit their future choices.”',['However','Moreover','For example'],0,'Hai ý trái ngược → However.'],
  ['Câu kết bài nào đúng yêu cầu?',['In conclusion, although focusing on strengths has some benefits, I believe a wide range of subjects better prepares students for the future.','In conclusion, both views are right.','In conclusion, schools should build more libraries.'],0,'Kết bài tóm tắt 2 bên và nhắc lại ý kiến rõ ràng.']],
 outline:['Mở bài: paraphrase 2 quan điểm → ý kiến: học nhiều môn có lợi hơn, ít nhất đến lớp 10.','Thân bài 1 (quan điểm chuyên sâu): phát triển tài năng, tiết kiệm thời gian, tăng động lực; ví dụ học sinh giỏi Toán dành thời gian ôn thi học sinh giỏi.','Thân bài 2 (quan điểm học rộng – em đồng ý): khám phá sở thích mới; kỹ năng cơ bản cần cho cuộc sống; học sinh 15–16 tuổi chưa biết rõ nghề tương lai; ví dụ bạn phát hiện mình thích Sinh học.','Kết bài: tóm tắt 2 bên + nhắc lại ý kiến.'],
 model55:'Nowadays, people have different ideas about what students should learn at school. Some people think students should study many subjects, but other people think they should only study the subjects they like. In my opinion, studying many subjects is better.<br><br>On the one hand, studying only a few subjects has some advantages. Students can spend more time on the subjects they are good at, so they can become very good at them. For example, a student who is good at maths can practise more and win prizes in competitions. Also, students feel happier when they study subjects they like, so they study harder and get better results. They do not waste time on subjects that they do not need for their future job.<br><br>On the other hand, I think studying many subjects is more useful. Firstly, young students do not know what job they want in the future. If they study many subjects, they can find new interests. For example, my friend did not like science, but now she loves biology and wants to be a doctor. Secondly, all students need basic knowledge, such as history and geography, to understand the world. For example, if students do not learn geography, they may not understand problems like climate change. Finally, many jobs today need different skills, so it is good to know a little about many subjects.<br><br>In conclusion, although studying a few subjects can help talented students, I believe that students should study many subjects at school because it helps them find their interests and gives them basic knowledge.',
 model:'Opinions differ on whether schools should offer a broad curriculum or allow students to <b>concentrate on</b> the subjects they are strongest in. <i>While</i> specialisation has clear benefits, <i>I believe</i> that a wide range of subjects is more valuable, at least until the age of sixteen.<br><br><i>On the one hand</i>, those who support specialisation argue that it allows young people to develop their <b>talents</b> more deeply. A student with a gift for mathematics, <i>for instance</i>, could use the time saved from other subjects to prepare for national competitions, which <b>might</b> lead to scholarships and better university places. Specialising early can also save time, as students would not have to study subjects they will never use. <i>In addition</i>, students tend to be more <b>motivated</b> when they study what they enjoy, so they are less likely to feel bored or under pressure.<br><br><i>On the other hand</i>, a broad education <b>gives students the chance</b> to discover interests they never knew they had. Many teenagers have little idea of what career they want, and a single inspiring lesson in biology or economics could change their plans completely. <i>Moreover</i>, subjects such as history, geography and science provide <b>essential knowledge</b> that every citizen needs in order to understand the modern world. If students drop these subjects too early, they <b>may</b> regret it later when their interests change.<br><br><i>In conclusion</i>, although focusing on their strengths can help talented students reach a high level, I believe that studying a wide range of subjects better prepares young people for an uncertain future. Specialisation should therefore come later, at university or in the final years of school.',
 note:'266 từ, band 6.0–6.5. Mở bài có cả 2 quan điểm và ý kiến. Thân bài 1 bàn quan điểm em không chọn (công bằng, có ví dụ); thân bài 2 là quan điểm em ủng hộ. Dùng modal (might, may, could) để lập luận thận trọng.',
 checklist:['Mở bài có đủ 2 quan điểm và ý kiến của em','Thân bài 1 và 2 mỗi đoạn bàn một quan điểm','Mỗi đoạn có lý do và ví dụ','Kết bài nhắc lại ý kiến, không thêm ý mới','Ít nhất 250 từ']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 2, gửi cô qua Zalo.',
 items:[
 ['What is your favourite subject at school?',"My favourite subject is English, because I enjoy learning about other cultures through the language. Our teacher also uses a lot of games and videos, so the lessons are never boring."],
 ['Do you think your school days are stressful?',"Sometimes, yes, especially before big exams. I'm in grade eleven, so I have a lot of homework and extra classes, but I try to balance it with sports and enough sleep."],
 ['Do you prefer studying alone or with friends?',"It depends on the subject. For maths, I prefer studying alone so I can concentrate. But for English speaking, studying with friends is much better, because we can practise together."],
 ['Would you like to study abroad in the future?',"Yes, I'd love to. I'm hoping to study in Australia or the UK, because it would improve my English and help me become more independent."]],
 part2:{cue:'Describe a teacher who has influenced you.',bullets:['who this teacher is','what subject he or she teaches','how this teacher helped you','and explain why he or she influenced you.'],
  notes:'Ms Lan · English, grade 9 · bad at speaking, shy → English club, small speaking tasks, praised effort · believed in me, now want to be an English teacher',
  model:"I'd like to talk about Ms Lan, who was my English teacher in grade nine. She was probably in her thirties, and she was always cheerful and full of energy. Before I was in her class, I was quite bad at speaking English. I could do grammar exercises, but I was too shy to say anything in front of the class. Ms Lan noticed this very quickly. Instead of forcing me to speak, she gave me small speaking tasks, like answering one question at the start of each lesson. She also encouraged me to join the school English club, where I could practise with a small group. Whenever I made progress, she praised my effort rather than just my results. By the end of the year, I gave a three-minute presentation in front of the whole class, which I never thought I could do. The reason she influenced me so much is that she believed in me before I believed in myself. Thanks to her, I now enjoy English, and I'm even thinking about becoming an English teacher in the future."},
 part3:[
 ['What qualities make a good teacher?','I think patience is the most important quality, because students learn at different speeds. A good teacher should also be able to explain difficult ideas simply and make lessons interesting, for example by using real-life examples.'],
 ['Do you think online learning will replace teachers in the future?',"I don't think so. Online learning is convenient and cheap, but it can't fully replace a real teacher. Teachers can see when students are confused or unmotivated and help them immediately, which a computer program can't really do yet."],
 ['Should schools focus more on practical skills?',"Yes, I believe they should. At the moment, Vietnamese schools focus mainly on academic knowledge for exams. However, skills like communication, teamwork and managing money are just as important for adult life, so they should be part of the curriculum."]]
},
quiz:[
 ['“Compulsory” nghĩa là:',['tự chọn','bắt buộc','khó'],1],
 ['Students ______ buy the book; it’s free online.',['mustn’t','don’t have to','should'],1],
 ['Listening Section 3 thường là:',['một người nói về địa điểm','cuộc thảo luận giữa 2–3 người','một bài giảng'],1],
 ['“Drop out of university” nghĩa là:',['tốt nghiệp','bỏ học','đăng ký'],1],
 ['Matching features: một tên người trong danh sách',['chỉ dùng một lần','có thể dùng nhiều lần hoặc không dùng','luôn được dùng'],1],
 ['“Rote learning” nghĩa là:',['học vẹt','tự học','học từ xa'],0],
 ['Too much homework ______ cause stress.',['might','must to','should to'],0],
 ['Đề “Discuss both views and give your opinion”: bài viết cần',['chỉ một quan điểm','hai quan điểm và ý kiến của em','ưu điểm và nhược điểm'],1],
 ['A good teacher ______ students to work hard.',['motivates','motivation','motivating'],0],
 ['Câu nào dùng để nêu quan điểm thứ hai trong bài Discussion?',['On the other hand, …','For example, …','In conclusion, …'],0]]
}
);
