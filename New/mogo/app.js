$(function() {
    var introH = $("#intro").innerHeight();
    header = $("#header");
    scrollOfset = $(window).scrollTop();
    /*Scroll*/
    checkScroll(scrollOfset)

    $(window).on("scroll", function() {
        scrollOfset = $(this).scrollTop();
        checkScroll(scrollOfset);
    });

    function checkScroll(scrollOfset) {

        if (scrollOfset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")

        }
    }
    /*Scroll to...*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var elementId = $(this).data("scroll"),
            blockOffset = $(elementId).offset().top;

        $("html,body").animate({
            scrollTop: blockOffset
        }, 500)
    })



    /*collapse*/
    $(window).on("click", function(event) {
        event.preventDefault();
        var accordion = $("#accordion");

        function checkClick() {
            if (accordion) {
                console.log(1)
            } else {
                accordion.removeClass(active)
            }
        }
    })
})