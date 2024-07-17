$(document).ready(function () {
  $(".slick-carousel").slick({
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // dots: true,
    // arrows: true,

    // for vertical scrolling
    // centerMode: true,
    // arrows: true,
    centerPadding: "60px",
    dots: true,
    slidesToShow: 1,
    // horizontal: true,
    // verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
  });

  $(".slick-carousel").on("swipe", function (event, slick, direction) {
    console.log(direction);
    // left
  });
});
