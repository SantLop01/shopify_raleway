new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 30,
  autoplay: 2000,
  breakpoints: {
    991: {
      perView: 3
    },
    768: {
      perView: 2
    },
    520: {
      perView: 1
    }
  }
}).mount();


function changeImage(rout) {
  document.getElementById('img__principal').src = rout;
}