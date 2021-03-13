	$(document).ready(function(){
		if($(window).width() <= 1024){
			$('.nav-item-submenu').addClass('collapse');
		}else{
			$('.nav-item-submenu').removeClass('collapse');
		}

		// Nav submenu Responsive
		$(window).resize(function(){
			if($(window).width() <= 1024){
				$('.nav-item-submenu').addClass('collapse');
			}else{
				$('.nav-item-submenu').removeClass('collapse');
			}
		});

		// Nav submenu collapse
    $(window).resize(function(){
      if($(window).width() <= 1024){
        $('.item-has-submenu .nav-item-main-link').on('click', function(e){
            e.preventDefault();
            $(this).closest('.nav-item-main').find('.collapse').collapse('toggle');
          });
        $('.nav-toggle-btn').click(function(){
          $(this).closest('.nav-main').toggleClass('menu-visible');
        });
      }
    });
    if($(window).width() <= 1024){
      $('.item-has-submenu .nav-item-main-link').on('click', function(e){
          e.preventDefault();
          $(this).closest('.nav-item-main').find('.collapse').collapse('toggle');
        });
      $('.nav-toggle-btn').click(function(){
        $(this).closest('.nav-main').toggleClass('menu-visible');
      });
    }
		// fixed header
		$(window).scroll(function(){
			var scrollTop =$(window).scrollTop();
			if(scrollTop >=100){
				$('body').addClass('fixed-header');
			}else{
				$('body').removeClass('fixed-header');
			}
		});
			// home olw-carousel
		$('.home-slider-items-wrapper').owlCarousel({
            loop: true,
            center:true,
            margin: 0,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: false
              },
              600: {
                items: 1,
                nav: false
              },
              1000: {
                items: 1,
                nav: false,
                loop: true,
                margin: 0
              }
            },
          autoplay:true,
		  smartSpeed:1000,
		  autoplayHoverPause:true
         }); 
			// testimonial owl carousel
         $('.testimonial-slider-items-wrapper').owlCarousel({
            loop: true,
            center:true,
            margin: 0,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: false
              },
              600: {
                items: 1,
                nav: false
              },
              1000: {
                items: 1,
                nav: false,
                loop: true,
                margin: 0
              }
            },
          autoplay:true,
		  smartSpeed:1000,
		  autoplayHoverPause:true
         });    
	});

  // Counter 
  $(document).ready(function(){
    $(window).scroll(testScroll);
    var viewed = false;
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $('body').offset().top;
        var elemBottom = elemTop + $('body').height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    function testScroll() {
      if (isScrolledIntoView($(".counter-item-outer")) && !viewed) {
          viewed = true;
          $('.counter-number').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 3000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
        });
      }
    }
  });

  // video section js 

$('.popup-youtube').magnificPopup({
      type: 'iframe',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
        patterns: {
          youtube: {
            index: 'www.youtube.com/',
            id: 'v=',
            src: 'https://www.youtube.com/watch?v=MKCZXpmPunU'
          }
        },
        srcAction: 'iframe_src'
      }
    });

// //jQuery Counter  
//     $('.counter').counterUp({
//       delay: 10,
//       time:1000
//     });

