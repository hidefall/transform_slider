;(function(jQuery){
  'use strict';

  $(window).on('load', function() {
    $('.slider').slick({
      slidesToShow: 1,
      pauseOnFocus: true,
      autoplay: false,
      autoPlaySpeed: 1001,
      pauseOnHover: true,
      infinite: true,
      //centerMode: true,
      adaptiveHeight: true,
      // draggable: false,

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

  // $(document).ready(function(){
  // var pos = $('.site_title_border').position()
  // var dim = $('.site_title_border').height()
  // $('.slider_title').offset({
  //   top: pos.top + dim/2 - $('.slider_title').height()/2, 
  //   left: pos.left
  // });
  // });
  // var pos = $('.trap').position()
  // var dim = $('.trap').height()
  // $('.text').offset({top: pos.top + dim/2 - $('.text').height()/2, left: pos.left});

 })(jQuery);