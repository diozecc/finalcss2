function showMenu() {
    document.getElementById("container-menu").style.width = "25%";
}
function closeMenu() {
    document.getElementById("container-menu").style.width = "0%";
}
document.addEventListener('DOMContentLoaded', function() {
    var marquee = document.querySelector('.text-slide marquee');
    var cloneContents = marquee.innerHTML;
    marquee.innerHTML += cloneContents.repeat(10000);
    marquee.addEventListener('mouseout', function() {
        this.setAttribute('scrollamount', '6');
    });
});
$('#slider1').owlCarousel({
    loop:true,	// cho lap lại
    items:4,	// xuất hiện 1 ảnh
    smartSpeed:850,   	// tốc độ thay đổi ảnh
    autoplay:false,		// cho phép tự động chạy
    autoplayTimeout:850,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    nav:false,	// cho xuất hiện bộ nút tới lui 
    dots:false,	// cho xuất hiện dấu chấm
})	