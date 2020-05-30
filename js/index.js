//trigger functions for site elements
var tracker = 1;
$(function () {
    
    (function () {
        $('.footer').css('position', $(document).height() > $(window).height() ? "inherit" : "fixed");
    })();
    
    $('#fail-text')[0].attributes[1].value = ""
    $('#fail-text').hide();

    $('#mobile-message')[0].attributes[1].value = ""
    $('#mobile-message').hide();

    if ($(window).width() < 768) {
        $('.scrolling-top').each(function (index, element) {
            $(this).hide();
        });
        $('#mobile-message').show();
    }

    $('.btn-puzzle').click(function () {
        ButtonSwap(this.id, tracker);
    });

    $('#submit').click(function () {
        var flag = CheckButtons(tracker)
        if (flag) {
            tracker++
            updateHint(tracker)
            reset(tracker);
        } else {
            $('#fail-text').show()
        }
    });

    $('#reset').click(function () {
        reset(tracker);
    });

    goToStage(tracker);





});