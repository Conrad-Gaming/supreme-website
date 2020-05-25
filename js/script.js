//pre-loader
$(function () {
    $("body").addClass("scroll-hidden");
    $("container-fluid").addClass("scroll-hidden");

    $(window).on("load", function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
        $("body").removeClass("scroll-hidden");
        $(".container-fluid").removeClass("scroll-hidden");
    });
});

//when document is ready
$(document).ready(() => {

    //set background and change text color
    $(function () {
        var today = new Date()
        var date = new Date().toDateString()
        var h = today.getHours()
        if (6 <= h && h < 17) {
            //Morning
            $(".container-fluid").css("background-image", "url(" + "images/backgrounds/discord-background-day.jpg" + ")")
        } else if (h >= 17) {
            //night
            $(".container-fluid").css("background-image", "url(" + "images/backgrounds/discord-background-night.png" + ")")
            $(".container-fluid").css("color", "white")
            console.log("Night")
        }
    })
})


