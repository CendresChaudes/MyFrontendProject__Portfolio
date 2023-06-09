import { projects } from './data';
import { debounce } from './utils';

const FIRST_SLIDE_ID = 0;
const NEXT_SLIDE_DELAY = 175;

const sliderItems = document.querySelectorAll('.slider__item');
const paginationItems = document.querySelectorAll('.slider__pagination-item');
const prevSlideButton = document.querySelector('.slider__button--prev');
const nextSlideButton = document.querySelector('.slider__button--next');
const slideTitle = document.querySelector('.slider__project-name');
const viewLink = document.querySelector('.slider__view-link');
const githubLink = document.querySelector('.slider__github-link');

let currentSlideId = 0;

const removeSlideClasses = () => sliderItems.forEach((item) => item.classList.remove('slider__item--current', 'slider__item--prev', 'slider__item--next'));

const removeCurrentPaginationClass = () => paginationItems.forEach((item) => item.classList.remove('slider__pagination-item--current'));

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

  return { prevSlideId, currentSlideId, nextSlideId };
};

// eslint-disable-next-line no-shadow
const changeSlideClass = ({ prevSlideId, currentSlideId, nextSlideId }) => {
  removeSlideClasses();
  removeCurrentPaginationClass();

  sliderItems[currentSlideId].classList.add('slider__item--current');
  sliderItems[prevSlideId].classList.add('slider__item--prev');
  sliderItems[nextSlideId].classList.add('slider__item--next');

  paginationItems[currentSlideId].classList.add('slider__pagination-item--current');
};

const fillCurrentSlideInfo = (id) => {
  slideTitle.textContent = projects[id].title;
  viewLink.href = projects[id].view;
  githubLink.href = projects[id].github;
};

const goToSlide = (id) => {
  changeSlideClass(getSlidesId(id));
  fillCurrentSlideInfo(id);
};

const debouncedGoToSlide = debounce((id) => goToSlide(id), NEXT_SLIDE_DELAY);

const onPrevSlideButtonClick = () => currentSlideId > FIRST_SLIDE_ID ? debouncedGoToSlide(currentSlideId - 1) : debouncedGoToSlide(sliderItems.length - 1);

const onNextSlideButtonClick = () => currentSlideId < (sliderItems.length - 1) ? debouncedGoToSlide(currentSlideId + 1) : debouncedGoToSlide(FIRST_SLIDE_ID);

const defaultSlideInfo = () => {
  slideTitle.textContent = projects[FIRST_SLIDE_ID].title;
  viewLink.href = projects[FIRST_SLIDE_ID].view;
  githubLink.href = projects[FIRST_SLIDE_ID].github;
};

const setSliderHeight = () => {
  const slideHeight = getComputedStyle(document.querySelector('.slider__item--current')).height;
  document.querySelector('.slider__wrapper').style.height = slideHeight;
};

const onPaginationClick = (index) => {
  currentSlideId = index;
  goToSlide(currentSlideId);
};

const initPaginationListeners = () => {
  paginationItems.forEach((item, index) => {
    item
      .querySelector('button')
      .addEventListener('click', () => onPaginationClick(index));
  });
};

const initSLider = () => {
  defaultSlideInfo();
  initPaginationListeners();

  prevSlideButton.addEventListener('click', onPrevSlideButtonClick);
  nextSlideButton.addEventListener('click', onNextSlideButtonClick);
  window.addEventListener('load', setSliderHeight);
  window.addEventListener('resize', setSliderHeight);
};

export { initSLider };
