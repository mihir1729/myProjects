//featured projects button
const slides = document.querySelectorAll(`.slide`);
const nextBtn = document.querySelector(`.nextBtn`);
const prevBtn = document.querySelector(`.prevBtn`);

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener(`click`, function () {
  counter++;
  corousel();
});

prevBtn.addEventListener(`click`, function () {
  counter--;
  corousel();
});

function corousel() {
  //reset
  if (counter == slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

//fixing navbar
const navbar = document.querySelector(`.header`);
const links = document.querySelector(`.links`).querySelectorAll(`a`);

window.addEventListener(`scroll`, function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  console.log(scrollHeight, navHeight);
  if (scrollHeight > 1.5 * navHeight) {
    navbar.classList.add(`fixed-nav`);
    links.forEach(function (link) {
      link.style.color = `#d6fff2`;
    });
  } else {
    navbar.classList.remove(`fixed-nav`);

    links.forEach(function (link) {
      link.style.color = `black`;
    });
  }
});
