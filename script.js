const start = document.querySelector('#start');
const popup = document.querySelector('.popup');
const exit = document.querySelector('#exit');
const main = document.querySelector('.main');
const homeHeading = document.querySelector('.home-heading');
const aboutHeading = document.querySelector('.about-heading');
const helpHeading = document.querySelector('.help-heading');
const contactHeading = document.querySelector('.contact-heading');

homeHeading.classList.add('active');

homeHeading.onclick = () => {
    homeHeading.classList.add('active');
    aboutHeading.classList.remove('active');
    helpHeading.classList.remove('active');
    contactHeading.classList.remove('active');
}
aboutHeading.onclick = () => {
    aboutHeading.classList.add('active');
    homeHeading.classList.remove('active');
    helpHeading.classList.remove('active');
    contactHeading.classList.remove('active');
}
helpHeading.onclick = () => {
    helpHeading.classList.add('active');
    aboutHeading.classList.remove('active');
    homeHeading.classList.remove('active');
    contactHeading.classList.remove('active');
}
contactHeading.onclick = () => {
    contactHeading.classList.add('active');
    aboutHeading.classList.remove('active');
    helpHeading.classList.remove('active');
    homeHeading.classList.remove('active');
}

start.onclick = () => {
    popup.classList.add('active');
    main.classList.add('active');
}
exit.onclick = () => {
    popup.classList.remove('active');
    main.classList.remove('active');
}  
