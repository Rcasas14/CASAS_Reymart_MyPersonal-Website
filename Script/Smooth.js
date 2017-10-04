$(document).ready(function () {
    $("#l-about").click(function () {
        $path = $("#about").offset().top;
        $('body').animate({
            scrollTop: $path
        }, 1000);
    });
    $("#l-interest").click(function () {
        $path = $("#interest").offset().top;
        $('body').animate({
            scrollTop: $path
        }, 1000);
    });
    $("#l-skills").click(function () {
        $path = $("#skills").offset().top;
        $('body').animate({
            scrollTop: $path
        }, 1000);
    });
    $("#l-recent").click(function () {
        $path = $("#myrecent").offset().top;
        $('body').animate({
            scrollTop: $path
        }, 1000);
    });
});