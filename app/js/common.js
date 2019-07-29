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
  })

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
  })


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


  // Megaslider_

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
    $('.header-mobile-menu').animate({
      width: 'toggle'
    }, 200)
    $('.header-mobile-telephone').fadeToggle(500)
    $('.consultation-button').fadeToggle(500)
    $('.header-mobile-logo').fadeToggle(500)
    $('.to-book-button').fadeToggle(500)
    $('.dn-sports-club').fadeToggle(500)
  })

  
  // Hamburger_
});
