import {TennisObject} from "./entity/TennisObject.js"

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log(windowWidth, windowHeight);
const ballWidth = windowWidth/30;
const ballHeight = windowWidth/30;
const ballDiameter = windowWidth/30;
const colorLawn = "#003000";
const markupWidth = windowHeight/33;

const ball = new TennisObject((
    windowWidth/2)-110,(windowHeight/2)-130, ballDiameter, ballDiameter, 50,
    "tomato", "", "", "1000", "", 1,
    "absolute");
const mainContainer = document.querySelector("#mainContainer");
const ballElement = ball.createDomElementFromObject("", mainContainer);

buildScene(mainContainer);

function buildScene (mainContainer) {
    console.log("Building...");

    //lawn
    const lawnObject = new TennisObject(
        0, 0, windowWidth, windowHeight, 0, colorLawn, "white", 10,
        -1000, "", 1, "initial", "absolute" );
    const mainContainerElement = lawnObject.createDomElementFromObject("mainContainerElement", mainContainer);

    //markups
    const topMarkup = new TennisObject(
      0, 0, windowWidth, windowHeight/33, 0, "gray",
        "white", "", 1, "", "absolute");
    const topMarkupElement = topMarkup.createDomElementFromObject("", mainContainer);

    const bottomMarkup = new TennisObject(
      0, windowHeight - markupWidth, windowWidth, markupWidth, 0, "grey",
        "white", "", 1, "", "absolute");
    const bottomMarkupElement = bottomMarkup.createDomElementFromObject("", mainContainer);

    const leftMarkup = new TennisObject(
      0, 0, markupWidth, windowHeight, 0, "grey",
        "white", "", 1, "", "absolute");
    const leftMarkupElement = leftMarkup.createDomElementFromObject("", mainContainer);

    const rightMarkup = new TennisObject(
        windowWidth - markupWidth, 0, markupWidth, windowHeight, 0, "grey",
        "white", "", 1, "", "absolute");
    const rightMarkupElement = rightMarkup.createDomElementFromObject("", mainContainer);

    const centerMarkup = new TennisObject(
        (windowWidth - markupWidth)/2, 0, markupWidth, windowHeight, 0, "grey",
        "white", "", -100, "", "absolute");
    const centerMarkupElement = centerMarkup.createDomElementFromObject("", mainContainer);


}