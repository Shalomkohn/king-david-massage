$(document).ready(function () {
    $(".reviews-slides").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 841,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      nextArrow: '<a href="#" class="icon solid fa-angle-right"></a>',
      prevArrow: '<a href="#" class="icon solid fa-angle-left"></a>',
      appendArrows: ".arrows",
    });

    $(".services-slides").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 6000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: false,
    });
  });