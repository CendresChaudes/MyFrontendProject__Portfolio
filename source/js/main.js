import { testWebP } from './modules/utils';
import { initMobileMenu } from './modules/mobile-menu';
import { initScroll } from './modules/scroll';
import { initSlider } from './modules/slider';

testWebP((support) => support ? document.body.classList.add('webp') : document.body.classList.add('no-webp'));

initMobileMenu();
initScroll();
initSlider();
