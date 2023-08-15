import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const initSlider = () => {
  const swiper = new Swiper('.slider', {
    loop: true,
    grabCursor: true,
    effect: 'coverflow',
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 'auto',
      },
    },
    slideClass: 'slider__item',
  });
};

export { initSlider };
