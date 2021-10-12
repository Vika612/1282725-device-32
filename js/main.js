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


items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});


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

const tabNavs = document.querySelectorAll(".button--tab");
const tabPanes = document.querySelectorAll(".tabs__item-content");

for (let i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    const activeTabAttr = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      const contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}
