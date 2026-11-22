/* Unit 7 (Work), Unit 8 (Travel), Thi thử giữa kỳ (m1) */
window.UNITS.push(

/* ======================= UNIT 7 ======================= */
{
id:'u7', title:'Work & Careers', week:7, video:'',
focus:'Listening Section 1: Table completion · Reading: YES/NO/NOT GIVEN · Writing Task 1: Table',
voices:{'Agent':'bm_george','Hoa':'bf_lily','ex':'bf_emma','ans':'am_eric'},
ltags:{1:'L-table',2:'L-num',3:'L-table',4:'L-table',5:'L-table',6:'L-table'},
qtags:['V','G','S','V','S','G','V','S','V','P'],
lemon:['<b>L</b> – Nhìn bảng 30 giây: đọc tiêu đề cột (Where? Hours? Pay?) để biết loại thông tin cần nghe.','<b>E</b> – Gạch từ khóa ở mỗi hàng; với YNNG, gạch từ thể hiện thái độ của tác giả (should, it is a mistake, I believe).','<b>M</b> – Nghe theo hàng, từ trái sang phải; Task 1 bảng: tìm số lớn nhất, nhỏ nhất, thay đổi nhiều nhất.','<b>O</b> – Điền đúng giới hạn từ; Task 1 bảng viết 150 từ trong 20 phút.','<b>N</b> – Ghi vào Sổ lỗi: lỗi YES/NO/NOT GIVEN, lỗi so sánh trong Task 1.'],
goalText:'Hết tuần, em điền được bảng thông tin khi nghe (Section 1), phân biệt được YES/NO/NOT GIVEN (hỏi quan điểm tác giả), và mô tả được bảng số liệu (table) bằng câu so sánh.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','60 phút','≥ 9/13'],['7. Writing','60 phút','150 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['career','n','sự nghiệp, nghề nghiệp','She wants a career in medicine.'],
['part-time job','n','việc làm bán thời gian','Many students have part-time jobs in cafés.'],
['full-time','adj','toàn thời gian','After graduating, he got a full-time job.'],
['employer','n','người sử dụng lao động','Employers value good communication skills.'],
['employee','n','nhân viên','The company has two hundred employees.'],
['salary','n','lương (tháng/năm)','Doctors usually earn a high salary.'],
['wage','n','tiền công (giờ/ngày)','The hourly wage is 30,000 dong.'],
['apply for','v','nộp đơn xin','I applied for a job at a bookshop.'],
['CV (curriculum vitae)','n','sơ yếu lý lịch','Keep your CV short and clear.'],
['interview','n/v','phỏng vấn','The interview will take place online.'],
['work experience','n','kinh nghiệm làm việc','Work experience helps you get a better job.'],
['skilled','adj','có tay nghề','Skilled workers are in high demand.'],
['promotion','n','sự thăng chức','She got a promotion after two years.'],
['job satisfaction','n','sự hài lòng với công việc','Job satisfaction is more important than money for some people.'],
['work-life balance','n','cân bằng công việc và cuộc sống','Long working hours damage work-life balance.'],
['unemployment','n','thất nghiệp','Youth unemployment is a problem in many countries.'],
['remote work','n','làm việc từ xa','Remote work saves time on commuting.'],
['colleague','n','đồng nghiệp','My colleagues are very friendly.'],
['deadline','n','hạn chót','We have to meet the deadline by Friday.'],
['responsible for','adj','chịu trách nhiệm','She is responsible for training new staff.'],
['earn a living','v','kiếm sống','He earns a living as a tour guide.'],
['in demand','adj','có nhu cầu cao','IT specialists are in demand.'],
['the highest / the lowest','phr','cao nhất / thấp nhất','Teachers had the lowest salary of the five groups.'],
['twice as much as','phr','gấp đôi','IT workers earned twice as much as factory workers.'],
['slightly / significantly','adv','một chút / đáng kể','Salaries rose slightly in tourism but significantly in IT.']],
vocabTask:'Viết 5 câu về công việc mơ ước của em (dùng <i>career, salary, job satisfaction, in demand, work-life balance</i>) và 5 câu so sánh số liệu bằng <i>the highest, twice as much as, slightly, significantly, compared with</i>.',
strategy:`
<h3>Listening – Table completion</h3>
<ol><li>Đọc <b>tiêu đề cột</b> trước: cột “Pay” → nghe số tiền; cột “Where” → nghe địa điểm.</li>
<li>Bảng đọc theo <b>hàng</b>, từ trái sang phải. Khi người nói chuyển sang dòng mới, thường có từ báo hiệu: <i>The second job is…, Another option is…</i></li>
<li>Bẫy thường gặp: người nói <b>đưa thông tin rồi sửa</b> (“It used to be 35,000, but now it’s 40,000”).</li></ol>
<h3>Reading – YES / NO / NOT GIVEN</h3>
<table><tr><th></th><th>TRUE/FALSE/NOT GIVEN</th><th>YES/NO/NOT GIVEN</th></tr>
<tr><td>Hỏi về</td><td>Thông tin, sự thật (facts)</td><td>Quan điểm, nhận định của <b>tác giả</b> (views, claims)</td></tr>
<tr><td>Dấu hiệu trong bài</td><td>Số liệu, sự kiện</td><td>I believe, it is a mistake to…, should, sadly, clearly</td></tr>
<tr><td>Đáp án NO / FALSE</td><td>Bài nói ngược lại</td><td>Tác giả nghĩ ngược lại</td></tr>
<tr><td>NOT GIVEN</td><td>Bài không nhắc</td><td>Tác giả không nêu ý kiến về điều đó</td></tr></table>
<h3>Task 1 – Table</h3>
<ol><li>Không mô tả <b>mọi</b> con số. Chọn: số lớn nhất, nhỏ nhất, thay đổi nhiều nhất, điểm giống nhau.</li>
<li>Overview: so sánh nhóm cao nhất / thấp nhất và xu hướng chung (all rose / most fell).</li>
<li>Dùng câu so sánh: <i>X earned twice as much as Y · X was the highest, at… · compared with… · whereas…</i></li></ol>`,
grammar:{
 title:'Câu điều kiện loại 1 và loại 2',
 explain:`<table><tr><th>Loại</th><th>Cấu trúc</th><th>Dùng khi</th><th>Ví dụ</th></tr>
<tr><td>Loại 1</td><td>If + hiện tại đơn, will/can + V</td><td>Có thể xảy ra thật</td><td><b>If</b> you <b>get</b> work experience, it <b>will</b> be easier to find a job.</td></tr>
<tr><td>Loại 2</td><td>If + quá khứ đơn, would/could + V</td><td>Giả định, không có thật / khó xảy ra</td><td><b>If</b> I <b>had</b> more free time, I <b>would</b> get a part-time job.</td></tr></table>
<p class="note">Với loại 2, dùng <b>were</b> cho mọi ngôi: <i>If I were you, I would…</i>. Speaking Part 3 hay hỏi “What would happen if…?” → trả lời bằng loại 2.</p>`,
 qs:[
  {t:'mcq',q:'If you ______ hard, you will get a promotion.',opts:['work','worked','would work'],a:0,ex:'Loại 1: If + hiện tại đơn.'},
  {t:'mcq',q:'If I ______ rich, I would travel around the world.',opts:['am','were','will be'],a:1,ex:'Loại 2 (giả định): If I were…'},
  {t:'mcq',q:'If students have part-time jobs, they ______ learn to manage money.',opts:['will','would','had'],a:0,ex:'Loại 1: will + V.'},
  {t:'mcq',q:'What would you do if you ______ your job?',opts:['lose','lost','will lose'],a:1,ex:'Loại 2: If + quá khứ đơn.'},
  {t:'mcq',q:'If I were you, I ______ apply for that job.',opts:['will','would','am'],a:1,ex:'Lời khuyên: If I were you, I would…'},
  {t:'mcq',q:'Unless you send your CV today, you ______ miss the deadline.',opts:['will','would','are'],a:0,ex:'Unless = if not → loại 1.'},
  {t:'gap',q:'If the company ______ (offer) me the job, I will accept it.',a:['offers'],ex:'Loại 1: If + hiện tại đơn (ngôi 3 số ít).'},
  {t:'gap',q:'If I ______ (can) choose any job, I would be a pilot.',a:['could'],ex:'Loại 2: can → could.'},
  {t:'gap',q:'If more people worked from home, there ______ be less traffic. (would/will)',a:['would'],ex:'Loại 2: would + V.'},
  {t:'gap',q:'You will feel more confident if you ______ (prepare) for the interview.',a:['prepare'],ex:'Loại 1, mệnh đề if có thể đứng sau.'}],
 pron:{title:'Ngữ điệu câu hỏi: lên giọng ↗ hay xuống giọng ↘',
  explain:'Câu hỏi <b>Yes/No</b> (Do you…? Are you…?) thường <b>lên giọng ↗</b> ở cuối. Câu hỏi có từ để hỏi <b>Wh-</b> (What, Where, Why…) thường <b>xuống giọng ↘</b>. Nghe và chọn.',
  items:[{w:'Do you have any work experience?',opts:['↗ lên giọng','↘ xuống giọng'],a:0},{w:'What do you want to do in the future?',opts:['↗ lên giọng','↘ xuống giọng'],a:1},{w:'Are you free on Saturdays?',opts:['↗ lên giọng','↘ xuống giọng'],a:0},
   {w:'Where is the interview?',opts:['↗ lên giọng','↘ xuống giọng'],a:1},{w:'Can you speak English?',opts:['↗ lên giọng','↘ xuống giọng'],a:0},{w:'Why did you apply for this job?',opts:['↗ lên giọng','↘ xuống giọng'],a:1}]}
},
listening:{
 lead:'Section 1: Hoa gọi điện đến một công ty giới thiệu việc làm để hỏi về việc làm thêm mùa hè. Câu 1–6: write <b>ONE WORD AND/OR A NUMBER</b>. Câu 7–10: chọn A, B hoặc C.',
 order:['table','mcq'],
 table:{title:'Questions 1–6: Complete the table.',head:['Job','Where','Working hours','Pay (per hour)','Notes'],rows:[
  ['Café assistant','next to the {1}','7 am – 1 pm, Monday–Friday','30,000 VND','no experience needed'],
  ['Tour assistant','city centre','2 pm – 6 pm','{2} VND','must speak good {3}'],
  ['Bookshop assistant','second floor of the shopping {4}','only on {5}','32,000 VND','a free {6} is provided']]},
 mcq:[
  {n:7,q:'Which job does Hoa decide to apply for?',opts:['café assistant','tour assistant','bookshop assistant'],a:1,ex:'“I think the tour assistant job suits me best.”'},
  {n:8,q:'What does Hoa need to send before the interview?',opts:['a photo','a letter from a teacher','her exam results'],a:1,ex:'“a short letter from one of your teachers”.'},
  {n:9,q:'When is the interview?',opts:['Tuesday morning','Wednesday afternoon','Thursday afternoon'],a:1,ex:'Tuesday đã kín; chốt “Wednesday at three”.'},
  {n:10,q:'Where will the interview take place?',opts:['at the agency office','at the tour company','online'],a:2,ex:'“they do all their first interviews online now”.'}],
 ans:{1:{a:['museum'],ex:'“right next to the museum”.'},2:{a:['40000','40,000','forty thousand'],num:true,ex:'Bẫy: “It used to be thirty-five thousand, but now it’s forty thousand an hour.”'},3:{a:['english'],ex:'“you must speak good English”.'},
  4:{a:['centre','center'],ex:'“the second floor of the shopping centre”.'},5:{a:['saturdays','saturday'],ex:'“only on Saturdays”.'},6:{a:['lunch'],ex:'“they give you a free lunch”.'}},
 script:[['Narrator','You will hear a student phoning an employment agency about summer jobs. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Agent','Good morning, City Jobs Agency. How can I help you?'],
 ['Hoa',"Hello. My name's Hoa. I'm a high school student, and I'm looking for a part-time job for the summer holidays."],
 ['Agent',"Lovely. We have three jobs for students at the moment. The first is a café assistant at a coffee shop in District One. It's right next to the museum, so it's very easy to find."],
 ['Hoa','What are the hours?'],
 ['Agent',"Seven in the morning until one o'clock, Monday to Friday. The pay is thirty thousand dong an hour, and you don't need any experience."],
 ['Hoa',"Seven a.m. is quite early for me. What's the second job?"],
 ['Agent',"The second one is a tour assistant. You'd help a guide who takes foreign tourists around the city centre. The hours are two until six in the afternoon."],
 ['Hoa','And how much does that pay?'],
 ['Agent',"It used to be thirty-five thousand, but now it's forty thousand an hour. The only thing is, you must speak good English, because most of the tourists are from Australia and the UK."],
 ['Hoa',"That's fine. I've been studying English for years. And the third job?"],
 ['Agent',"The third is a bookshop assistant. The shop is on the second floor of the shopping centre on Le Loi Street. It's only on Saturdays, from nine till five, and it pays thirty-two thousand an hour. They give you a free lunch, too."],
 ['Hoa',"They all sound good, but I think the tour assistant job suits me best. I'd like to practise my English."],
 ['Agent',"Great choice. Before the interview, the company would like you to send a short letter from one of your teachers, saying that you're reliable. You don't need to send a photo or your exam results."],
 ['Hoa','No problem. When would the interview be?'],
 ['Agent',"Let me see. Tuesday is fully booked, I'm afraid. How about Wednesday at three, or Thursday at two?"],
 ['Hoa',"I have a class on Thursday afternoon, so Wednesday at three, please."],
 ['Agent',"Wednesday at three. And you won't need to come to our office or to the tour company. They do all their first interviews online now, so I'll email you a link."],
 ['Hoa','Perfect. Thank you very much.'],
 ['Narrator','That is the end of the conversation. You now have half a minute to check your answers.']]
},
dict:[['Hoa',"I'm looking for a part-time job for the summer holidays."],['Agent',"It's right next to the museum."],['Agent',"You don't need any experience."],['Agent','The hours are two until six in the afternoon.'],['Agent',"It used to be thirty-five thousand, but now it's forty thousand an hour."],['Agent','You must speak good English.'],['Agent','They give you a free lunch, too.'],['Hoa','I think the tour assistant job suits me best.'],['Agent',"Tuesday is fully booked, I'm afraid."],['Agent',"I'll email you a link."]],
reading:{
 title:'Should Teenagers Work?', lead:'Thời gian: 20 phút · bài đọc khoảng 450 từ (bài viết nêu quan điểm của tác giả) · 13 câu.',
 paras:[
 ['A','In many countries, it is common for teenagers to have a part-time job. In the United Kingdom, around a quarter of sixteen- and seventeen-year-olds work while they are at school, and the figure is even higher in Australia. In Vietnam, part-time work among high school students is less common, but it is growing quickly, especially in big cities. In my view, this is a positive development, provided that the work is limited and safe.'],
 ['B','The most obvious benefit of a part-time job is money. Earning their own income teaches young people the value of money far more effectively than any lesson at school. When a student has to work three hours to buy a pair of shoes, he or she quickly learns to think twice before spending. I believe this lesson is one of the most valuable a teenager can learn.'],
 ['C','A job also develops skills that schools often fail to teach. Serving customers in a café, for example, requires patience, teamwork and the ability to communicate clearly under pressure. These so-called “soft skills” are exactly what employers say they are looking for. A recent survey of Vietnamese companies found that seventy percent of managers considered communication skills more important than exam results when hiring young staff.'],
 ['D','Critics argue that part-time work damages students’ education. It is true that some studies have found a link between long working hours and lower grades. However, the key word here is “long”. Research suggests that students who work fewer than ten hours a week do just as well at school as those who do not work at all. It is a mistake, therefore, to claim that all part-time work is harmful.'],
 ['E','There are, of course, real risks. Some employers take advantage of young workers by paying them less than adults for the same work or by asking them to work late at night. For this reason, I would argue that governments must enforce clear rules about the hours teenagers can work and the type of work they can do. Parents, too, should know exactly where their children are working and for whom.'],
 ['F','Some people suggest that volunteering is a better option than paid work, because it allows teenagers to help their community. Volunteering certainly has value, but it does not teach young people how to manage their own money, which is why I do not think it can fully replace a paid job.'],
 ['G','Ultimately, the decision should be made by each family. A student preparing for a major exam may need every free hour for study. But for many teenagers, a few hours of work each week can provide experience, confidence and independence that will help them long after they leave school.']],
 groups:[
 {title:'Questions 1–6: Do the following statements agree with the views of the writer? Write YES, NO or NOT GIVEN.',box:'<b>YES</b> – nếu nhận định khớp với quan điểm của tác giả · <b>NO</b> – nếu ngược với quan điểm của tác giả · <b>NOT GIVEN</b> – nếu không thể biết tác giả nghĩ gì',qs:[
  {t:'select',text:'The growth of part-time work among Vietnamese students is a good thing, as long as it is limited and safe.',opts:['YES','NO','NOT GIVEN'],a:'YES',ex:'A: “In my view, this is a positive development, provided that the work is limited and safe.”'},
  {t:'select',text:'Schools teach young people the value of money more effectively than jobs do.',opts:['YES','NO','NOT GIVEN'],a:'NO',ex:'B: tiền tự kiếm dạy giá trị đồng tiền “far more effectively than any lesson at school”.'},
  {t:'select',text:'All part-time work has a negative effect on students’ grades.',opts:['YES','NO','NOT GIVEN'],a:'NO',ex:'D: “It is a mistake… to claim that all part-time work is harmful.”'},
  {t:'select',text:'Governments should control the hours that teenagers are allowed to work.',opts:['YES','NO','NOT GIVEN'],a:'YES',ex:'E: “governments must enforce clear rules about the hours teenagers can work”.'},
  {t:'select',text:'Teenagers who work in cafés are more likely to choose a career in business.',opts:['YES','NO','NOT GIVEN'],a:'NOT GIVEN',ex:'C nói café dạy kỹ năng mềm, không nói gì về việc chọn ngành kinh doanh.'},
  {t:'select',text:'Volunteering can completely replace a paid job for teenagers.',opts:['YES','NO','NOT GIVEN'],a:'NO',ex:'F: “I do not think it can fully replace a paid job.”'}]},
 {title:'Questions 7–10: Complete the summary. Write ONE WORD AND/OR A NUMBER from the passage.',box:'In the UK, about a <b>(7)</b> of 16- and 17-year-olds have a job while at school. Jobs help students develop “soft skills” such as patience and <b>(8)</b>. A survey found that <b>(9)</b> percent of managers in Vietnam valued communication skills more than exam results. Students who work fewer than <b>(10)</b> hours a week do as well at school as those who do not work.',qs:[
  {t:'gap',before:'(7)',after:'',a:['quarter'],ex:'A: “around a quarter of sixteen- and seventeen-year-olds”.'},
  {t:'gap',before:'(8)',after:'',a:['teamwork'],ex:'C: “patience, teamwork and the ability to communicate”.'},
  {t:'gap',before:'(9)',after:'',a:['70','seventy'],ex:'C: “seventy percent of managers”.'},
  {t:'gap',before:'(10)',after:'',a:['10','ten'],ex:'D: “fewer than ten hours a week”.'}]},
 {title:'Questions 11–13: Choose the correct letter, A, B, C or D.',box:'',qs:[
  {t:'mcq',text:'According to paragraph E, some employers',opts:['refuse to hire teenagers.','pay young workers less than adults.','give teenagers too little work.','do not allow parents to visit.'],a:1,ex:'E: “paying them less than adults for the same work”.'},
  {t:'mcq',text:'Why does the writer think volunteering is not enough?',opts:['It takes too much time.','It does not help the community.','It does not teach money management.','Employers do not value it.'],a:2,ex:'F: “it does not teach young people how to manage their own money”.'},
  {t:'mcq',text:'What is the writer’s overall conclusion?',opts:['All teenagers should get a job.','Part-time work should be banned before exams.','Each family should decide, but a few hours of work can be beneficial.','Volunteering is better than paid work.'],a:2,ex:'G: “the decision should be made by each family… a few hours of work each week can provide experience…”.'}]}]
},
writing:{
 title:'Task 1 – Table',
 prompt:'The table below shows the average monthly salaries of university graduates in five fields in a country in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
 chart:{type:'table',title:'Average monthly salary of graduates (million VND)',corner:'Field',unit:'Đơn vị: triệu đồng / tháng',series:['2015','2025'],cats:['Information technology','Banking & finance','Teaching','Tourism','Manufacturing'],data:[[12,25],[11,18],[7,10],[8,9],[6,9]]},
 min:150,max:200,
 wex:[
  ['Câu mở bài nào paraphrase tốt nhất?',['The table shows the average monthly salaries of university graduates in five fields in a country in 2015 and 2025.','The table compares how much graduates in five different fields earned per month, on average, in 2015 and 2025.','The table is about salaries.'],1,'A chép nguyên đề; C quá chung chung.'],
  ['Câu overview nào tốt nhất?',['Overall, salaries rose in all five fields, and information technology was the best-paid field in both years, with by far the largest increase.','Overall, IT graduates earned 25 million in 2025.','Overall, I would like to work in IT because the salary is high.'],0,'Overview: xu hướng chung + đặc điểm nổi bật, không số liệu, không ý kiến.'],
  ['“In 2025, IT graduates earned ______ factory workers.” (25 so với 9)',['twice as much as','almost three times as much as','slightly more than'],1,'25 ≈ 3 × 9 → almost three times as much as.'],
  ['Cách chia thân bài hợp lý nhất:',['Thân bài 1: IT và banking (lương cao, tăng mạnh); thân bài 2: teaching, tourism, manufacturing (lương thấp, tăng ít)','Thân bài 1: năm 2015; thân bài 2: năm 2025','Mỗi ngành một đoạn'],0,'Nhóm theo đặc điểm giúp so sánh.'],
  ['Câu nào đúng về tourism?',['Tourism salaries rose significantly.','Salaries in tourism increased only slightly, from 8 to 9 million.','Tourism had the lowest salary in 2015.'],1,'8 → 9 = slightly. Thấp nhất năm 2015 là manufacturing (6).'],
  ['“Manufacturing salaries were the lowest in 2015, ______ by 2025 they had caught up with tourism.”',['but','because','so'],0,'Ý tương phản → but.']],
 outline:['Mở bài: paraphrase – The table compares how much graduates in five fields earned per month… 2015 and 2025.','Overview: lương tăng ở cả 5 ngành; IT cao nhất cả 2 năm và tăng nhiều nhất; tourism tăng ít nhất.','Thân bài 1: IT 12 → 25 (more than doubled); banking 11 → 18; khoảng cách giữa hai ngành tăng.','Thân bài 2: teaching 7 → 10; tourism 8 → 9 (slightly); manufacturing thấp nhất năm 2015 (6) → 9, bằng tourism.'],
 model55:'The table shows the average salaries per month of graduates in five fields in 2015 and 2025.<br><br>Overall, salaries increased in all five fields. Information technology had the highest salary in both years.<br><br>In 2015, IT graduates earned 12 million dong a month. This number increased to 25 million in 2025, so it more than doubled. Banking and finance was the second highest. It was 11 million in 2015 and 18 million in 2025.<br><br>The other three fields had lower salaries. Teaching increased from 7 to 10 million. Tourism only increased a little, from 8 to 9 million. Manufacturing was the lowest in 2015 with 6 million, but in 2025 it was 9 million, the same as tourism. These three fields were much lower than IT in 2025, and the difference between them was very small.<br><br>In conclusion, all salaries went up, but IT went up the most, and tourism went up the least.',
 model:'The table compares how much university graduates in five fields earned per month, on average, in 2015 and 2025.<br><br><i>Overall</i>, salaries <b>rose in all five fields</b>, and information technology was <b>the best-paid field</b> in both years, as well as the one with <b>by far the largest increase</b>. <i>By contrast</i>, tourism saw the smallest rise.<br><br>In 2015, IT graduates earned 12 million dong a month, <b>only slightly more than</b> those in banking and finance, at 11 million. <i>However</i>, over the next decade the IT figure <b>more than doubled</b> to 25 million, <i>whereas</i> banking salaries rose to 18 million. As a result, the gap between the two highest-paid fields widened considerably.<br><br>Salaries in the other three fields were much lower. Teachers’ pay increased from 7 to 10 million, <i>while</i> tourism wages rose <b>only marginally</b>, from 8 to 9 million. Manufacturing was the <b>lowest-paid</b> field in 2015, at just 6 million, but by 2025 it had caught up with tourism at 9 million. Even so, IT graduates in 2025 earned <b>almost three times as much as</b> those in these two fields.',
 note:'178 từ, band 6.0–6.5. Không liệt kê đủ 10 con số theo thứ tự mà chọn và so sánh. Overview nêu 3 đặc điểm chính. Dùng nhiều cấu trúc so sánh: slightly more than, more than doubled, almost three times as much as.',
 checklist:['Mở bài paraphrase, không chép đề','Overview có xu hướng chung + ngành nổi bật','Có ít nhất 3 câu so sánh (than, whereas, twice/three times as much as)','Không liệt kê đủ mọi con số theo thứ tự bảng','Ít nhất 150 từ']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 3, gửi cô qua Zalo.',
 items:[
 ['Do you have a part-time job?',"No, not at the moment. I'm in grade twelve, so my parents want me to focus on my studies. But I'd like to work in a café or a bookshop during the summer holidays."],
 ['What job did you want to do when you were a child?',"When I was little, I wanted to be a pilot, because I loved watching planes at the airport near my grandparents' house. Now I'm more interested in becoming an engineer."],
 ['Do you think it is better to work for a big company or a small one?',"I'd say a big company, at least at the beginning of my career. Big companies usually offer better training and a clearer path to promotion, although small companies can be friendlier."],
 ['Would you like to work from home in the future?',"Maybe two or three days a week. Working from home saves a lot of time on travel, especially in Ho Chi Minh City where the traffic is terrible, but I think I'd miss my colleagues if I worked from home every day."]],
 part2:{cue:'Describe a job you would like to do in the future.',bullets:['what the job is','what skills it needs','how you could prepare for it','and explain why you would like to do this job.'],
  notes:'software engineer · logic, maths, English, teamwork · IT degree, coding course online, internship · creative, in demand, good salary, can work anywhere',
  model:"The job I'd like to do in the future is software engineer, which means designing and building apps and computer programs. I first became interested in it when I took a free online coding course last year and managed to build a very simple quiz app for my class. To do this job well, you need strong logical thinking and good maths skills. English is also important, because most programming documents are written in English. And, contrary to what many people think, you also need teamwork skills, because engineers usually work in groups. To prepare for this career, I'm planning to study information technology at university. In the meantime, I'm learning to code online, and I hope to do an internship at a tech company during my second or third year. There are several reasons why I'd like this job. Firstly, it's creative: you can turn an idea into something that thousands of people use. Secondly, IT specialists are in high demand, so the salary is good. Finally, programmers can often work remotely, which would give me a better work-life balance."},
 part3:[
 ['What are the most popular jobs among young people in Vietnam?',"I think jobs in technology and marketing are very popular right now, because they're well paid and seem modern. A lot of young people also want to become content creators, since they see influencers earning a lot of money online."],
 ['Is a high salary the most important thing when choosing a job?',"Not necessarily. A good salary is important, especially for young people who need to support their families. However, if you hate your job, the money won't make you happy, so I think job satisfaction and work-life balance matter just as much."],
 ['What would happen if more people worked from home?',"If more people worked from home, there would be less traffic and air pollution in big cities. Companies could also save money on office space. On the other hand, people might feel lonely, and it would be harder for new employees to learn from experienced colleagues."]]
},
quiz:[
 ['“Salary” khác “wage” ở chỗ salary thường tính theo:',['giờ','tháng/năm','ngày'],1],
 ['If I ______ you, I would apply for that job.',['am','were','will be'],1],
 ['Table completion: em nên đọc gì trước khi nghe?',['tiêu đề cột','transcript','đáp án'],0],
 ['“Work-life balance” nghĩa là:',['cân bằng công việc và cuộc sống','thăng chức','lương cao'],0],
 ['YES/NO/NOT GIVEN hỏi về:',['số liệu trong bài','quan điểm của tác giả','ý kiến của em'],1],
 ['If you prepare well, you ______ feel more confident.',['will','would','had'],0],
 ['“In demand” nghĩa là:',['có nhu cầu cao','đã nghỉ việc','đang phỏng vấn'],0],
 ['25 so với 12 →',['slightly more than','more than doubled','fell slightly'],1],
 ['“Apply ______ a job”:',['for','to','with'],0],
 ['Câu hỏi “Where is the interview?” thường đọc:',['lên giọng ↗','xuống giọng ↘','đều giọng'],1]]
},

/* ======================= UNIT 8 ======================= */
{
id:'u8', title:'Travel & Tourism', week:8, video:'',
focus:'Listening Section 4: Lecture notes · Reading: Matching sentence endings · Writing Task 2: Advantages/Disadvantages',
voices:{'Lecturer':'bf_alice','ex':'am_michael','ans':'bf_emma'},
ltags:{1:'L-word',2:'L-word',3:'L-word',4:'L-word',5:'L-num',6:'L-word',7:'L-word',8:'L-word',9:'L-word',10:'L-word'},
qtags:['V','G','S','V','S','V','G','S','P','S'],
lemon:['<b>L</b> – Section 4 là bài giảng 1 người, không có nghỉ giữa: đọc trước TOÀN BỘ ghi chú (10 câu) trong 30 giây.','<b>E</b> – Nghe tiêu đề nhỏ trong ghi chú (Problems, Case study, Solutions) để biết đang ở đâu.','<b>M</b> – Sentence endings: loại đuôi sai ngữ pháp trước; Task 2: lập dàn ý ưu điểm – nhược điểm – ý kiến.','<b>O</b> – Section 4 chỉ ghi MỘT TỪ; Task 2 viết 250 từ trong 40 phút.','<b>N</b> – Ghi vào Sổ lỗi: từ bị sai chính tả trong Section 4, câu sentence endings ghép sai.'],
goalText:'Hết tuần, em theo dõi được một bài giảng ngắn (Section 4) và ghi chú đúng từ, làm được dạng Matching sentence endings, và viết Task 2 dạng Advantages/Disadvantages. Đây là unit cuối trước Thi thử giữa kỳ.',
goals:[['1. Từ vựng','60 phút (chia 3 ngày)','Thuộc 25 từ'],['2. Chiến lược','25 phút','—'],['3. Ngữ pháp & phát âm','40 phút','≥ 8/10'],['4. Listening','50 phút','≥ 7/10'],['6. Reading','60 phút','≥ 9/13'],['7. Writing','70 phút','250 từ, nộp cô'],['8. Speaking','60 phút','Ghi âm Part 2 (2 phút)'],['9. Mini quiz','20 phút','≥ 8/10']],
vocab:[
['tourism','n','ngành du lịch','Tourism is important for Vietnam’s economy.'],
['tourist attraction','n','điểm thu hút du khách','Ha Long Bay is a famous tourist attraction.'],
['destination','n','điểm đến','Da Nang has become a popular destination.'],
['sightseeing','n','tham quan','We spent the morning sightseeing in Hue.'],
['accommodation','n','chỗ ở','Accommodation in Hoi An is quite cheap.'],
['homestay','n','nhà dân cho thuê, ở cùng chủ nhà','We stayed in a homestay in Sapa.'],
['itinerary','n','lịch trình','Our itinerary includes three cities.'],
['book in advance','v','đặt trước','It’s cheaper to book flights in advance.'],
['package holiday','n','tour trọn gói','A package holiday includes flights and hotels.'],
['backpacker','n','du khách ba lô','Backpackers often travel on a low budget.'],
['budget','n/adj','ngân sách; giá rẻ','We stayed in a budget hotel.'],
['local culture','n','văn hóa địa phương','Travelling helps you learn about local culture.'],
['cuisine','n','ẩm thực','Vietnamese cuisine is popular around the world.'],
['broaden your horizons','v','mở mang tầm mắt','Travelling abroad broadens your horizons.'],
['mass tourism','n','du lịch đại trà','Mass tourism can damage natural areas.'],
['overcrowded','adj','quá đông đúc','The beach was overcrowded in July.'],
['sustainable','adj','bền vững','Sustainable tourism protects the environment.'],
['damage','n/v','thiệt hại; gây hại','Too many visitors damage the coral reefs.'],
['revenue','n','doanh thu','Tourism brings revenue to local businesses.'],
['job opportunities','n','cơ hội việc làm','Tourism creates job opportunities for local people.'],
['cultural exchange','n','giao lưu văn hóa','Tourism encourages cultural exchange.'],
['jet lag','n','mệt mỏi do lệch múi giờ','I had terrible jet lag after flying to London.'],
['souvenir','n','quà lưu niệm','She bought souvenirs for her friends.'],
['outweigh','v','lớn hơn, nặng hơn (về tầm quan trọng)','The benefits outweigh the drawbacks.'],
['drawback','n','nhược điểm','The main drawback is the cost.']],
vocabTask:'Viết 5 câu về một chuyến đi của em (dùng <i>destination, accommodation, sightseeing, local cuisine, souvenir</i>) và 5 câu nêu ưu – nhược điểm của du lịch bằng <i>One major benefit is…, The main drawback is…, outweigh</i>.',
strategy:`
<h3>Listening Section 4 – bài giảng (lecture)</h3>
<ol><li>Một người nói liên tục khoảng 4–5 phút, <b>không có nghỉ giữa</b>. Phải đọc hết 10 câu trong 30 giây đầu.</li>
<li>Ghi chú thường có <b>tiêu đề nhỏ</b> (Definition, Problems, Case study, Solutions). Giảng viên báo hiệu chuyển phần: <i>Let’s move on to…, Now I’d like to look at…, So what can be done?</i></li>
<li>Thường chỉ được ghi <b>ONE WORD ONLY</b>. Từ cần điền là danh từ hoặc tính từ trong câu, chính tả phải đúng.</li></ol>
<h3>Reading – Matching sentence endings</h3>
<ol><li>Câu hỏi (phần đầu câu) <b>đi theo thứ tự bài đọc</b>. Danh sách đuôi câu nhiều hơn số câu hỏi.</li>
<li>Bước 1: ghép thử theo <b>ngữ pháp</b> (đầu câu cần động từ? danh từ? to-V?) → loại bớt đuôi.</li>
<li>Bước 2: tìm câu trong bài chứa từ khóa của đầu câu và kiểm tra <b>nghĩa</b>. Cẩn thận đuôi câu có từ trùng bài nhưng sai ý.</li></ol>
<h3>Task 2 – Advantages / Disadvantages</h3>
<table><tr><th>Dạng đề</th><th>Cách viết</th></tr>
<tr><td>Discuss the advantages and disadvantages</td><td>Thân bài 1: ưu điểm · Thân bài 2: nhược điểm · không bắt buộc ý kiến (nên có ở kết bài)</td></tr>
<tr><td>Do the advantages outweigh the disadvantages?</td><td>Phải nêu ý kiến rõ ở mở bài: <i>I believe the advantages outweigh the disadvantages</i>. Thân bài 1: bên yếu hơn · Thân bài 2: bên mạnh hơn (em ủng hộ)</td></tr></table>
<p class="note">Mẫu câu: <i>One major advantage of… is that… · Another benefit is… · The main drawback is that… · Admittedly, … However, …</i></p>`,
grammar:{
 title:'Quá khứ đơn, quá khứ tiếp diễn và quá khứ hoàn thành',
 explain:`<table><tr><th>Thì</th><th>Cấu trúc</th><th>Dùng khi</th><th>Ví dụ</th></tr>
<tr><td>Quá khứ đơn</td><td>V2/V-ed</td><td>Hành động đã xong, chuỗi sự việc</td><td>We <b>arrived</b> in Hue and <b>visited</b> the Citadel.</td></tr>
<tr><td>Quá khứ tiếp diễn</td><td>was/were + V-ing</td><td>Hành động đang diễn ra (nền) thì việc khác xen vào</td><td>We <b>were walking</b> on the beach when it <b>started</b> to rain.</td></tr>
<tr><td>Quá khứ hoàn thành</td><td>had + V3</td><td>Việc xảy ra trước một việc khác trong quá khứ</td><td>When we got to the station, the train <b>had</b> already <b>left</b>.</td></tr></table>
<p class="note">Speaking Part 2 “Describe a trip” cần cả 3 thì: kể chuỗi sự việc (QKĐ), tả bối cảnh (QKTD), và nói điều đã xảy ra trước đó (QKHT). Dùng đúng 3 thì giúp tăng điểm Grammar.</p>`,
 qs:[
  {t:'mcq',q:'We ______ dinner when the lights went out.',opts:['had','were having','have had'],a:1,ex:'Hành động đang diễn ra thì việc khác xen vào → were having.'},
  {t:'mcq',q:'Last summer, my family ______ to Da Lat for a week.',opts:['went','was going','had gone'],a:0,ex:'Sự việc đã xong trong quá khứ → went.'},
  {t:'mcq',q:'When we arrived at the airport, our flight ______.',opts:['already left','had already left','was already leaving'],a:1,ex:'Máy bay đi TRƯỚC khi chúng tôi đến → had left.'},
  {t:'mcq',q:'I ______ never ______ the sea before I visited Nha Trang.',opts:['have / seen','had / seen','was / seeing'],a:1,ex:'Trước một mốc quá khứ → had never seen.'},
  {t:'mcq',q:'While I ______ photos, someone stole my bag.',opts:['took','was taking','had taken'],a:1,ex:'While + quá khứ tiếp diễn.'},
  {t:'mcq',q:'It ______ heavily when we left the hotel.',opts:['was raining','rained','had rained'],a:0,ex:'Bối cảnh đang diễn ra → was raining.'},
  {t:'gap',q:'We ______ (visit) three museums yesterday.',a:['visited'],ex:'Quá khứ đơn.'},
  {t:'gap',q:'They were swimming when the storm ______ (begin).',a:['began'],ex:'Việc xen vào → quá khứ đơn (begin → began).'},
  {t:'gap',q:'By the time we got there, the shop had ______ (close).',a:['closed'],ex:'had + V3.'},
  {t:'gap',q:'What ______ you doing at 8 pm last night? (were/did)',a:['were'],ex:'Hỏi việc đang làm tại thời điểm → were.'}],
 pron:{title:'Nối âm (linking): phụ âm + nguyên âm',
  explain:'Khi từ trước kết thúc bằng <b>phụ âm</b> và từ sau bắt đầu bằng <b>nguyên âm</b>, hai từ được <b>nối</b> lại: <i>get‿up</i> → /ge-tʌp/, <i>look‿at</i> → /lʊ-kæt/. Nếu từ sau bắt đầu bằng phụ âm thì không nối kiểu này. Nghe và chọn.',
  items:[{w:'get up',opts:['Có nối âm','Không nối'],a:0},{w:'look at',opts:['Có nối âm','Không nối'],a:0},{w:'big bag',opts:['Có nối âm','Không nối'],a:1},
   {w:'an island',opts:['Có nối âm','Không nối'],a:0},{w:'hot day',opts:['Có nối âm','Không nối'],a:1},{w:'check in',opts:['Có nối âm','Không nối'],a:0}]}
},
listening:{
 lead:'Section 4: một bài giảng ngắn về du lịch bền vững (sustainable tourism). Câu 1–10: write <b>ONE WORD ONLY</b> cho mỗi chỗ trống.',
 formTitle:'Questions 1–10: Complete the notes. Write ONE WORD ONLY.',
 form:[['<b>Sustainable tourism</b>','',null],['Definition','tourism that protects nature and benefits local {1}',1],
  ['<b>Problems of mass tourism</b>','',null],['Environment','beaches covered in {2}; coral reefs damaged',2],['Resources','hotels use huge amounts of {3}',3],['Local people','rising {4} – residents cannot afford homes',4],
  ['<b>Case study: Maya Bay, Thailand</b>','',null],['Closure','closed to visitors in {5}',5],['Results','coral recovered; {6} returned to the bay',6],
  ['<b>Solutions</b>','',null],['Limits','a maximum number of {7} per day',7],['Money','charge an entry {8}',8],['Accommodation','encourage tourists to stay in {9}',9],['Guides','employ {10} guides',10]],
 mcq:[],
 ans:{1:{a:['communities'],ex:'“benefits local communities”.'},2:{a:['plastic'],ex:'“beaches covered in plastic”.'},3:{a:['water'],ex:'“hotels… use huge amounts of water”.'},4:{a:['rents','rent'],ex:'“rents go up so quickly that local residents can no longer afford…”.'},
  5:{a:['2018'],ex:'“closed to visitors in 2018”.'},6:{a:['sharks'],ex:'“even sharks returned to the bay”.'},7:{a:['visitors'],ex:'“a maximum number of visitors each day”.'},8:{a:['fee'],ex:'“charge an entry fee”.'},
  9:{a:['homestays'],ex:'“stay in homestays rather than large hotels”.'},10:{a:['local'],ex:'“employ local guides”.'}},
 script:[['Narrator','You will hear part of a lecture on sustainable tourism. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Lecturer',"Good afternoon. Today I'm going to talk about sustainable tourism. So, what exactly does it mean? Sustainable tourism is tourism that protects nature and, at the same time, benefits local communities, rather than just large international companies."],
 ['Lecturer',"Let's begin with the problems caused by mass tourism, that is, very large numbers of tourists visiting the same places. The first problem is environmental. In many popular destinations, beaches are now covered in plastic, much of it left by visitors, and coral reefs are damaged by boats and swimmers."],
 ['Lecturer',"The second problem concerns resources. Hotels, swimming pools and golf courses use huge amounts of water, and in dry regions this can mean that local farmers do not have enough for their crops."],
 ['Lecturer',"Thirdly, mass tourism can affect local people directly. When an area becomes popular, many homes are turned into holiday apartments. As a result, rents go up so quickly that local residents can no longer afford to live there."],
 ['Lecturer',"Now I'd like to look at a case study: Maya Bay in Thailand. This beautiful beach became famous after appearing in a film, and at one point it was receiving around five thousand visitors a day. The damage was so serious that the authorities decided to take action. The bay was closed to visitors in 2018, and it stayed closed for more than three years."],
 ['Lecturer',"The results were remarkable. The coral began to recover, and even sharks returned to the bay, which had not been seen there for years. When the bay reopened, swimming was banned and boats were no longer allowed to enter."],
 ['Lecturer',"So what can be done more generally? First, many places now set a maximum number of visitors each day. Second, destinations can charge an entry fee and use the money to protect the area. Third, tourists should be encouraged to stay in homestays rather than large hotels, so that their money goes directly to local families."],
 ['Lecturer',"Finally, tour companies should employ local guides. Local guides know the area best, and this creates jobs in the community. In the next lecture, we'll look at how Vietnam is applying some of these ideas in places such as Sa Pa and Hoi An."],
 ['Narrator','That is the end of the lecture. You now have half a minute to check your answers.']]
},
dict:[['Lecturer',"Today I'm going to talk about sustainable tourism."],['Lecturer','Sustainable tourism is tourism that protects nature.'],['Lecturer',"Let's begin with the problems caused by mass tourism."],['Lecturer','Coral reefs are damaged by boats and swimmers.'],['Lecturer','Many homes are turned into holiday apartments.'],['Lecturer',"Now I'd like to look at a case study."],['Lecturer','The authorities decided to take action.'],['Lecturer','The coral began to recover.'],['Lecturer','Destinations can charge an entry fee.'],['Lecturer','Local guides know the area best.']],
reading:{
 title:'The Rise of Slow Travel', lead:'Thời gian: 20 phút · bài đọc khoảng 490 từ · 13 câu.',
 paras:[
 ['A','For many people, a holiday means visiting as many famous places as possible in a short time. A typical package tour of Europe, for example, might include eight cities in ten days, with travellers spending more time on buses than in the places they have come to see. In recent years, however, a growing number of tourists have started to reject this approach in favour of what is known as “slow travel”.'],
 ['B','The idea of slow travel grew out of the “slow food” movement, which began in Italy in 1986 as a protest against the opening of a fast-food restaurant in Rome. Supporters of slow food argued that meals should be enjoyed, not rushed. Slow travel applies the same idea to holidays: rather than rushing from one sight to the next, travellers stay longer in one place and try to experience everyday life there.'],
 ['C','In practice, slow travellers often rent an apartment or stay with a local family for a week or more. They shop in local markets, cook some of their own meals and use public transport or bicycles instead of taxis and tour buses. Many choose to travel by train rather than plane, because they see the journey as part of the holiday rather than a waste of time.'],
 ['D','Supporters say that slow travel has several benefits. First, it is less stressful: travellers do not have to pack their bags every day or worry about missing connections. Second, it allows deeper contact with local culture. A tourist who spends a week in one village is far more likely to make friends with local people than one who stops for only an hour. Third, it is often cheaper, since weekly rents are usually lower than nightly hotel prices.'],
 ['E','Slow travel may also be better for the environment. Air travel is one of the fastest-growing sources of greenhouse gases, and a single return flight from Europe to Asia can produce more carbon dioxide than an average person in some countries produces in a whole year. By flying less often and staying longer, slow travellers reduce their environmental impact.'],
 ['F','Not everyone is convinced, however. Critics point out that slow travel requires something many people do not have: time. Most workers have only a few weeks of holiday a year, and they may prefer to see several places rather than one. Others argue that long-stay visitors can push up rents in popular areas, in the same way as other forms of tourism.'],
 ['G','In Vietnam, there are signs that slow travel is becoming more popular. Some visitors to Hoi An now stay for a month or more, taking cooking classes and learning the local language. Tour operators have also begun offering week-long homestay programmes in the northern mountains. Whether this trend will continue remains to be seen, but it suggests that, for some travellers at least, the quality of an experience matters more than the number of places they visit.']],
 groups:[
 {title:'Questions 1–5: Complete each sentence with the correct ending, A–H, below.',box:'<b>A</b> because they consider the journey part of the holiday. &nbsp; <b>B</b> as a reaction against fast food. &nbsp; <b>C</b> because it costs more than staying in hotels. &nbsp; <b>D</b> than people who only stop for a short time. &nbsp; <b>E</b> more than an individual produces in a year in some places. &nbsp; <b>F</b> because they have limited holiday time. &nbsp; <b>G</b> to learn the local language. &nbsp; <b>H</b> by taking several flights each year.',qs:[
  {t:'select',tag:'R-end',text:'The slow food movement started in Italy',opts:['A','B','C','D','E','F','G','H'],a:'B',ex:'B: “as a protest against the opening of a fast-food restaurant”.'},
  {t:'select',tag:'R-end',text:'Many slow travellers prefer trains to planes',opts:['A','B','C','D','E','F','G','H'],a:'A',ex:'C: “they see the journey as part of the holiday”.'},
  {t:'select',tag:'R-end',text:'Visitors who stay in one village for a week are more likely to make local friends',opts:['A','B','C','D','E','F','G','H'],a:'D',ex:'D: “far more likely to make friends… than one who stops for only an hour”.'},
  {t:'select',tag:'R-end',text:'One return flight between Europe and Asia can produce',opts:['A','B','C','D','E','F','G','H'],a:'E',ex:'E: “more carbon dioxide than an average person in some countries produces in a whole year”.'},
  {t:'select',tag:'R-end',text:'Some people may not choose slow travel',opts:['A','B','C','D','E','F','G','H'],a:'F',ex:'F: “Most workers have only a few weeks of holiday a year”. C sai: bài nói slow travel thường rẻ hơn.'}]},
 {title:'Questions 6–9: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'Travellers on package tours of Europe often spend a lot of time on buses.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'A: “spending more time on buses than in the places they have come to see”.'},
  {t:'select',text:'Slow travellers never eat in restaurants.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'C: “cook some of their own meals” → không phải tất cả.'},
  {t:'select',text:'Weekly rents are usually cheaper than paying for a hotel every night.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'D: “weekly rents are usually lower than nightly hotel prices”.'},
  {t:'select',text:'Slow travel is more popular among older people than young people.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'Bài không nhắc đến độ tuổi.'}]},
 {title:'Questions 10–13: Complete the sentences. Write NO MORE THAN TWO WORDS from the passage.',box:'',qs:[
  {t:'gap',before:'Slow travellers often use public transport or',after:'instead of taxis.',a:['bicycles'],ex:'C: “use public transport or bicycles instead of taxis”.'},
  {t:'gap',before:'Critics say slow travel requires a lot of',after:'.',a:['time'],ex:'F: “slow travel requires something many people do not have: time”.'},
  {t:'gap',before:'Some visitors to Hoi An take',after:'and learn the local language.',a:['cooking classes'],ex:'G: “taking cooking classes and learning the local language”.'},
  {t:'gap',before:'Tour operators offer week-long',after:'programmes in the northern mountains.',a:['homestay'],ex:'G: “week-long homestay programmes”.'}]}]
},
writing:{
 title:'Task 2 – Advantages / Disadvantages',
 prompt:'International tourism has grown rapidly in recent years, and many popular destinations now receive millions of visitors every year. Do the advantages of this development outweigh the disadvantages? Write at least 250 words.',
 min:250,max:320,
 wex:[
  ['Đề “Do the advantages outweigh the disadvantages?” yêu cầu:',['Chỉ liệt kê ưu điểm','Bàn ưu và nhược điểm, và nêu rõ bên nào lớn hơn','Đề xuất giải pháp'],1,'Phải trả lời câu hỏi “outweigh?” → nêu ý kiến rõ.'],
  ['Câu nêu quan điểm ở mở bài tốt nhất:',['There are advantages and disadvantages.','I believe the benefits of this trend outweigh its drawbacks, provided that tourism is well managed.','Tourism is very interesting.'],1,'Câu B trả lời trực tiếp câu hỏi và có điều kiện hợp lý.'],
  ['Ví dụ nào hỗ trợ tốt nhất cho ý “tourism creates jobs”?',['Many people like travelling.','In Hoi An, thousands of local people work in hotels, restaurants and tailor shops that depend on foreign visitors.','Tourists take many photos.'],1,'Ví dụ cụ thể, có địa điểm, liên quan trực tiếp đến ý.'],
  ['Câu chủ đề cho đoạn nhược điểm:',['Admittedly, mass tourism can cause serious damage to the environment and to local communities.','Tourism is good for the economy.','In conclusion, tourism has some problems.'],0,'“Admittedly” thừa nhận bên yếu hơn trước khi phản bác.'],
  ['“Tourism damages some natural areas. ______, these problems can be reduced with careful planning.”',['Nevertheless','Therefore','For instance'],0,'Ý nhượng bộ → Nevertheless / However.'],
  ['Chọn câu đúng ngữ pháp:',['Tourism bring a lot of money for local people.','Tourism brings a lot of money to local people.','Tourism bringing many money to local people.'],1,'Tourism (số ít) → brings; bring money TO someone; money không đếm được → much/a lot of.']],
 outline:['Mở bài: du lịch quốc tế tăng nhanh → ý kiến: lợi ích lớn hơn tác hại nếu được quản lý tốt.','Thân bài 1 (nhược điểm – thừa nhận): ô nhiễm, quá tải, giá nhà tăng; ví dụ bãi biển đông đúc, rác thải nhựa.','Thân bài 2 (ưu điểm – lớn hơn): việc làm và thu nhập cho người dân (Hội An); giao lưu văn hóa; tiền du lịch có thể dùng để bảo vệ di sản.','Kết bài: nhắc lại – lợi ích lớn hơn, nhưng cần giới hạn khách, thu phí, ưu tiên du lịch bền vững.'],
 model55:'Nowadays, international tourism is growing very fast, and many places have millions of tourists every year. I think the advantages of this are bigger than the disadvantages because tourism helps people in many ways.<br><br>Of course, tourism has some disadvantages. Firstly, too many tourists can make places dirty. For example, some beaches in Vietnam have a lot of plastic rubbish after the summer holidays, and some coral reefs are damaged by boats. Secondly, popular places become very crowded, especially in the summer, so local people feel uncomfortable, and prices of food and houses go up. For example, in some places, rents are so high that local families have to move away.<br><br>However, I believe tourism has more advantages. The first advantage is jobs. Many people work in hotels, restaurants and shops, and they can earn more money. Some people also sell food or souvenirs on the street, and this money helps their families. For example, in Hoi An, many families live on money from tourists. The second advantage is that people from different countries can learn about each other’s cultures. Tourists can try Vietnamese food and learn about our history, and local people can practise English. Finally, the money from tourists can help the government protect old buildings and beautiful places.<br><br>In conclusion, although tourism can cause pollution and crowds, I think the advantages are bigger because it gives people jobs and helps cultural exchange. The government should manage tourism carefully, for example by limiting the number of visitors to some places.',
 model:'International tourism has <b>expanded dramatically</b> in recent decades, with some destinations now welcoming millions of visitors each year. <i>Although</i> this trend creates certain problems, <i>I believe</i> its benefits clearly <b>outweigh</b> its drawbacks, provided that it is properly managed.<br><br><i>Admittedly</i>, <b>mass tourism</b> can cause serious harm. Popular beaches and islands often suffer from <b>overcrowding</b> and pollution, as visitors leave behind large amounts of plastic waste. <i>In addition</i>, when an area becomes fashionable, property owners may turn homes into holiday rentals, which <b>pushes up</b> rents and forces local residents to move elsewhere. <i>Nevertheless</i>, these problems are not unavoidable, and many can be reduced through careful planning.<br><br><i>On the other hand</i>, the <b>economic benefits</b> of tourism are enormous. The industry creates millions of <b>job opportunities</b>, not only in hotels and restaurants but also in transport, handicrafts and agriculture. In Hoi An, <i>for example</i>, thousands of families earn their living from tailor shops, cafés and homestays that depend on foreign visitors. <i>Furthermore</i>, tourism encourages <b>cultural exchange</b>: travellers gain a deeper understanding of other ways of life, while local people have the chance to share their traditions and practise foreign languages. The <b>revenue</b> from entry fees can also be used to protect heritage sites and natural areas, as has happened at several famous temples and national parks.<br><br><i>In conclusion</i>, while the growth of international tourism can damage the environment and local communities, I am convinced that its advantages are greater. The key is for governments to set limits on visitor numbers and invest tourism income in sustainable development.',
 note:'253 từ, band 6.0–6.5. Mở bài trả lời trực tiếp câu hỏi “outweigh?”. Thân bài 1 thừa nhận nhược điểm (Admittedly…), thân bài 2 là bên mạnh hơn. Kết bài nhắc lại ý kiến và gợi ý giải pháp ngắn.',
 checklist:['Mở bài trả lời rõ: ưu điểm hay nhược điểm lớn hơn','Có một đoạn nhược điểm và một đoạn ưu điểm','Mỗi đoạn có ví dụ cụ thể','Kết bài nhắc lại ý kiến','Ít nhất 250 từ']
},
speaking:{
 task:'Ghi âm Part 2 (2 phút) và câu Part 3 số 1, gửi cô qua Zalo.',
 items:[
 ['Do you like travelling?',"Yes, I love it. I don't get many chances because of school, but every summer my family takes a short trip somewhere, usually to the beach."],
 ['Where did you go on your last holiday?',"Last summer we went to Da Nang for four days. We spent most of our time at My Khe beach and also visited the Marble Mountains, which were amazing."],
 ['Do you prefer travelling alone or with others?',"With others, definitely. Travelling with family or friends is more fun, and it's safer too. I think I'd feel a bit lonely if I travelled alone."],
 ['What do you usually buy when you travel?',"I usually buy local snacks for my friends and small souvenirs like keyrings. I don't buy expensive things because I'm still a student."]],
 part2:{cue:'Describe a memorable trip you have taken.',bullets:['where you went','who you went with','what happened during the trip','and explain why it was memorable.'],
  notes:'Sa Pa · grade 10 class trip, 30 students + 2 teachers · night bus, trekking, rain, got lost, homestay H’Mông family · first trip without parents, teamwork, beautiful terraces',
  model:"I'd like to talk about a trip to Sa Pa that I took with my class in grade ten. There were about thirty students and two teachers, and it was the first time I had ever travelled without my parents. We took a night bus from Hanoi, and when we woke up, we were already in the mountains. It was much colder than I had expected. On the second day, we went trekking through the rice terraces with a local guide. While we were walking, it started to rain heavily, and my group somehow took the wrong path and got lost for about an hour. At first we were quite scared, but we stayed calm, worked together, and eventually found our way back to the village. That night, we stayed in a homestay with a H'Mong family, who cooked us a delicious dinner and taught us a few words of their language. The trip was memorable for several reasons. The scenery was breathtaking, of course, but more importantly, I learned to be independent and to rely on my friends. Even now, whenever we meet, we still laugh about getting lost in the rain."},
 part3:[
 ['How has tourism changed in Vietnam in recent years?',"It has changed a lot. Ten years ago, most Vietnamese people only travelled during Tet or the summer, but now domestic tourism is booming thanks to cheap flights and booking apps. More foreign tourists are coming too, especially to places like Da Nang and Phu Quoc."],
 ['What are the advantages of travelling abroad for young people?',"I think the biggest advantage is that it broadens their horizons. When young people see how people live in other countries, they become more open-minded. It also helps them practise foreign languages and become more independent."],
 ['Do you think tourism can harm local culture?',"In some cases, yes. When a place becomes very touristy, traditional activities may be turned into shows just for visitors, and they can lose their real meaning. However, if it's managed well, tourism can also give local people a reason to keep their traditions alive."]]
},
quiz:[
 ['“Accommodation” nghĩa là:',['chỗ ở','lịch trình','quà lưu niệm'],0],
 ['We ______ on the beach when it started to rain.',['walked','were walking','had walked'],1],
 ['Section 4 trong Listening là:',['cuộc hội thoại 2 người','bài giảng của một người','thảo luận nhóm'],1],
 ['When we arrived, the train ______.',['had already left','already left','was leaving already'],0],
 ['Matching sentence endings: bước loại trừ đầu tiên là dựa vào:',['ngữ pháp','độ dài','chữ cái'],0],
 ['“Broaden your horizons” nghĩa là:',['mở mang tầm mắt','đặt trước','tiết kiệm tiền'],0],
 ['Đề “Do the advantages outweigh the disadvantages?” bài viết phải:',['nêu rõ bên nào lớn hơn','chỉ viết ưu điểm','không cần ý kiến'],0],
 ['“The main ______ is the cost.”',['drawback','outweigh','revenue'],0],
 ['Cụm nào có nối âm (phụ âm + nguyên âm)?',['look at','big bag','hot day'],0],
 ['Section 4 “ONE WORD ONLY”, em ghi “the plastic” →',['đúng','sai','được nửa điểm'],1]]
},

/* ======================= THI THỬ GIỮA KỲ ======================= */
{
id:'m1', label:'Thi thử giữa kỳ', title:'Thi thử giữa kỳ (sau Unit 8)', week:8, review:true, mock:true,
focus:'Đề thi thử đủ 4 kỹ năng: Listening 20 câu · Reading 13 câu · Writing Task 1 + Task 2 · Speaking Part 1–3',
voices:{'Receptionist':'bf_isabella','Khoa':'am_adam','Guide':'bm_george','ex':'bf_alice','ans':'am_eric'},
goalText:'Bài thi thử giữa kỳ sau 8 tuần. Làm trong <b>một buổi liền</b> (khoảng 2 giờ 15 phút), bấm giờ như thi thật, không xem lại bài cũ, không tra từ điển. Kết quả cho cô biết em đang ở khoảng band nào và cần ôn dạng bài nào ở chặng 3.',
goals:[['Listening (2 Section, 20 câu)','khoảng 15 phút','≥ 12/20 (≈ band 5.0–5.5)'],['Reading (1 passage, 13 câu)','20 phút','≥ 8/13'],['Writing Task 1 + Task 2','60 phút','Đủ 150 + 250 từ, nộp cô chấm'],['Speaking Part 1–3','11–14 phút','Ghi âm cả 3 part, gửi cô (hoặc thi 1–1 với cô)']],
strategy:`<p><b>Quy chế thi thử</b> (làm đúng như thi thật thì kết quả mới có ý nghĩa):</p>
<table><tr><th>Phần</th><th>Thời gian</th><th>Lưu ý</th></tr>
<tr><td>Listening</td><td>~15 phút</td><td>Bấm <b>“Nghe như thi thật”</b>: chỉ nghe 1 lần, không dừng. Có 30 giây đọc đề trước mỗi Section.</td></tr>
<tr><td>Reading</td><td>20 phút</td><td>Bấm “Bắt đầu” để chạy đồng hồ. Hết giờ thì nộp, câu bỏ trống tính sai.</td></tr>
<tr><td>Writing</td><td>60 phút</td><td>Task 1 khoảng 20 phút, Task 2 khoảng 40 phút. Không xem bài mẫu trước khi nộp.</td></tr>
<tr><td>Speaking</td><td>11–14 phút</td><td>Ghi âm liền một lần cả Part 1, 2, 3 bằng điện thoại. Part 2: 1 phút chuẩn bị, nói đến khi hết 2 phút.</td></tr></table>
<p class="note">Sau khi chấm: mở <a href="#me">Sổ lỗi</a> để xem dạng bài sai nhiều nhất, rồi bấm “Gửi kết quả cho cô”. Điểm band trên trang chỉ là <b>ước tính</b>; Writing và Speaking do cô chấm.</p>`,
ltags:{1:'L-spell',2:'L-num',3:'L-word',4:'L-num',5:'L-word',6:'L-num',7:'L-word',8:'L-word',9:'L-word',10:'L-num'},
listening:{
 lead:'<b>Section 1 (câu 1–10):</b> Khoa gọi điện đặt chỗ cho lớp đi tham quan. Write <b>ONE WORD AND/OR A NUMBER</b>.<br><b>Section 2 (câu 11–20):</b> hướng dẫn viên giới thiệu một làng gốm. Câu 11–15 chọn A, B hoặc C; câu 16–20 chọn chữ cái A–G.',
 order:['form','mcq','sel'],
 formTitle:'SECTION 1 · Questions 1–10: Complete the form.',
 form:[['<b>RIVERSIDE ADVENTURE CENTRE – Group booking</b>','',null],['Contact name','Khoa {1}',1],['Phone number','{2}',2],['School','Binh Chanh High School',null],['Activity chosen','{3} (all day)',3],['Number of students','{4}',4],['Date','Saturday, 14th {5}',5],['Price per student','{6} VND (includes lunch)',6],['Meeting point','the main {7}',7],['Students must bring','a towel and {8} clothes',8],['Not allowed','{9}',9],['Pay deposit by','{10} November',10]],
 mcqTitle:'SECTION 2 · Questions 11–15: Choose the correct letter, A, B or C.',
 mcq:[
  {n:11,q:'The pottery village has been making pots for about',opts:['300 years.','500 years.','800 years.'],a:1,ex:'“people here have been making pottery for around five hundred years”.'},
  {n:12,q:'Why did many young people leave the village in the 1990s?',opts:['The river flooded the workshops.','They could earn more in the city.','There was not enough clay.'],a:1,ex:'“factory jobs in the city paid much better”.'},
  {n:13,q:'What helped the village to recover?',opts:['a government loan','a television programme','tourism'],a:2,ex:'“what really saved the village was tourism”.'},
  {n:14,q:'In the workshop, visitors will',opts:['make a pot to take home.','watch a master potter.','paint a plate.'],a:2,ex:'“you’ll each paint your own plate… it will be fired and posted to your school”.'},
  {n:15,q:'The guide advises visitors to',opts:['bring cash.','wear old clothes.','book lunch in advance.'],a:1,ex:'“wear old clothes, because the paint doesn’t wash out easily”.'}],
 sel:{title:'SECTION 2 · Questions 16–20: What can visitors find at each place in the village? Choose FIVE answers from the box. Write the correct letter, A–G.',
  box:'<div class="box"><b>A</b> the oldest kiln &nbsp; <b>B</b> free drinks &nbsp; <b>C</b> a view of the river &nbsp; <b>D</b> discounts for students &nbsp; <b>E</b> traditional music &nbsp; <b>F</b> photos of the village in the past &nbsp; <b>G</b> a place to buy clay</div>',
  letters:'ABCDEFG',items:[{n:16,text:'the museum'},{n:17,text:'the temple'},{n:18,text:'the market'},{n:19,text:'the tea house'},{n:20,text:'the tower'}]},
 ans:{1:{a:['dang'],t:'L-spell',ex:'Đánh vần D-A-N-G.'},2:{a:['0903817462'],num:true,t:'L-num',ex:'“oh nine oh three, eight one seven, four six two”.'},3:{a:['kayaking'],ex:'Bẫy: đầu tiên muốn climbing nhưng cả lớp chọn kayaking.'},
  4:{a:['28','twenty-eight','twenty eight'],ex:'“thirty… two can’t come, so twenty-eight”.'},5:{a:['december'],ex:'“Saturday the fourteenth of December”.'},6:{a:['450000','450,000'],num:true,ex:'Bẫy: 500,000 là giá thường; nhóm trên 25 người “four hundred and fifty thousand”.'},
  7:{a:['gate'],ex:'“meet at the main gate”.'},8:{a:['spare'],ex:'“a towel and spare clothes, because everyone gets wet”.'},9:{a:['jewellery','jewelry'],ex:'“no jewellery on the water”.'},10:{a:['30th','30','thirtieth'],ex:'“by the thirtieth of November”.'},
  16:{a:['F'],t:'L-match',ex:'Museum: “a collection of old photographs showing what the village looked like a hundred years ago”.'},
  17:{a:['E'],t:'L-match',ex:'Temple: “on Sundays, local musicians play traditional instruments”.'},
  18:{a:['D'],t:'L-match',ex:'Market: “show your student card and you’ll get ten percent off”.'},
  19:{a:['C'],t:'L-match',ex:'Tea house: “sit on the balcony and watch the boats go past on the river”. Trà phải trả tiền → không phải B.'},
  20:{a:['A'],t:'L-match',ex:'Tower: “next to it is the oldest kiln in the village, built over three hundred years ago”.'}},
 script:[['Narrator','Section 1. You will hear a student phoning an adventure centre to book a class trip. First, you have some time to look at questions 1 to 10.'],['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 1 to 10.'],
 ['Receptionist','Good morning, Riverside Adventure Centre. How can I help you?'],
 ['Khoa',"Hi. I'd like to book a day trip for my class, please."],
 ['Receptionist',"Of course. Can I have your name?"],
 ['Khoa',"It's Khoa. My family name is Dang, that's D-A-N-G."],
 ['Receptionist','And a phone number?'],
 ['Khoa',"Yes, it's oh nine oh three, eight one seven, four six two."],
 ['Receptionist',"Thank you. Which activity are you interested in? We have rock climbing, kayaking and a jungle walk."],
 ['Khoa',"I wanted to do rock climbing, but most of my class voted for kayaking, so we'll do kayaking, please. For the whole day."],
 ['Receptionist','Fine. How many students?'],
 ['Khoa',"There are thirty in my class, but two can't come, so twenty-eight."],
 ['Receptionist','And which date?'],
 ['Khoa',"Saturday the fourteenth of December."],
 ['Receptionist',"Let me check. Yes, that's available. The normal price is five hundred thousand dong per person, but for groups of more than twenty-five, it's four hundred and fifty thousand. That includes lunch."],
 ['Khoa','Great. Where should we meet?'],
 ['Receptionist',"Please don't come to the office. Meet at the main gate, and an instructor will take you down to the river."],
 ['Khoa','Do the students need to bring anything?'],
 ['Receptionist',"We provide life jackets and helmets, so they just need a towel and spare clothes, because everyone gets wet. And one important rule: no jewellery on the water. Rings and necklaces are easily lost."],
 ['Khoa','OK. How do we pay?'],
 ['Receptionist',"You need to pay a deposit of twenty percent by the thirtieth of November. The rest can be paid on the day."],
 ['Khoa',"Thirtieth of November. Thank you very much."],
 ['Narrator','That is the end of Section 1. You now have half a minute to check your answers.'],
 ['Narrator','Section 2. You will hear a guide talking to a group of students about a pottery village. First, you have some time to look at questions 11 to 20.'],
 ['Narrator','[30 giây đọc đề] Now listen carefully and answer questions 11 to 20.'],
 ['Guide',"Hello, everyone, and welcome to Thanh Ha pottery village. Before we start, let me tell you a little about its history. People here have been making pottery for around five hundred years, using clay from the banks of the river."],
 ['Guide',"In the 1990s, the village went through a very difficult period. There was still plenty of clay, and the river was fine, but factory jobs in the city paid much better, so many young people left. By 2000, only a few families were still making pots."],
 ['Guide',"The government offered some small loans, and a television programme about the village helped a little, but what really saved the village was tourism. Once visitors started coming, the potters could sell directly to them, and young people began to return."],
 ['Guide',"Now, this morning you'll visit a workshop. The master potters are too busy to give demonstrations today, and making a pot takes too long, so instead you'll each paint your own plate. It will be fired in the kiln and posted to your school next week."],
 ['Guide',"One piece of advice: wear old clothes, because the paint doesn't wash out easily. You don't need cash for the workshop, and lunch is already booked for you."],
 ['Guide',"Right, let me tell you about the places you can visit this afternoon. First, the museum, near the entrance. It has a collection of old photographs showing what the village looked like a hundred years ago."],
 ['Guide',"Next to the museum is the temple, which is dedicated to the founder of the village. On Sundays, local musicians play traditional instruments there, and today is Sunday, so you're in luck."],
 ['Guide',"Then there's the market, where you can buy pottery of every shape and size. Show your student card and you'll get ten percent off. You can't buy clay there, though; that's only sold to potters."],
 ['Guide',"If you're tired, go to the tea house by the water. The tea isn't free, I'm afraid, but you can sit on the balcony and watch the boats go past on the river."],
 ['Guide',"Finally, the tower at the end of the main street. You can't go inside, but next to it is the oldest kiln in the village, built over three hundred years ago. Enjoy your visit!"],
 ['Narrator','That is the end of Section 2. You now have half a minute to check your answers.']]
},
speaking:{
 task:'Ghi âm liền cả Part 1, Part 2 và Part 3 (11–14 phút) trong một file, gửi cô qua Zalo. Nếu học lớp online, cô sẽ thi 1–1 với em.',
 items:[
 ['Let’s talk about your home. Do you live in a house or an apartment?',"I live in a three-storey house in Binh Chanh district with my parents and my younger brother. It's not very big, but it's comfortable and quite close to my school."],
 ['What do you like most about your neighbourhood?',"I like that it's still quite green. There's a small park near my house where people do exercise in the evening, and the neighbours are very friendly."],
 ['How often do you use the internet?',"Every day, for several hours. I use it to study, for example watching English videos and doing online exercises, and also to chat with friends."],
 ['Do you prefer reading books or watching films?',"I prefer watching films, because they're more relaxing after a long day at school. But I try to read at least one book a month, usually a short novel in English."]],
 part2:{cue:'Describe a skill you would like to learn.',bullets:['what the skill is','how you would learn it','how long it would take','and explain why you want to learn this skill.'],
  notes:'swimming · weekend course at sports centre, coach, practise 2 times/week · 2–3 months · safety (rivers, beach trips), exercise, fear of water since childhood',
  model:"The skill I'd really like to learn is swimming. It might sound surprising, but even though I'm seventeen, I still can't swim properly. When I was a child, I fell into a pond near my grandparents' house, and since then I've been afraid of deep water. I'd like to learn by joining a weekend course at the sports centre near my home. They have small classes with a professional coach, which I think would be better for me than learning from friends, because a coach would be patient and teach me the correct technique step by step. I'd also practise at least twice a week. I think it would take about two or three months to be able to swim confidently. There are a few reasons why I want to learn it. The most important one is safety. Vietnam has lots of rivers and beaches, and my family often goes to the sea in the summer, so it's a really useful life skill. Swimming is also great exercise. And finally, I want to prove to myself that I can overcome my fear."},
 part3:[
 ['What skills do young people need to succeed in the future?',"I think communication and digital skills are the most important. Almost every job now involves technology, and employers want people who can work in teams and explain their ideas clearly. Being able to learn new things quickly is also vital, because jobs are changing so fast."],
 ['Is it better to learn a skill from a teacher or by yourself online?',"It depends on the skill. For practical things like swimming or driving, a teacher is essential, because they can correct your mistakes immediately and keep you safe. But for things like coding or design, online courses can be just as effective, and they're much cheaper."],
 ['Do you think schools should teach life skills such as cooking and managing money?',"Yes, definitely. Many students leave school knowing a lot of theory but not knowing how to cook a simple meal or plan a budget. If schools taught these skills, young people would be much better prepared for independent life."]]
},
reading:{
 title:'The Return of the Bicycle', lead:'Thời gian: 20 phút · bài đọc khoảng 630 từ · 13 câu · bấm “Bắt đầu” trước khi đọc.',
 paras:[
 ['A','In the 1980s, the streets of Hanoi and Beijing were filled with bicycles. In China, there were so many that the country was often called “the kingdom of bicycles”, and in Vietnam the bicycle was the main form of transport for most families. Within twenty years, however, the picture had changed completely. As incomes rose, people switched first to motorbikes and then, increasingly, to cars. By 2010, cycling in many Asian cities was seen as something only the poor or the old did.'],
 ['B','Today, cities around the world are trying to bring the bicycle back. The reasons are not hard to find. Traffic congestion costs economies billions of dollars every year in lost working time, and road transport is one of the largest sources of air pollution in urban areas. Bicycles, by contrast, produce no emissions, take up very little space and are cheap to buy and maintain. A single car parking space, planners point out, can hold up to ten bicycles.'],
 ['C','The best-known success story is Copenhagen, the capital of Denmark. In the 1970s, the city was as crowded with cars as any other European capital. After a series of fuel crises, the government began investing heavily in cycle lanes that are physically separated from cars by a small kerb. Today, around 45 percent of all journeys to work or school in Copenhagen are made by bicycle, and the city has more bikes than people. Surveys show that most residents cycle not because it is environmentally friendly but simply because it is the fastest and easiest way to get around.'],
 ['D','Safety is the main factor that prevents people from cycling in other cities. Studies in several countries have found that the number one reason people give for not cycling is fear of traffic. This is why experts stress that painting a line on the road is not enough; cyclists need protected lanes. When Seville in Spain built a network of 80 kilometres of separated cycle lanes in just four years, the number of daily bicycle trips increased roughly tenfold.'],
 ['E','Another important development has been bike-sharing. Users can unlock a bicycle with a mobile phone app, ride it across the city and leave it at another station. The first large-scale scheme opened in Lyon, France, in 2005, and within fifteen years there were similar schemes in more than a thousand cities. In Vietnam, a public bike-sharing service was launched in Hanoi in 2023, and Ho Chi Minh City has also introduced bicycles for hire in the city centre.'],
 ['F','Not every scheme has been successful, however. In some Chinese cities, companies competed so aggressively that millions of shared bicycles were produced, far more than were needed. Thousands ended up broken and abandoned in huge “bicycle graveyards” on the edges of cities. The lesson, according to transport researcher Dr Mei Lin, is that bike-sharing works best when it is carefully planned by city authorities rather than left entirely to private companies.'],
 ['G','Electric bicycles may help to solve one of cycling’s oldest problems: hills and heat. With a small motor that assists the rider, e-bikes make it possible to travel longer distances without arriving at work hot and tired. In the Netherlands, e-bikes now account for more than half of all new bicycles sold, and they have been especially popular among older people, who are able to keep cycling for longer.'],
 ['H','Whether the bicycle can return to the streets of Asian cities on a large scale remains uncertain. The climate is hot, distances in fast-growing cities are long, and the motorbike is deeply rooted in daily life. Yet the experience of cities such as Copenhagen and Seville suggests that, if safe infrastructure is provided, people will cycle. As one urban planner put it, “If you build it, they will come.”']],
 groups:[
 {title:'Questions 1–5: The passage has eight paragraphs, A–H. Choose the correct heading for paragraphs B–F from the list of headings below.',box:'<b>i</b> A problem caused by too much competition &nbsp; <b>ii</b> Why cities want more cyclists &nbsp; <b>iii</b> A technology that makes cycling easier &nbsp; <b>iv</b> The biggest barrier to cycling &nbsp; <b>v</b> A city that changed its transport habits &nbsp; <b>vi</b> Sharing bicycles through technology &nbsp; <b>vii</b> The history of the bicycle in Europe',qs:[
  {t:'select',text:'Paragraph B',opts:['i','ii','iii','iv','v','vi','vii'],a:'ii',ex:'B nêu lý do các thành phố muốn đưa xe đạp trở lại (ùn tắc, ô nhiễm, ít chỗ).'},
  {t:'select',text:'Paragraph C',opts:['i','ii','iii','iv','v','vi','vii'],a:'v',ex:'C: Copenhagen thay đổi từ thành phố nhiều ô tô thành thành phố xe đạp.'},
  {t:'select',text:'Paragraph D',opts:['i','ii','iii','iv','v','vi','vii'],a:'iv',ex:'D: “Safety is the main factor that prevents people from cycling”.'},
  {t:'select',text:'Paragraph E',opts:['i','ii','iii','iv','v','vi','vii'],a:'vi',ex:'E: bike-sharing qua ứng dụng điện thoại.'},
  {t:'select',text:'Paragraph F',opts:['i','ii','iii','iv','v','vi','vii'],a:'i',ex:'F: các công ty cạnh tranh quá mức → “bicycle graveyards”. iii là đoạn G (e-bikes).'}]},
 {title:'Questions 6–9: TRUE / FALSE / NOT GIVEN',box:'',qs:[
  {t:'select',text:'By 2010, cycling in many Asian cities had a poor image.',opts:['TRUE','FALSE','NOT GIVEN'],a:'TRUE',ex:'A: “cycling… was seen as something only the poor or the old did”.'},
  {t:'select',text:'Most people in Copenhagen cycle mainly to protect the environment.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'C: “not because it is environmentally friendly but simply because it is the fastest and easiest way”.'},
  {t:'select',text:'Seville’s cycle lanes cost less than expected.',opts:['TRUE','FALSE','NOT GIVEN'],a:'NOT GIVEN',ex:'D không nói về chi phí.'},
  {t:'select',text:'Hanoi launched a public bike-sharing service before Lyon.',opts:['TRUE','FALSE','NOT GIVEN'],a:'FALSE',ex:'E: Lyon 2005, Hanoi 2023.'}]},
 {title:'Questions 10–13: Complete each sentence with the correct ending, A–F, below.',box:'<b>A</b> because they are separated from cars. &nbsp; <b>B</b> if city authorities plan it carefully. &nbsp; <b>C</b> because they reduce the effort needed to ride. &nbsp; <b>D</b> by about ten times. &nbsp; <b>E</b> because the government banned motorbikes. &nbsp; <b>F</b> more than ten cars.',qs:[
  {t:'select',tag:'R-end',text:'Copenhagen’s cycle lanes are safer',opts:['A','B','C','D','E','F'],a:'A',ex:'C: “physically separated from cars by a small kerb”.'},
  {t:'select',tag:'R-end',text:'Daily bicycle trips in Seville increased',opts:['A','B','C','D','E','F'],a:'D',ex:'D: “increased roughly tenfold”.'},
  {t:'select',tag:'R-end',text:'According to Dr Mei Lin, bike-sharing is most successful',opts:['A','B','C','D','E','F'],a:'B',ex:'F: “works best when it is carefully planned by city authorities”.'},
  {t:'select',tag:'R-end',text:'E-bikes are popular with older people',opts:['A','B','C','D','E','F'],a:'C',ex:'G: “a small motor that assists the rider… able to keep cycling for longer”.'}]}]
},
writing:{
 title:'Task 1 + Task 2 (60 phút)',
 t1:{title:'Task 1 · Bar chart',min:150,
  prompt:'The chart below shows the percentage of students at a high school who used four different ways to travel to school in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
  chart:{type:'bar',title:'How students travel to school (%)',unit:'%',series:['2015','2025'],cats:['Motorbike (with parents)','Bicycle','School bus','Electric bike'],data:[[45,30],[35,15],[15,25],[5,30]]},
  model:'The bar chart compares the proportions of students at a high school who travelled to school by four different means in 2015 and 2025.<br><br><i>Overall</i>, being taken by motorbike was the most common method in 2015, but by 2025 it was equalled by electric bikes, which saw <b>a dramatic rise</b>. <i>By contrast</i>, cycling became much less popular.<br><br>In 2015, 45% of students were taken to school by their parents on motorbikes, and over a third (35%) cycled. Only 15% used the school bus, <i>while</i> electric bikes were rarely used, at just 5%.<br><br>Ten years later, the share of students travelling by motorbike had <b>fallen to</b> 30%, and the figure for bicycles had <b>more than halved</b> to 15%. <i>In contrast</i>, electric bikes became <b>six times as popular</b>, rising to 30%, the same level as motorbikes. The school bus also gained ground, with its share increasing by 10 percentage points to a quarter of all students.',
  note:'154 từ, band 6.0–6.5. Overview nêu 2 xu hướng chính. Thân bài 1 mô tả năm 2015; thân bài 2 mô tả thay đổi đến 2025, có so sánh.'},
 prompt:'<b>Task 2 · Opinion.</b> Some people think that the best way to reduce traffic congestion in cities is to make public transport free. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.',
 min:250,max:320,
 outline:['Task 1 (20 phút): mở bài paraphrase → overview (motorbike & e-bike bằng nhau năm 2025; xe đạp giảm mạnh) → thân bài 2015 → thân bài 2025.','Task 2 mở bài: paraphrase + quan điểm: đồng ý một phần – miễn phí có ích nhưng không phải cách tốt nhất.','Task 2 thân bài 1: lợi ích của xe buýt miễn phí (nhiều người dùng hơn, giúp người thu nhập thấp); ví dụ Luxembourg miễn phí toàn bộ phương tiện công cộng từ 2020.','Task 2 thân bài 2: vấn đề quan trọng hơn là chất lượng và mạng lưới (xe buýt chậm, kẹt xe, ít tuyến); cần làn riêng cho xe buýt, metro, hạn chế xe cá nhân.','Task 2 kết bài: nhắc lại quan điểm.'],
 model:'Traffic congestion has become a serious problem in many cities, and some people argue that making public transport free is the most effective solution. <i>While</i> I agree that free travel could encourage more people to leave their cars and motorbikes at home, <i>I do not believe</i> it is the best way to tackle the problem on its own.<br><br><i>On the one hand</i>, removing fares would make buses and trains <b>more attractive</b>, especially to low-income workers and students. <i>For example</i>, Luxembourg made all public transport free in 2020, and the policy was popular with commuters. Free travel would also save time at stations, because passengers would not need to queue for tickets, and it would help families with low incomes.<br><br><i>On the other hand</i>, price is often <b>not the main reason</b> why people avoid public transport. In Ho Chi Minh City, <i>for instance</i>, a bus ticket costs only a few thousand dong, yet most people still prefer motorbikes because buses are slow, crowded and do not reach many neighbourhoods. If buses are stuck in the same traffic jams as private vehicles, making them free will change very little. Investment in <b>dedicated bus lanes</b>, metro lines and more frequent services would therefore have a much greater impact. <i>In addition</i>, governments could <b>discourage private vehicles</b> through higher parking fees or congestion charges, as cities such as London and Singapore have done.<br><br><i>In conclusion</i>, although free public transport might attract some new passengers, I believe that improving the speed, reliability and coverage of the system, combined with measures to limit private vehicles, is a far more effective way to reduce congestion.',
 note:'Task 2: 267 từ, band 6.0–6.5. Quan điểm “đồng ý một phần” xuất hiện ở mở bài và kết bài. Ví dụ cụ thể (Luxembourg, TP.HCM, London, Singapore).',
 checklist:['Task 1: có overview, ít nhất 150 từ','Task 1: so sánh 2 năm, không liệt kê','Task 2: quan điểm rõ ở mở bài và kết bài','Task 2: mỗi thân bài có lý do + ví dụ','Task 2: ít nhất 250 từ','Tổng thời gian không quá 60 phút']
}
}
);
