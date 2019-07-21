/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var books=[
    {
        id:0,
        name:'js',
        borrow: true
    },
    {
        id:1,
        name:'js nang cao',
        borrow:false

    }
]
var users=[
    {
        id:0,
        userName:'tan',
        password:'123',
        borrowBook:[0,1]
    },
    {
        id:1,
        userName:'toan',
        password:'2',
        borrowBook:[0]
    }
]
var logs=[
    {
        idbook:1,
        userBor:1,
        borrowAt:'Sep 8 2018 07:20',
        returnAt:' Sep 10 2018 07:20'
    }
]