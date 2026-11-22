/* Ngữ pháp & phát âm cho từng unit + bài luyện Writing từng bước bổ sung */
window.GRAMMAR = {
u1:{
 title:'Quá khứ đơn và hiện tại hoàn thành (for / since)',
 explain:`<table><tr><th>Thì</th><th>Dùng khi</th><th>Ví dụ</th></tr>
<tr><td><b>Quá khứ đơn</b></td><td>Việc đã xong, có thời điểm cụ thể (in 2015, ago, when I was a child)</td><td>My family <b>moved</b> here in 2015.</td></tr>
<tr><td><b>Hiện tại hoàn thành</b></td><td>Việc kéo dài từ quá khứ đến nay, hoặc thay đổi tính đến bây giờ</td><td>I <b>have lived</b> here <b>since</b> 2015 / <b>for</b> ten years.<br>My hometown <b>has changed</b> a lot.</td></tr></table>
<p class="note"><b>for</b> + khoảng thời gian (for six years) · <b>since</b> + mốc thời gian (since 2015, since I was born). Mô tả quê hương thay đổi → dùng hiện tại hoàn thành.</p>`,
 qs:[
  {t:'mcq',q:'I ______ in Binh Chanh since I was born.',opts:['have lived','lived','live'],a:0,ex:'since + mốc → hiện tại hoàn thành.'},
  {t:'mcq',q:'My family ______ to the city in 2015.',opts:['has moved','moved','have moved'],a:1,ex:'“in 2015” là thời điểm cụ thể → quá khứ đơn.'},
  {t:'mcq',q:'I have studied English ______ six years.',opts:['for','since','in'],a:0,ex:'for + khoảng thời gian.'},
  {t:'mcq',q:'She has been our teacher ______ September.',opts:['for','since','ago'],a:1,ex:'since + mốc thời gian.'},
  {t:'mcq',q:'The town ______ a lot in the last ten years.',opts:['changed','has changed','change'],a:1,ex:'“in the last ten years” kéo dài đến nay → hiện tại hoàn thành.'},
  {t:'mcq',q:'When I was a child, there ______ many rice fields here.',opts:['have been','were','are'],a:1,ex:'“When I was a child” → quá khứ đơn.'},
  {t:'gap',q:'They built the new bridge two years ______.',a:['ago'],ex:'… ago → quá khứ đơn.'},
  {t:'gap',q:'How long ______ you lived here?',a:['have'],ex:'How long + have/has + V3.'}],
 pron:{title:'Phát âm đuôi -ed: /t/, /d/, /ɪd/',
  explain:'<b>/ɪd/</b> sau âm t, d (visit<b>ed</b>, need<b>ed</b>) · <b>/t/</b> sau âm vô thanh p, k, s, sh, ch, f (help<b>ed</b>, watch<b>ed</b>) · <b>/d/</b> sau các âm còn lại (mov<b>ed</b>, play<b>ed</b>).',
  items:[{w:'developed',opts:['/t/','/d/','/ɪd/'],a:0},{w:'moved',opts:['/t/','/d/','/ɪd/'],a:1},{w:'visited',opts:['/t/','/d/','/ɪd/'],a:2},
   {w:'watched',opts:['/t/','/d/','/ɪd/'],a:0},{w:'changed',opts:['/t/','/d/','/ɪd/'],a:1},{w:'needed',opts:['/t/','/d/','/ɪd/'],a:2}]}
},
u2:{
 title:'Mô tả xu hướng và so sánh (cho Task 1)',
 explain:`<table><tr><th>Cách viết</th><th>Cấu trúc</th><th>Ví dụ</th></tr>
<tr><td>Động từ + trạng từ</td><td>rise / fall / increase / decrease + sharply, slightly, gradually</td><td>Screen time <b>rose sharply</b>.</td></tr>
<tr><td>Danh từ + tính từ</td><td>There was a + sharp / slight / gradual + rise / fall in…</td><td>There was <b>a sharp rise</b> in screen time.</td></tr>
<tr><td>So sánh</td><td>more / less … than · the most … · twice / three times as … as</td><td>Students spent <b>three times as much</b> time on social media <b>as</b> in 2015.</td></tr></table>
<p class="note">Dùng xen kẽ hai cách (động từ + trạng từ, danh từ + tính từ) để tránh lặp cấu trúc trong bài Task 1.</p>`,
 qs:[
  {t:'mcq',q:'The number of users rose ______ from 3 to 12.',opts:['sharp','sharply','sharpness'],a:1,ex:'Bổ nghĩa cho động từ → trạng từ.'},
  {t:'mcq',q:'There was a ______ decrease in time spent on sports.',opts:['slight','slightly','slighter'],a:0,ex:'Bổ nghĩa cho danh từ → tính từ.'},
  {t:'mcq',q:'Social media was ______ popular activity in 2025.',opts:['the most','more','most of'],a:0,ex:'So sánh nhất: the most + adj.'},
  {t:'mcq',q:'Students spent ______ time on TV in 2025 than in 2015.',opts:['less','fewer','least'],a:0,ex:'time không đếm được → less.'},
  {t:'mcq',q:'In 2025, students spent four times ______ much time on social media as in 2015.',opts:['as','so','more'],a:0,ex:'… times as much … as.'},
  {t:'mcq',q:'Time spent on reading ______ from 4 to 2 hours.',opts:['halved','halve','halving'],a:0,ex:'Quá khứ đơn: halved.'},
  {t:'gap',q:'There was a dramatic ______ in screen time. (danh từ nghĩa là “sự tăng”)',a:['increase','rise','growth'],ex:'a dramatic increase / rise.'},
  {t:'gap',q:'TV was more popular ______ social media in 2015.',a:['than'],ex:'more … than.'}],
 pron:{title:'Phân biệt số -teen và -ty (rất hay gặp trong Listening)',
  explain:'Số -teen nhấn âm <b>cuối</b>: thir<b>TEEN</b>, fif<b>TEEN</b>. Số -ty nhấn âm <b>đầu</b>: <b>THIR</b>ty, <b>FIF</b>ty, và âm cuối -ty ngắn. Nghe kỹ trọng âm để không chọn nhầm.',
  items:[{w:'fifteen',opts:['15','50'],a:0},{w:'fifty',opts:['15','50'],a:1},{w:'thirteen',opts:['13','30'],a:0},{w:'forty',opts:['14','40'],a:1},{w:'eighteen',opts:['18','80'],a:0},{w:'sixty',opts:['16','60'],a:1}]}
},
u3:{
 title:'Mệnh đề quan hệ who / which / where / whose (cho Speaking Part 2)',
 explain:`<table><tr><th>Từ</th><th>Thay cho</th><th>Ví dụ</th></tr>
<tr><td><b>who</b></td><td>người</td><td>My teacher, <b>who</b> recommended the app, uses it too.</td></tr>
<tr><td><b>which</b> / that</td><td>vật</td><td>I use an app <b>which</b> helps me learn words.</td></tr>
<tr><td><b>where</b></td><td>nơi chốn</td><td>This is the library <b>where</b> I study.</td></tr>
<tr><td><b>whose</b></td><td>sở hữu</td><td>The student <b>whose</b> laptop broke borrowed one.</td></tr></table>
<p class="note">Có dấu phẩy (thông tin thêm) thì <b>không</b> dùng that. Mệnh đề quan hệ giúp câu Part 2 dài và tự nhiên hơn — một tiêu chí của band 6.</p>`,
 qs:[
  {t:'mcq',q:'I use an app ______ helps me learn new words.',opts:['who','which','where'],a:1,ex:'Thay cho vật (an app).'},
  {t:'mcq',q:'My teacher, ______ recommended the app, uses it too.',opts:['who','which','that'],a:0,ex:'Người + có dấu phẩy → who (không dùng that).'},
  {t:'mcq',q:'This is the library ______ I study after school.',opts:['which','where','who'],a:1,ex:'Nơi chốn → where.'},
  {t:'mcq',q:'Students ______ use phones in bed often sleep late.',opts:['who','which','whose'],a:0,ex:'Thay cho người.'},
  {t:'mcq',q:'The video, ______ went viral last week, was made by a student.',opts:['which','that','what'],a:0,ex:'Vật + có dấu phẩy → which.'},
  {t:'mcq',q:'The student ______ laptop broke had to borrow one.',opts:['whose','who’s','which'],a:0,ex:'Sở hữu → whose.'},
  {t:'gap',q:'The centre has twelve tablets ______ you can borrow.',a:['which','that'],ex:'Vật, không có dấu phẩy → which/that.'},
  {t:'gap',q:'That is the café ______ we often meet.',a:['where'],ex:'Nơi chốn → where.'}],
 pron:{title:'Trọng âm từ 3–4 âm tiết về công nghệ',
  explain:'Nghe và chọn âm tiết được nhấn (viết HOA). Nhấn sai trọng âm là lỗi phát âm phổ biến làm giảm điểm Pronunciation.',
  items:[{w:'computer',opts:['COM-pu-ter','com-PU-ter','com-pu-TER'],a:1},{w:'internet',opts:['IN-ter-net','in-TER-net','in-ter-NET'],a:0},{w:'important',opts:['IM-por-tant','im-POR-tant','im-por-TANT'],a:1},
   {w:'privacy',opts:['PRI-va-cy','pri-VA-cy','pri-va-CY'],a:0},{w:'information',opts:['IN-for-ma-tion','in-FOR-ma-tion','in-for-MA-tion'],a:2},{w:'technology',opts:['TECH-nol-o-gy','tech-NOL-o-gy','tech-nol-O-gy'],a:1}]}
},
u4:{
 title:'Câu phức cho Task 2: because, although, if, so that, which',
 explain:`<table><tr><th>Ý nghĩa</th><th>Từ nối</th><th>Ví dụ</th></tr>
<tr><td>Lý do</td><td>because, as, since</td><td>Students feel tired <b>because</b> they stay up late.</td></tr>
<tr><td>Nhượng bộ</td><td>although (trong câu) · However, (đầu câu mới)</td><td><b>Although</b> junk food is cheap, it is harmful.</td></tr>
<tr><td>Điều kiện</td><td>if, unless</td><td><b>If</b> schools ban sugary drinks, students will drink more water.</td></tr>
<tr><td>Mục đích</td><td>so that</td><td>Tax sugary drinks <b>so that</b> people buy fewer.</td></tr>
<tr><td>Bổ sung ý</td><td>, which</td><td>Many students skip breakfast, <b>which</b> affects their concentration.</td></tr></table>
<p class="note">Band 6 Grammar cần “a mix of simple and complex sentences”. Mỗi đoạn thân bài nên có ít nhất 2 câu phức.</p>`,
 qs:[
  {t:'mcq',q:'______ junk food is cheap, it is harmful.',opts:['Although','Because','If'],a:0,ex:'Hai ý trái ngược trong một câu → although.'},
  {t:'mcq',q:'Students feel tired ______ they stay up late.',opts:['because','although','so that'],a:0,ex:'Lý do → because.'},
  {t:'mcq',q:'______ schools ban sugary drinks, students will drink more water.',opts:['If','Although','Unless'],a:0,ex:'Điều kiện loại 1: If + hiện tại, will + V.'},
  {t:'mcq',q:'The government should tax sugary drinks ______ people buy fewer of them.',opts:['so that','because','although'],a:0,ex:'Mục đích → so that.'},
  {t:'mcq',q:'Many students skip breakfast, ______ affects their concentration.',opts:['which','what','who'],a:0,ex:', which thay cho cả mệnh đề trước.'},
  {t:'mcq',q:'Junk food is popular. ______, it is unhealthy.',opts:['However','Because','Although'],a:0,ex:'Đầu câu mới + dấu phẩy → However.'},
  {t:'gap',q:'______ students get enough sleep, they can concentrate better.',a:['if','when'],ex:'If / When + điều kiện.'},
  {t:'gap',q:'I largely agree with this view ______ a ban would protect students’ health.',a:['because','as','since'],ex:'Lý do → because / as / since.'}],
 pron:{title:'Phát âm đuôi -s/-es: /s/, /z/, /ɪz/',
  explain:'<b>/ɪz/</b> sau âm s, z, sh, ch, ge (sandwich<b>es</b>, choic<b>es</b>) · <b>/s/</b> sau âm vô thanh p, t, k, f (habit<b>s</b>, drink<b>s</b>) · <b>/z/</b> sau các âm còn lại (vegetable<b>s</b>, school<b>s</b>).',
  items:[{w:'habits',opts:['/s/','/z/','/ɪz/'],a:0},{w:'vegetables',opts:['/s/','/z/','/ɪz/'],a:1},{w:'sandwiches',opts:['/s/','/z/','/ɪz/'],a:2},
   {w:'drinks',opts:['/s/','/z/','/ɪz/'],a:0},{w:'schools',opts:['/s/','/z/','/ɪz/'],a:1},{w:'choices',opts:['/s/','/z/','/ɪz/'],a:2}]}
}
};
window.WEX = {
u2:[
 ['Câu mở bài nào paraphrase tốt nhất?',['The bar chart shows the average number of hours per week that students at a high school spent on four leisure activities in 2015 and 2025.','The bar chart compares how many hours a week high-school students spent on four free-time activities in 2015 and 2025.','This chart is about students and their hobbies.'],1,'A chép nguyên đề; C quá chung chung.'],
 ['Câu overview nào đúng?',['Overall, social media became the most popular activity, while the time spent on TV and reading fell.','Overall, students spent 12 hours a week on social media in 2025.','Overall, I think students use social media too much.'],0,'B đưa số liệu vào overview; C là ý kiến cá nhân.'],
 ['Cách chia 2 đoạn thân bài hợp lý nhất:',['Thân bài 1: TV và social media (thay đổi lớn); thân bài 2: sports và reading (thay đổi nhỏ)','Mỗi hoạt động một đoạn (4 đoạn thân bài)','Thân bài 1 chép số liệu 2015; thân bài 2 chép số liệu 2025, không so sánh'],0,'Nhóm theo mức độ thay đổi giúp so sánh rõ; C thiếu so sánh.'],
 ['Câu nào đúng ngữ pháp?',['Time spent on TV dropped sharply from 10 to 4 hours.','Time spent on TV dropped sharp from 10 to 4 hours.','Time spent on TV was drop sharply from 10 to 4 hours.'],0,'drop (động từ) + sharply (trạng từ).'],
 ['In 2015, students spent 10 hours a week on TV, ______ only 3 hours on social media.',['compared with','because','so'],0,'compared with dùng để so sánh hai số liệu.']],
u3:[
 ['Câu overview tốt nhất cho biểu đồ đường:',['Overall, video-sharing apps rose dramatically to become the most popular type, whereas social networking sites declined steadily.','Overall, video-sharing apps were at 20% in 2016 and 80% in 2024.','Overall, there are three lines in the graph.'],0,'B có số liệu; C không nêu xu hướng.'],
 ['Video-sharing apps ______ social networking sites between 2020 and 2022.',['overtook','peaked','levelled off'],0,'Vượt lên trên đường khác → overtake.'],
 ['Messaging apps rose gradually and then ______ at 63%.',['levelled off','overtook','fell sharply'],0,'Gần như không đổi ở cuối kỳ → level off.'],
 ['Câu nào SAI ngữ pháp?',['Video-sharing apps reached a peak of 80% in 2024.','Video-sharing apps peaked at 80% in 2024.','Video-sharing apps were peak 80% in 2024.'],2,'peak là động từ (peaked at) hoặc danh từ (reached a peak of).'],
 ['Cách chia thân bài giúp so sánh rõ nhất cho biểu đồ này:',['Thân bài 1: hai đường biến động mạnh (video-sharing, social networking); thân bài 2: đường ổn định (messaging)','Mỗi năm một đoạn (5 đoạn thân bài)','Chỉ viết về đường cao nhất'],0,'Nhóm theo xu hướng; B quá nhiều đoạn, C thiếu thông tin.']]
};
