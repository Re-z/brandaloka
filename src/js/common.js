$(document).ready(function() {
    $('.js-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });
    $('.about__next').click(function () {
        $('.js-slider').slick('slickNext')
    });
    $('.about__prev').click(function () {
        $('.js-slider').slick('slickPrev')
    });
    
    //mobile burger
    $('.header__burger').click(function () {
        $('.header__nav').toggleClass('is-visible');
    })


});