$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'До скинали',
        after_label: 'После скинали',
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu_active')
    });
    $('.select').on('click', function () {
        $('.select__dropdown').toggleClass('select__dropdown_open')
    });
    $('.select__option').on('click', function () {
        let value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
    });
    var reviews = $('.reviews'),
        reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2f741246b2e4793db80ed13daf7975d7d82b55d487e1287bef0427a4ad10db34&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>\n');
            $(window).unbind('scroll');
        }
    })
});