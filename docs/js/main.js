const btnAboutMe = document.querySelector('#btnAboutMe');
const btnAboutTools = document.querySelector('#btnAboutTools');
const aboutMe = document.querySelector('#aboutMe');
const aboutTools = document.querySelector('#aboutTools');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const spanName = document.querySelector('#spanName');
const spanEmail = document.querySelector('#spanEmail');

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


