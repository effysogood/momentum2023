const imageNum = 5;
const chosenImg = String(Math.floor(Math.random() * imageNum)).padStart(2, '0');

const bgImageExtension = `.jpg`;
const bgImage = `/assets/img/background-${chosenImg}${bgImageExtension}`;

const bgWrapper = document.querySelector('.wrapper');
bgWrapper.style.backgroundImage = `url(${bgImage})`;
