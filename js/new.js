$(document).ready(function() {
    "use strict";
    $('.carousel').carousel({
        interval: 4000
    });
});

// Nice Scroll

$("html").niceScroll();

$('.carousel').carousel({
    interval: 6000

});

//loading screen
$(window).load(function() {
    "use strict";
    $("body").css("overflow", "auto");
    $(".loading .spinner ").fadeOut(2000,
        function() {
            $(this).parent().fadeOut(1000,
                function() {
                    $(this).remove();
                });

        });
});



//scroll to top


var scrollButton = $("#scroll-top");

$(window).scroll(function() {
    "use strict";
    if ($(this).scrollTop() >= 800) {
        scrollButton.show();
    } else { scrollButton.hide(); }


});



scrollButton.click(function() {
    "use strict";

    $("html,body").animate({ scrollTop: 0 }, 1000);
});



//new nav 


/*
 **********************************************************
 * OPAQUE NAVBAR SCRIPT
 **********************************************************
 */

// Toggle tranparent navbar when the user scrolls the page

$(window).scroll(function() {
    "use strict";

    if ($(this).scrollTop() > 50) {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});