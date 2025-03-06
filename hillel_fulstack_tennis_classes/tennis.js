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
const colorTitle = "yellow";
const colorPressAnyKey = "white";
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
    const ball = new TennisObject(
        "div",windowWidth/2.35,windowHeight/2.75, "", "", ballSize, ballSize, 50,
        "tomato", "", "", "", "3000", "", 1,
        "absolute");
    tennisSceneObjects.push(ball);
    // const ballElement = ball.domElementFromObject("", mainContainer);

    //left bat
    const leftBat = new TennisObject(
        "div",markupWidth + (batWidth/2), windowHeight/2 - batHeight/2, "", "",  batWidth, batHeight, 0, colorLeftBat,
        "white", 10, "", 100, "", 1, "initial", "absolute" );
    tennisSceneObjects.push(leftBat);
    // const leftBatElement = leftBat.domElementFromObject("leftBat", mainContainer);

    //right bat
    const rightBat = new TennisObject(
        "div","", windowHeight/2 - batHeight/2, markupWidth + (batWidth/2), "",  batWidth, batHeight, 0, colorRightBat,
        "white", 10, "",100, "", 1, "initial", "absolute" );
    tennisSceneObjects.push(rightBat);
    // const rightBatElement = rightBat.domElementFromObject("rightBat", mainContainer);

    //lawn
    const lawn = new TennisObject(
        "div",0, 0,  "", "", windowWidth, windowHeight, 0,
        colorLawn, "white", 10,  "", -1000, "", 1,
        "initial", "absolute" );
    tennisSceneObjects.push(lawn);
    // const lawnElement = lawn.domElementFromObject("lawn", mainContainer);

    //top markup
    const topMarkup = new TennisObject(
        "div",0, 0, "", "",  windowWidth, windowHeight/33, 0,
        colorMarkup, "white", "",  "",1, "", "absolute");
    tennisSceneObjects.push(topMarkup);
    // const topMarkupElement = topMarkup.domElementFromObject("", mainContainer);

    //bottom markup
    const bottomMarkup = new TennisObject(
        "div",0, windowHeight - markupWidth, "", "",  windowWidth, markupWidth, 0, colorMarkup,
        "white", "", "", 1, "", "absolute");
    tennisSceneObjects.push(bottomMarkup);
    // const bottomMarkupElement = bottomMarkup.domElementFromObject("", mainContainer);

    //left markup
    const leftMarkup = new TennisObject(
        "div",0, 0,  "", "", markupWidth, windowHeight, 0,
        colorMarkup, "white", "", "", 1, "", 1, "initial", "absolute");
    tennisSceneObjects.push(leftMarkup);
    // const leftMarkupElement = leftMarkup.domElementFromObject("", mainContainer);

    //right markup
    const rightMarkup = new TennisObject(
        "div","", 0, 0, "",  markupWidth, windowHeight, 0, colorMarkup, "white", "",
        1, "", "", 1, "initial", "absolute");
    tennisSceneObjects.push(rightMarkup);
    // const rightMarkupElement = rightMarkup.domElementFromObject("", mainContainer);

    //net
    const netMarkup = new TennisObject(
        "div",(windowWidth - markupWidth)/2, 0, "", "",  markupWidth, windowHeight, 0, colorNet,
        "white", "", "", -100, "", "absolute");
    tennisSceneObjects.push(netMarkup);
    // const netMarkupElement = netMarkup.domElementFromObject("", mainContainer);

    //score left
    const scoreLeft = new TennisObject(
        "div",0, windowHeight/33 - windowHeight/20, "", "",
        windowWidth/2, windowHeight/10, 0, "", colorCount,
        windowWidth/100, "center", 500, "000", 0.3, "initial",
        "absolute");
    tennisSceneObjects.push(scoreLeft);
    // const countLeftElement = scoreLeft.domElementFromObject("", mainContainer);

    //score right
    const scoreRight = new TennisObject(
        "div",windowWidth/2, windowHeight/33 - windowHeight/20, windowWidth/4, "",
        windowWidth/2, windowHeight/10, 0, "", colorCount,
        windowWidth/100, "center", 500, "000",  0.3, "initial",
        "absolute");
    tennisSceneObjects.push(scoreRight);
    // const countRightElement = scoreRight.domElementFromObject("", mainContainer);

    // pause
    const pause = new TennisObject(
        "div",windowWidth/4, windowHeight/2.5 - windowHeight/15, "", "",
        windowWidth/10, windowHeight/10, 0, "", colorPause,
        windowWidth/100, "center", 3500, "PAUSE",  1,
        "none", "absolute");
    tennisSceneObjects.push(pause);
    // const pauseElement = pause.domElementFromObject("", mainContainer);

    // title
    const tennisEvo = new TennisObject(
        "div",0, windowHeight/3, "", "",
        windowWidth, windowHeight/10, 0, "", colorTitle,
        `${windowWidth/100}`, "center", 1000, "Tennis EVO",
        1, "initial", "absolute");
    tennisSceneObjects.push(tennisEvo);
    // const tennisEvoElement = tennisEvo.domElementFromObject("", mainContainer);

    // press any key
    const pressAnyKey = new TennisObject(
        "div",0, windowHeight/1.5, "", "",
        windowWidth, windowHeight/10, 0, "", colorPressAnyKey,
        `${windowWidth/400}`, "center", 1000, "Press any key",
        1, "initial", "absolute");
    tennisSceneObjects.push(pressAnyKey);
    // const tennisEvoElement = pressAnyKey.domElementFromObject("", mainContainer);

    return tennisSceneObjects;
}


function drawScene(objects, container) {
    console.log("Draw scene...");
    objects.forEach(object => object.domElementFromObject(object.tagName,"", container));
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