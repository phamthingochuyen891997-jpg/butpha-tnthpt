/* Dữ liệu các unit — mỗi unit một object. Thêm unit mới: push vào UNITS. */
window.UNITS = [

/* ======================= UNIT 1 ======================= */
{
id:'u1', title:'Study & Hometown', week:1,
video:'',
ltags:{1:'L-spell',2:'L-spell',3:'L-num',4:'L-num',5:'L-spell',6:'L-word',7:'L-word',8:'L-num',9:'L-num',10:'L-word'},
qtags:['V','G','G','S','S','S','S','S','V','V'],
lemon:['<b>L</b> – Dùng 30 giây đọc form, đoán mỗi chỗ trống là tên, số hay ngày.','<b>E</b> – Nghe từ báo hiệu đổi ý: <i>but, actually, I’m afraid</i>.','<b>M</b> – Sắp ý câu trả lời Speaking theo A–R–E.','<b>O</b> – Nói 2–3 câu mỗi câu hỏi; viết đoạn 120–150 từ trong 25 phút.','<b>N</b> – Ghi lỗi chính tả, số vào Sổ lỗi rồi luyện chép chính tả.'],
dict:[['Receptionist','Good afternoon, Riverside Language Centre. How can I help you?'],['Linh',"Hi, I'd like to sign up for one of your weekend English courses."],['Receptionist','And which school do you go to?'],['Linh',"I'll be in grade twelve next year."],['Receptionist','Which course are you interested in?'],['Linh','I think I need Speaking more. I get nervous when I talk.'],['Receptionist','Classes are on Saturday or Sunday mornings.'],['Receptionist',"I'm afraid the Sunday class is already full."],['Linh','Hmm, I have a school exam that week.'],['Receptionist','The full fee is two million dong, but students get a discount.']],
focus:'Listening Section 1 · Speaking Part 1–3',
goalText:'Hết tuần, em ghi đúng chính tả tên, số điện thoại, địa chỉ trong Listening Section 1 và trả lời mỗi câu Speaking Part 1 bằng 2–3 câu về học tập và quê hương.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','20 phút','—'],['3. Listening','60 phút','≥ 7/10'],['5. Reading','60 phút','≥ 7/10'],['6. Writing','60 phút','120–150 từ, nộp cô'],['7. Speaking','60 phút','Ghi âm câu 2, 6, 7 + Part 2'],['8. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['major in','v','học chuyên ngành','I want to major in economics.'],
['compulsory subject','n','môn bắt buộc','Maths is a compulsory subject in my school.'],
['timetable','n','thời khóa biểu','My timetable is very busy on Mondays.'],
['revise for an exam','v','ôn thi','I usually revise for exams in the library.'],
['do well in','v','học tốt (môn gì)','She does well in chemistry.'],
['extra classes','n','lớp học thêm','Many students take extra classes in the evening.'],
['academic pressure','n','áp lực học tập','Grade 12 students face a lot of academic pressure.'],
['graduate from','v','tốt nghiệp','I will graduate from high school next year.'],
['scholarship','n','học bổng','He won a scholarship to study in Singapore.'],
['entrance exam','n','kỳ thi tuyển sinh','The university entrance exam is very competitive.'],
['hometown','n','quê hương','My hometown is in the south of Vietnam.'],
['suburban area','n','vùng ngoại ô','I live in a suburban area of the city.'],
['district','n','quận, huyện','Binh Chanh is a large district.'],
['peaceful','adj','yên bình','The countryside is peaceful at night.'],
['crowded','adj','đông đúc','The market is crowded at weekends.'],
['traffic jam','n','kẹt xe','There are traffic jams every morning.'],
['local market','n','chợ địa phương','My mother buys vegetables at the local market.'],
['countryside','n','vùng nông thôn','My grandparents live in the countryside.'],
['develop rapidly','v','phát triển nhanh','My hometown has developed rapidly.'],
['industrial zone','n','khu công nghiệp','Many people work in the industrial zone.'],
['green space','n','không gian xanh','The city needs more green spaces.'],
['convenient','adj','tiện lợi','Living near school is very convenient.'],
['close-knit community','n','cộng đồng gắn bó','My village has a close-knit community.'],
['move to','v','chuyển đến','My family moved to the city in 2015.'],
['be replaced by','v','bị thay thế bởi','The rice fields were replaced by factories.']],
vocabTask:'Chọn 10 từ, viết 10 câu về chính em, ví dụ <i>I do well in English but I find physics difficult.</i>',
strategy:`
<h3>Listening – Form completion (Section 1)</h3>
<ol>
<li>Dùng 30 giây đọc đề: đoán mỗi chỗ trống là tên, số, ngày tháng hay danh từ.</li>
<li>Chú ý giới hạn từ: <i>ONE WORD AND/OR A NUMBER</i> thì viết quá 1 từ là sai.</li>
<li>Bẫy thường gặp: người nói đổi ý (<i>“Sunday… oh, Sunday’s full, so Saturday”</i>) — đáp án là thông tin cuối cùng.</li>
<li>Số điện thoại: <i>double 5</i> = 55, <i>oh</i> = 0. Ngày: <i>14</i> hoặc <i>14th</i> đều đúng.</li>
<li>Sai chính tả = mất điểm. Luyện các cặp chữ dễ nhầm: A/E/I, G/J, B/V.</li>
</ol>
<h3>Speaking Part 1 – Công thức A–R–E</h3>
<table><tr><th>Bước</th><th>Làm gì</th><th>Ví dụ</th></tr>
<tr><td><b>A</b> – Answer</td><td>Trả lời thẳng</td><td>Yes, I really like my hometown.</td></tr>
<tr><td><b>R</b> – Reason</td><td>Nêu 1 lý do</td><td>It’s quite peaceful and the people are friendly.</td></tr>
<tr><td><b>E</b> – Example</td><td>Thêm ví dụ, chi tiết</td><td>For example, my neighbours often share food with my family.</td></tr></table>
<p class="note">Mỗi câu Part 1 dài 2–3 câu, khoảng 15–20 giây. Tránh trả lời cộc lốc (“Yes.”) và tránh học thuộc cả đoạn dài.</p>`,
listening:{
 lead:'Một học sinh đăng ký khóa học tiếng Anh cuối tuần. Bài nghe có 30 giây đọc đề như thi thật. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
 formTitle:'RIVERSIDE LANGUAGE CENTRE – Student Registration Form',
 form:[['First name','Linh',null],['Surname','{1}',1],['Age','17',null],['School','{2} High School',2],['Grade','{3}',3],['Phone number','{4}',4],
  ['Address','25 {5} Street, Binh Chanh District',5],['Course','{6}',6],['Class day','{7} morning',7],['Start date','{8} November',8],
  ['Fee (after discount)','{9} VND',9],['Heard about the centre from','a {10}',10]],
 mcq:[],
 ans:{1:{a:['hoang'],ex:'Đánh vần H-O-A-N-G.'},2:{a:['greenfield'],ex:'Chỉ ghi tên, không ghi lại “High School”.'},
  3:{a:['11','eleven'],ex:'Bẫy: nhân viên đoán “twelve”, Linh sửa lại là eleven.'},4:{a:['0903558214'],num:true,ex:'Bẫy 585; “double five” = 55.'},
  5:{a:['palm'],ex:'Đánh vần P-A-L-M.'},6:{a:['speaking'],ex:'Bẫy: giáo viên khuyên Writing, nhưng Linh chọn Speaking.'},
  7:{a:['saturday'],ex:'Bẫy: Sunday đã đầy.'},8:{a:['14','14th','fourteenth'],ex:'Bẫy: khóa ngày 7 trùng lịch thi.'},
  9:{a:['1800000'],num:true,ex:'Bẫy: 2,000,000 là giá trước giảm.'},10:{a:['friend','a friend'],ex:'Bẫy: website được nhắc nhưng không phải nguồn đầu tiên.'}},
 script:[['Narrator','You will hear a conversation between a receptionist at a language centre and a student who wants to register for a course. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Receptionist','Good afternoon, Riverside Language Centre. How can I help you?'],['Linh',"Hi, I'd like to sign up for one of your weekend English courses."],
 ['Receptionist',"Sure. What's your first name?"],['Linh',"Linh. That's L-I-N-H."],['Receptionist','And your surname?'],['Linh','Hoang. H-O-A-N-G.'],
 ['Receptionist','How old are you, Linh?'],['Linh',"I'm seventeen."],['Receptionist','And which school do you go to?'],['Linh',"Greenfield High School. That's G-R-E-E-N-F-I-E-L-D."],
 ['Receptionist','What grade are you in? Grade twelve?'],['Linh',"No, I'm in grade eleven. I'll be in grade twelve next year."],['Receptionist','Can I have a phone number?'],
 ['Linh',"Yes, it's oh-nine-oh-three, five-five-eight, two-one-four."],['Receptionist','Sorry, was that five-eight-five?'],['Linh','No. Double five, eight. Then two-one-four.'],
 ['Receptionist','Got it. And your address?'],['Linh','Twenty-five Palm Street, in Binh Chanh District.'],['Receptionist','Palm. P-A-L-M?'],['Linh',"That's right."],
 ['Receptionist','Which course are you interested in? This term we have Writing and Speaking.'],['Linh','My teacher said I should take Writing, but I think I need Speaking more. I get nervous when I talk.'],
 ['Receptionist','So, Speaking. Classes are on Saturday or Sunday mornings.'],['Linh','Sunday would be better for me.'],['Receptionist',"I'm afraid the Sunday class is already full."],
 ['Linh','Oh. Then Saturday is fine.'],['Receptionist','The next course starts on the seventh of November.'],['Linh','Hmm, I have a school exam that week.'],
 ['Receptionist','Then you can join the next group. It starts on the fourteenth.'],['Linh','Great, the fourteenth, then.'],
 ['Receptionist',"The full fee is two million dong, but students get a discount, so you'll pay one million, eight hundred thousand."],['Linh',"That's good."],
 ['Receptionist','Last question. How did you hear about us? Our website?'],['Linh',"I've seen your website, but actually, it was a friend who told me about the centre first."],
 ['Receptionist',"OK, I'll put “a friend”. Thank you, Linh. See you on Saturday!"],['Narrator','That is the end of the conversation. You now have half a minute to check your answers.']]
},
reading:{
 title:'A Suburb in Transition', lead:'Thời gian: 20 phút. Đọc lướt 2 phút để nắm ý từng đoạn trước khi làm câu hỏi.',
 paras:[
 ['A','Twenty years ago, Tan Phu was a quiet farming area about 15 kilometres from the city centre. Most families grew rice or vegetables, and the main road was a narrow path that flooded every rainy season. Children usually walked or cycled to the only secondary school in the area.'],
 ['B','Everything began to change in 2008, when the government opened an industrial zone nearby. Factories producing shoes, electronics and packaging attracted thousands of workers from other provinces. Within ten years, the local population had almost tripled. Rice fields were replaced by rows of rented rooms, small shops and street food stalls.'],
 ['C','This rapid growth brought clear benefits. Many local families earned extra income by renting out rooms, and a new hospital and two supermarkets opened. The narrow path became a four-lane road, so the journey to the city centre now takes about 40 minutes instead of more than an hour.'],
 ['D','However, development has also created problems. During rush hour, the main road is often blocked by trucks and motorbikes, and residents complain about noise and dust from construction sites. Schools have become overcrowded: some classes now have more than 50 students.'],
 ['E','Older residents have mixed feelings. Mr Lam, who has lived in Tan Phu all his life, says he misses the sense of community. “In the past, everyone knew each other,” he explains. “Now my neighbours change every few months.” Younger people, on the other hand, tend to welcome the change because it has brought more jobs and entertainment.'],
 ['F','Local authorities are now trying to balance growth with quality of life. A plan approved last year will turn an old pond into a public park, and more trees will be planted along the main road. Whether these efforts are enough remains to be seen.']],
 groups:[
 {title:'Questions 1–5: TRUE / FALSE / NOT GIVEN', box:'', qs:[
  {t:'select',text:'Twenty years ago, there was only one secondary school in Tan Phu.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'A: “the only secondary school”.'},
  {t:'select',text:'The industrial zone was opened by a private company.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'B: “the government opened”.'},
  {t:'select',text:'Most factory workers in Tan Phu earn a high salary.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'B nói về công nhân nhưng không nhắc đến lương.'},
  {t:'select',text:'Travelling to the city centre now takes less time than before.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'C: “40 minutes instead of more than an hour”.'},
  {t:'select',text:'Younger residents generally dislike the changes in Tan Phu.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'E: “Younger people… tend to welcome the change”.'}]},
 {title:'Questions 6–10: NO MORE THAN TWO WORDS AND/OR A NUMBER', box:'', qs:[
  {t:'gap',before:'Before 2008, the main road often',after:'in the rainy season.',a:['flooded'],ex:'A: “a narrow path that flooded every rainy season”.'},
  {t:'gap',before:'Local families make extra money by renting out',after:'.',a:['rooms'],ex:'C: “earned extra income by renting out rooms”. Luôn chép đúng từ trong bài.'},
  {t:'gap',before:'Some classes in local schools have more than',after:'students.',a:['50','fifty'],ex:'D: “more than 50 students”.'},
  {t:'gap',before:'Mr Lam is sad that he has lost the',after:'of community.',a:['sense'],ex:'E: “misses the sense of community”.'},
  {t:'gap',before:'An old pond will be turned into a',after:'.',a:['public park','park'],ex:'F: “turn an old pond into a public park”.'}]}]
},
writing:{
 title:'Đoạn văn về quê hương',
 prompt:'Write a paragraph of 120–150 words. Describe your hometown and explain one way it has changed in recent years.',
 figure:'', min:120, max:150,
 outline:['Câu chủ đề: quê em ở đâu, là nơi thế nào.','Ngày xưa: 1–2 câu mô tả (thì quá khứ).','Thay đổi lớn nhất + 1 ví dụ cụ thể (hiện tại hoàn thành).','Mặt tốt và mặt chưa tốt của thay đổi.','Câu kết: ý kiến hoặc mong muốn của em.'],
 model:'I come from Binh Chanh, a <b>suburban area</b> in the south-west of Ho Chi Minh City. When I was a child, my hometown was quite <b>peaceful</b>, with many rice fields and small canals. <i>However</i>, it <b>has developed rapidly</b> over the last ten years. The most noticeable change is the number of new roads and residential areas. <i>For example</i>, the field behind my house <b>has been replaced by</b> a row of shops and a new apartment building. This change has made daily life more <b>convenient</b> because people can buy almost everything near their homes. <i>On the other hand</i>, the streets are now more <b>crowded</b>, and <b>traffic jams</b> happen every morning. <i>Overall</i>, I think the development has brought more benefits than problems, but I hope the local government will create more <b>green spaces</b> for residents.',
 note:'133 từ, khoảng band 5.5–6.0. Chữ đậm = từ vựng Unit 1; chữ gạch chân = từ nối. Câu 3 và 5 dùng hiện tại hoàn thành vì thay đổi kéo dài đến nay; câu 5 là bị động.',
 checklist:['Có câu chủ đề rõ ràng ở đầu đoạn','Dùng ít nhất 3 từ nối','Dùng ít nhất 5 từ trong bảng từ vựng','Đúng thì: quá khứ cho ngày xưa, hiện tại hoàn thành cho thay đổi','Đủ 120–150 từ']
},
speaking:{
 task:'Ghi âm câu trả lời Part 1 cho câu 2, 6 và 7 (mỗi câu 15–20 giây) và bài nói Part 2 (1–2 phút), gửi cô qua Zalo trước buổi học sau.',
 items:[
 ['Do you work or are you a student?',"I'm a student. I'm in grade eleven at a high school in Binh Chanh District, and I'm preparing for the university entrance exam next year."],
 ['What subject do you like most? Why?','I like English the most, because I can use it to watch films and talk to people from other countries. Also, my English teacher makes the lessons really fun.'],
 ['Is there any subject you find difficult?',"Yes, physics. There are a lot of formulas to remember, and I don't do well in it, so I have to take extra classes in the evening."],
 ['What do you want to study in the future?',"I'd like to major in business, because I hope to start my own company one day. My parents also think it's a useful subject."],
 ['Where is your hometown?',"My hometown is Binh Chanh, a suburban area of Ho Chi Minh City. It's about twenty kilometres from the city centre."],
 ['What do you like about your hometown?',"I like the people there. It's a close-knit community, so neighbours often help each other. For example, they look after our house when my family goes away."],
 ['Has your hometown changed much in recent years?','Yes, a lot. It has developed rapidly, and many rice fields have been replaced by factories and apartment buildings. The roads are also more crowded now.'],
 ['Would you like to live there in the future?',"Probably not. I'd prefer to live in the city centre after I graduate, because it's more convenient and there are more job opportunities."]],
 part2:{cue:'Describe a place in your hometown that you like.',bullets:['where it is','what it looks like','what you do there','and explain why you like it.'],
  notes:'riverside park · 5 min from home · trees, path by the river, benches · walk, badminton, chat with friends · peaceful, fresh air, relax after exams',
  model:"I'd like to talk about a small park by the river, which is only about five minutes from my house. It isn't very big, but it's one of my favourite places in my hometown. The park has a long path along the river, with lots of tall trees on both sides and some wooden benches where people can sit and look at the water. In the early morning, it's full of older people doing exercise, and in the evening, families bring their children there to play. I usually go there in the late afternoon with my friends. Sometimes we play badminton on the grass, and sometimes we just sit on a bench, chat and buy drinks from a small shop nearby. When I have exams, I often go there alone to walk and clear my head. The main reason I like this park is that it's very peaceful compared with the busy roads around it. The air is fresher, and the sound of the river helps me relax. It's also a place where I've made a lot of good memories with my friends. So for me, it's the best place to rest after a long day at school."},
 part3:[
 ['What are the advantages of living in a small town compared with a big city?',"I think the biggest advantage is that life is more peaceful and less stressful. There is less traffic and pollution, and the cost of living is usually lower. People in small towns also tend to know their neighbours, so the community is closer."],
 ['How have hometowns in Vietnam changed in recent years?','Many hometowns have developed very quickly. For example, a lot of rice fields have been replaced by factories, shops and new roads. This has created more jobs, but it has also made some places more crowded and less green than before.'],
 ['Should young people move to big cities to study?',"In my opinion, it depends on what they want to study. Big cities usually have better universities and more opportunities, so moving can be a good choice. However, living away from family is expensive and can be difficult, so students need to be ready for that."]]
},
quiz:[
 ['Maths is a ______ subject, so every student must study it.',['convenient','compulsory','crowded'],1],
 ['My hometown has ______ rapidly over the last ten years.',['develop','developing','developed'],2],
 ['The rice fields were replaced ______ factories.',['by','with','from'],0],
 ['Trong Listening, “double seven” nghe được thì ghi là:',['27','77','7'],1],
 ['Đề yêu cầu ONE WORD AND/OR A NUMBER, chỗ trống “(7) ____ morning”. Đáp án hợp lệ:',['on Saturday','Saturday','Saturday morning'],1],
 ['Trong công thức A–R–E, chữ R là:',['Repeat','Reason','Result'],1],
 ['Câu trả lời Part 1 tốt nhất cho “Do you like your hometown?”:',['Yes.',"Yes, because it's peaceful and my neighbours are friendly.",'My hometown is a city which has a long history of more than three hundred years and… (đọc thuộc 1 phút)'],1],
 ['Trong Reading, NOT GIVEN nghĩa là:',['Thông tin trái với bài','Bài không có thông tin để xác nhận','Thông tin giống bài'],1],
 ['“Close-knit community” nghĩa là:',['cộng đồng gắn bó','khu dân cư đông đúc','làng nghề dệt'],0],
 ['I live in a ______ area about 20 km from the city centre.',['suburb','suburban','suburbs'],1]]
},

/* ======================= UNIT 2 ======================= */
{
id:'u2', title:'Free Time & Leisure', week:2,
video:'',
ltags:{1:'L-num',2:'L-num',3:'L-word',4:'L-word',5:'L-word',6:'L-word'},
qtags:['V','G','S','V','S','V','S','S','V','G'],
lemon:['<b>L</b> – Đọc danh sách heading trước, gạch chân từ khóa; đọc kỹ đề Task 1.','<b>E</b> – Tìm paraphrase: <i>partly true ↔ partly supported</i>, <i>cost and space ↔ money and location</i>.','<b>M</b> – Lập dàn ý Task 1: mở bài, overview, 2 nhóm số liệu.','<b>O</b> – Viết đủ 150 từ trong 20 phút.','<b>N</b> – Ghi dạng heading hay nhầm và lỗi số liệu vào Sổ lỗi.'],
dict:[['Receptionist','What would you like to know?'],['Nam','First, what are your opening hours?'],['Receptionist','At weekends we close earlier, at eight.'],['Nam','What do I need to bring to register?'],['Receptionist',"We don't need your ID card."],['Nam',"I'm especially interested in badminton."],['Receptionist',"It's open every day except Monday, when we clean it."],['Receptionist',"Most people choose dance, but that's full this month."],['Nam',"I've just joined my school football team, and I need to get fitter."],['Receptionist','Wednesday afternoon is usually quiet.']],
focus:'Reading: Matching headings · Writing Task 1: Bar chart · Speaking Part 1–3',
goalText:'Hết tuần, em tìm được ý chính của từng đoạn để làm Matching headings, và viết được bài Task 1 bar chart 150 từ có mở bài, overview và 2 đoạn thân bài.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Listening','50 phút','≥ 7/10'],['5. Reading','60 phút','≥ 7/10'],['6. Writing','70 phút','150 từ, nộp cô'],['7. Speaking','60 phút','Ghi âm câu 1, 4, 8 + Part 2'],['8. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['leisure activity','n','hoạt động giải trí','Reading is my favourite leisure activity.'],
['spare time','n','thời gian rảnh','I don’t have much spare time during the school week.'],
['take up','v','bắt đầu (một sở thích)','I took up badminton last year.'],
['be keen on','adj','rất thích, say mê','My brother is keen on photography.'],
['socialise with','v','giao lưu với','At weekends I socialise with my classmates.'],
['screen time','n','thời gian dùng màn hình','Teenagers’ screen time has increased a lot.'],
['scroll through','v','lướt (điện thoại)','I often scroll through videos before bed.'],
['be addicted to','adj','nghiện','Some students are addicted to online games.'],
['cut down on','v','cắt giảm','I’m trying to cut down on fast food.'],
['work out','v','tập thể dục','My father works out at the gym three times a week.'],
['team sport','n','môn thể thao đồng đội','Football is the most popular team sport in my school.'],
['stay in shape','v','giữ dáng, giữ sức khỏe','Swimming helps me stay in shape.'],
['relieve stress','v','giảm căng thẳng','Listening to music helps me relieve stress.'],
['outdoor activity','n','hoạt động ngoài trời','Camping is a great outdoor activity.'],
['membership','n','tư cách hội viên','A gym membership costs about 300,000 dong a month.'],
['sign up for','v','đăng ký','I signed up for a dance class.'],
['facilities','n','cơ sở vật chất','The sports centre has excellent facilities.'],
['affordable','adj','giá phải chăng','Badminton is an affordable sport.'],
['increase sharply','v','tăng mạnh','The number of social media users increased sharply.'],
['decrease slightly','v','giảm nhẹ','Time spent on sports decreased slightly.'],
['remain stable','v','giữ ổn định','The figure remained stable at around 5 hours.'],
['by far the most','adv','nhiều nhất, vượt xa','Social media was by far the most popular activity.'],
['compared with','prep','so với','Boys did more sport compared with girls.'],
['a fourfold increase','n','tăng gấp bốn lần','There was a fourfold increase in screen time.'],
['halve','v','giảm một nửa','The time spent reading halved.']],
vocabTask:'Viết 5 câu về thói quen giải trí của em và 5 câu mô tả xu hướng (dùng increase sharply, decrease slightly, remain stable, halve, by far the most).',
strategy:`
<h3>Reading – Matching headings</h3>
<ol>
<li>Đọc danh sách heading trước, gạch chân từ khóa chính của mỗi heading. Thường có 2–3 heading thừa.</li>
<li>Đọc câu đầu và câu cuối của mỗi đoạn — ý chính thường nằm ở đó.</li>
<li>Hỏi: “Cả đoạn này chủ yếu nói về điều gì?” Heading đúng tóm tắt cả đoạn, không chỉ một chi tiết.</li>
<li>Cẩn thận heading “trùng từ”: heading có từ giống hệt trong đoạn thường là bẫy.</li>
<li>Làm đoạn dễ trước, loại dần heading đã dùng.</li>
</ol>
<h3>Writing Task 1 – Cấu trúc 4 đoạn (150 từ, 20 phút)</h3>
<table><tr><th>Đoạn</th><th>Viết gì</th><th>Độ dài</th></tr>
<tr><td>1. Mở bài</td><td>Paraphrase đề: <i>shows → compares/illustrates</i>; <i>the number of hours → how many hours</i></td><td>1 câu</td></tr>
<tr><td>2. Overview</td><td>2 xu hướng/đặc điểm nổi bật nhất. <b>Không</b> đưa số liệu</td><td>1–2 câu</td></tr>
<tr><td>3. Thân bài 1</td><td>Nhóm số liệu thay đổi lớn, có so sánh</td><td>2–3 câu</td></tr>
<tr><td>4. Thân bài 2</td><td>Nhóm số liệu còn lại</td><td>2–3 câu</td></tr></table>
<h3>Ngôn ngữ mô tả xu hướng</h3>
<table><tr><th>Tăng</th><th>Giảm</th><th>Không đổi</th><th>Mức độ</th></tr>
<tr><td>rise, increase, grow</td><td>fall, decrease, drop, decline</td><td>remain stable, stay the same</td><td>sharply, significantly, slightly, gradually</td></tr></table>
<p class="note">Task 1 không đưa ý kiến cá nhân. Overview là phần quyết định band 5.5 trở lên.</p>
<p class="note"><b>Mẹo điền số:</b> khi đề cho phép <i>AND/OR A NUMBER</i>, em được viết số thay cho chữ để không vượt giới hạn từ: <i>three and a half → 3.5</i>, <i>two thousand → 2,000</i>, <i>the fourteenth → 14</i>.</p>`,
listening:{
 lead:'Một học sinh gọi điện hỏi về thẻ hội viên ở trung tâm thể thao. Câu 1–6: write <b>ONE WORD AND/OR A NUMBER</b>. Câu 7–10: chọn A, B hoặc C.',
 formTitle:'LAKESIDE YOUTH CENTRE – Membership notes',
 form:[['Weekday opening hours','6 am – {1} pm',1],['Monthly fee for students','{2} VND',2],['Bring','a passport photo and your {3} card',3],
  ['Badminton courts','on the {4} floor',4],['Swimming pool closed on','{5}',5],['Free trial class','{6}',6]],
 mcq:[
  {n:7,q:'Why does Nam want to join the centre?',opts:['to make new friends','to lose weight','to get fitter for football'],a:2,ex:'Bẫy: bạn bè cũng tập ở đó, nhưng “the main reason” là đội bóng của trường.'},
  {n:8,q:'The receptionist suggests that beginners should',opts:['take a group class','use the gym','hire a personal coach'],a:0,ex:'“start with one of our group classes rather than the gym”; coach là “later”.'},
  {n:9,q:'Motorbike parking',opts:['is free','costs 5,000 VND per visit','is included in the membership'],a:1,ex:'“It’s not included… It’s five thousand dong each time you visit.”'},
  {n:10,q:'Nam will register on',opts:['Wednesday afternoon','Thursday morning','Friday evening'],a:2,ex:'Wednesday Nam học thêm, Thursday morning Nam ở trường.'}],
 ans:{1:{a:['9.30','930','9:30','nine thirty'],ex:'“close at nine thirty”; 8 pm là giờ đóng cửa cuối tuần.'},2:{a:['250000'],num:true,ex:'Bẫy: 300,000 là giá cho người lớn.'},
  3:{a:['student'],ex:'“We don’t need your ID card.”'},4:{a:['second','2nd'],ex:'Bẫy: gym ở first floor.'},
  5:{a:['monday','mondays'],ex:'“open every day except Monday”.'},6:{a:['yoga'],ex:'Bẫy: dance đã đầy trong tháng này.'}},
 script:[['Narrator','You will hear a student called Nam phoning a youth centre to ask about membership. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Receptionist','Lakeside Youth Centre, Sarah speaking.'],['Nam',"Hello. I'm thinking of becoming a member, and I'd like some information."],
 ['Receptionist','Of course. What would you like to know?'],['Nam','First, what are your opening hours?'],
 ['Receptionist','On weekdays we open at six in the morning and close at nine thirty in the evening. At weekends we close earlier, at eight.'],
 ['Nam','Six till nine thirty on weekdays. OK. And how much is the membership?'],
 ['Receptionist',"For adults it's three hundred thousand dong a month, but if you're a student, it's two hundred and fifty thousand."],
 ['Nam',"I'm a student, so that's great. What do I need to bring to register?"],['Receptionist',"Just a passport photo and your student card. We don't need your ID card."],
 ['Nam',"Fine. I'm especially interested in badminton. Where are the courts?"],['Receptionist','The gym is on the first floor, and the badminton courts are on the second floor, next to the changing rooms.'],
 ['Nam','And the swimming pool. Is it open every day?'],['Receptionist',"It's open every day except Monday, when we clean it."],
 ['Nam','Do you offer any free lessons for new members?'],['Receptionist',"Yes, you can try one class for free. Most people choose dance, but that's full this month, so I can offer you a yoga class."],
 ['Nam',"Yoga's fine. I've never tried it."],['Receptionist','Can I ask why you want to join? It helps us suggest a programme.'],
 ['Nam',"Well, a lot of my friends go there, but the main reason is that I've just joined my school football team, and I need to get fitter."],
 ['Receptionist',"In that case, as a beginner, I'd suggest you start with one of our group classes rather than the gym. You can hire a personal coach later if you want."],
 ['Nam',"That makes sense. Oh, and I'll come by motorbike. Is parking free?"],['Receptionist',"It's not included in the membership, I'm afraid. It's five thousand dong each time you visit."],
 ['Nam','OK. When can I come in to register?'],['Receptionist',"Any time we're open. Wednesday afternoon is usually quiet."],
 ['Nam',"I have extra classes on Wednesday, and on Thursday morning I'm at school. Could I come on Friday evening?"],['Receptionist','Of course. See you on Friday.'],
 ['Narrator','That is the end of the conversation. You now have half a minute to check your answers.']]
},
reading:{
 title:'How Teenagers Spend Their Free Time', lead:'Thời gian: 20 phút. Làm Matching headings trước, sau đó điền câu 6–10.',
 paras:[
 ['A','For many parents, the image of a teenager in their free time is someone lying on a bed staring at a phone. Research suggests this picture is partly true. A 2024 survey of 2,000 secondary school students in five Asian cities found that they spent an average of three and a half hours a day on screens outside school, mostly on social media and video platforms.'],
 ['B','However, the same survey showed that screen time is not the whole story. More than 60 percent of the students also took part in at least one regular physical activity, such as football, badminton or dancing. Interestingly, students who played a team sport reported lower levels of stress than those who did not.'],
 ['C','One reason teenagers turn to their phones is a lack of time. In many countries, students attend extra classes in the evening and at weekends, leaving only short breaks between lessons. Scrolling through videos fits easily into these gaps, while a football match or a music lesson requires planning and a fixed schedule.'],
 ['D','Cost and space also matter. In crowded cities, public sports grounds are limited, and private clubs can be expensive. Students from lower-income families are therefore less likely to join organised activities, even when they are interested in them.'],
 ['E','Some schools are trying to change this situation. In one school in Singapore, the timetable now includes a “free choice” afternoon each week, when students can join clubs ranging from robotics to cooking. Teachers say that attendance is high and that students who rarely spoke in class have become more confident.']],
 groups:[
 {title:'Questions 1–5: Matching headings', box:'<b>List of headings</b><br>i&nbsp;&nbsp; Why money and location limit choices<br>ii&nbsp; A school that has created time for hobbies<br>iii Screens are only part of the picture<br>iv The dangers of social media for young people<br>v&nbsp; A common belief that is partly supported by data<br>vi Why short breaks encourage phone use<br>vii The growing popularity of online games', qs:[
  {t:'select',text:'Paragraph A',opts:['i','ii','iii','iv','v','vi','vii'],a:'v',ex:'“the image… Research suggests this picture is partly true” = niềm tin phổ biến, đúng một phần.'},
  {t:'select',text:'Paragraph B',opts:['i','ii','iii','iv','v','vi','vii'],a:'iii',ex:'“screen time is not the whole story”.'},
  {t:'select',text:'Paragraph C',opts:['i','ii','iii','iv','v','vi','vii'],a:'vi',ex:'“short breaks… Scrolling through videos fits easily into these gaps”.'},
  {t:'select',text:'Paragraph D',opts:['i','ii','iii','iv','v','vi','vii'],a:'i',ex:'“Cost and space also matter” = money and location.'},
  {t:'select',text:'Paragraph E',opts:['i','ii','iii','iv','v','vi','vii'],a:'ii',ex:'“a ‘free choice’ afternoon each week” = time for hobbies. Heading iv và vii là heading thừa.'}]},
 {title:'Questions 6–10: NO MORE THAN TWO WORDS AND/OR A NUMBER', box:'', qs:[
  {t:'gap',before:'The 2024 survey included',after:'students.',a:['2000'],num:true,ex:'A: “a 2024 survey of 2,000 secondary school students”.'},
  {t:'gap',before:'On average, students spent',after:'hours a day on screens outside school.',a:['3.5'],ex:'A: “three and a half hours” — ghi số 3.5 để không quá giới hạn từ.'},
  {t:'gap',before:'Students who played a',after:'felt less stressed.',a:['team sport'],ex:'B: “students who played a team sport reported lower levels of stress”.'},
  {t:'gap',before:'In crowded cities, there are not many public',after:'.',a:['sports grounds'],ex:'D: “public sports grounds are limited”.'},
  {t:'gap',before:'Some quiet students have become more',after:'.',a:['confident'],ex:'E: “students who rarely spoke in class have become more confident”.'}]}]
},
writing:{
 title:'Task 1 – Bar chart',
 prompt:'The bar chart below shows the average number of hours per week that students at a high school spent on four leisure activities in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
 chart:{title:'Average hours per week spent on leisure activities',unit:'hours / week',series:['2015','2025'],cats:['Watching TV','Social media','Sports','Reading books'],data:[[10,4],[3,12],[6,5],[4,2]]},
 min:150, max:190,
 outline:['Mở bài: paraphrase đề (shows → compares; leisure activities → free-time activities).','Overview: social media tăng mạnh thành hoạt động phổ biến nhất; TV và đọc sách giảm; thể thao gần như không đổi.','Thân bài 1: 2 thay đổi lớn nhất — TV (10 → 4) và social media (3 → 12).','Thân bài 2: 2 thay đổi nhỏ — sports (6 → 5) và reading (4 → 2).'],
 model:'The bar chart <b>compares</b> the average number of hours per week that students at a high school spent on four <b>free-time activities</b> in 2015 and 2025.<br><br><i>Overall</i>, social media became <b>by far the most</b> popular activity, while the time spent on television and reading fell. Sports <b>remained</b> relatively <b>stable</b>.<br><br>In 2015, students spent the most time watching TV, at 10 hours per week, <b>compared with</b> only 3 hours on social media. By 2025, <i>however</i>, the figure for social media had risen fourfold to 12 hours, <i>whereas</i> TV viewing <b>dropped sharply</b> to 4 hours. This means that social media replaced television as students’ main form of entertainment.<br><br>The other two activities saw smaller changes. Time spent on sports <b>decreased slightly</b> from 6 to 5 hours, <i>and</i> the figure for reading books <b>halved</b>, from 4 hours to just 2 hours a week. <i>As a result</i>, reading was the least popular activity in 2025.',
 note:'156 từ, khoảng band 6.0. Overview (đoạn 2) không có số liệu. Thân bài 1 nhóm hai thay đổi lớn, thân bài 2 nhóm hai thay đổi nhỏ. Dùng quá khứ đơn và quá khứ hoàn thành (had risen) vì số liệu nằm trong quá khứ.',
 checklist:['Mở bài paraphrase, không chép nguyên đề','Có overview, không có số liệu trong overview','2 đoạn thân bài nhóm số liệu hợp lý','Có so sánh giữa 2015 và 2025','Không đưa ý kiến cá nhân','Ít nhất 150 từ']
},
speaking:{
 task:'Ghi âm câu trả lời Part 1 cho câu 1, 4 và 8 (mỗi câu 15–20 giây) và bài nói Part 2 (1–2 phút), gửi cô qua Zalo trước buổi học sau.',
 items:[
 ['What do you usually do in your free time?',"I usually play badminton with my friends or watch videos on YouTube. During the school week I don't have much spare time, so I mostly relax at weekends."],
 ['Do you prefer spending your free time alone or with other people?',"I prefer spending it with other people, because it's more fun to chat and share experiences. For example, I often go to a café with my classmates after our exams."],
 ['Did you have any hobbies when you were a child?','Yes, I loved drawing. I used to draw cartoon characters in my notebooks, and I even took an art class for two years.'],
 ['Do you think it is important to have a hobby?','Yes, I think so. A hobby helps people relieve stress after studying or working, and it can also help them make friends with similar interests.'],
 ['How much time do you spend on your phone every day?',"Probably around three hours, which is quite a lot. Most of the time I scroll through short videos or chat with friends, so I'm trying to cut down."],
 ['What sports are popular in your country?',"Football is definitely the most popular sport in Vietnam. Badminton is also common, especially among students, because it's affordable and easy to play."],
 ['Is there a new hobby you would like to take up?',"I'd like to take up the guitar. My cousin plays very well, and I think music would be a good way to relax."],
 ['Are there enough places for leisure activities where you live?','Not really. My area is quite crowded, so there are only a few parks and sports grounds. Many people have to travel quite far to play sports.']],
 part2:{cue:'Describe a hobby you enjoy.',bullets:['what the hobby is','when you started it','how often you do it','and explain why you enjoy it.'],
  notes:'badminton · grade 9, cousin taught me · twice a week, school yard / sports centre · fitness, relieve stress, friends, confidence',
  model:"I'm going to talk about badminton, which is my favourite hobby. I started playing it when I was in grade nine. My cousin used to play for his university team, and one summer he taught me the basic skills, like how to hold the racket and how to serve properly. These days, I play about twice a week, usually on Tuesday and Saturday evenings. During the week, I play with my classmates in the school yard, and at weekends we sometimes rent a court at a sports centre near my house, which is quite affordable. There are several reasons why I enjoy it. First of all, it keeps me fit. After sitting at my desk all day, running around the court makes me feel much more energetic. Secondly, it helps me relieve stress, especially before exams, because when I'm playing, I completely forget about homework. And finally, it's a great way to socialise. Most of my close friends are people I play badminton with. I also think it has made me more confident, because I've taken part in a few school competitions. So, all in all, badminton is more than just a hobby for me. It's an important part of my life."},
 part3:[
 ['Why do some people have no time for hobbies?',"I think the main reason is work and study pressure. Many adults work long hours, and students like me have extra classes in the evening, so there's very little free time left. Also, some people spend their free time on their phones instead of doing a real hobby."],
 ['Should schools teach students hobbies such as music or art?',"Yes, I think so, at least to some extent. These subjects help students relax and discover new talents, which is good for their mental health. However, schools shouldn't make them too serious, because a hobby should be something students enjoy, not another subject to be tested on."],
 ['How are young people’s hobbies different from older people’s?','Young people usually have hobbies connected to technology, such as gaming or making videos, while older people prefer traditional activities like gardening or reading newspapers. Older people also tend to do hobbies that are relaxing, whereas teenagers often like more exciting or social activities.']]
},
quiz:[
 ['I ______ badminton last year and now I play every weekend.',['took up','took off','took in'],0],
 ['I’m trying to cut down ______ my screen time.',['at','on','off'],1],
 ['Overview trong Task 1 nên:',['đưa đầy đủ số liệu','nêu xu hướng chính, không cần số liệu','nêu ý kiến cá nhân'],1],
 ['“The figure rose from 3 to 12 hours” nghĩa là:',['increased slightly','remained stable','increased fourfold'],2],
 ['Khi làm Matching headings, cách tốt nhất là:',['tìm heading có từ giống hệt trong đoạn','đọc kỹ từng chữ của cả bài','đọc câu đầu, câu cuối để tìm ý chính cả đoạn'],2],
 ['“Affordable” nghĩa là:',['giá phải chăng','đắt đỏ','tiện lợi'],0],
 ['Câu mở bài Task 1 tốt hơn là:',['The bar chart shows the average number of hours per week that students spent on four leisure activities.','The bar chart compares how many hours per week students spent on four free-time activities.','I think students spend too much time on social media.'],1],
 ['Trong bài nghe, “open every day except Monday” nghĩa là hồ bơi đóng cửa vào:',['Sunday','Monday','every day'],1],
 ['“Relieve stress” nghĩa là:',['gây áp lực','quản lý thời gian','giảm căng thẳng'],2],
 ['Time spent on reading ______ from 4 to 2 hours.',['fell','fallen','falling'],0]]
}
];
