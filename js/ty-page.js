const acc = document.getElementsByClassName("accordion");
let currentAcc = null;



for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (currentAcc !== this.dataset.id && currentAcc != null) {
      acc[currentAcc].nextElementSibling.style.maxHeight = null;
      acc[currentAcc].classList.toggle("active");
    } else {
      currentAcc = null;
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      currentAcc = this.dataset.id;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



//Testimonial Slideshow
$(document).ready(function(){

$('.testimonialSlider').slick({
dots: true,
infinite: true,
speed: 800,
autoplay: true,
autoplaySpeed: 2000,
slidesToShow: 2,
slidesToScroll: 2,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
dots: true
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 400,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
}

]
});
});
