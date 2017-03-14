/**
 * Created by jh on 2017/3/2.
 */
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable: true,

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

});

<!-- Initialize Swiper -->
var winw = $(window).width();
var swiper = new Swiper('.swiper-container2', {
    //pagination: '.swiper-pagination2',
    //paginationClickable: true,
    slidesPerView: (winw<768 ? 1 : 4),
    slidesPerColumn: (winw<768 ? 1 : 2),
    spaceBetween: 30,
    autoplay : 3000,
    speed:300,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});
