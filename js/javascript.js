
/*Letters Effect*/
;(function($) {

$.fn.letterFlip = function() {
  // Chainability
  return this.each( function() { 
  
  var obj = $( this );
  
  var drop = {
    arr : obj.text().split( '' ),
    
    range : {
      min : 1,
      max : 9
    },
    
    styles : function() {
      var dropDelays = '\n', addCSS;
      
       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
       }
      
        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },
    
    main : function() {
      var dp = 0;
      obj.text( '' );
      
      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( drop.range.min, drop.range.max );
        
        if ( value === ' ' )
          value = '&nbsp '; //Add spaces
        
          obj.append( '<span class="letterFlip ld' + dp + '">' + value + '</span>' );
        
      });
          
    }
  };
   
  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };
  
  
  // Create styles
  drop.styles();


    // Initialise
    drop.main();
  });

};

}(jQuery));

// USAGE
$( 'h1' ).letterFlip();
$('p').letterFlip();

/*Navigation Button Effect*/
$(function(){
  $('.side_btn').hover(function() {
    $(this).attr('src', 'imgs/intro/menu-response_u4.png');
  }, function() {
    $(this).attr('src', 'imgs/intro/menu_u2.png');
  })
})

$(function(){
  $('.logo_u38').hover(function() {
    $(this).attr('src', 'imgs/intro/logo-response_u39.png');
  }, function() {
    $(this).attr('src', 'imgs/intro/logo_u38.png');
  })
})

/*Slide Effect*/
$(function() {
  $('.btn1').on('click', function() {
    $('.figure').animate({
      left: '0%'
    }, 400);
    $('.img1 img').animate({
            width: '130%',
            left: '-10%'
          }, 150);

    $('.img1 img').animate({
            width: '100%',
            left: '0'
          }, 200);
    $('.info .dots .dot2').css("display", "block");
    $('.info .dots .dot3').css("display", "none");
    $('.info .dots .dot4').css("display", "none");
    $('.info .info1').attr("src", "imgs/010101/info-1.png");
    $('.info .info2').attr("src", "imgs/010101/info-2.png");
    $('.info').css("background-color", "rgba(49, 10, 127, 0.85");
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");
    $('.btn').css("display", "block");
  });
});

$(function() {
  $('.btn2').on('click', function() {
    $('.figure').animate({
      left: '-100%'
    }, 400);

    $('.img2 img').animate({
            top: '-10%'
          }, 200);

    $('.img2 img').animate({
            top: '37%'
          }, 150);
    $('.info .dots .dot2').css("display", "block");
    $('.info .dots .dot3').css("display", "block");
    $('.info .dots .dot4').css("display", "block");
    $('.info .info1').attr("src", "imgs/2_1111/info-1.png");
    $('.info .info2').attr("src", "imgs/2_1111/info-2.png");
    $('.info .info3').attr("src", "imgs/2_1111/info-3.png");
    $('.info .info4').attr("src", "imgs/2_1111/info-4.png");
    $('.info').css("background-color", "rgba(249, 247, 114, 0.8)");
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");

    $('.btn').css("display", "block");
  });
});

$(function() {
  $('.btn3').on('click', function() {
    $('.figure').animate({
      left: '-200%'
    }, 400);

    $('.img3 img').animate({
            left: '10%'
          }, 150);

    $('.img3 img').animate({
            left: '70%'
          }, 200);

    $('.img3 img').animate({
            left: '36%'
          }, 150);
    $('.info .dots .dot2').css("display", "none");
    $('.info .dots .dot3').css("display", "none");
    $('.info .dots .dot4').css("display", "none");
    $('.info').css("background-color", "rgba(255, 76, 112, 0.8)");
    $('.info .info1').attr("src", "imgs/3_233/info-1.png");
    $('.btn').css("display", "block");
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");
  });
});

$(function() {
  $('.btn4').on('click', function() {
    $('.figure').animate({
      left: '-300%'
    }, 400);
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");
    $('.btn').css("display", "none");
  });
});

$(function() {
  $('.btn5').on('click', function() {
    $('.figure').animate({
      left: '-400%'
    }, 400);

   $('.img4 img').animate({
            width: '50%',
            left: '30%'
          }, 150);

    $('.img4 img').animate({
            width: '100%',
            left: '2px'
          }, 250);

    $('.info .dots .dot2').css("display", "block");
    $('.info .dots .dot3').css("display", "none");
    $('.info .dots .dot4').css("display", "none");
    $('.info .info1').attr("src", "imgs/4_55555/info-1.png");
    $('.info .info2').attr("src", "imgs/4_55555/info-2.png");
    $('.info').css("background-color", "rgba(86, 255, 182, 0.8)");
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");

    $('.btn').css("display", "block");
  });
});

$(function() {
  $('.btn6').on('click', function() {
    $('.figure').animate({
      left: '-500%'
    }, 400);

    $('.img5 img').animate({
            width: '50%',
            left: '30%'
          }, 150);

    $('.img5 img').animate({
            width: '100%',
            left: '2px'
          }, 250);
    $('.info .dots .dot2').css("display", "block");
    $('.info .dots .dot3').css("display", "none");
    $('.info .dots .dot4').css("display", "none");
    $('.info .info1').attr("src", "imgs/5_666/info-1.png");
    $('.info .info2').attr("src", "imgs/5_666/info-2.png");
    $('.info').css("background-color", "rgba(221, 123, 11, 0.85)");
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");

    $('.btn').css("display", "block");
  });
});

$(function() {
  $('.btn7').on('click', function() {
    $('.figure').animate({
      left: '-600%'
    }, 400);

    $('.img6 img').animate({
            width: '35%',
            left: '32%',
            top: '-18%'
          }, 100);

    $('.img6 img').animate({
            width: '15%',
            left: '42%',
            top: '19%'
          }, 200);

    $('.img6 img').animate({
            width: '25%',
            left: '37%',
            top: '0%'
          }, 100);

    $('.info .dots .dot2').css("display", "block");
    $('.info .dots .dot3').css("display", "none");
    $('.info .dots .dot4').css("display", "none");
    $('.info .info1').attr("src", "imgs/6_88888/info-1.png");
    $('.info .info2').attr("src", "imgs/6_88888/info-2.png");
    $('.info').css("background-color", "rgba(140, 14, 175, 0.9)");
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");

    $('.btn').css("display", "block");
  });
});

/*Click Side*/
$(function(){
  $('.img6').on('click', function(){
        $('.img6 img').animate({
            width: '35%',
            left: '32%',
            top: '-18%'
          }, 100);

        $('.img6 img').animate({
            width: '15%',
            left: '42%',
            top: '19%'
          }, 200);

        $('.img6 img').animate({
            width: '25%',
            left: '37%',
            top: '0%'
          }, 100);
  });
});

$(function(){
  $('.img1').on('click', function(){
        $('.img1 img').animate({
            width: '130%',
            left: '-10%'
          }, 150);

        $('.img1 img').animate({
            width: '100%',
            left: '0'
          }, 200);
  });
});

$(function(){
  $('.img2').on('click', function(){
        $('.img2 img').animate({
            top: '-10%'
          }, 200);

        $('.img2 img').animate({
            top: '37%'
          }, 150);
  });
});

$(function(){
  $('.img3').on('click', function(){
        $('.img3 img').animate({
            left: '10%'
          }, 150);

        $('.img3 img').animate({
            left: '70%'
          }, 200);

        $('.img3 img').animate({
            left: '36%'
          }, 150);
  });
});

$(function(){
  $('.img4').on('click', function(){
        $('.img4 img').animate({
            width: '50%',
            left: '30%'
          }, 150);

        $('.img4 img').animate({
            width: '100%',
            left: '2px'
          }, 250);
  });
});

$(function(){
  $('.img5').on('click', function(){
        $('.img5 img').animate({
            width: '50%',
            left: '30%'
          }, 150);

        $('.img5 img').animate({
            width: '100%',
            left: '2px'
          }, 250);
  });
});

/*info window*/
$(function(){
  $('.btn').on('click', function(){
      $('.info').animate({
        left: "0"
      }, 150);
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");
  });
});

$(function(){
  $('.figure').on('click', function(evt){
    $('.info').animate({
        left: "-35%"
      }, 150);
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");
  })
})

$(function(){
  $('.navigation-bar').on('click', function(){
    $('.info').animate({
        left: "-35%"
      }, 150);
  })
})

$(function(){
  $('.dots .dot1').on('click', function(){
    $('.info .info1').css("display", "block");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");
  })
})

$(function(){
  $('.dots .dot2').on('click', function(){
    $('.info .info1').css("display", "none");
    $('.info .info2').css("display", "block");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "none");
  })
})

$(function(){
  $('.dots .dot3').on('click', function(){
    $('.info .info1').css("display", "none");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "block");
    $('.info .info4').css("display", "none");
  })
})

$(function(){
  $('.dots .dot4').on('click', function(){
    $('.info .info1').css("display", "none");
    $('.info .info2').css("display", "none");
    $('.info .info3').css("display", "none");
    $('.info .info4').css("display", "block");
  })
})


