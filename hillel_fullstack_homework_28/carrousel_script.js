import {Carrousel} from "./entities/Carrousel.js";

const filePathCars = "sources/images/cars/";
const imageFileCars = [
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

const filePathImgMac = "sources/images/mac/";
const imageFileNamesMac = [
  "mac_1.jpg",
  "mac_2.jpg",
  "mac_3.jpg",
  "mac_4.jpg",
  "mac_5.jpg",
]


const filePathAnimals = "sources/images/animals/";
const imageFileNameAnimals = [
    "animal_01.jpg",
    "animal_02.jpg",
    "animal_03.jpg",
    "animal_04.jpg",
    "animal_05.jpg",
    "animal_06.jpg",
    "animal_07.jpg",
    "animal_08.jpg",
    "animal_09.jpg",
    "animal_10.jpg"
    ]

let demonstratingImage = 0;
let imageElementsAmount = 0;
let imageWidth;
let isAutoplaying = false;
let autoplayingInterval;
const moveTime = 1;

// const carrousel = new Carrousel(imageFileCars, filePathCars);

// const carrousel = new Carrousel(imageFileCars, filePathCars);
// carrousel.test();

// const carrousel2 = new Carrousel(imageFileNamesMac, filePathImgMac);
// carrousel2.test();
//
const carrousel3 = new Carrousel(imageFileNameAnimals, filePathAnimals);
carrousel3.test();

// document.querySelector("#common-container #moverLeft").addEventListener("click", moveLeft);
// document.querySelector("#common-container #moverRight").addEventListener("click", moveRight);
// const imagesContainerElement = document.querySelector("#common-container #images-container")
// const autoplayRunElement = document.querySelector("#common-container .run-container");
// autoplayRunElement.addEventListener("click", autoplay);
// const autoplayStopElement = document.querySelector("#common-container .stop-container");
// autoplayStopElement.addEventListener("click", autoplay);
//
// imageWidth =  document.querySelector("#common-container #demonstrator").getBoundingClientRect().width;
//
// generateImgElements();
// const imageElements = document.querySelectorAll("#common-container img");
// imageElementsAmount = imageElements.length;
//
// function moveRight() {
//   if (demonstratingImage === imageElementsAmount - 1) {
//     setTimeout(moveRight, 0);
//     imagesContainerElement.style.transition = 'transform 0s';
//   } else {
//     imagesContainerElement.style.transition = 'transform 1s';
//   }
//   if (demonstratingImage  < imageElementsAmount - 1) {
//     demonstratingImage++;
//   } else {
//     demonstratingImage = 0;
//   }
//   imagesContainerElement.style.transform = performAnimation(demonstratingImage, imageWidth);
//   switcherTurnOn(demonstratingImage);
// }
//
// function moveLeft() {
//   if (demonstratingImage === 0) {
//     imagesContainerElement.style.transition = 'transform 0s';
//     setTimeout(moveLeft, 0);
//   } else {
//     imagesContainerElement.style.transition = 'transform 1s';
//   }
//   if (demonstratingImage > 0) {
//     demonstratingImage--;
//   } else {
//     demonstratingImage = imageElementsAmount - 1;
//   }
//   if (demonstratingImage === imageElementsAmount - 1) {
//   }
//   imagesContainerElement.style.transform = performAnimation(demonstratingImage, imageWidth);
//   switcherTurnOn(demonstratingImage);
// }
//
// generateSwitchers();
// function generateSwitchers(){
//   [...imageElements].forEach((element, index) => {
//     if (index !== imageElementsAmount - 1) {
//       createSwitcherElement("div", "switcher", document.querySelectorAll("#common-container .switchers-container")[0]);
//     }
//   });
// }
//
// const switcherElements = document.querySelectorAll("#common-container .switcher");
//
// [...switcherElements].forEach((switcher, index) => switcher.addEventListener("click", onSwitcher.bind(null, index)));
//
// switcherTurnOn(demonstratingImage);
//
// function onSwitcher(switcherNumber) {
//   demonstratingImage = switcherNumber;
//   imagesContainerElement.style.transform = performAnimation(demonstratingImage, imageWidth);
//   switcherTurnOn(demonstratingImage);
// }
//
// function performAnimation(numberOfImage, widthOfImage) {
//   return imagesContainerElement.style.transform = `translate(${- numberOfImage * widthOfImage}px`;
// }
//
// function createSwitcherElement(tagName, switcherClass, container) {
//   const element = document.createElement(tagName);
//   element.classList.add(switcherClass);
//   container.appendChild(element);
//   return element;
// }
//
// function switcherTurnOn (switcherNumber) {
//   if (switcherNumber === imageElementsAmount - 1) {
//     switcherNumber = 0;
//   }
//   [...switcherElements].forEach(element => {
//     element.classList.remove("switcherTurnedOn");
//     element.classList.add("switcher");
//   });
//   switcherElements[switcherNumber].classList.add("switcherTurnedOn");
// }
//
// function generateImgElements() {
//   let imagesForHtml = `<${imagesContainerElement.tagName.toLowerCase()} id="${imagesContainerElement.id}">`;
//   let firstImageForDuplication = "";
//   imageFileNames.forEach((fileNameImg, index) => {
//     if (index === 0) {
//       firstImageForDuplication = `<img src="${filePathImg}${fileNameImg}" title="${fileNameImg.
//       slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
//     }
//     imagesForHtml += `<img src="${filePathImg}${fileNameImg}" title="${fileNameImg.
//     slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
//   });
//     imagesForHtml += firstImageForDuplication;
//   imagesForHtml += "</div>";
//   imagesContainerElement.innerHTML = imagesForHtml;
// }
//
// function autoplay(){
//   isAutoplaying = !isAutoplaying;
//     if (isAutoplaying) {
//       autoplayRunElement.classList.add("deactivated");
//       autoplayRunElement.classList.remove("activated");
//       autoplayStopElement.classList.add("activated");
//       autoplayStopElement.classList.remove("deactivated");
//     } else {
//       autoplayRunElement.classList.remove("deactivated");
//       autoplayRunElement.classList.add("activated");
//       autoplayStopElement.classList.remove("activated");
//       autoplayStopElement.classList.add("deactivated");
//     }
//
//   if (isAutoplaying) {
//     autoplayingInterval = setInterval(moveRight, moveTime * 1000);
//   } else {
//     clearInterval(autoplayingInterval);
//     autoplayingInterval = null;
//   }
// }
