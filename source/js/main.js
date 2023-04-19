import { testWebP } from './modules/utils';

testWebP((support) => {
  if (support) {
    document.body.classList.add('webp');
    return;
  }
  document.body.classList.add('no-webp');
});
