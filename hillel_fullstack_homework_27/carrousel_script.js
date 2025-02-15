let demonstratingImage = 0;

const moverLeftElement = document.getElementById("moverLeft");
const moverRightElement = document.getElementById("moverRight");
// console.log(moverLeftElement, moverLeftElement.offsetWidth);
// console.log(moverRightElement, moverRightElement.offsetWidth);
const moveLeftEvent = moverLeftElement.addEventListener("click", moveLeft);
const moveRightEvent = moverRightElement.addEventListener("click", moveRight);

const demonstratorElement = document.getElementById("demonstrator");
console.log(demonstratorElement, demonstratorElement.offsetWidth);

const imagesContainerElement = document.getElementById("images-container")
console.log(imagesContainerElement, imagesContainerElement.offsetWidth);

const imageElements = document.getElementsByTagName("img");
console.log("imagesElement = ", imageElements.length);
// [imageElements].push([imageElements][0]);
// console.log("imagesElement = ", imageElements.length);

function moveLeft() {
  console.log("move left");
  if (demonstratingImage === imageElements.length - 1) {
    imagesContainerElement.style.transition = 'transform 0s';
  } else {
    imagesContainerElement.style.transition = 'transform 1s';
  }
  if (demonstratingImage  < imageElements.length - 1) {
    demonstratingImage++;
  } else {
    demonstratingImage = 0;
  }
    console.log(demonstratingImage);
  imagesContainerElement.style.transform = `translate(${- demonstratingImage * demonstratorElement.offsetWidth}px`;
  console.log(- demonstratingImage * demonstratorElement.offsetWidth);
}

function moveRight() {
  console.log("move right");
  console.log(demonstratingImage);
  if (demonstratingImage === 0) {
    imagesContainerElement.style.transition = 'transform 0s';
  } else {
    imagesContainerElement.style.transition = 'transform 1s';
  }
  if (demonstratingImage > 0) {
    demonstratingImage--;
  } else {
    demonstratingImage = imageElements.length - 1;
  }
    console.log(demonstratingImage);
  imagesContainerElement.style.transform = `translate(${- demonstratingImage * demonstratorElement.offsetWidth}px`;
  // imagesContainerElement.style.transform = `translate(${-4669}px`;
  console.log(demonstratingImage * demonstratorElement.offsetWidth);
}