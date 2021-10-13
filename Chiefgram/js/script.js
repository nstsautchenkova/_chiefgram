// FORM VALID
$('.form-submit').click(function () {
    $(".form-required").each(function (i) {
        if (this.value == '') {
            $(this).parents('.form-group').addClass('validation-error');
            $('.form-submit').addClass('btn-disabled');
        } else {
            $(this).parents('.form-group').removeClass('validation-error');
            $('.form-submit').removeClass('btn-disabled');
            $('.form-submit').attr('data-toggle', 'modal');
            $('.form-submit').attr('data-target', '.modal-send');
            $('.form-submit').attr('data-dismiss', 'modal');
        }
    });
    $(".form-required").change(function (i) {
        $(this).parents('.form-group').removeClass('validation-error');
        $('.form-submit').removeClass('btn-disabled');
        $('.form-submit').attr('data-toggle', 'modal');
        $('.form-submit').attr('data-target', '.modal-send');
        $('.form-submit').attr('data-dismiss', 'modal');
    })
});

$(document).on("ready", function () {
    $(".form-control").change(function (i) {
        let inputVal = $(this).val();
        if (inputVal == '') {
            $(this).parents('.input-group').removeClass('valid');
        } else {
            $(this).parents('.input-group').addClass('valid');
        }
    })
});

// Timer
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

/* var deadline = "January 01 2018 00:00:00 GMT+0300";
var deadline = new Date(Date.parse(new Date()) + 23 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadline); */
$(document).on("ready", function () {
    var deadline = $("#countdown").data("deadline");
    initializeClock('countdown', deadline);
})
// anchor
$('.anchor').on('click', function () {
    var href = $(this).attr('href');
    $('.anchor').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 80
    }, {
        duration: 370,
        easing: "linear"
    });
    return false;
});

// Menu
$(document).on("ready", function () {
    $(".menu .trigger-menu").click(function () {
        $(this).toggleClass('op');
        $(".menu").toggleClass("menu-open");
        $('.menu .hamburger-menu__bar').toggleClass('animate');
        $('.wrapper').toggleClass('menu-open');
        $('body').toggleClass('menu-open');
    });
});

// portfolio dropdown
$(document).ready(function () {
    $(".portfolio .tit").click(function () {
        $(this).siblings(".description").slideToggle('medium');
        $(this).toggleClass('active');
    });
});


// adaptive
/* $(document).on("ready", function () {
    if (window.matchMedia("(max-width: 1370px)").matches) {

        // about-slider
        $(".about-slider").addClass('swiper-container');
        $(".about-more").addClass('swiper-wrapper');
        $(".about-slider .swiper-wrapper").removeClass('about-more');
        $(".about-more__item").addClass('swiper-slide');


        var about__slider = new Swiper(".about-slider", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            scrollbar: {
                el: '.about-slider .swiper-scrollbar',
                hide: false,
            },
            breakpoints: {
                960: {
                    spaceBetween: 15
                },
            }
        });

        // services-slider
        $(".services-slider").addClass('swiper-container');
        $(".services__row").addClass('swiper-wrapper');
        $(".services-slider .swiper-wrapper").removeClass('services__row');
        $(".service").addClass('swiper-slide');


        var services__slider = new Swiper(".services-slider", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            scrollbar: {
                el: '.services-slider .swiper-scrollbar',
                hide: false,
            },
            breakpoints: {
                960: {
                    spaceBetween: 15
                },
            }
        });

        // blog-slider
        $(".blog-slider").addClass('swiper-container');
        $(".blog-slider .blog-list").addClass('swiper-wrapper');
        $(".blog-slider .swiper-wrapper").removeClass('blog-list');
        $(".blog-slider .blog-list__item").addClass('swiper-slide');


        var blog_slider = new Swiper(".blog-slider", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            slideToClickedSlide:true,
            loop:true,
            scrollbar: {
                el: '.blog-slider .swiper-scrollbar',
                hide: false,
            },
            breakpoints: {
                960: {
                    spaceBetween: 15
                },
            }
        });
        
    } else { }
}); */


// Обновить страницу при смене ширины экрана

var windowWidth = window.innerWidth;
window.onresize = function () {
    var newWindowWidth = window.innerWidth;
    if (newWindowWidth != windowWidth) {
        windowWidth = newWindowWidth;
        location.reload();
    }
};


$(document).on("ready", function () {
    if (window.matchMedia("(max-width: 1370px)").matches) {
        
        // .about-slider
         var aboutFlickity = new Flickity('.about-more', { freeScroll: true, contain: true, prevNextButtons: false, pageDots: false, cellAlign: 'left' }); 

        var aboutProgressBar = document.querySelector('.about-slider .progress-bar');
        aboutFlickity.on('scroll', function (progress) {
            progress = Math.max(0, Math.min(1, progress));
            aboutProgressBar.style.width = progress * 100 + '%';
        }); 


        // blog-slider
        var blogFlickity = new Flickity('.blog-list', { freeScroll: true, contain: true, prevNextButtons: false, pageDots: false, cellAlign: 'left' }); 

        var blogProgressBar = document.querySelector('.blog-slider .progress-bar');
        blogFlickity.on('scroll', function (progress) {
            progress = Math.max(0, Math.min(1, progress));
            blogProgressBar.style.width = progress * 100 + '%';
        }); 


        // services-slider
        $(".services-slider").addClass('swiper-container');
        $(".services__row").addClass('swiper-wrapper');
        $(".services-slider .swiper-wrapper").removeClass('services__row');
        $(".service").addClass('swiper-slide');


        var services__slider = new Swiper(".services-slider", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: {
                enabled: true,
                sticky: true,
            },
            scrollbar: {
                el: '.services-slider .swiper-scrollbar',
                hide: false,
            },
            breakpoints: {
                960: {
                    spaceBetween: 15
                },
            }
        });
    }
});