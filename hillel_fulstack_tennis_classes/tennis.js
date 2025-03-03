import {Element} from "./entity/Element.js"

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log(windowWidth, windowHeight);
const ball = new Element(10,0, 0,10, 50, "tomato", "",
    "", "", 1);
// const container = document.body // В якості прикладу використовуємо body як контейнер
const container = document.querySelector("#mainContainer");
ball.createDomElement("div", "", container);
