let demonstratingImage = 0;
const filePathImg = "sources/images/";
const imageFileNames = [
  "acura_rdx.jpg",
  "audi_r8_gt.jpg",
  "chevrolet-corvette.jpg",
  "ferrari-296-gtb.jpg",
  "Ford_Mustang.jpg",
  "honda_accord_sedan.jpg",
  "hyundai_tucson.jpg",
  "Mazda-RX-7.jpg",
  "mclaren_720s.jpg",
  "mercedes-benz-amg_gle_53_4matic.jpg",
  "nissan_ariya_long_range_2wd.jpg",
  "peugeot_3008.jpg",
  "porsche_macan_r4.jpg",
  "renault_captur.jpg",
  "subaru_impreza_22b_sti.jpg"
];
let isAutoplaying = false;
let autoplayingInterval;
const moveTime = 1;

const moverLeftElement = document.getElementById("moverLeft");
const moverRightElement = document.getElementById("moverRight");
moverLeftElement.addEventListener("click", moveLeft);
moverRightElement.addEventListener("click", moveRight);
const demonstratorElement = document.getElementById("demonstrator");
const imagesContainerElement = document.getElementById("images-container")
const autoplayRunElement = document.getElementsByClassName("run-container")[0];
autoplayRunElement.addEventListener("click", autoplay);
const autoplayStopElement = document.getElementsByClassName("stop-container")[0];
autoplayStopElement.addEventListener("click", autoplay);

generateImgElements();
const imageElements = document.getElementsByTagName("img");
function moveRight() {
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
  imagesContainerElement.style.transform = performAnimation(demonstratingImage, demonstratorElement.getBoundingClientRect().width);
  switcherTurnOn(demonstratingImage);
}

function moveLeft() {
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
  imagesContainerElement.style.transform = performAnimation(demonstratingImage, demonstratorElement.getBoundingClientRect().width);
  switcherTurnOn(demonstratingImage);
}

[...imageElements].forEach((element, index) => {
  if (index !== imageElements.length - 1) {
    createSwitcherElement("div", "switcher", document.getElementsByClassName("switchers-container")[0]);
  }
});

const switcherElements = document.getElementsByClassName("switcher");

[...switcherElements].forEach((switcher, index) => switcher.addEventListener("click", onSwitcher.bind(null, index)));

switcherTurnOn(demonstratingImage);

function onSwitcher(switcherNumber) {
  demonstratingImage = switcherNumber;
  imagesContainerElement.style.transform = performAnimation(demonstratingImage, demonstratorElement.getBoundingClientRect().width);
  switcherTurnOn(demonstratingImage);
}

function performAnimation(numberOfImage, widthOfImage) {
  return imagesContainerElement.style.transform = `translate(${- numberOfImage * widthOfImage}px`;
}

function createSwitcherElement(tagName, switcherClass, container) {
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
  switcherElements[switcherNumber].classList.add("switcherTurnedOn");
}

function generateImgElements() {
  let imagesForHtml = `<${imagesContainerElement.tagName.toLowerCase()} id="${imagesContainerElement.id}">`;
  let firstImageForDuplication = "";
  imageFileNames.forEach((fileNameImg, index) => {
    if (index === 0) {
      firstImageForDuplication = `<img src="${filePathImg}${fileNameImg}" title="${fileNameImg.
      slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
    }
    imagesForHtml += `<img src="${filePathImg}${fileNameImg}" title="${fileNameImg.
    slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
  });
    imagesForHtml += firstImageForDuplication;
  imagesForHtml += "</div>";
  imagesContainerElement.innerHTML = imagesForHtml;
}

function autoplay(){
  isAutoplaying = !isAutoplaying;
    if (isAutoplaying) {
      autoplayRunElement.classList.add("deactivated");
      autoplayRunElement.classList.remove("activated");
      autoplayStopElement.classList.add("activated");
      autoplayStopElement.classList.remove("deactivated");
    } else {
      autoplayRunElement.classList.remove("deactivated");
      autoplayRunElement.classList.add("activated");
      autoplayStopElement.classList.remove("activated");
      autoplayStopElement.classList.add("deactivated");
    }

  if (isAutoplaying) {
    autoplayingInterval = setInterval(moveRight, moveTime * 1000);
  } else {
    clearInterval(autoplayingInterval);
    autoplayingInterval = null;
  }
}