const swiper = new Swiper('.swiper', {
  speed: 1000,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 3800
  }
})

const swipertest = new Swiper('.swiper-testmonials', {
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 3800
  }
})
