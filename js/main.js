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

function changeArrow(curr,max,el){

    var newArrow = (curr == max - 1) ? '&uarr;' : '&darr;';
    var currArrow = el.html();

    if (
        (currArrow == '↓' && newArrow == '&uarr;')
        ||(currArrow == '↑' && newArrow == '&darr;')
    ){

        console.log(curr,currArrow,newArrow)
        el.fadeOut(200, function(){
            $(this).html(newArrow).fadeIn(200);
        });
    }
}

$(function(){

    var panelArray = [];
    var index = 0;
    var headHeight = $('header').height();
    var panelHeight = $('.panel').height();
    var titleSize = $('.site-title h1').css('font-size').slice(0,-2)

    $('.panel').each(function(i,v){
        panelArray.push($(v).attr('id'));
    });

    $('#services a').on('click', function(e){
        var currPanel = e.target.innerHTML;
        // index = $.inArray(currPanel,panelArray);
        $('#' + currPanel).scrollView();
        // changeArrow(index,panelArray.length,$('#nav-arrow'));
    });

    $('#nav-arrow').on('click', function(e){

        scrollNext = (index < panelArray.length - 1) ? index + 1 : 0;
        var nextPanel = panelArray[scrollNext];

        e.preventDefault();
        $('#' + nextPanel).scrollView();

    });

    $(document).on('scroll', function(d){
        console.log(d);
        var currTop = $(this).scrollTop();
        var newTitleSize = (currTop > headHeight) ?
            titleSize/4 : titleSize;
        var currTitleSize = $('.site-header h1').css('fontSize').slice(0,-2);

        if ( currTitleSize != newTitleSize ){
            $('.site-title h1').stop().animate({

                'font-size': newTitleSize
            }, { duration: 300 });
        }
        index = Math.floor(currTop / panelHeight);
        changeArrow(index,panelArray.length,$('#nav-arrow'));
    });
});