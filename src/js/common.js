$(document).ready(function() {
    //about slider
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
    //clients slider
    $('.js-clients-slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
    });
    $('.clients__next').click(function () {
        $('.js-clients-slider').slick('slickNext')
    });
    $('.clients__prev').click(function () {
        $('.js-clients-slider').slick('slickPrev')
    });



    //mobile burger
    $('.header__burger').click(function () {
        $('.header__nav').toggleClass('is-visible');
    });

    //$(".skills__increase").spincrement({
    //    from: 1,                // Стартовое число
    //    to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
    //    decimalPlaces: 0,       // Сколько знаков оставлять после запятой
    //    decimalPoint: "",      // Разделитель десятичной части числа
    //    thousandSeparator: "", // Разделитель тыcячных
    //    duration: 3000          // Продолжительность анимации в миллисекундах
    //});
});