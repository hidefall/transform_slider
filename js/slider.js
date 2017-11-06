;(function(jQuery){
  'use strict';

  $(window).on('load', function() {
    $('.slider').slick({
      slidesToShow: 1,
      pauseOnFocus: true,
      autoplay: true,
      autoPlaySpeed: 1001,
      pauseOnHover: true,
      infinite: true,
      arrows: true,
      //centerMode: true,
      adaptiveHeight: true,
      draggable: false,

    });
  });

function idea(){
        var wh = $(window).height();
        var bw = parseInt($('.slide_title_border').css('border-left-width'));

        $('.slide_title_border').css({'top':wh/
          2 - bw, 'left':-(wh/2 - bw)})
        $('.slide_title_border').width(wh);
        $('.slide_title_border').width($('.slide_title_border').width() - bw*2)
        console.log($('.slide_title_border').width() + "---" + $('.slide_title_border').height()) ;
      }
    $(document).ready(function(){
      idea()
    }); 
    $(window).resize(function(){
      idea()
    });

 })(jQuery);