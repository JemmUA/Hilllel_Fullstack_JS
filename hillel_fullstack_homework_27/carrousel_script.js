let demonstratingImage = 0;

const moverLeftElement = document.getElementById("moverLeft");
const moverRightElement = document.getElementById("moverRight");
// console.log(moverLeftElement, moverLeftElement.offsetWidth);
// console.log(moverRightElement, moverRightElement.offsetWidth);
const moveLeftEvent = moverLeftElement.addEventListener("click", moveLeft);
const moveRightEvent = moverRightElement.addEventListener("click", moveRight);

const demonstratorElement = document.getElementById("demonstrator");
console.log("Demonstrator:", demonstratorElement, "wsidth =", demonstratorElement.offsetWidth);

const imagesContainerElement = document.getElementById("images-container")
console.log("Images container", imagesContainerElement, imagesContainerElement.offsetWidth);

const imageElements = document.getElementsByTagName("img");
console.log("Images amount = ", imageElements.length, "width = ", imageElements[0].offsetWidth);

function moveLeft() {
  console.log("moving left");
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
  console.log("Image now:", demonstratingImage);
  imagesContainerElement.style.transform = `translate(${- demonstratingImage * demonstratorElement.offsetWidth}px`;
  console.log("Images container coords:", - demonstratingImage * demonstratorElement.offsetWidth);
}

function moveRight() {
  console.log("moving right");
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
  console.log("Image now:", demonstratingImage);
  imagesContainerElement.style.transform = `translate(${- demonstratingImage * demonstratorElement.offsetWidth}px`;
  console.log("Images container coords:", - demonstratingImage * demonstratorElement.offsetWidth);
}

const switcherElements = document.getElementsByClassName("switcher");
const switcherEvents = [...switcherElements].forEach((switcher, index) => switcher.addEventListener("click", onSwitcher(index)));


function onSwitcher(switcherNumber) {
  console.log("Switcher event:", switcherNumber)
  switcherElements[switcherNumber].style.backgroundColor = "green";
  demonstratingImage = switcherNumber;
  imagesContainerElement.style.transform = `translate(${- demonstratingImage * demonstratorElement.offsetWidth}px`;
}