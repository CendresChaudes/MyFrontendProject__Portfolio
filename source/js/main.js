import { testWebP } from './modules/utils';
import { initMobileMenu } from './modules/mobile-menu';
import { initScroll } from './modules/scroll';
import { initSLider } from './modules/slider';

testWebP((support) => {
  if (support) {
    document.body.classList.add('webp');
    return;
  }
  document.body.classList.add('no-webp');
});

initMobileMenu();
initScroll();
initSLider();
