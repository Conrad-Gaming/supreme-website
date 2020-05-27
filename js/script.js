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

    //coming soon js
    // Set the date we're counting down to
    var countDownDate = new Date("Jun 25, 2020 15:30:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    //send notification
    $('#button').click(function(){
        $('.myAlert').show('fade');

        setTimeout(function(){
            $('.myAlert').hide('fade');
        },10000)
    });
})