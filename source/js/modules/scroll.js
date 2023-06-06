const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const navigation = document.querySelector('.header__nav');
const showMoreButton = document.querySelector('.intro__show-more');

const headerHeight = header.clientHeight;

const ViewPosition = {
  INTRO: 0,
  ABOUT: getViewPosition(
    document
      .querySelector('.about__title')
      .getBoundingClientRect()
      .top,
    headerHeight),
  SKILLS: getViewPosition(
    document
      .querySelector('.skills__title')
      .getBoundingClientRect()
      .top,
    headerHeight),
  WORKS: getViewPosition(
    document
      .querySelector('.works__title')
      .getBoundingClientRect()
      .top, headerHeight),
  CONTACTS: getViewPosition(
    document
      .querySelector('.contacts__title')
      .getBoundingClientRect()
      .top,
    headerHeight)
};

function getViewPosition(titlePosition, offset) {
  return titlePosition - offset;
}

const getTitleId = (linkId) => `${linkId.replace('-link', '')}`;

const onWindowScroll = () => {
  const scrollDistance = window.scrollY;
  const scrollDistanceEpsilon = 20;

  document
    .querySelectorAll('section')
    .forEach((element, index) => {
      if (ViewPosition[element.classList[0].toUpperCase()] <= scrollDistance + scrollDistanceEpsilon) {
        document
          .querySelectorAll('.header__nav-link')
          .forEach((prevCurrentLink) => {
            if (prevCurrentLink.classList.contains('header__nav-link--current')) {
              prevCurrentLink.classList.remove('header__nav-link--current');
              prevCurrentLink.removeAttribute('title');
              prevCurrentLink.href = `#${getTitleId(prevCurrentLink.id)}`;
            }
          });

        let currentLink = document
          .querySelectorAll('.header__nav-item')[index]
          .querySelector('.header__nav-link');

        if (scrollDistance >= document.body.scrollHeight - window.innerHeight - 100) {
          currentLink = document.querySelector('#contacts-link');
        }

        currentLink.classList.add('header__nav-link--current');
        currentLink.removeAttribute('href');
        currentLink.title = 'Current position';
      }
    });
};

const onHeaderLogoClick = (evt) => {
  evt.preventDefault();
  window.scrollTo({ top: ViewPosition.INTRO, behavior: 'smooth' });
};

const onNavigationLinkClick = (evt) => {
  evt.preventDefault();

  if (evt.target.closest('.header__nav-link') && !evt.target.closest('.header__nav-link--current')) {
    const titlePosition = ViewPosition[getTitleId(evt.target.id).toUpperCase()];
    window.scrollTo({ top: titlePosition, behavior: 'smooth' });
  }
};

const onShowMoreButtonClick = (evt) => {
  evt.preventDefault();
  window.scrollTo({ top: ViewPosition.ABOUT, behavior: 'smooth' });
};

const resetScrollPosition = () => {
  history.scrollRestoration = 'manual';
};

const addListeners = () => {
  headerLogo.addEventListener('click', onHeaderLogoClick);
  navigation.addEventListener('click', onNavigationLinkClick);
  showMoreButton.addEventListener('click', onShowMoreButtonClick);

  window.addEventListener('scroll', onWindowScroll);
};

const initScroll = () => {
  resetScrollPosition();
  addListeners();
};

export { initScroll };
