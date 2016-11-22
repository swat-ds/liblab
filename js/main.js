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


    $(document).on('scroll', function(d){

        var currTop = $(this).scrollTop();

        if ( currTop > 70 ){
            $('.site-title span').addClass('little');
        } else {
            $('.site-title span').removeClass('little')
        }

        if (currTop > panelHeight) {
            $('#nav-arrow').fadeIn();
        } else {
            $('#nav-arrow').fadeOut();
        }

    });
});