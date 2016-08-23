/*
 *
 * minimal jquery animations for landing page
 *
 */

// scroll view jQuery function
$.fn.scrollView = function() {
    return this.each(function(){
        $('html, body').animate({
            scrollTop: $(this).offset().top
    }, 1000);
    });
}

$(function(){

    var headHeight = $('header').height();
    var panelHeight = $('.panel').height();

    $('#services a').on('click', function(e){
        var currPanel = e.target.innerHTML;
        $('#' + currPanel).scrollView();
    });

    $('#nav-arrow').on('click', function(e){

        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);

    });

    if ($(window).width() > 900)
    {

    var titleSize = $('.site-title span')
                .css('font-size','6rem')
                .css('font-size').slice(0,-2);

    $(document).on('scroll', function(d){

        var currTop = $(this).scrollTop();
        var newTitleSize = (currTop > headHeight) ?
            titleSize / 2 : titleSize;
        var currTitleSize = $('.site-header span').css('fontSize').slice(0,-2);

        if ( currTitleSize != newTitleSize ){
            $('.site-title span').stop().animate({

                'font-size': newTitleSize
            }, { duration: 300 });
        }

        if (currTop > panelHeight) {
            $('#nav-arrow').fadeIn();
        } else {
            $('#nav-arrow').fadeOut();
        }

    });
    }
});