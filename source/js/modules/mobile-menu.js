const navigation = document.querySelector('.header__nav');
const navigationToggle = document.querySelector('.header__nav-toggle');

const onNavigationToggleClick = () => navigation.classList.toggle('is-open');

const onDocumentClick = (evt) => {
  if (!evt.target.closest('.header__nav-link') && !evt.target.closest('.header__nav-toggle')) {
    navigation.classList.remove('is-open');
  }
};

const initMobileMenu = () => {
  navigationToggle.addEventListener('click', onNavigationToggleClick);
  document.addEventListener('click', onDocumentClick);
};

export { initMobileMenu };
