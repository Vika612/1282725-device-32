'use strict';

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
const bullets = document.querySelectorAll('.promo-slider__btn');
const itemsCount = items.length;
const itemWidth = 1160;
const movePosition = slidesToScroll * itemWidth;

bullets.forEach((bullet) => {
  bullet.addEventListener('click', () => {

    position = calculateCoord(+bullet.dataset.index);
    document.querySelector('.promo-slider__btn--active').classList.remove('promo-slider__btn--active');
    bullet.classList.add('promo-slider__btn--active');
    setPosition();
  });
});

const calculateCoord = (k) => -(itemWidth * k);

const switchActiveBullet = (index) => {
  document.querySelector('.promo-slider__btn--active').classList.remove('promo-slider__btn--active');
  bullets[index].classList.add('promo-slider__btn--active');
};

btnNext.addEventListener('click', () => {

  let indexActiveBullet = Array.from(bullets).indexOf(document.querySelector('.promo-slider__btn--active'));


  if (indexActiveBullet < bullets.length - 1) {
    position -= movePosition;
    indexActiveBullet += 1;

    switchActiveBullet(indexActiveBullet);
    setPosition();
    checkBtns();
  };
});

btnPrev.addEventListener('click', () => {

  let indexActiveBullet = Array.from(bullets).indexOf(document.querySelector('.promo-slider__btn--active'));

  if (indexActiveBullet > 0) {
    position += movePosition;
    indexActiveBullet -= 1;

    switchActiveBullet(indexActiveBullet);
    setPosition();
    checkBtns();
  };
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();


/* TABS */

const tabNavs = document.querySelectorAll('.button--tab');

tabNavs.forEach((tabNav) => {

  tabNav.addEventListener('click', (e) => {
    e.preventDefault();
    const activeTabAttr = e.target.dataset.tab;

    document.querySelector('.button--tab.active').classList.remove('active');
    document.querySelector('.tabs__item-content.active').classList.remove('active');

    tabNav.classList.add('active');

    const activeScreen = `.tabs__item-content--${activeTabAttr}`;

    document.querySelector(activeScreen).classList.add('active');
  });
});


/* MODAL */

const openBtn = document.querySelector('.delivery-bonus__link');
const closeBtn = document.querySelector('.modal__close');
const popup = document.querySelector('.modal');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('modal--show');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('modal--show');
    document.body.style.overflow = 'visible';
  });

  popup.addEventListener('click', (e) => {
    if (e.target.closest('.modal__content') === null) {
      popup.classList.remove('modal--show');
      document.body.style.overflow = 'visible';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      popup.classList.remove('modal--show');
      document.body.style.overflow = 'visible';
    }
  });


  /* COUNTER */

  const counter = document.querySelector('.counter');
  const input = document.getElementById('number');

  const ACTION = {
    PLUS: 'plus',
    MINUS: 'minus'
  };

  const calculateItem = (action) => {

  switch (action) {
    case ACTION.PLUS:
      input.value++;
      break;
    case ACTION.MINUS:
      input.value--;
      break;
    }
  };

  counter.addEventListener('click', (e) => {
    if (e.target.classList.contains('counter__button--increase')) {
      calculateItem(ACTION.PLUS);
    }

    if (e.target.classList.contains('counter__button--decrease')) {

      if (Number(input.value) !== 1) {
      calculateItem(ACTION.MINUS);
      }
    }
  });
