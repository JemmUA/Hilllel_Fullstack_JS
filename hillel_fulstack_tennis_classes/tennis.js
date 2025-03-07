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
const colorBall = "tomato";
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

let tennisObjects = buildScene(mainContainer);
// console.log(tennisObjects);
drawScene(tennisObjects, mainContainer);
// let interval = setInterval(mainEngine, frequency);

addEventListener("resize", (event) => {
    removeDomElements();
    tennisObjects = rebuildScene(tennisObjects);
    drawScene(tennisObjects, mainContainer);
});

function buildScene (mainContainer) {
    console.log("Building scene...");

    const tennisSceneObjects = [];
    //ball
    const ball = new TennisObject(
        "div",windowWidth/2.35,windowHeight/2.75, "", "", ballSize, ballSize, 50,
        colorBall, "", "", "", "3000", "", 1,
        "initial", "absolute");
    tennisSceneObjects.push(ball);
    // const ballElement = ball.domElementFromObject("", mainContainer);

    //left bat
    const leftBat = new TennisObject(
        "div",markupWidth + (batWidth/2), windowHeight/2 - batHeight/2, "", "",  batWidth, batHeight, 0, colorLeftBat,
        "", 10, "", 100, "", 1, "initial", "absolute" );
    tennisSceneObjects.push(leftBat);
    // const leftBatElement = leftBat.domElementFromObject("leftBat", mainContainer);

    //right bat
    const rightBat = new TennisObject(
        "div","", windowHeight/2 - batHeight/2, markupWidth + (batWidth/2), "",  batWidth, batHeight, 0, colorRightBat,
        "", 10, "",100, "", 1, "initial", "absolute" );
    tennisSceneObjects.push(rightBat);
    // const rightBatElement = rightBat.domElementFromObject("rightBat", mainContainer);

    //lawn
    const lawn = new TennisObject(
        "div",0, 0,  "", "", windowWidth, windowHeight, 0,
        colorLawn, "", 10,  "", -1000, "", 1,
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
        "div",(windowWidth - markupWidth)/2, 0, "", "",  markupWidth, windowHeight,
        0, colorNet, "", "", "", -100, "", "absolute");
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
        windowWidth/100, "center", 1000, "Tennis EVO",
        1, "initial", "absolute");
    tennisSceneObjects.push(tennisEvo);
    // const tennisEvoElement = tennisEvo.domElementFromObject("", mainContainer);

    // press any key
    const pressAnyKey = new TennisObject(
        "div",0, windowHeight/1.5, "", "",
        windowWidth, windowHeight/10, 0, "", colorPressAnyKey,
        windowWidth/400, "center", 1000, "Press any key",
        1, "initial", "absolute");
    tennisSceneObjects.push(pressAnyKey);
    // const tennisEvoElement = pressAnyKey.domElementFromObject("", mainContainer);

    return tennisSceneObjects;
}

function drawScene(objects, container) {
        console.log("Draw scene...");
        objects.forEach(object => object.domElementFromObject(object.tagName,"", container));

    // let elementsHtml = "";
    // objects.forEach(object => elementsHtml += object.domElementFromObject(object.tagName,"", container));
    // container.innerHTML = elementsHtml;
    // console.log(elementsHtml);
}

function rebuildScene(tennisSceneObjects) {
    console.log("Rebuild Scene...");
//ball
    tennisSceneObjects[0].setObjectAttributes(
        "div",windowWidth/2.35,windowHeight/2.75, "", "",
        ballSize, ballSize, 50, colorBall, "", "",
        "", "3000", "", 1, "initial", "absolute");

//left bat
    tennisSceneObjects[1].setObjectAttributes(
        "div",markupWidth + (batWidth/2), windowHeight/2 - batHeight/2,
        "", "",  batWidth, batHeight, 0, colorLeftBat,
        "", 10, "", 100, "", 1,
        "initial", "absolute" );

//right bat
    tennisSceneObjects[2].setObjectAttributes(
        "div","", windowHeight/2 - batHeight/2,
        markupWidth + (batWidth/2), "",  batWidth, batHeight, 0,
        colorRightBat, "", 10, "",100, "", 1,
        "initial", "absolute" );

//lawn
    tennisSceneObjects[3].setObjectAttributes(
        "div",0, 0,  "", "", windowWidth, windowHeight,
        0, colorLawn, "", 10,  "", -1000,
        "", 1, "initial", "absolute" );

//top markup
    tennisSceneObjects[4].setObjectAttributes(
        "div",0, 0, "", "",  windowWidth,
        markupWidth, 0, colorMarkup, "", "",
        "",1, "", "absolute");

//bottom markup
    tennisSceneObjects[5].setObjectAttributes(
        "div",0, windowHeight - markupWidth, "", "",
        windowWidth, markupWidth, 0, colorMarkup, "", "", "",
        1, "", "absolute");

//left markup
    tennisSceneObjects[6].setObjectAttributes(
        "div",0, 0,  "", "", markupWidth, windowHeight,
        0, colorMarkup, "white", "", "", 1,
        "", 1, "initial", "absolute");

//right markup
    tennisSceneObjects[7].setObjectAttributes(
        "div","", 0, 0, "",  markupWidth, windowHeight,
        0, colorMarkup, "white", "", 1, "",
        "", 1, "initial", "absolute");

//net
    tennisSceneObjects[8].setObjectAttributes(
        "div",(windowWidth - markupWidth)/2, 0, "", "",
        markupWidth, windowHeight, 0, colorNet, "", "", "",
        -100, "", "absolute");

//score left
    tennisSceneObjects[9].setObjectAttributes(
        "div",0, windowHeight/33 - windowHeight/20, "",
        "", windowWidth/2, windowHeight/10, 0,
        "", colorCount, windowWidth/100, "center",
        500, "000", 0.3, "initial", "absolute");

//score right
    tennisSceneObjects[10].setObjectAttributes(
        "div",windowWidth/2, windowHeight/33 - windowHeight/20,
        windowWidth/4, "", windowWidth/2, windowHeight/10,
        0, "", colorCount, windowWidth/100, "center",
        500, "000",  0.3, "initial", "absolute");

// pause
    tennisSceneObjects[11].setObjectAttributes(
        "div",windowWidth/4, windowHeight/2.5 - windowHeight/15, "",
        "", windowWidth/10, windowHeight/10, 0,
        "", colorPause, windowWidth/100, "center", 3500,
        "PAUSE",  1, "none", "absolute");

// title
    tennisSceneObjects[12].setObjectAttributes(
        "div",0, windowHeight/3, "", "",
        windowWidth, windowHeight/10, 0, "", colorTitle,
        windowWidth/100, "center", 1000, "Tennis EVO",
        1, "initial", "absolute");

// press any key
    tennisSceneObjects[13].setObjectAttributes(
        "div",0, windowHeight/1.5, "", "",
        windowWidth, windowHeight/10, 0, "", colorPressAnyKey,
        windowWidth/400, "center", 1000, "Press any key",
        1, "initial", "absolute");

    return tennisSceneObjects;
}

function mainEngine () {
    console.log("running Engine");
    // xBallPosition += xBallDelta;
    // yBallPosition += yBallDelta;
    // const ball = tennisObjects[0];
    // console.log(ball);
    // ball.xPos = `${xBallPosition}px`;

    // ball.style.left = `${xBallPosition}px`;
    // ball.style.top = `${yBallPosition}px`;
    // collisionsWalls(xBallPosition, yBallPosition);
}

function removeDomElements() {
    console.log("Remove Dom Elements...");
    // const domElements = document.querySelectorAll('*');
    // domElements.forEach((element, index) => console.log(index, element));
    // domElements.forEach((element, index) => {
    //         if ((index > 6) && (index === domElements.length - 1)) {
    //             console.log(index);
    //             element.
    //         }
    //     });
    // console.log(domElements);
}