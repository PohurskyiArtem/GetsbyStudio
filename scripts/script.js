jQuery(() => {
    $('.burger-btn').on('click', () => {
             $('.burger-btn').toggleClass('active');
             $('.top-nav-menu__item').toggleClass('active-menu');
        });
    $(".owl-carousel").owlCarousel();
    $("a").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    })