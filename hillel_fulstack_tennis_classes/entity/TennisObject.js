export class TennisObject {
    constructor(
        xPos, yPos, width, height, borderRadius, backgroundColor, color, fontSize, zIndex,
        textContent, opacity = 1, position = "absolute") {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.fontSize = fontSize;
        this.zIndex = zIndex;
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