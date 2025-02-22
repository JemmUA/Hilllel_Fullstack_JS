export class Carrousel {
    images = [];
    imageElementsAmount = 0;
    moveDuration;
    disableSwitchers;
    disableAutoplay;
    moveDirection;
    colorSliderBackground;

    demonstratingImage = 0;
    imageWidth = 0;
    isAutoplaying = false;
    autoplayingInterval;
    imagesContainerElement;

    constructor(parameters) {
        if(!parameters.sliderId) {
            throw new Error ("Slider ID is required");
        }
        if(!Array.isArray(parameters.images) || !parameters.images.length) {
            throw new Error ("There are no images provided");
        }

        const defaultParameters = {
            sliderId: ``,
            images: [],
            filePathImg: ``,
            imageElementsAmount: this.images.length,
            moveDuration: 1,
            disableSwitchers: false,
            disableAutoplay: false,
            moveDirection: "right",
            colorSliderBackground: "#777777",
        }

        const options = {
            ...defaultParameters,
            ...parameters
        }

        this.sliderId = `#${options.sliderId}`;
        this.imageElementsAmount = options.images.length;
        this.filePathImg = options.filePathImg;
        this.images = options.images;
        this.moveDuration = options.moveDuration;
        this.disableSwitchers = options.disableSwitchers;
        this.disableAutoplay = options.disableAutoplay;
        this.moveDirection = options.moveDirection;
        this.colorSliderBackground = options.colorSliderBackground;

        this.startEngine();
        this.managingElements();
        this.colorizeElements();
    }

    startEngine() {
        document.querySelector(`${this.sliderId} .previous`).addEventListener("click", this.moveLeft.bind(this));
        document.querySelector(`${this.sliderId} .next`).addEventListener("click", this.moveRight.bind(this));

        this.imagesContainerElement = document.querySelector(`${this.sliderId} .images-container`);

        this.imageWidth = document.querySelector(`${this.sliderId} .demonstrator`).getBoundingClientRect().width;
        this.generateImgElements();
        this.imageElements = document.querySelectorAll(`${this.sliderId} img`);
        this.imageElementsAmount = this.imageElements.length;
    }

    managingElements() {
        if (!this.disableAutoplay) {
            this.autoplayRunElement = document.querySelector(`${this.sliderId} .run-container`);
            this.autoplayRunElement.addEventListener("click", this.autoplay.bind(this));

            this.autoplayStopElement = document.querySelector(`${this.sliderId} .stop-container`);
            this.autoplayStopElement.addEventListener("click", this.autoplay.bind(this));
        } else {
            document.querySelector(`${this.sliderId} .run-container`).remove();
            document.querySelector(`${this.sliderId} .stop-container`).remove();
        }
        if (!this.disableSwitchers) {
            this.generateSwitchers();
            this.switcherElements = document.querySelectorAll(`${this.sliderId} .switcher`);
            [...this.switcherElements].forEach((switcher, index) => switcher.addEventListener("click", this.onSwitcher.bind(this, index)));
            this.onSwitcher(this.demonstratingImage);
        }
        if (this.disableSwitchers && this.disableAutoplay) {
            document.querySelector(`${this.sliderId} .autoplay-container`).remove();
            document.querySelector(`${this.sliderId} .switchers-container`).remove();
            document.querySelector(`${this.sliderId} .empty-box`).remove();
        }
    }

    colorizeElements() {
        document.querySelector(`${this.sliderId} .previous`).style.backgroundColor = this.colorSliderBackground;
        document.querySelector(`${this.sliderId} .next`).style.backgroundColor = this.colorSliderBackground;
    }

    moveLeft() {
        if (this.demonstratingImage === 0) {
            this.imagesContainerElement.style.transition = 'transform 0s';
            setTimeout(this.moveLeft.bind(this), 0);
        } else {
            this.imagesContainerElement.style.transition = 'transform 1s';
        }
        if (this.demonstratingImage > 0) {
            this.demonstratingImage--;
        } else {
            this.demonstratingImage = this.imageElementsAmount - 1;
        }
        if (this.demonstratingImage === this.imageElementsAmount - 1) {
        }
        this.imagesContainerElement.style.transform = this.performAnimation(this.demonstratingImage, this.imageWidth);
        if (!this.disableSwitchers) {
            this.switcherTurnOn(this.demonstratingImage);
        }
    }

    moveRight() {
        if (this.demonstratingImage === this.imageElementsAmount - 1) {
            setTimeout(this.moveRight.bind(this), 0);
            this.imagesContainerElement.style.transition = 'transform 0s';
        } else {
            this.imagesContainerElement.style.transition = 'transform 1s';
        }
        if (this.demonstratingImage  < this.imageElementsAmount - 1) {
            this.demonstratingImage++;
        } else {
            this.demonstratingImage = 0;
        }
        this.imagesContainerElement.style.transform = this.performAnimation(this.demonstratingImage, this.imageWidth);
        if (!this.disableSwitchers) {
            this.switcherTurnOn(this.demonstratingImage);
        }
    }

    generateImgElements() {
        let imagesForHtml = "";
        let firstImageForDuplication = "";
        this.images.forEach((fileNameImg, index) => {
            if (index === 0) {
                firstImageForDuplication = `<img src="${this.filePathImg}${fileNameImg}" title="${fileNameImg.
                slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
            }
            imagesForHtml += `<img src="${this.filePathImg}${fileNameImg}" title="${fileNameImg.
            slice(0, -4)}" alt="${fileNameImg.slice(0, -4)}">`;
        });
        imagesForHtml += firstImageForDuplication;
        this.imagesContainerElement.innerHTML = imagesForHtml;
    }

    generateSwitchers(){
        [...this.imageElements].forEach((_, index) => {
            if (index !== this.imageElementsAmount - 1) {
                this.createSwitcherElement("div", "switcher", document
                    .querySelectorAll(`${this.sliderId} .switchers-container`)[0]);
            }
        });
    }

    onSwitcher(switcherNumber) {
        this.demonstratingImage = switcherNumber;
        this.imagesContainerElement.style.transform = this.performAnimation(this.demonstratingImage, this.imageWidth);
        this.switcherTurnOn(this.demonstratingImage);
    }

    performAnimation(numberOfImage, widthOfImage) {
        return this.imagesContainerElement.style.transform = `translate(${- numberOfImage * widthOfImage}px`;
    }

    createSwitcherElement(tagName, switcherClass, container) {
        const element = document.createElement(tagName);
        element.classList.add(switcherClass);
        container.appendChild(element);
        return element;
    }

    switcherTurnOn (switcherNumber) {
        if (switcherNumber === this.imageElementsAmount - 1) {
            switcherNumber = 0;
        }
        [...this.switcherElements].forEach(element => {
            element.classList.remove("switcherTurnedOn");
            element.classList.add("switcher");
        });
        [...this.switcherElements][switcherNumber].classList.add("switcherTurnedOn");
    }

    autoplay(){
        this.isAutoplaying = !this.isAutoplaying;
        if (this.isAutoplaying) {
            this.autoplayRunElement.classList.remove("activated");
            this.autoplayRunElement.classList.add("deactivated");
            this.autoplayStopElement.classList.remove("deactivated");
            this.autoplayStopElement.classList.add("activated");
        } else {
            this.autoplayRunElement.classList.remove("deactivated");
            this.autoplayRunElement.classList.add("activated");
            this.autoplayStopElement.classList.remove("activated");
            this.autoplayStopElement.classList.add("deactivated");
        }

        if (this.isAutoplaying) {
            if (this.moveDirection === "right") {
                this.autoplayingInterval = setInterval(this.moveRight.bind(this), this.moveDuration * 1000);
            } else {
                this.autoplayingInterval = setInterval(this.moveLeft.bind(this), this.moveDuration * 1000);
            }
        } else {
            clearInterval(this.autoplayingInterval);
            this.autoplayingInterval = null;
        }
    }
}