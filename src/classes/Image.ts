export abstract class Image {
    protected _xPos: number;
    protected _yPos: number;
    protected _image: HTMLImageElement;

    protected constructor(image: HTMLImageElement, xPos = 0, yPos = 0) {
        this._image = image;
        this._xPos = xPos;
        this._yPos = yPos;
    }

    get xPos(): number {
        return this._xPos;
    }

    set xPos(value: number) {
        this._xPos = value;
    }

    get yPos(): number {
        return this._yPos;
    }

    set yPos(value: number) {
        this._yPos = value;
    }

    get image(): HTMLImageElement {
        return this._image;
    }

    set image(value: HTMLImageElement) {
        this._image = value;
    }

    get width(): number {
        return this.image.width;
    }

    get height(): number {
        return this.image.height;
    }


}