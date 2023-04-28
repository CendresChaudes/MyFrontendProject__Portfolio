import { Projects } from './data';
import { debounce } from './utils';

const sliderItems = document.querySelectorAll('.slider__item');
const prevSlideButton = document.querySelector('.slider__button--prev');
const nextSlideButton = document.querySelector('.slider__button--next');

const slideTitle = document.querySelector('.slider__slide-title');
const viewLink = document.querySelector('.slider__view-link');
const githubLink = document.querySelector('.slider__github-link');

const FIRST_SLIDE_ID = 0;
const NEXT_SLIDE_DELAY = 175;

let currentSlideId = 0;

const removeSlideClasses = () => sliderItems.forEach((item) => item.classList.remove('slider__item--current', 'slider__item--prev', 'slider__item--next'));

const getSlidesId = (id) => {
  currentSlideId = id;
  let prevSlideId = id - 1;
  let nextSlideId = id + 1;

  if (nextSlideId === sliderItems.length) {
    nextSlideId = FIRST_SLIDE_ID;
  }
  if (prevSlideId === -1) {
    prevSlideId = sliderItems.length - 1;
  }

  return {currentSlideId, prevSlideId, nextSlideId};
};

// eslint-disable-next-line no-shadow
const changeSlideClass = ({currentSlideId, prevSlideId, nextSlideId}) => {
  removeSlideClasses();

  sliderItems[currentSlideId].classList.add('slider__item--current');
  sliderItems[prevSlideId].classList.add('slider__item--prev');
  sliderItems[nextSlideId].classList.add('slider__item--next');
};

const fillCurrentSlideInfo = (id) => {
  slideTitle.textContent = Projects[id].title;
  viewLink.href = Projects[id].view;
  githubLink.href = Projects[id].github;
};

const goToSlide = (id) => {
  changeSlideClass(getSlidesId(id));
  fillCurrentSlideInfo(id);
};

const goToSlideTimeout = debounce((id) => goToSlide(id), NEXT_SLIDE_DELAY);

const onPrevSlideButtonClick = () => currentSlideId > FIRST_SLIDE_ID ? goToSlideTimeout(currentSlideId - 1) : goToSlideTimeout(sliderItems.length - 1);

const onNextSlideButtonClick = () => currentSlideId < (sliderItems.length - 1) ? goToSlideTimeout(currentSlideId + 1) : goToSlideTimeout(FIRST_SLIDE_ID);

const defaultSlideInfo = () => {
  slideTitle.textContent = Projects[FIRST_SLIDE_ID].title;
  viewLink.href = Projects[FIRST_SLIDE_ID].view;
  githubLink.href = Projects[FIRST_SLIDE_ID].github;
};

const initSLider = () => {
  defaultSlideInfo();

  prevSlideButton.addEventListener('click', onPrevSlideButtonClick);
  nextSlideButton.addEventListener('click', onNextSlideButtonClick);
};

export { initSLider };
