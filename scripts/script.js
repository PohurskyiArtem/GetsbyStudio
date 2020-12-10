jQuery(() => {
    $('.burger-btn').on('click', () => {
             $('.burger-btn').toggleClass('active');
             $('.top-nav-menu__item').toggleClass('active-menu');
        })
    })