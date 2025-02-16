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
console.log("Images container", imagesContainerElement, imagesContainerElement.getBoundingClientRect().width);

const imageElements = document.getElementsByTagName("img");
console.log("Images amount = ", imageElements.length, "width = ", imageElements[demonstratingImage].getBoundingClientRect().width);

function moveRight() {
  console.log("moving left");
  if (demonstratingImage === imageElements.length - 1) {
    setTimeout(moveRight, 0);
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
  // console.log("Images container coords:", - demonstratingImage * demonstratorElement.getBoundingClientRect().width);
  switcherTurnOn(demonstratingImage);
}

function moveLeft() {
  console.log("moving right");
  if (demonstratingImage === 0) {
    imagesContainerElement.style.transition = 'transform 0s';
    setTimeout(moveLeft, 0);
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
  // console.log/("Images container coords:", - demonstratingImage * demonstratorElement.getBoundingClientRect().width);
  switcherTurnOn(demonstratingImage);
}

[...imageElements].forEach((element, index) => {
  if (index !== imageElements.length - 1) {
    createSwitcher("div", "switcher", document.getElementsByClassName("switchers-container")[0]);
  }
});

const switcherElements = document.getElementsByClassName("switcher");

[...switcherElements].forEach((switcher, index) => switcher.addEventListener("click", onSwitcher.bind(null, index)));

switcherTurnOn(demonstratingImage);

function onSwitcher(switcherNumber) {
  // console.log("Switcher event:", switcherNumber)
  demonstratingImage = switcherNumber;
  imagesContainerElement.style.transform = performAnimation(demonstratingImage, demonstratorElement.getBoundingClientRect().width);
  switcherTurnOn(demonstratingImage);
}

function performAnimation(numberOfImage, widthOfImage) {
  return imagesContainerElement.style.transform = `translate(${- numberOfImage * widthOfImage}px`;
}

function createSwitcher(tagName, switcherClass, container) {
  const element = document.createElement(tagName);
  element.classList.add(switcherClass);
  container.appendChild(element);
  return element;
}

function switcherTurnOn (switcherNumber) {
  if (switcherNumber === imageElements.length - 1) {
    switcherNumber = 0;
  }
  [...switcherElements].forEach(element => {
    element.classList.remove("switcherTurnedOn");
    element.classList.add("switcher");
  });
  // console.log("Switcher Element:", switcherElements[switcherNumber]);
  switcherElements[switcherNumber].classList.add("switcherTurnedOn");
}
