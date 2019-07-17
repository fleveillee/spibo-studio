import {Image} from "./Image";

export class Character extends Image {
    protected _speed: number;

    constructor(image: HTMLImageElement, xPos: number, yPos: number, speed: number) {
        super(image, xPos, yPos);
        this._speed = speed;
    }

    public draw(gbc: CanvasRenderingContext2D): void {

        gbc.drawImage(this.image, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
        // canvasRenderingContext2D.stroke();
    }

    public moveUp(gbc: CanvasRenderingContext2D) {
        if (this.yPos - this._speed < 0) {
            this.yPos = 0;
        } else {
            this.yPos -= this._speed;
        }
        gbc.clearRect(0, 0, 640, 480);
        gbc.drawImage(this.image, 15 + this.width, 10, this.width, this.height, this.xPos, this.yPos, this.width,
            this.height);
    }

    public moveDown(gbc: CanvasRenderingContext2D) {
        this.yPos += this._speed;
        gbc.clearRect(0, 0, 640, 480);
        gbc.drawImage(this.image, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    }

    public moveLeft(gbc: CanvasRenderingContext2D) {
        if (this.xPos - this._speed < 0) {
            this.xPos = 0;
        } else {
            this.xPos -= this._speed;
        }
        gbc.clearRect(0, 0, 640, 480);
        gbc.drawImage(this.image, 25 + this.width * 3, 10, this.width, this.height, this.xPos, this.yPos, this.width,
            this.height);
    }

    public moveRight(gbc: CanvasRenderingContext2D) {
        this.xPos += this._speed;
        gbc.clearRect(0, 0, 640, 480);
        gbc.drawImage(this.image, 20 + this.width * 2, 10, this.width, this.height, this.xPos, this.yPos, this.width,
            this.height);
    }

}
