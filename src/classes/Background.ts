import {Image} from "./Image";

export class Background extends Image {
    constructor(image: HTMLImageElement, xPos = 0, yPos = 0) {
        super(image, xPos, yPos);
    }
}
