import {TennisObject} from "./entity/TennisObject.js"

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const frequency = 1000;
let isPaused = false;
let xBallDelta = 1;
let yBallDelta = 1;
// console.log("Window width:", windowWidth, "Window height:", windowHeight);
let ballSize = windowWidth/33;
let batHeight = windowHeight/5;
let xBallPosition = 0;
let yBallPosition = 0;
let batWidth = windowWidth/40;
const colorLeftBat = "blue";
const colorRightBat = "yellow";
const colorLawn = "#003000";
const colorNet = "green";
const colorCount = "#777777";
const colorPause = "brown";
const colorMarkup = "darkgreen";
let markupWidth = windowHeight/33;
const mainContainer = document.querySelector("#mainContainer");

const tennisObjects = buildScene(mainContainer);
// console.log(tennisObjects);
drawScene(tennisObjects, mainContainer);

let interval = setInterval(mainEngine, frequency);

// addEventListener("resize", (event) => {
//     clearScene();
//     const tennisObjects = buildScene(mainContainer);
//     console.log(tennisObjects);
//     drawScene(tennisObjects, mainContainer);
// });

function buildScene (mainContainer) {
    console.log("Building scene...");

    const tennisSceneObjects = [];
    //ball
    const ball = new TennisObject((
        windowWidth/2)-120,(windowHeight/2)-130, "", "", ballSize, ballSize, 50,
        "tomato", "", "", "", "1000", "", 1,
        "absolute");
    tennisSceneObjects.push(ball);
    // const ballElement = ball.domElementFromObject("", mainContainer);

    //left bat
    const leftBat = new TennisObject(
        markupWidth + (batWidth/2), windowHeight/2 - batHeight/2, "", "",  batWidth, batHeight, 0, colorLeftBat,
        "white", 10, "", 100, "", 1, "initial", "absolute" );
    tennisSceneObjects.push(leftBat);
    // const leftBatElement = leftBat.domElementFromObject("leftBat", mainContainer);

    //right bat
    const rightBat = new TennisObject(
        "", windowHeight/2 - batHeight/2, markupWidth + (batWidth/2), "",  batWidth, batHeight, 0, colorRightBat,
        "white", 10, "",100, "", 1, "initial", "absolute" );
    tennisSceneObjects.push(rightBat);
    // const rightBatElement = rightBat.domElementFromObject("rightBat", mainContainer);

    //lawn
    const lawn = new TennisObject(
        0, 0,  "", "", windowWidth, windowHeight, 0,
        colorLawn, "white", 10,  "", -1000, "", 1,
        "initial", "absolute" );
    tennisSceneObjects.push(lawn);
    // const lawnElement = lawn.domElementFromObject("lawn", mainContainer);

    //top markup
    const topMarkup = new TennisObject(
      0, 0, "", "",  windowWidth, windowHeight/33, 0,
        colorMarkup, "white", "",  "",1, "", "absolute");
    tennisSceneObjects.push(topMarkup);
    // const topMarkupElement = topMarkup.domElementFromObject("", mainContainer);

    //bottom markup
    const bottomMarkup = new TennisObject(
      0, windowHeight - markupWidth, "", "",  windowWidth, markupWidth, 0, colorMarkup,
        "white", "", "", 1, "", "absolute");
    tennisSceneObjects.push(bottomMarkup);
    // const bottomMarkupElement = bottomMarkup.domElementFromObject("", mainContainer);

    //left markup
    const leftMarkup = new TennisObject(
      0, 0,  "", "", markupWidth, windowHeight, 0,
        colorMarkup, "white", "", "", 1, "", 1, "initial", "absolute");
    tennisSceneObjects.push(leftMarkup);
    // const leftMarkupElement = leftMarkup.domElementFromObject("", mainContainer);

    //right markup
    const rightMarkup = new TennisObject(
        "", 0, 0, "",  markupWidth, windowHeight, 0, colorMarkup, "white", "",
        1, "", "", 1, "initial", "absolute");
    tennisSceneObjects.push(rightMarkup);
    // const rightMarkupElement = rightMarkup.domElementFromObject("", mainContainer);

    //net
    const netMarkup = new TennisObject(
        (windowWidth - markupWidth)/2, 0, "", "",  markupWidth, windowHeight, 0, colorNet,
        "white", "", "", -100, "", "absolute");
    tennisSceneObjects.push(netMarkup);
    // const netMarkupElement = netMarkup.domElementFromObject("", mainContainer);

    //score left
    const scoreLeft = new TennisObject(
        windowWidth/4 - windowWidth/10, windowHeight/33 - windowHeight/20, "", "",
        windowWidth/10, windowHeight/10, 0, "", colorCount,
        "20", "center", 500, "000", 0.3, "initial",
        "absolute");
    tennisSceneObjects.push(scoreLeft);
    // const countLeftElement = scoreLeft.domElementFromObject("", mainContainer);

    //score right
    const scoreRight = new TennisObject(
        "", windowHeight/33 - windowHeight/20, windowWidth/4, "",  windowWidth/10,
        windowHeight/10, 0, "", colorCount,
        "20", "center", 500, "000",  0.3, "initial",
        "absolute");
    tennisSceneObjects.push(scoreRight);
    // const countRightElement = scoreRight.domElementFromObject("", mainContainer);

    // pause
    const pause = new TennisObject(
        windowWidth/4, windowHeight/2.5 - windowHeight/15, "", "",
        windowWidth/10, windowHeight/10, 0, "", colorPause,
        `${windowWidth/100}`, "center", 500, "PAUSE",  1,
        "none", "absolute");
    tennisSceneObjects.push(pause);
    // const pauseElement = pause.domElementFromObject("", mainContainer);

    return tennisSceneObjects;
}


function drawScene(objects, container) {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    console.log("Draw scene...");
    objects.forEach(object => object.domElementFromObject("", container));
}

// function clearScene() {
//     tennisObjects.forEach(object => {
//         object.delete();
//     })
// }

function mainEngine () {
    console.log("running Engine");
    xBallPosition += xBallDelta;
    yBallPosition += yBallDelta;
    // const ball = tennisObjects[0];
    // console.log(ball);
    // ball.xPos = `${xBallPosition}px`;

    // ball.style.left = `${xBallPosition}px`;
    // ball.style.top = `${yBallPosition}px`;
    // collisionsWalls(xBallPosition, yBallPosition);
}