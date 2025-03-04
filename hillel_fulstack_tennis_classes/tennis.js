import {TennisObject} from "./entity/TennisObject.js"

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log(windowWidth, windowHeight);
const ball = new TennisObject(30,30, 5,5, 50, "tomato",
    "", "", "1000", "", 1, "absolute");
const container = document.querySelector("#mainContainer");
const ballDomElement = ball.createDomElement("div", "", container);
ballDomElement.style.width = `${ball.width}vw`;
ballDomElement.style.height = `${ball.height}vw`;
ballDomElement.style.borderRadius = `${ball.borderRadius}%`;
ballDomElement.style.zIndex = `${ball.zIndex}`;
ballDomElement.style.display = `${ball.position}`;
ballDomElement.style.top = `${ball.xPos}px`;
ballDomElement.style.left = `${ball.yPos}px`;
ballDomElement.style.background = `${ball.backgroundColor}`;