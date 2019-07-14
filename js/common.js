$(function() {

  // Carousel-1

  $('.carousel-1').owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    responsive: {
      0:{
        items: 1
      }
    }
  })

  // Carousel-1_

  // Banner

  const items = document.querySelectorAll('.banner-item');
  const costumerItems = document.querySelectorAll('.bannercustomer-item');


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
  $('.js-tour-select').select2({
    minimumResultsForSearch: Infinity,
    width: 'style'
  })

  // Select_

  // Ourstock carousel

  $('.ourstock-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots: false,
    items: 3
  })

  // Ourstock carousel_

  // Megaslider

  $('.megaslider-js').owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    margin: 40,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 700,
    dots: false

  });

  // Megaslider_

  // Summer-slider



  // Summer-slider_


  // Maingallery

  $('.js-maingallery').owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    margin: 100,
    smartSpeed: 400
  })

  // Maingallery_


  // Reviews-carousel

  $('.reviews-carousel').owlCarousel({
    items: 2,
    loop: true,
    dots: false,
    nav: true,
    margin: 5
  })

  // Reviews-carousel_
});
