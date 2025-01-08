const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

const programSlider = document.querySelector('#projects-list');

const lastCardIdx = 2;
const cardSize = 340;

let slideIndex = 0;

function plusSlide(n) {
  // 308 + 32 (px)
  slideIndex += n;

  if (slideIndex <= 0) slideIndex = 0;
  else if (slideIndex >= lastCardIdx) slideIndex = lastCardIdx;

  let x = slideIndex * -cardSize;
  programSlider.style.transform = `translateX(${x}px)`;
  if (slideIndex == 0) {
    rightBtn.disabled = false;
    leftBtn.disabled = true;

    // Change svg stroke color
    leftBtn.querySelector('circle').setAttribute('stroke', 'gray');
    leftBtn
      .querySelectorAll('path')
      .forEach((element) => element.setAttribute('stroke', 'gray'));
  } else if (slideIndex == lastCardIdx) {
    leftBtn.disabled = false;
    rightBtn.disabled = true;

    // Change svg stroke color
    rightBtn.querySelector('circle').setAttribute('stroke', 'gray');
    rightBtn
      .querySelectorAll('path')
      .forEach((element) => element.setAttribute('stroke', 'gray'));
  } else {
    leftBtn.disabled = false;
    rightBtn.disabled = false;

    // Change left and right button svg stroke color
    leftBtn.querySelector('circle').setAttribute('stroke', 'black');
    leftBtn
      .querySelectorAll('path')
      .forEach((element) => element.setAttribute('stroke', 'black'));

    rightBtn.querySelector('circle').setAttribute('stroke', 'black');
    rightBtn
      .querySelectorAll('path')
      .forEach((element) => element.setAttribute('stroke', 'black'));
  }
}

leftBtn.addEventListener('click', () => {
  plusSlide(-1);
});

rightBtn.addEventListener('click', () => {
  plusSlide(1);
});
