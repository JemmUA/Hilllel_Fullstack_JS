let demonstratingImage = 0;
const filePathImg = "sources/images/";
const imageFileNames = [
  "acura_rdx.jpg",
  "audi_r8_gt.jpg",
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


const moverLeftElement = document.getElementById("moverLeft");
const moverRightElement = document.getElementById("moverRight");
moverLeftElement.addEventListener("click", moveLeft);
moverRightElement.addEventListener("click", moveRight);

const demonstratorElement = document.getElementById("demonstrator");
console.log("Demonstrator:", demonstratorElement, "wsidth =", demonstratorElement.getBoundingClientRect().width);

const imagesContainerElement = document.getElementById("images-container")
console.log("Images container", imagesContainerElement, imagesContainerElement.getBoundingClientRect().width);

generateImagesForHtml();
// generateImgElements();

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

// create switchers by images amount
[...imageElements].forEach((element, index) => {
  if (index !== imageElements.length - 1) {
    createSwitcherElement("div", "switcher", document.getElementsByClassName("switchers-container")[0]);
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
  console.log("Switcher. Image now:", demonstratingImage);
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
  // console.log("Switcher Element:", switcherElements[switcherNumber]);
  // console.log("Switcher:", switcherNumber);
  switcherElements[switcherNumber].classList.add("switcherTurnedOn");
}

// generateImagesForHtml();
function generateImagesForHtml() {
  let imagesForHtml = "<div id=\"images-container\">";
  imageFileNames.forEach(fileNameImg => {
    imagesForHtml += `<img src="${filePathImg}${fileNameImg}" title="${fileNameImg.slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
  });
  imageFileNames.forEach((fileNameImg,index) => {
    if (index === 0) {
      imagesForHtml += `<img src="${filePathImg}${fileNameImg}" title="${fileNameImg.slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
    }
  });
  imagesForHtml += "</div>";
  console.log(imagesForHtml);
  imagesContainerElement.innerHTML = imagesForHtml;
}

// function generateImgElements () {
//   const docFragment = document.createDocumentFragment();
//   imageFileNames.forEach(fileNameImg => {
//     const imgElement = document.createElement("img");
//     imgElement.src = `${filePathImg}${fileNameImg}`;
//     docFragment.appendChild(imgElement);
//   });
//   document.getElementById("images-container").appendChild(docFragment);
// }