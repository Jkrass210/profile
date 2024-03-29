const btnAboutMe = document.querySelector('#btnAboutMe');
const btnAboutTools = document.querySelector('#btnAboutTools');
const aboutMe = document.querySelector('#aboutMe');
const aboutTools = document.querySelector('#aboutTools');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const spanName = document.querySelector('#spanName');
const spanEmail = document.querySelector('#spanEmail');
const btnDayNight = document.querySelector('#btnDayNight');
const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const closeBurger =document.querySelector('#closeBurger');

function activationDesc(elemOne, elemTwo, btnOne, btnTwo) {
 if (!elemOne.classList.contains('about__box--active')) {
  elemOne.classList.add('about__box--active')
  btnOne.classList.add('about__btn--active')
  elemTwo.classList.remove('about__box--active')
  btnTwo.classList.remove('about__btn--active')
 }
};

function activationInput(input, placeholder) {
 if (input.value){
  placeholder.classList.add("form__input-span--active")
 } else if (!input.value) {
  placeholder.classList.remove("form__input-span--active")
 }
}

function activationNightTeme () {
  if(document.body.classList.contains('night-hteme')) {
    document.body.classList.remove('night-hteme')
   } else if (!document.body.classList.contains('night-hteme')) {
    document.body.classList.add('night-hteme')
   }
}

document.querySelectorAll(".js-scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
 let swiper;

 breakpoint = window.matchMedia(breakpoint);

 const enableSwiper = function(className, settings) {
   swiper = new Swiper(className, settings);

   if (callback) {
     callback(swiper);
   }
 }

 const checker = function() {
   if (breakpoint.matches) {
     return enableSwiper(swiperClass, swiperSettings);
   } else {
     if (swiper !== undefined) swiper.destroy(true, true);
     return;
   }
 };

 breakpoint.addEventListener('change', checker);
 checker();
}

btnAboutMe.addEventListener('click', function() {
 activationDesc(aboutMe, aboutTools, btnAboutMe, btnAboutTools)
});

btnAboutTools.addEventListener('click', function() {
 activationDesc(aboutTools, aboutMe, btnAboutTools, btnAboutMe)
});

inputName.addEventListener('input', function(){
 activationInput(inputName, spanName)
});

inputEmail.addEventListener('input', function(){
 activationInput(inputEmail, spanEmail)
});

btnDayNight.addEventListener('click', function() {
 const spanBtn = btnDayNight.querySelector('.btn__span');
 const svgDay = btnDayNight.querySelector('.btn__day');
 const svgNight = btnDayNight.querySelector('.btn__night');
 if(spanBtn.classList.contains('btn__span-night')) {
  activationNightTeme()
  spanBtn.classList.remove('btn__span-night')
  svgDay.classList.add('btn__svg--hidden')
  svgNight.classList.remove('btn__svg--hidden')
 } else {
  activationNightTeme()
  spanBtn.classList.add('btn__span-night')
  svgNight.classList.add('btn__svg--hidden')
  svgDay.classList.remove('btn__svg--hidden')
 }
});

const mobMenu = header.querySelector('.header__wrapper-menu');

burger.addEventListener('click', function(){
 mobMenu.classList.add('header__wrapper-menu--active')
 document.body.classList.add("stop-scroll");
});

closeBurger.addEventListener('click', function(){
 mobMenu.classList.remove('header__wrapper-menu--active')
 document.body.classList.remove("stop-scroll");
});

resizableSwiper('(max-width: 950px)', '.skillbox__swiper', {
  loop: false,
  spaceBetween: 25,
  slidesPerView: 1.5,
  loop: false,
  freeMode: false,
  breakpoints: {
    700: {
      spaceBetween: 25,
      slidesPerView: 2.5,
    },
  },
 }
);
