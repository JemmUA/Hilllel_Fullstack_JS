export class TennisObject {
    constructor(
        tagName, xPos, yPos, xWidthPos, yHeightPos, width, height, borderRadius, backgroundColor,
        color, fontSize, textAlign, zIndex, textContent, opacity = 1,
        display="initial", position = "absolute") {

        // setObjectAttributes(tagName, xPos, yPos, xWidthPos, yHeightPos,
        //     width, height, borderRadius, backgroundColor,
        //     color, fontSize, textAlign, zIndex, textContent, opacity,
        //     display, position);
        this.tagName = tagName;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xWidthPos = xWidthPos;
        this.yHeightPos = yHeightPos;
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.zIndex = zIndex;
        this.textContent = textContent;
        this.opacity = opacity;
        this.display = display;
        this.position = position;
    }

    setObjectAttributes(tagName, xPos, yPos, xWidthPos, yHeightPos, width, height,
                        borderRadius, backgroundColor, color, fontSize, textAlign, zIndex, textContent,
                        opacity = 1, display="initial", position = "absolute") {
        this.tagName = tagName;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xWidthPos = xWidthPos;
        this.yHeightPos = yHeightPos;
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
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

    domElementFromObject (tagName, textContent, container) {

        const domElement = this.createDomElement(tagName, "", container);
        // console.log("DOM element:", domElement);
        domElement.style.left = `${this.xPos}px`;
        domElement.style.top = `${this.yPos}px`;
        domElement.style.right = `${this.xWidthPos}px`;
        domElement.style.bottom = `${this.yHeightPos}px`;
        domElement.style.width = `${this.width}px`;
        domElement.style.height = `${this.height}px`;
        domElement.style.borderRadius = `${this.borderRadius}%`;
        domElement.style.backgroundColor = `${this.backgroundColor}`;
        domElement.style.color = `${this.color}`;
        domElement.style.fontSize = `${this.fontSize}rem`;
        domElement.style.textAlign = `${this.textAlign}`;
        domElement.style.zIndex = `${this.zIndex}`;
        domElement.innerText = `${this.textContent}`;
        domElement.style.opacity = `${this.opacity}`;
        domElement.style.display = `${this.display}`;
        domElement.style.position = `${this.position}`;

        return domElement;
    }

}