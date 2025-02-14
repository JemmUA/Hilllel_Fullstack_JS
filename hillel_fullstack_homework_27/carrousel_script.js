let imageDemonstratingNumber = 0;


const moverLeftElement = document.getElementById("moverLeft");
const moverRightElement = document.getElementById("moverRight");
console.log(moverLeftElement, moverLeftElement.offsetWidth);
console.log(moverRightElement, moverRightElement.offsetWidth);

const demonstratorElement = document.getElementById("demonstrator");
console.log(demonstratorElement, demonstratorElement.offsetWidth);

const imagesElement = document.getElementsByTagName("img");
console.log("Image width = ", imagesElement.width, "imagesElement = ", imagesElement.length);

const moveLeftEvent = moverLeftElement.addEventListener("click", moveLeft);
const moveRightEvent = moverRightElement.addEventListener("click", moveRight);


function moveLeft() {
  console.log("move left");
  if (imageDemonstratingNumber  < imagesElement.length - 1) {
    imageDemonstratingNumber++;
  } else {
    imageDemonstratingNumber = 0;
  }
    console.log(imageDemonstratingNumber);
    imagesElement[imageDemonstratingNumber].style.transform = `translate(${- imageDemonstratingNumber * demonstratorElement.offsetWidth}px`;

}

function moveRight() {
  console.log("move right");
  if (imageDemonstratingNumber > 0) {
    imageDemonstratingNumber--;
  } else {
    imageDemonstratingNumber = imagesElement.length - 1;
  }
    console.log(imageDemonstratingNumber);
    imagesElement[imageDemonstratingNumber].style.transform = `translate(${imageDemonstratingNumber * demonstratorElement.offsetWidth}px`;

}