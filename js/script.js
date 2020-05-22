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

$(document).ready(() => {

    //set background and change text color
    function setBackground() {
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
    }

    setBackground()
})

//form test
var $form = $('form#test-form'),
    url = 'https: //script.google.com/macros/s/AKfycbxtlV9G_sLx2a0A7EXltQYW7lzSFMLXmKyMdjyKyRu5jtOTaHZ2/exec'

$('#submit-form').on('click', function (e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something

    );
})
