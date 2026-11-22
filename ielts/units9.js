/* Ôn tập 3 (sau Unit 12) + Thi thử cuối khóa (sau Unit 16) */
window.UNITS=window.UNITS||[];
window.UNITS.push(
{
id:'r3', label:'Ôn tập 3', title:'Ôn tập Unit 9–12', week:12, review:true,
focus:'Kiểm tra sau chặng 3: từ vựng, ngữ pháp và đủ 4 kỹ năng (Food, Cities, Media, Science)',
voices:{'Receptionist':'bf_emma','Caller':'am_adam','ex':'bf_alice','ans':'am_michael'},
goalText:'Ôn lại 4 unit của chặng 3 trước khi lên “Đỉnh 5.5”. Làm theo thứ tự trong bảng, mỗi phần bấm giờ. Phần nào dưới mục tiêu thì mở lại unit tương ứng và làm lại phần đó.',
goals:[['Mini quiz 20 câu','15 phút','≥ 16/20'],['Listening (10 câu)','15 phút','≥ 7/10'],['Reading (10 câu)','18 phút','≥ 7/10'],['Writing Task 2','40 phút','250 từ, nộp cô chấm'],['Speaking Part 1–3','15 phút','Ghi âm Part 2, gửi cô']],
strategy:`<p><b>Chặng 3 đã học:</b></p>
<table><tr><th>Unit</th><th>Listening</th><th>Reading</th><th>Writing</th><th>Ngữ pháp</th></tr>
<tr><td>9 Food & Culture</td><td>Matching A–G</td><td>Summary (từ trong bài)</td><td>Task 1 Process</td><td>Bị động</td></tr>
<tr><td>10 Cities & Transport</td><td>Notes + map</td><td>Short answer</td><td>Task 2 Problem–Solution</td><td>Lượng từ</td></tr>
<tr><td>11 Media & Advertising</td><td>Flow-chart</td><td>Headings (bài dài)</td><td>Task 1 Mixed charts</td><td>Câu tường thuật</td></tr>
<tr><td>12 Science & Innovation</td><td>Sentence completion (S4)</td><td>Diagram + TFNG</td><td>Task 1 Map</td><td>So sánh nâng cao</td></tr></table>
<p class="note">Sau khi chấm: vào <a href="#me">Sổ lỗi</a>, xem 2 dạng sai nhiều nhất và làm lại phần đó trong unit gốc trước khi sang Unit 13.</p>`,
ltags:{1:'L-spell',2:'L-num',3:'L-word',4:'L-num',5:'L-word',6:'L-word'},
listening:{
 lead:'Section 1 (ôn Unit 10): một người gọi điện đặt thuê xe đạp tham quan thành phố. Câu 1–6: write <b>ONE WORD AND/OR A NUMBER</b>. Câu 7–10: chọn đáp án.',
 order:['form','mcq'],
 formTitle:'Questions 1–6: Complete the booking form.',
 form:[['<b>City Bike Tours – Booking</b>','',null],['Name','Anna {1}',1],['Number of people','{2}',2],['Tour chosen','the {3} tour',3],['Price per person','{4} VND',4],['Meeting point','outside the {5}',5],['Bring','a {6} (it may rain)',6]],
 mcqTitle:'Questions 7–10',
 mcq:[
  {n:7,q:'The tour starts at',opts:['7.00','7.30','8.00'],a:1,ex:'“we now start at seven thirty”.'},
  {n:8,q:'What is included in the price?',opts:['lunch','a drink and a snack','a guidebook'],a:1,ex:'“a drink and a snack are included”.'},
  {n:9,two:true,q:'Which TWO things does the receptionist warn about?',opts:['heavy traffic in the old quarter','pickpockets at the market','very hot weather','steep hills','closed roads on Sunday'],a:[0,2],ex:'“the traffic in the old quarter is heavy” và “it gets very hot by midday”.'}],
 ans:{1:{a:['Kowalski','kowalski'],t:'L-spell',ex:'“K-O-W-A-L-S-K-I”.'},2:{a:['4','four'],num:true,ex:'“there will be four of us”.'},3:{a:['food','street food'],ex:'“the food tour”.'},4:{a:['350000','350,000'],num:true,ex:'“three hundred and fifty thousand dong per person”.'},5:{a:['museum'],ex:'“outside the museum, not the station”.'},6:{a:['raincoat'],ex:'“bring a raincoat”.'}},
 script:[['Narrator','You will hear a woman phoning a company to book a bicycle tour. First, you have some time to look at questions 1 to 6.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 6.'],
 ['Receptionist',"Good morning, City Bike Tours. How can I help?"],
 ['Caller',"Hello, I'd like to book a tour for Saturday, please. My name's Anna Kowalski. That's K-O-W-A-L-S-K-I."],
 ['Receptionist',"Thank you. And how many people?"],
 ['Caller',"I thought five, but my brother can't come, so there will be four of us."],
 ['Receptionist',"Which tour would you like? We have the history tour and the food tour."],
 ['Caller',"We did the history tour last year, so the food tour, please."],
 ['Receptionist',"Good choice. That's three hundred and fifty thousand dong per person."],
 ['Caller',"And where do we meet?"],
 ['Receptionist',"It used to be outside the station, but now we meet outside the museum, not the station. And please bring a raincoat, because it may rain in the afternoon."],
 ['Narrator','Before you hear the rest of the conversation, you have some time to look at questions 7 to 10.'],['Narrator','[Đọc đề] Now listen and answer questions 7 to 10.'],
 ['Caller',"What time does it start?"],
 ['Receptionist',"It used to start at eight, but because of the heat we now start at seven thirty."],
 ['Caller',"Is lunch included?"],
 ['Receptionist',"Lunch isn't included, and we don't provide guidebooks, but a drink and a snack are included."],
 ['Caller',"Anything else we should know?"],
 ['Receptionist',"Just two things. The traffic in the old quarter is heavy, so please stay close to the guide. And it gets very hot by midday, so wear a hat. Don't worry about hills — the city is completely flat — and the roads are all open on Saturday."],
 ['Narrator','That is the end of Section 1. You now have half a minute to check your answers.']]
},
speaking:{
 task:'Ghi âm Part 2 (2 phút), gửi cô qua Zalo.',
 items:[['What kind of food do you like?',"I love street food, especially bánh mì and phở. They're cheap, quick and full of flavour, and you can find them on almost every corner in my city."],
 ['How do you usually get to school?',"I usually go by electric bike. It takes about fifteen minutes, which is faster than the bus because I can avoid some of the traffic jams."]],
 part2:{cue:'Describe an advertisement that you remember well.',bullets:['where you saw it','what it was for','what happened in it','and explain why you remember it.'],
  notes:'TV + YouTube, Tet · a milk/drink company · family travelling home for Tet, grandma waiting · emotional, music, reminded me of my family',
  model:"The advertisement I remember best is one I saw on YouTube and on TV just before Tet last year. It was for a drinks company, but actually the product only appeared at the very end. The advert told the story of a young man who works in Ho Chi Minh City and can't afford a plane ticket home for Tet. He travels for two days by bus and motorbike, and meanwhile his grandmother is shown preparing food and waiting by the gate. In the last scene he finally arrives, and the whole family sits down to eat together. I remember it well for two reasons. First, the music was really beautiful and I kept humming it for weeks. Second, it reminded me of my own family, because my uncle also works far away and only comes home once a year. I think it was a clever advert, because instead of describing the product, it made people feel something, and that made them remember the brand."},
 part3:[['Do you think advertising affects what young people buy?',"Definitely. Most young people spend hours on social media, where they see adverts and influencers all the time, so they're strongly influenced, sometimes without realising it."],
 ['How can cities reduce traffic jams?',"I think the most effective way is to improve public transport, for example by building more metro lines and bus lanes. At the same time, cities could charge drivers who enter the centre at peak times."]]
},
reading:{
 title:'Night Markets in Asian Cities', lead:'Thời gian: 18 phút · bài đọc khoảng 520 từ · 10 câu.',
 paras:[
 ['A','Across Asia, from Taipei to Bangkok and Ho Chi Minh City, night markets have long been a central part of city life. As the heat of the day fades, streets that were busy with traffic are closed to cars and filled with food stalls, clothes sellers and crowds of shoppers. For many residents, the night market is not simply a place to buy things; it is where friends meet, families eat together and visitors get their first taste of local culture.'],
 ['B','The origins of night markets are practical. In hot climates, it has always made sense to shop and socialise after sunset. In addition, many traders work at other jobs during the day, so the evening offers them a chance to earn extra income. Because setting up a stall requires little money, night markets have traditionally given people with few resources a way to start a small business.'],
 ['C','In recent years, night markets have become major tourist attractions. Travel guides and food bloggers recommend particular stalls, and some vendors now have queues of visitors every evening. City governments have noticed their economic value. In several cities, authorities have built permanent roofs, installed public toilets and introduced rules on hygiene, which has made the markets cleaner and safer.'],
 ['D','However, these changes have also brought problems. As markets become more popular with tourists, rents for stalls often rise, and some long-established sellers can no longer afford to stay. Local residents complain that prices are increasingly aimed at visitors rather than at them. Critics also say that some markets now sell the same souvenirs found everywhere, losing the character that once made them special.'],
 ['E','Some cities are trying to find a balance. In one approach, a proportion of stalls is reserved for traditional sellers at lower rents. Another idea is to limit the number of stalls selling mass-produced goods. Supporters of these measures argue that a night market’s value lies in its local identity: if it becomes just another shopping centre, it will lose both residents and tourists in the long run.'],
 ['F','Technology may also change the future of night markets. Many vendors now accept payment by mobile phone, and some take orders through delivery apps, so their customers do not even need to visit the market. It remains to be seen whether this convenience will strengthen night markets or slowly empty their streets.']],
 groups:[
 {title:'Questions 1–4: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Cars are allowed on the streets during night markets.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'A: streets “are closed to cars”.'},
  {t:'select',text:'Starting a night market stall usually needs a lot of money.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'B: “requires little money”.'},
  {t:'select',text:'Some cities have improved hygiene at night markets.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'C: “introduced rules on hygiene”.'},
  {t:'select',text:'Night markets in Taipei are older than those in Bangkok.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'Bài không so sánh tuổi các chợ.'}]},
 {title:'Questions 5–8: Answer the questions. Choose NO MORE THAN TWO WORDS from the passage.',box:'',qs:[
  {t:'gap',tag:'R-short',before:'Who recommends particular stalls, as well as travel guides?',after:'',a:['food bloggers'],ex:'C: “Travel guides and food bloggers recommend…”.'},
  {t:'gap',tag:'R-short',before:'What rises as markets become popular with tourists?',after:'',a:['rents','rent'],ex:'D: “rents for stalls often rise”.'},
  {t:'gap',tag:'R-short',before:'What kind of goods do some cities want to limit?',after:'',a:['mass-produced goods','mass-produced'],ex:'E: “stalls selling mass-produced goods”.'},
  {t:'gap',tag:'R-short',before:'Through what do some vendors take orders?',after:'',a:['delivery apps'],ex:'F: “take orders through delivery apps”.'}]},
 {title:'Questions 9–10',box:'',qs:[
  {t:'two',text:'Which TWO measures to protect the character of night markets are mentioned?',opts:['reserving some stalls for traditional sellers','banning tourists at weekends','limiting stalls that sell mass-produced goods','closing markets earlier','charging an entrance fee'],a:[0,2],ex:'E: “reserved for traditional sellers at lower rents” và “limit the number of stalls selling mass-produced goods”.'}]}]
},
writing:{
 title:'Task 2 – Problem & Solution (40 phút)',
 prompt:'In many cities, traditional markets and small shops are being replaced by shopping centres. <b>What problems does this cause? What solutions can you suggest?</b> Write at least 250 words.',
 min:250,max:320,
 outline:['Mở bài: paraphrase + nêu ngắn vấn đề và giải pháp.','Thân bài 1 (problems): người bán nhỏ mất thu nhập; mất bản sắc văn hóa, phố xá giống nhau; ví dụ chợ truyền thống bị phá để xây trung tâm thương mại.','Thân bài 2 (solutions): giữ một số chợ là di sản, giảm tiền thuê cho người bán truyền thống; hỗ trợ bán hàng online; mỗi giải pháp khớp một vấn đề.','Kết bài: tóm tắt.'],
 model:'In many cities around the world, traditional markets and small family shops are gradually disappearing as large shopping centres are built. This trend creates economic and cultural problems, but there are practical ways to reduce its impact.<br><br><i>The most serious problem</i> is the loss of income for small traders. Many stallholders in traditional markets have little education and few other job opportunities, so when a market is demolished, <b>a large number of families lose their livelihood</b>. <i>Another issue</i> is the loss of local identity. Traditional markets reflect the food, crafts and customs of an area, whereas shopping centres in different cities often contain the same international brands. <i>As a result</i>, cities become less interesting for residents and tourists alike.<br><br><i>To address these problems</i>, governments could protect a number of historic markets as heritage sites and invest in improving them, for example by repairing roofs and adding toilets, rather than replacing them. <i>In addition</i>, authorities could offer lower rents to traditional sellers in new developments, so that they are not forced out by rising costs. Small traders could also be given training in selling online, which would allow them to reach more customers without leaving their community.<br><br><i>In conclusion</i>, although the replacement of traditional markets by shopping centres threatens the livelihoods of small traders and the character of cities, careful protection, fair rents and digital training can help both to survive.',
 note:'Khoảng 260 từ, band 6.0–6.5. Mỗi giải pháp ở thân bài 2 khớp với một vấn đề ở thân bài 1 (ôn Unit 10). Có dùng lượng từ (a large number of, few, little) và bị động (is demolished, are built).',
 checklist:['Mở bài nêu cả vấn đề và giải pháp','Mỗi giải pháp khớp với một vấn đề','Có ví dụ cụ thể','Dùng đúng lượng từ (few/little, a number of/an amount of)','Ít nhất 250 từ']
},
quiz:[
 ['Process: “The rice ______ in water overnight.”',['soaks','is soaked','soaking'],1,'G'],
 ['“Cuisine” nghĩa là:',['ẩm thực','nhà bếp','đầu bếp'],0,'V'],
 ['There are too ______ cars in the city centre.',['much','many','little'],1,'G'],
 ['“Congestion” nghĩa là:',['tắc nghẽn','ô nhiễm','xây dựng'],0,'V'],
 ['Short-answer “NO MORE THAN THREE WORDS”: em viết 4 từ →',['vẫn đúng','sai','được nửa điểm'],1,'S'],
 ['She said, “I will make an advert.” → She said she ______ an advert.',['will make','would make','makes'],1,'G'],
 ['“Persuade” nghĩa là:',['thuyết phục','quảng cáo','phỏng vấn'],0,'V'],
 ['Headings bài dài: nên đọc kỹ',['câu đầu và câu cuối đoạn','từng chữ','chỉ đoạn cuối'],0,'S'],
 ['Electric cars are ______ quieter than petrol cars.',['very','much','more'],1,'G'],
 ['Map: “The car park ______ into a garden.”',['converted','was converted','converting'],1,'G'],
 ['Listening Matching A–G có 7 phương án cho 5 câu → số phương án thừa:',['1','2','3'],1,'S'],
 ['“Infrastructure” nghĩa là:',['cơ sở hạ tầng','kiến trúc','công trường'],0,'V'],
 ['There is ______ public transport in my town.',['few','little','many'],1,'G'],
 ['Flow-chart Listening: người nói đổi ý thì ghi',['ý đầu tiên','quyết định cuối cùng','cả hai'],1,'S'],
 ['“Target audience” nghĩa là:',['khán giả mục tiêu','khán giả đông','người nổi tiếng'],0,'V'],
 ['The ______ you practise, the better you get.',['more','most','much'],0,'G'],
 ['Section 4 “ONE WORD ONLY”: em viết “a microscope” →',['đúng','sai','tùy'],1,'S'],
 ['Mixed charts: overview nên',['nêu đặc điểm chính của cả 2 biểu đồ','chỉ nói biểu đồ đầu','liệt kê số liệu'],0,'S'],
 ['“Demolish” nghĩa là:',['phá bỏ','xây mới','sửa chữa'],0,'V'],
 ['Solar panels ______ on the roof last year.',['installed','were installed','have installed'],1,'G']]
},
{
id:'m2', label:'Thi thử cuối khóa', title:'Thi thử cuối khóa (sau Unit 16)', week:16, review:true, mock:true,
focus:'Đề thi thử đủ 4 kỹ năng: Listening 20 câu (Section 3 + 4) · Reading 13 câu · Writing Task 1 + Task 2 · Speaking Part 1–3',
voices:{'Tutor':'bm_george','Mai':'bf_lily','Lecturer':'bf_isabella','ex':'bf_alice','ans':'am_michael'},
goalText:'Bài thi thử cuối khóa sau 16 tuần. Làm trong <b>một buổi liền</b> (khoảng 2 giờ 20 phút), bấm giờ như thi thật, không tra từ điển. Kết quả quyết định em lên <b>chặng 2 (mục tiêu 6.5)</b> hay ôn thêm 4 tuần.',
goals:[['Listening (Section 3 + 4, 20 câu)','khoảng 20 phút','≥ 12/20 (≈ band 5.5)'],['Reading (1 passage, 13 câu)','20 phút','≥ 8/13'],['Writing Task 1 + Task 2','60 phút','Đủ 150 + 250 từ, nộp cô chấm'],['Speaking Part 1–3','11–14 phút','Ghi âm cả 3 part (hoặc thi 1–1 với cô)']],
strategy:`<p><b>Quy chế thi thử cuối khóa</b></p>
<table><tr><th>Phần</th><th>Thời gian</th><th>Lưu ý</th></tr>
<tr><td>Listening</td><td>~20 phút</td><td>Bấm “Nghe như thi thật”: chỉ nghe 1 lần. Hết bài có 2 phút kiểm tra như thi trên máy.</td></tr>
<tr><td>Reading</td><td>20 phút</td><td>Bài dài hơn các unit (~850 từ). Bấm “Bắt đầu” để chạy đồng hồ.</td></tr>
<tr><td>Writing</td><td>60 phút</td><td>Task 1 khoảng 20 phút, Task 2 khoảng 40 phút. Gõ bài, máy không sửa chính tả.</td></tr>
<tr><td>Speaking</td><td>11–14 phút</td><td>Ghi âm liền Part 1, 2, 3. Part 2: 1 phút chuẩn bị, nói đủ 2 phút.</td></tr></table>
<p><b>Tiêu chí lên chặng 2:</b> overall khoảng 5.0 trở lên và không kỹ năng nào dưới 4.5. Nếu chưa đạt: ôn 4 tuần theo 3 dạng sai nhiều nhất trong Sổ lỗi, rồi thi lại.</p>
<p class="note">Band trên trang chỉ là <b>ước tính</b>. Writing và Speaking do cô chấm theo 4 tiêu chí chính thức.</p>`,
ltags:{11:'L-word',12:'L-num',13:'L-word',14:'L-word',15:'L-word',16:'L-word',17:'L-word',18:'L-word',19:'L-word',20:'L-word'},
listening:{
 lead:'<b>Section 3</b> (câu 1–10): Mai thảo luận với giáo viên hướng dẫn về bài nghiên cứu khảo sát giấc ngủ của học sinh. <b>Section 4</b> (câu 11–20): bài giảng về các thành phố bọt biển (sponge cities).',
 order:['mcq','form'],
 mcqTitle:'Section 3 · Questions 1–10',
 mcq:[
  {n:1,q:'Why did Mai choose the topic of sleep?',opts:['Her tutor suggested it.','She noticed her classmates were often tired.','She read an article about it.'],a:1,ex:'“I noticed that so many of my classmates were falling asleep in class”.'},
  {n:2,q:'How many students answered Mai’s survey?',opts:['120','200','210'],a:2,ex:'“I sent it to two hundred and fifty… two hundred and ten replied”.'},
  {n:3,q:'What surprised Mai most?',opts:['how late students went to bed','how many students used phones in bed','how little students exercised'],a:1,ex:'“what really surprised me was that almost ninety percent use their phones in bed”.'},
  {n:4,q:'The tutor thinks Mai’s questionnaire',opts:['was too long.','had some unclear questions.','should have been online.'],a:1,ex:'“a couple of the questions were unclear”.'},
  {n:5,q:'Mai will add information about',opts:['students’ exam results.','students’ diets.','students’ part-time jobs.'],a:0,ex:'“compare sleep with exam results”.'},
  {n:6,q:'What does the tutor say about the graphs?',opts:['There are too many.','They need clearer labels.','They should be in colour.'],a:1,ex:'“the labels on the graphs aren’t clear”.'},
  {n:7,two:true,q:'Which TWO recommendations will Mai include?',opts:['starting school later','banning phones at school','a phone-free hour before bed','longer holidays','classes on sleep and health'],a:[2,4],ex:'“a phone-free hour before bed” và “short classes about sleep and health”.'},
  {n:9,two:true,q:'Which TWO things must Mai do before the deadline?',opts:['interview a doctor','check her references','shorten the introduction','add a second survey','print the report'],a:[1,2],ex:'“check your references” và “shorten the introduction”.'}],
 formTitle:'Section 4 · Questions 11–20: Complete the notes. Write ONE WORD ONLY for each answer.',
 form:[['<b>Sponge cities</b>','',null],['Problem','Concrete surfaces stop rain from going into the {11}.',11],['Result','Water runs into drains, which causes {12} in heavy storms.',12],
  ['<b>Main idea</b>','',null],['Aim','A sponge city absorbs, stores and {13} rainwater.',13],
  ['<b>Methods</b>','',null],['Roofs','Green roofs are covered with {14}.',14],['Streets','Pavements are made of special {15} that lets water through.',15],['Parks','Some parks are designed to become temporary {16}.',16],['Rivers','Concrete walls are replaced with natural {17}.',17],
  ['<b>Benefits & challenges</b>','',null],['Extra benefit','Plants and water make cities {18} in summer.',18],['Challenge','The main difficulty is the high {19} at the start.',19],['Advice','Planners should work with local {20}.',20]],
 ans:{11:{a:['ground'],ex:'“stop rain from soaking into the ground”.'},12:{a:['flooding','floods'],ex:'“which leads to flooding”.'},13:{a:['reuses','re-uses'],ex:'“absorbs, stores and reuses rainwater”.'},14:{a:['plants'],ex:'“roofs covered with plants”.'},15:{a:['bricks'],ex:'“special bricks that let water pass through”.'},16:{a:['lakes'],ex:'“become temporary lakes”.'},17:{a:['banks'],ex:'“replaced with natural banks”.'},18:{a:['cooler'],ex:'“make cities cooler in summer”.'},19:{a:['cost','costs'],ex:'“the high cost at the start”.'},20:{a:['communities','residents','people'],ex:'“work closely with local communities”.'}},
 script:[['Narrator','Section 3. You will hear a student, Mai, talking to her tutor about her research project. First, you have some time to look at questions 1 to 6.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 6.'],
 ['Tutor',"Come in, Mai. So, how's the project on sleep going? Remind me why you chose this topic."],
 ['Mai',"Well, I'd read a few articles about sleep, but the real reason was that I noticed that so many of my classmates were falling asleep in class, especially in the morning."],
 ['Tutor',"And how many responses did you get to your survey?"],
 ['Mai',"I sent it to two hundred and fifty students. I expected about a hundred and twenty to reply, but in the end two hundred and ten replied."],
 ['Tutor',"That's excellent. Any surprises?"],
 ['Mai',"I expected students to go to bed late, and they do. But what really surprised me was that almost ninety percent use their phones in bed."],
 ['Tutor',"Interesting. I looked at your questionnaire. The length was fine, and paper was OK for your school, but a couple of the questions were unclear. For example, 'How much do you sleep?' could mean on school nights or at weekends."],
 ['Mai',"Yes, I see. I was also thinking of adding something about diet."],
 ['Tutor',"I'd keep it focused. It would be more useful to compare sleep with exam results, if the school allows it."],
 ['Mai',"OK, I'll do that instead."],
 ['Tutor',"And the graphs — there are the right number, and colour isn't necessary, but the labels on the graphs aren't clear. Readers need to know what each axis shows."],
 ['Narrator','Before you hear the rest of the conversation, you have some time to look at questions 7 to 10.'],['Narrator','[30 giây đọc đề] Now listen and answer questions 7 to 10.'],
 ['Tutor',"Now, your recommendations. What are you thinking?"],
 ['Mai',"I wanted to suggest starting school later, but that's not realistic here. Banning phones at school wouldn't help sleep either. So I'll recommend a phone-free hour before bed, and short classes about sleep and health."],
 ['Tutor',"Good, both are practical. Longer holidays?"],
 ['Mai',"No, that's not really related."],
 ['Tutor',"Fine. Before the deadline, you must check your references — some are missing dates — and shorten the introduction, which is twice as long as it should be. You don't need to interview a doctor or do a second survey, and you can submit it online, so no need to print it."],
 ['Narrator','That is the end of Section 3. Now you will hear Section 4. First, you have some time to look at questions 11 to 20.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 11 to 20.'],
 ['Lecturer',"Today I'm going to talk about an idea from urban planning called the sponge city. Let me begin with the problem. Modern cities are covered in concrete and asphalt. These hard surfaces stop rain from soaking into the ground. Instead, the water runs into drains, and when there's a heavy storm, the drains can't cope, which leads to flooding."],
 ['Lecturer',"The main idea of a sponge city is to work with water rather than against it. Like a sponge, the city absorbs, stores and reuses rainwater, instead of trying to get rid of it as quickly as possible."],
 ['Lecturer',"So how is this done? First, roofs. Many buildings now have green roofs, that is, roofs covered with plants, which hold rainwater and release it slowly. Second, streets. Pavements and car parks can be made of special bricks that let water pass through into the soil below. Third, parks. Some parks are designed so that, during heavy rain, low areas fill up and become temporary lakes, and then slowly drain afterwards. And finally, rivers. In many cities, rivers were forced into concrete channels. In a sponge city, these concrete walls are replaced with natural banks, with plants that slow the water down."],
 ['Lecturer',"There are extra benefits too. Plants and water make cities cooler in summer, which is important as temperatures rise. However, there are challenges. The main difficulty is the high cost at the start, because many streets and buildings need to be rebuilt. My advice to future planners is this: work closely with local communities, because these projects only succeed when residents understand and support them."],
 ['Narrator','That is the end of the test. You now have two minutes to check your answers.']]
},
speaking:{
 task:'Ghi âm liền Part 1, Part 2 (1 phút chuẩn bị + 2 phút nói) và Part 3, gửi cô; hoặc thi 1–1 với cô trong buổi học.',
 items:[
 ['Do you work or are you a student?',"I'm a student in grade eleven at a high school in Binh Chanh district. My favourite subjects are English and biology."],
 ['How much sleep do you usually get?',"On school nights, only about six hours, because I have a lot of homework and extra classes. At weekends I try to catch up, but I know it's not ideal."],
 ['Do you like rainy weather?',"Not really, because the streets in my area sometimes flood and it's difficult to ride my bike. But I do like the sound of rain when I'm at home reading."],
 ['What do you usually do in the evening?',"After dinner, I usually do my homework for two or three hours. Then I relax by watching short videos or chatting with my friends online."]],
 part2:{cue:'Describe a goal you hope to achieve in the next few years.',bullets:['what the goal is','why you have this goal','what you are doing to achieve it','and explain how you will feel if you achieve it.'],
  notes:'IELTS 6.5 before grade 12 ends · university admission + exempt English exam · 2 online classes/week, workbook 15 min/day, mock tests · proud, more confident, opens doors',
  model:"A goal I really hope to achieve is getting an IELTS score of 6.5 before I finish grade twelve. There are two main reasons for this goal. First, many universities in Vietnam now accept IELTS for admission, so a good score would give me a much better chance of getting into the university I want, which is in Ho Chi Minh City. Second, I'd like to study abroad for a master's degree one day, and I know I'll need strong English for that. To achieve it, I'm following a clear plan. I attend two online classes a week with my teacher, and every day I spend at least fifteen minutes on the workbook, even when I'm busy. I also keep an error notebook, so I know which types of questions I usually get wrong. Recently I took a mock test and got 5.5, which made me realise I need to work harder on writing. If I achieve this goal, I'll feel really proud, because it'll show that small daily efforts can lead to big results. I think it'll also make me more confident about speaking English with people from other countries."},
 part3:[
 ['Why is it important for young people to set goals?',"I think goals give young people direction. Without them, it's easy to waste time on things that aren't important. Having a clear goal also helps them stay motivated when studying gets difficult."],
 ['Is it better to have short-term or long-term goals?',"Ideally both. Long-term goals give you a big purpose, but they can feel very far away, so you need short-term goals, like finishing a unit each week, to make steady progress and see results."],
 ['Do schools put too much pressure on students?',"In some cases, yes. Many students in Vietnam have extra classes every evening and very little time to rest. A certain amount of pressure can be motivating, but too much can affect students' sleep and mental health."]]
},
reading:{
 title:'The Science of Learning', lead:'Thời gian: 20 phút · bài đọc khoảng 850 từ · 13 câu.',
 paras:[
 ['A','Most students have been there: it is the night before an exam, and they read their notes again and again, highlighting key sentences in bright colours. By midnight, the information feels familiar, and they go to bed feeling prepared. Yet a few days after the exam, much of what they “learned” has disappeared. Over the past few decades, cognitive psychologists have studied which study methods actually lead to long-lasting learning, and their findings suggest that many of the most popular techniques are among the least effective.'],
 ['B','One of the strongest findings concerns what researchers call “retrieval practice”. Instead of simply rereading material, learners try to recall it from memory, for example by answering questions, writing down everything they remember about a topic, or using flashcards. In a series of well-known experiments, students who read a text and then tested themselves remembered far more a week later than students who read the same text several times. The act of pulling information out of memory, it seems, strengthens it in a way that looking at it again does not.'],
 ['C','A second principle is “spacing”. When people study the same material in one long session, they may perform well on a test that comes immediately afterwards, but they forget quickly. When the same amount of study is spread out over several days or weeks, the learning lasts much longer. The reason appears to be that a small amount of forgetting between sessions forces the brain to work harder to remember, which makes the memory stronger. For this reason, experts recommend reviewing new vocabulary after one day, then after a few days, then after a week or two.'],
 ['D','A third technique, sometimes called “interleaving”, involves mixing different types of problems in a single study session rather than practising one type at a time. A student preparing for a mathematics exam, for instance, might mix questions on different topics instead of completing twenty similar questions in a row. Interleaved practice often feels harder and slower, and learners tend to believe it is less effective. In tests, however, it usually produces better results, because students learn to recognise which method each problem requires.'],
 ['E','If these methods are so effective, why are they not more widely used? Part of the answer lies in what psychologists call the “illusion of knowing”. When students reread a chapter, the text feels increasingly familiar, and they mistake this familiarity for understanding. Retrieval, spacing and interleaving, by contrast, involve struggle and mistakes, which can make learners feel that they are doing badly. Researchers describe these as “desirable difficulties”: the effort that makes study feel harder in the short term is exactly what makes learning stick.'],
 ['F','Teachers have also been slow to adopt these ideas, partly because school schedules are organised around topics that are taught once and then left behind. A unit on the water cycle might be covered in November and not mentioned again until the end-of-year exam. Some schools are now experimenting with short, low-stakes quizzes at the start of lessons, which ask students to recall material from previous weeks. Such quizzes are not used for grades; their purpose is simply to give students regular practice in retrieval.'],
 ['G','None of this means that rereading and highlighting are useless. They can help students identify what they need to learn, and a quick read through notes can be a good starting point. The problem arises when these become the only methods used. A more effective approach is to read once, close the book, and then test oneself, checking the answers afterwards and returning to the material that was forgotten.'],
 ['H','The research also has implications for learning outside school. Language learners, for example, can benefit from apps that ask them to recall words at increasing intervals, and from mixing listening, reading, speaking and writing practice in the same week rather than focusing on one skill for a month. Ultimately, the message from the science of learning is encouraging: how well we learn depends not only on how much time we spend, but on how we use that time.']],
 groups:[
 {title:'Questions 1–5: The passage has eight paragraphs, A–H. Choose the correct heading for paragraphs B–F from the list below.',box:'<b>i</b> Why effective methods feel ineffective<br><b>ii</b> The benefit of testing yourself<br><b>iii</b> How schools are beginning to change<br><b>iv</b> The cost of private tutoring<br><b>v</b> Mixing different kinds of practice<br><b>vi</b> Studying the night before an exam<br><b>vii</b> Leaving time between study sessions<br><b>viii</b> Why rereading is always useless',qs:[
  {t:'select',text:'Paragraph B',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'ii',ex:'B: retrieval practice — tự kiểm tra (testing yourself).'},
  {t:'select',text:'Paragraph C',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'vii',ex:'C: spacing — giãn cách giữa các buổi học.'},
  {t:'select',text:'Paragraph D',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'v',ex:'D: interleaving — trộn các dạng bài.'},
  {t:'select',text:'Paragraph E',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'i',ex:'E: illusion of knowing — phương pháp tốt lại cảm giác như học kém.'},
  {t:'select',text:'Paragraph F',opts:['i','ii','iii','iv','v','vi','vii','viii'],a:'iii',ex:'F: một số trường đang thử quiz đầu giờ.'}]},
 {title:'Questions 6–9: Do the following statements agree with the claims of the writer? Write YES, NO or NOT GIVEN.',box:'',qs:[
  {t:'select',text:'Many popular study methods are not very effective.',opts:['YES','NO','NOT GIVEN'],a:'YES',ex:'A: “many of the most popular techniques are among the least effective”.'},
  {t:'select',text:'Interleaved practice usually feels easier to students.',opts:['YES','NO','NOT GIVEN'],a:'NO',ex:'D: “often feels harder and slower”.'},
  {t:'select',text:'Low-stakes quizzes should count towards students’ final grades.',opts:['YES','NO','NOT GIVEN'],a:'NO',ex:'F: “Such quizzes are not used for grades”.'},
  {t:'select',text:'Students who use flashcards enjoy studying more.',opts:['YES','NO','NOT GIVEN'],a:'NOT GIVEN',ex:'Bài không nói về mức độ thích thú.'}]},
 {title:'Questions 10–11',box:'',qs:[
  {t:'two',text:'Which TWO pieces of advice does the writer give in paragraphs G and H?',opts:['Read your notes once and then test yourself.','Never use highlighters.','Mix different language skills within the same week.','Study one skill for a whole month.','Only study in the morning.'],a:[0,2],ex:'G: “read once, close the book, and then test oneself”; H: “mixing listening, reading, speaking and writing practice in the same week”.'}]},
 {title:'Questions 12–13: Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage.',box:'',qs:[
  {t:'gap',tag:'R-gap',before:'Researchers call the helpful struggle in learning',after:'.',a:['desirable difficulties'],ex:'E: “Researchers describe these as desirable difficulties”.'},
  {t:'gap',tag:'R-gap',before:'Language apps help learners recall words at increasing',after:'.',a:['intervals'],ex:'H: “recall words at increasing intervals”.'}]}]
},
writing:{
 title:'Task 1 + Task 2 (60 phút)',
 t1:{title:'Task 1 · Line graph',min:150,
  prompt:'The graph below shows the average number of hours that teenagers in one country spent on three activities per day between 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
  chart:{type:'line',title:'Average daily hours spent by teenagers',unit:'hours',max:10,step:2,series:['Sleeping','Using a phone','Doing homework'],cats:['2010','2015','2020','2025'],data:[[8.5,8,7.5,7],[1,2.5,4,4.5],[2.5,2.5,3,3]]},
  model:'The line graph illustrates how many hours per day, on average, teenagers in one country spent sleeping, using a phone and doing homework between 2010 and 2025.<br><br><i>Overall</i>, phone use rose dramatically, while sleep time fell steadily. Time spent on homework changed only slightly.<br><br>In 2010, teenagers slept for 8.5 hours a day, far more than the time they spent on the other two activities. <i>However</i>, this figure <b>declined gradually</b> over the period, reaching 7 hours in 2025. By contrast, phone use was the least common activity in 2010, at just one hour a day, but it <b>increased sharply</b> to 4 hours in 2020 and continued to climb to 4.5 hours by the end of the period.<br><br>Homework, meanwhile, took 2.5 hours a day in both 2010 and 2015, before <b>rising slightly</b> to 3 hours in 2020, where it <b>remained</b> in 2025. As a result, from 2015 onwards teenagers spent more time on their phones than on homework.',
  note:'Khoảng 170 từ, band 6.0–6.5.'},
 chart:null,
 prompt:'<b>Task 2 · Two-part question.</b> Many teenagers today do not get enough sleep. <b>What are the causes of this? What can be done to solve this problem?</b> Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.',
 min:250,max:320,
 outline:['Task 1 (20 phút): mở bài → overview (phone tăng mạnh, sleep giảm, homework ít đổi) → thân bài sleep & phone → thân bài homework + so sánh.','Task 2 mở bài: paraphrase + trả lời ngắn cả hai câu hỏi.','Thân bài 1 (causes): điện thoại/mạng xã hội buổi tối; áp lực học tập, học thêm; ví dụ khảo sát/bản thân.','Thân bài 2 (solutions): một giờ không điện thoại trước khi ngủ; trường giảm bài tập, dạy về giấc ngủ; mỗi giải pháp khớp nguyên nhân.','Kết bài: tóm tắt.'],
 model:'It is widely reported that many teenagers today sleep far less than they need. In my view, this problem is mainly caused by the use of smartphones and heavy academic pressure, but it can be reduced through changes at home and at school.<br><br><i>The first cause</i> is technology. Most teenagers now own a smartphone, and many use it in bed, scrolling through social media or watching videos late into the night. The bright screen and endless content make it difficult to fall asleep. <i>A second cause</i> is academic pressure. In Vietnam, <b>a large number of</b> high school students attend extra classes in the evening and then still have homework to finish, so they often do not go to bed until after midnight, even though school starts early.<br><br><i>Several measures could help</i>. Families could introduce a simple rule, such as a phone-free hour before bed, with phones charged outside the bedroom. This would directly address the first cause. <i>In addition</i>, schools could coordinate the amount of homework set by different teachers and avoid scheduling tests on the same day, which would ease pressure on students. Short lessons on the importance of sleep for memory and health would also help teenagers make better choices.<br><br><i>In conclusion</i>, teenagers’ lack of sleep is largely the result of late-night phone use and heavy study loads. If parents and schools work together on clear rules and reasonable workloads, young people will be able to rest properly and, in turn, learn more effectively.',
 note:'Task 2 khoảng 270 từ, band 6.0–6.5. Mở bài trả lời cả hai câu hỏi; mỗi giải pháp khớp một nguyên nhân.',
 checklist:['Task 1: overview có 2–3 xu hướng chính','Task 1 ≥ 150 từ trong 20 phút','Task 2: mở bài trả lời cả hai câu hỏi','Mỗi giải pháp khớp một nguyên nhân','Có ví dụ cụ thể','Task 2 ≥ 250 từ, cả bài xong trong 60 phút']
}
}
);
(function(){const O=['u1','u2','u3','u4','r1','u5','u6','u7','u8','m1','u9','u10','u11','u12','r3','u13','u14','u15','u16','m2','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','q1','q2','q3','q4','q5','q6']; window.UNITS.sort((a,b)=>{const i=O.indexOf(a.id),j=O.indexOf(b.id); return (i<0?99:i)-(j<0?99:j);});})();
