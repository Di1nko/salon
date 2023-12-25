$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 900,
      autoplaySpeed: 700,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });
});