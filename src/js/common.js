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

    let loadPosts = () => {
        let trigger = document.querySelector('.more-posts');
        trigger.addEventListener('click', () => {
           let xhr = new XMLHttpRequest();
            xhr.open('GET','../posts.json');
            xhr.addEventListener('load', () => {
                let response = JSON.parse(xhr.responseText);
                let article = document.querySelector('.posts__item');
                let posts = document.querySelector('.posts');

                for(let i = 0; i<response.length; i++) {
                    let newArticle = article.cloneNode(true);

                    //changing properties according to json
                    newArticle.querySelector('img').src = response[i].img;
                    newArticle.querySelector('a').href = response[i].href;
                    newArticle.querySelector('h5').innerHTML = response[i].title;
                    newArticle.querySelector('p').innerHTML = response[i].text;
                    newArticle.querySelector('time').innerHTML = response[i].time;
                    newArticle.querySelector('span').innerHTML = response[i].comments;

                    //add new posts
                    posts.appendChild(newArticle);
                }
        //alert(newArticleImg)

            })
            xhr.send();
        })
    }
    loadPosts()
});