/*  SLIDER */

let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.promo-slider__wrapper');
const track = document.querySelector('.promo-slider__list');
const item = document.querySelector('.promo-slider__item');
const btnPrev = document.querySelector('.promo-slider__arrow--prev');
const btnNext = document.querySelector('.promo-slider__arrow--next');
const items = document.querySelectorAll('.promo-slider__item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  position -= movePosition;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  position += movePosition;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
