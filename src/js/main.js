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
  spanBtn.classList.remove('btn__span-night')
  svgDay.classList.add('btn__svg--hidden')
  svgNight.classList.remove('btn__svg--hidden')
 } else {
  spanBtn.classList.add('btn__span-night')
  svgNight.classList.add('btn__svg--hidden')
  svgDay.classList.remove('btn__svg--hidden')
 }
});

const mobMenu = header.querySelector('.header__wrapper-menu');

burger.addEventListener('click', function(){
 mobMenu.classList.add('header__wrapper-menu--active')
});

closeBurger.addEventListener('click', function(){
 mobMenu.classList.remove('header__wrapper-menu--active')
});


