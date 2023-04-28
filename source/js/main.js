import { testWebP } from './modules/utils';
import { initSLider } from './modules/slider';

testWebP((support) => {
  if (support) {
    document.body.classList.add('webp');
    return;
  }
  document.body.classList.add('no-webp');
});

initSLider();
