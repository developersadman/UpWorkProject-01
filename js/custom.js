$(document).ready(function () {
    $(window).scroll(function () {
        var ws = $(window).scrollTop();
        $('.banner').css('background-position-y', (ws * 0.5));
    });
});