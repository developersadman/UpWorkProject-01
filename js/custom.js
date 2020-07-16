$(document).ready(function () {
    $(window).scroll(function () {
        var ws = $(window).scrollTop();
        $('.banner').css('background-position-y', (ws * 0.5));
        $('.works').css('background-position-y', (ws - $('.works').offset().top) * 0.5)
    });
});