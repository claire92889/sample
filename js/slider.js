$(document).ready(function () {
  $('.autoplay').slick({
    slidesToShow: ($(window).width() <= 765) ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
$(document).ready(function () {
  $('.autoplay-but').slick({
    slidesToShow: ($(window).width() <= 765) ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots:true,
  });
});