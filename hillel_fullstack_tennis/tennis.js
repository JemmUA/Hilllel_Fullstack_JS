let isPaused = false;
const frequency = 10;
const borderSize = 0;
let xLeftBatPosition = 3;
let yLeftBatPosition = 50;
let xRightBatPosition = 3;
let yRightBatPosition = 50;
// const xBatDelta = 2;
const yBatDelta = 2;
let xBallPosition = 100;
let yBallPosition = 100;
let xBallDelta = 1;
let yBallDelta = 1;
const topLimit = 3;
const bottomLimit = 97;

const ball = document.getElementById("theBall");
const leftBatElement = document.getElementById("theLeftBat");
const rightBatElement = document.getElementById("theRightBat");
document.addEventListener("keydown", moveBat);
document.addEventListener("keydown", checkPause);
let interval = setInterval(runMainEngine, frequency);
// clearTimeout(interval);

function runMainEngine () {
    // console.log("moveBall");
    xBallPosition+=xBallDelta;
    yBallPosition+=yBallDelta;
    ball.style.top = `${yBallPosition}px`;
    ball.style.left = `${xBallPosition}px`;
    // console.log("collision");
    collisionsWalls(xBallPosition, yBallPosition);
    collisionsBats();
}

function moveBat(event) {
    //Left Bat
    if (event.key.startsWith("w")) {
        console.log("caught w");
        if (yLeftBatPosition > topLimit ) {
        yLeftBatPosition -= yBatDelta;
        }
        leftBatElement.style.top = `${yLeftBatPosition}vh`;
    }
    if (event.key.startsWith("s")) {
        if (yLeftBatPosition < bottomLimit) {
        console.log("caught s");
        yLeftBatPosition += yBatDelta;
        }
        leftBatElement.style.top = `${yLeftBatPosition}vh`;
    }
    //Right Bat
    if (event.key.startsWith("ArrowUp")) {
        console.log("caught ArrowUp");
        if (yRightBatPosition > topLimit ) {
            yRightBatPosition -= yBatDelta;
        }
        rightBatElement.style.top = `${yRightBatPosition}vh`;
    }
    if (event.key.startsWith("ArrowDown")) {
        console.log("caught ArrowDown");
        if (yRightBatPosition < bottomLimit) {
            yRightBatPosition += yBatDelta;
        }
        rightBatElement.style.top = `${yRightBatPosition}vh`;
    }
}

function collisionsWalls (posX, posY) {
    // console.log(posX, posY, xDelta, yDelta);
    if (posX < borderSize) {
        xBallDelta = -xBallDelta;
    }
    if (posY < borderSize) {
        yBallDelta = -yBallDelta;
    }
    if (posX >= window.innerWidth -borderSize) {
        xBallDelta = -xBallDelta;
    }
    if (posY >= window.innerHeight -borderSize) {
        yBallDelta = -yBallDelta;
    }
}

function checkPause(event) {
    if (event.key.startsWith(" ")) { // space
        // console.log("caught Space");
        if (!isPaused) {
            clearInterval(interval);
        } else {
            interval = setInterval(runMainEngine, frequency);
        }
        isPaused = !isPaused;
        // console.log("Pause:", isPaused);
    }
}

function collisionsBats() {
    let vwCoefficient = window.innerWidth/100;
    if ((xBallPosition <= ((xLeftBatPosition + 2) * vwCoefficient)) && (yBallPosition >= (yLeftBatPosition - 15) * vwCoefficient) && (yBallPosition <= (yLeftBatPosition - 5) * vwCoefficient)) {
        xBallDelta = -xBallDelta;
        console.log("Лівий відбив!");
    }
    if ((xBallPosition <= ((xRightBatPosition - 2) * vwCoefficient)) && (yBallPosition >= (yRightBatPosition + 15) * vwCoefficient) && (yBallPosition <= (yRightBatPosition + 5) * vwCoefficient)) {
        xBallDelta = -xBallDelta;
        console.log("Правий відбив!");
    }
        // console.log(xBallPosition);
    // if (xBallPosition >= window.innerWidth - ((xRightBatPosition + 2) * vwCoefficient)) {
    //     xBallDelta = -xBallDelta;
    // }
    // if (yBallPosition < yLeftBatPosition * vwCoefficient) {
    //     console.log("Y");
    //     console.log(yBallPosition);
    // } else {
    //     console.log("N");
    // }
    // if ((yBallPosition >= (yLeftBatPosition -15) * vwCoefficient) && (yBallPosition <= (yLeftBatPosition -5) * vwCoefficient))  {
    //     // console.log("Y");
    //     // console.log(yBallPosition);
    //     // console.log(((yLeftBatPosition - 5) * vwCoefficient));
    // } else {
    //     // console.log("N");
    // }
}

