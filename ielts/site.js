/* Cấu hình trang — cô sửa thông tin ở đây (giá, Zalo) rồi gửi em cập nhật */
window.SITE = {
 teacher: 'Cô Phạm Thị Ngọc Huyền',
 role: 'Giáo viên Tiếng Anh THPT',
 zalo: '',            // ví dụ '0901234567' — để trống thì ẩn nút Zalo
 freeUnits: ['u1'],   // unit học thử miễn phí, không cần mã
 packages: [
  {name:'Tự học', price:'', items:['Toàn bộ workbook web + PDF (Unit 1–16 và bài ôn)','Audio giọng chuẩn, chép chính tả, tự chấm Listening/Reading','Sổ lỗi theo dạng bài, test đầu vào và lộ trình riêng']},
  {name:'Tự học có chữa bài', price:'', items:['Mọi quyền lợi gói Tự học','Cô chữa 1 bài Writing hoặc Speaking mỗi tuần qua Zalo','Cô xem mã kết quả và nhắc dạng bài cần ôn'], hot:true},
  {name:'Lớp online cùng cô', price:'', items:['2 buổi/tuần × 90 phút, tối đa 10 học sinh','Workbook đi kèm học phí','Thi thử giữa và cuối giai đoạn, cô chấm chi tiết']}
 ],
 butpha: 'https://phamthingochuyen891997-jpg.github.io/butpha-tnthpt/',
 teams: ['🍊 Đội Cam','🌊 Đội Biển','🌿 Đội Xanh'],   // tên đội thi đua — cô đổi tùy lớp
 classOnly: true,   // true = chỉ dùng cho lớp cô (ẩn bảng gói học)
 start: '',          // ngày thứ Hai của tuần học Unit 1, ví dụ '2026-11-16' — để trống thì học sinh tự chọn unit
 key: 'LMN-26-HUYEN'   // khóa tạo mã kích hoạt — không chia sẻ
};
