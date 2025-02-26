// setTimeout (callback, delay);
// setInterval(callback, delay);
// clearTimeout(timeoutFunc);
// clearInterval(intervalFunc);

const frequency = 0;
const borderSize = 0;
let xLeftBatPosition = 3;
let yLeftBatPosition = 50;
let xRightBatPosition = 3;
let yRightBatPosition = 50;
const xBatDelta = 2;
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
const interval = setInterval(runMainEngine, frequency);
// clearTimeout(interval);

function runMainEngine () {
    // console.log("moveBall");
    xBallPosition+=xBallDelta;
    yBallPosition+=yBallDelta;
    ball.style.top = `${yBallPosition}px`;
    ball.style.left = `${xBallPosition}px`;
    // console.log("collision");
    collisionsWalls(xBallPosition, yBallPosition);
    // collisionsBats();
}

function collisionsBats() {
    console.log(xBallPosition, yBallPosition);
    if (xBallPosition <= xLeftBatPosition || xBallPosition >= xRightBatPosition) {
        xBallDelta = -xBallDelta;
    }
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
            console.log("caught s");
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
    if (posX > window.innerWidth -borderSize) {
        xBallDelta = -xBallDelta;
    }
    if (posY > window.innerHeight -borderSize) {
        yBallDelta = -yBallDelta;
    }
}
