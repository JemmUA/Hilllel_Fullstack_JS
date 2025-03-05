export class TennisObject {
    constructor(
        xPos, yPos, width, height, borderRadius, backgroundColor, color, fontSize, zIndex,
        textContent, opacity = 1, display="initial", position = "absolute") {
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
        this.display = display;
        this.position = position;
    }

    createDomElement(tagName, textContent, container) {
        const element = document.createElement(tagName);
        element.innerText = textContent;
        container.appendChild(element);
        return element;
    }

    createDomElementFromObject (textContent, container) {
        const domElement = this.createDomElement("div", "", container);
        domElement.style.width = `${this.width}px`;
        domElement.style.height = `${this.height}px`;
        domElement.style.borderRadius = `${this.borderRadius}%`;
        domElement.style.zIndex = `${this.zIndex}`;
        domElement.style.opacity = `${this.opacity}`;
        domElement.style.display = `${this.display}`;
        domElement.style.position = `${this.position}`;
        domElement.style.top = `${this.yPos}px`;
        domElement.style.left = `${this.xPos}px`;
        domElement.style.background = `${this.backgroundColor}`;
        domElement.style.color = `${this.color}`;
        domElement.style.fontSize = `${this.fontSize}rem`;
        domElement.innerText = `${this.textContent}`;
        return domElement;
    }

}