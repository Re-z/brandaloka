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
            })
            xhr.send();
        })
    }
    loadPosts();


    //show skills
    let showSkillsOnScroll = () => {
        window.addEventListener('scroll', function scroll(ev) {
            if(window.pageYOffset > 5300) {
            document.body.classList.add('no-scroll');
            window.addEventListener('wheel', function showSkillsOnWheel(ev) {
                let item = document.querySelector('.skills__item.is-hidden');
                var currCount = +ev.wheelDelta;

                var count;
                count +=currCount
                alert(count)


                if(item) {
                    item.classList.remove('is-hidden')
                    }
                else {
                    window.removeEventListener('scroll', scroll);
                    document.body.classList.remove('no-scroll');

                }

                })
        }
        })
    }
    showSkillsOnScroll();

});