let isPaused = false;
const frequency = 5;
const borderSize = 10;
const batHeight = 15;
const batWidth = 2
const ballSize = 2;

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
    // countCoords();
    collisionsWalls(xBallPosition, yBallPosition);
    collisionsBats();
}

function moveBat(event) {
    // console.log(event);
    //Left Bat
    if (event.key.startsWith("w")) {
        // console.log("caught w");
        if (yLeftBatPosition > topLimit ) {
        yLeftBatPosition -= yBatDelta;
        }
        leftBatElement.style.top = `${yLeftBatPosition}vh`;
    }
    if (event.key.startsWith("s")) {
        if (yLeftBatPosition < bottomLimit) {
        // console.log("caught s");
        yLeftBatPosition += yBatDelta;
        }
        leftBatElement.style.top = `${yLeftBatPosition}vh`;
    }
    //Right Bat
    if (event.key.startsWith("ArrowUp")) {
        // console.log("caught ArrowUp");
        if (yRightBatPosition > topLimit ) {
            yRightBatPosition -= yBatDelta;
        }
        rightBatElement.style.top = `${yRightBatPosition}vh`;
    }
    if (event.key.startsWith("ArrowDown")) {
        // console.log("caught ArrowDown");
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
    // Left bat
    let xVwToPx = window.innerWidth / 100;
    let yHwToPx = window.innerHeight / 100;

    if (xBallDelta < 0
        && xBallPosition <= (Math.floor((xLeftBatPosition + 5) * yHwToPx))
        && (yBallPosition >= yLeftBatPosition * yHwToPx
        && yBallPosition <= (yLeftBatPosition * yHwToPx) + (batHeight * yHwToPx)
        )
    ) {
        xBallDelta = -xBallDelta;
    }

    // Right bat

}

// function countCoords() {
//     let xVwToPx = window.innerWidth/100;
//     let yHwToPx = window.innerHeight/100;
//
//     // Top of Bat
//     // if (yBallPosition >= yLeftBatPosition * yHwToPx) {
//     //     // xBallDelta = -xBallDelta;
//     //     console.log("Y ball:", yBallPosition, "Y bat:", yLeftBatPosition * yHwToPx);
//     //     clearInterval(interval);
//     // }
//
//     // Bottom of Bat
//     // if (yBallPosition >= (yLeftBatPosition * yHwToPx) + ((batHeight) * yHwToPx)) {
//     // console.log(yLeftBatPosition + batHeight);
//     //     xBallDelta = -xBallDelta;
//     //     console.log("Y ball:", yBallPosition, "Y bat:", yLeftBatPosition * yHwToPx);
//     //     clearInterval(interval);
//     // }
//
//     // if (
//     //     yBallPosition >= yLeftBatPosition * yHwToPx
//     //     &&
//     //     yBallPosition <= (yLeftBatPosition * yHwToPx) + (batHeight * yHwToPx)
//     // ) {
//     // console.log("yBall:", yBallPosition, "yBat:", (yLeftBatPosition * yHwToPx), "bat height:", (batHeight * yHwToPx) );
//     // // if (yBallPosition <= (yLeftBatPosition * yHwToPx) + (batHeight * yHwToPx)) {
//     //     ball.style.backgroundColor = "green";
//     // } else {
//     //     ball.style.backgroundColor = "red ";
//     // }
// }