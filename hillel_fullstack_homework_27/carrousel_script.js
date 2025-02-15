let demonstratingImage = 0;

const moverLeftElement = document.getElementById("moverLeft");
const moverRightElement = document.getElementById("moverRight");
// console.log(moverLeftElement, moverLeftElement.offsetWidth);
// console.log(moverRightElement, moverRightElement.offsetWidth);
moverLeftElement.addEventListener("click", moveLeft);
moverRightElement.addEventListener("click", moveRight);

const demonstratorElement = document.getElementById("demonstrator");
console.log("Demonstrator:", demonstratorElement, "wsidth =", demonstratorElement.getBoundingClientRect().width);

const imagesContainerElement = document.getElementById("images-container")
console.log("Images container", imagesContainerElement, imagesContainerElement.offsetWidth);

const imageElements = document.getElementsByTagName("img");
console.log("Images amount = ", imageElements.length, "width = ", imageElements[0].offsetWidth);

function moveLeft() {
  console.log("moving left");
  if (demonstratingImage === imageElements.length - 1) {
    setTimeout(moveLeft, 0);
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
  imagesContainerElement.style.transform = performAnimation(demonstratingImage, demonstratorElement.getBoundingClientRect().width);
  console.log("Images container coords:", - demonstratingImage * demonstratorElement.getBoundingClientRect().width);
}

function moveRight() {
  console.log("moving right");
  if (demonstratingImage === 0) {
    imagesContainerElement.style.transition = 'transform 0s';
    setTimeout(moveRight, 0);
  } else {
    imagesContainerElement.style.transition = 'transform 1s';
  }
  if (demonstratingImage > 0) {
    demonstratingImage--;
  } else {
    demonstratingImage = imageElements.length - 1;
  }
  if (demonstratingImage === imageElements.length - 1) {
  }
  console.log("Image now:", demonstratingImage);
  imagesContainerElement.style.transform = performAnimation(demonstratingImage, demonstratorElement.getBoundingClientRect().width);
  console.log/("Images container coords:", - demonstratingImage * demonstratorElement.getBoundingClientRect().width);
}

const switcherElements = document.getElementsByClassName("switcher");
const switcherEvents = [...switcherElements].forEach((switcher, index) => switcher.addEventListener("click", onSwitcher.bind(null, index)));


function onSwitcher(switcherNumber) {
  console.log("Switcher event:", switcherNumber)
  demonstratingImage = switcherNumber;
  imagesContainerElement.style.transform = performAnimation(demonstratingImage, demonstratorElement.getBoundingClientRect().width);
}

function performAnimation(numberOfImage, widthOfImage) {
  return imagesContainerElement.style.transform = `translate(${- numberOfImage * widthOfImage}px`;
}