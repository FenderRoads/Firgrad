$(function() {
  // Wowjs

  new WOW().init()


  //Wowjs_

  // Button up


  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
  $('.top').on('click', function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  })	

  // Button up_

  // Eventblock fade
    // let $target = $('.eventlist-block');
    // let hold = 500;

    // $.each($target,function(i,t){
    //     var $this = $(t);
    //     setTimeout(function(){ $this.fadeIn('normal'); },i*hold);
    // });


  // Eventblock fade_

  // Carousel-1

  $('.carousel-1').children().each( function( index ) {
    $(this).attr( 'data-position', index );
  });

  $('.carousel-1').owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    smartSpeed: 1000,
    responsive: {
      0:{
        items: 1
      }
    }

    
    // onChange: function counter(event) {
    //   let items     = event.item.count;     
    //   let item     = event.item.index;
  
    //   if (window.matchMedia('(max-width: 780px)').matches) {
    //     $(".owl-carousel").trigger('remove.owl.carousel', [0]).trigger('refresh.owl.carousel');
    //     console.log(1);
    //   } else {
    //     if (item < 6) {
    //       $(".owl-carousel").trigger('add.owl.carousel', ['<div class="item bgvideo-item"><div class="background-video"><div class="overlay"></div><video loop muted autoplay class="fullscreen-bg__video"><source src="/app/video/image landing1.mp4" type="video/mp4"></video></div></div>']).trigger('refresh.owl.carousel');
    //     console.log(0); 
    //     } 
    //   }
    // }             
  });

  if (window.matchMedia("(max-width: 760px)").matches) {
    $(".carousel-1").trigger('remove.owl.carousel', $('.item').data( 'bgvideo' )).trigger('refresh.owl.carousel'); 
  } else {
    
  }

  
  // $(document).on('click', '.owl-item>div', function() {
  //   $('.carousel-1').trigger('to.owl.carousel', $(this).data( 'position' ) );
  // });


  // let x = window.matchMedia('(max-width: 780px)')
  // counter()
  // x.addListener(counter)
  
  // Carousel-1_

  // Banner

  const items = document.querySelectorAll('.wideanim-item');
  const costumerItems = document.querySelectorAll('.wideanimcustomer-item');


  [...items].map(randomFactory(1.5, 5)(scale))
            .map(randomFactory(0.6, 1.3)(transition))
            .map(randomFactory(200, 2000)(toNormal));
            
  [...costumerItems].map(randomFactory(1.5, 5)(scale))
            .map(randomFactory(0.6, 1.3)(transition))
            .map(randomFactory(200, 2000)(toNormal));


  
  function randomFactory(min, max) {
    return callback => item => {
      setTimeout(function(){
        callback(
          item, 
          random(min, max)
        );           
      }, 0);
      
      return item;
    }
  }
  
  function scale(item, value) {
    item.style.transform = `scale(${value})`;
  }
  
  function transition(item, value) {
    item.style.transition = `all ${value}s`;
  }
  
  function toNormal(item, timeout) { 
    item.style.zIndex = timeout;
    setTimeout(() => item.classList.add('normal-satate'), timeout);
  }
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  // Banner_

  // Select

  $('.tour-select-title').on('click', function() {
    $('.tour-select-dropdown').toggleClass('tour-select-dropdown-active')
  });

  // $($('*:not(.tour-select-title)', document).on('click', function(){
  //   $('.tour-select-dropdown').removeClass('tour-select-dropdown-active')
  // });

//   $(document).mouseup(function (e) {
//     var container = $(".tour-select-dropdown");
//     if (container.has(e.target).length === 0){
//       container.removeClass('tour-select-dropdown-active')
//     }
// });

  $(document).mouseup(function (e) {
    var a = document.querySelector('tour-select-dropdown');
    if ($("tour-select-dropdown").has(e.target).length === 0){
        a.className = (a.className == 'tour-select-dropdown-active' ? '' : '');
    }
  });

// $(document).ready(function(){
//   $(".tour-select-dropdown").click(function(){
//       if ($(this).hasClass('tour-select-dropdown-active')) {
//           $(this).removeClass('tour-select-dropdown-active');
//       } else {
//           $(this).addClass('tour-select-dropdown-active');
//       }
//       $('.tour-select-dropdown').not(this).removeClass('tour-select-dropdown-active'); //тут закроем все кроме нажатого
//   });
// });

// $(document).click(function(e){ 
//   var elem = $(".tour-select-dropdown"); 
//   if (e.target!=elem[0]&&!elem.has(e.target).length) { 
//     elem.removeClass('tour-select-dropdown-active')
//   } 
// });


  // $('.tour-select-title').focusout(function() {
  //   $('.tour-select-dropdown').removeClass('tour-select-dropdown-active')
  // })

  // $(document).on('click', '*:not(.tour-select-title)', function() {
  //   $('.tour-select-dropdown').removeClass('tour-select-dropdown-active')
  // })


  $('.js-tour-select').select2({
    minimumResultsForSearch: Infinity,
    width: 'style'
  })

  $('.js-adress-select').select2({
    minimumResultsForSearch: Infinity,
    width: 'style'
  })

  $('.select2-container').append('<img src="img/@2x/logo-mobile-white.svg" alt="" class="logo-white">')
  // Select_

  // Ourstock carousel

  $('.ourstock-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    nav: true, // Nav включен в стилях
    responsive: {
      780:{
        dots: false,
        items: 3
      },
      0:{
        dots: true,
        items: 1
      }
    }
  })

  // Ourstock carousel_

  // Megaslider

  var $owl = $('.megaslider-js');

  $owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
  });

  $owl.owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    margin: 40,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 500,
    responsive: {
      0: {
        dots: true
      },
      780: {
        dots: false
      }
    }

  });

  $(document).on('click', '.owl-item>div', function() {
    $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
  });

  // Megaslider_

  // Tabs

  $('.toppannel-buttons').on('click', '.toppannel-button:not(.toppannel-button-active)', function() {
    $(this)
      .addClass('toppannel-button-active').siblings().removeClass('toppannel-button-active')
      .closest('div.megaslider').find('div.megaslider-js').removeClass('megaslider-js-active').eq($(this).index()).addClass('megaslider-js-active');
  });

  $('.toppannel-buttons').on('click', '.toppannel-button:not(.toppannel-button-active)', function() {
    $(this)
      .addClass('toppannel-button-active').siblings().removeClass('toppannel-button-active')
      .closest('div.megaslider-toppannel').find('div.toppannel-address').removeClass('toppannel-address-active').eq($(this).index()).addClass('toppannel-address-active');
  });

  $('.timetable-tabs').on('click', '.timetable-button:not(.timetable-button-active)', function() {
    $(this)
      .addClass('timetable-button-active').siblings().removeClass('timetable-button-active')
      .closest('.timetable-widgets').find('.timetable-widget').removeClass('timetable-widget-active').eq($(this).index()).addClass('timetable-widget-active');
  });

  // Tabs_

  // Maingallery

  $('.js-maingallery').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    nav: true,
    margin: 100,
    smartSpeed: 400
  });

  $(".js-maingallery").trigger("to.owl.carousel", [10, 7])

  // Maingallery_


  // Reviews-carousel

  $('.reviews-carousel').owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      780: {
        items: 2,
        dots: false
      },
      0: {
        items: 1,
        dots: true
      }
    }
  })

  // Reviews-carousel_


  // Accordion

  $('.faq-accordion').accordion({
    heightStyle: "content"
  })


  $('.faq-toggle').on('click', '.faq-button:not(.faq-toggle-active)', function() {
    $(this)
      .addClass('faq-toggle-active').siblings().removeClass('faq-toggle-active')
      .closest('div.faq').find('div.faq-accordion').removeClass('faq-accordion-active').eq($(this).index()).addClass('faq-accordion-active');
  });
  // Accordion_


  // Hamburger

  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('is-active')
    $('.header-mobile-menu').toggleClass('header-mobile-menu-active')
    $('.header-mobile-telephone').fadeToggle(500)
    $('.consultation-button').fadeToggle(500)
    $('.header-mobile-logo').fadeToggle(500)
    $('.to-book-button').fadeToggle(500)
    $('.dn-sports-club').fadeToggle(500)
  })

  
  // Hamburger_

  // Parallax-block

  function viewport() {
    var e = window,
        t = "inner";

    return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
        width: e[t + "Width"],
        height: e[t + "Height"]
    }
}
o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    };
function scrollParallax(e) {

    var t = .10,
        o = "up",
        a = 90;

    $(e).attr("data-multiplier") && (t = $(e).attr("data-multiplier")),
    $(e).attr("data-direction") && (o = $(e).attr("data-direction")),
    $(e).attr("data-start") && (a = parseFloat($(e).attr("data-start"))),
    1 == $(e).attr("data-top") && (a = parseFloat($(e).offset().top * t - 30));

    var n = function() {
        var r = 0;
        var i = window.pageYOffset,
            r = $(e).attr("data-pos"),
            l = 0 - i * t;
        "down" == o && (l = 0 + i * t);
        var s = r - .08 * (r - l),
            c = s + a;
        // do smooth

        $("html").hasClass("popup-opened") || $(e).css({
          transform: "translate3d(0px, " + c + "px, 0px)"
        }),
        viewport().width < 750 && $(e).css({transform: "translate3d(0px, 0px, 0px)"}), 
        $(e).attr("data-pos", s), window.requestAnimationFrame(n);
        
    };

    window.requestAnimationFrame && n();
}
$(".fitness-flex .js-parallax-block").each(function() {scrollParallax($(this))});

  // Parallax-block_

  // Sign up to trainer

  $('.trainer-entry').on('click', function() {
    $('.trainer-contacts').addClass('trainer-contacts-active')
  });

  // Sign up to trainer_
});
