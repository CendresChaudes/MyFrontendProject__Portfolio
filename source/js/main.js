import { testWebP } from './modules/utils';
import { initScroll } from './modules/scroll';
import { initSLider } from './modules/slider';

testWebP((support) => {
  if (support) {
    document.body.classList.add('webp');
    return;
  }
  document.body.classList.add('no-webp');
});

initScroll();
initSLider();
