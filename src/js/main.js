$(document).ready(function () {
    const slide = $('#owl');
    slide.owlCarousel({
        items: 3,
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }

    });
    $('.owl-prev').click(function () {
        slide.trigger('next.owl.carousel');

    });
    $('.owl-next').click(function () {
        slide.trigger('prev.owl.carousel', [300]);
    });


    const videosSlider = $('#videosSlider');
    videosSlider.owlCarousel({
        items: 1,
        dots: false,
        autoHeight: true,
        loop: true,
        center: true,
        autoplay: true,
        nav: false,
        autoplaySpeed: 200,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1,
                Width: '100%',

            },
            768: {
                items: 1,
                Width: '100%'
            },
            1200: {
                items: 1,
                Width: '100%'
            },
        }
    });
    $('.owlPrev').click(function () {
        videosSlider.trigger('next.owl.carousel');

    });
    $('.owlNext').click(function () {
        videosSlider.trigger('prev.owl.carousel', [300]);
    });

    /*function play2() {
        document.getElementById('play1').innerHTML =
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/-gaf40MUZD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    play2()*/
    // $('.oftenQuestions-panelGroup__icon').click(function(e) {
    //     $(this).parent().parent().find('.oftenQuestions-panelGroup-box2').slideToggle(900)
    // })

    $('.oftenQuestions-panelGroup__icon').each(function (i) {
        $(this).on('click', function (e) {
            $('.oftenQuestions-panelGroup-box2').eq(i).slideToggle(900);
            $('.oftenQuestions-panelGroup__box1 .plus').eq(i)/*.css('display', 'none');*/
            $('.oftenQuestions-panelGroup-box2 .minus').eq(i).toggleClass('active');
        })
    });

    /*let btnBox1 = document.querySelector('oftenQuestions-panelGroup__icon');
    let box2 = document.querySelector('oftenQuestions-panelGroup-box2');
    btnBox1.addEventListener('onclick', function () {
        box2.innerText = 'hello';
    });*/
    $('.burger').on('click', function () {
        $('.burger').toggleClass('active');
        $('.header-menu, .header-menu-nav, .header-menu-nav__list').toggleClass('active');
    })

});
