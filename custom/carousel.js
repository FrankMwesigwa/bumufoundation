$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });

    $('.box-slider-content').slick({
        centerMode: true,
       infinite: true,
       slidesToShow: 3,
       dots: false,
       appendDots:jQuery(".box-dots"),
       autoplay: false,
       responsive: [
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1
         }
       }
      ]
     });
  });