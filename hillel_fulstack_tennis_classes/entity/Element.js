export class Element {
    constructor(
        xPos, yPos, width, height, roundCorner, backgroundColor, color, fontSize, textContent,
        opacity = 1, position = "absolute", ) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.heigt = height;
        this.roundCorner = roundCorner;
        this.bckgroundColor = backgroundColor;
        this.color = color;
        this.fontSize = fontSize;
        this.textContent = textContent;
        this.opacity = opacity;
        this.position = position;
    }

    createDomElement(tagName, textContent, container) {
        const element = document.createElement(tagName);
        element.innerText = textContent;
        container.appendChild(element);
        return element;
    }

    moveElement(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
}