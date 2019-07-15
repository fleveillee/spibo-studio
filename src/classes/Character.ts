export class Character {
  protected width: number;
  protected height: number;
  protected xPos: number;
  protected yPos: number;
  protected speed: number;
  protected _sprites!: HTMLImageElement;

  constructor(xPos: number, yPos: number, width: number, height: number, speed: number) {
    this.width = width;
    this.height = height;
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = speed;
  }

  public draw(gbc: CanvasRenderingContext2D): void {
    console.log(this.sprites);
    gbc.drawImage(this.sprites, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    // canvasRenderingContext2D.stroke();
  }

  public get sprites(): HTMLImageElement {
    return this._sprites;
  }

  public set sprites(image: HTMLImageElement) {
    this._sprites = image;
  }

  public moveUp(gbc: CanvasRenderingContext2D) {
    if (this.yPos - this.speed < 0) {
      this.yPos = 0;
    } else {
      this.yPos -= this.speed;
    }
    gbc.clearRect(0, 0, 640, 480);
    gbc.drawImage(this.sprites, 15 + this.width, 10, this.width, this.height, this.xPos, this.yPos, this.width,
      this.height);
  }

  public moveDown(gbc: CanvasRenderingContext2D) {
    this.yPos += this.speed;
    gbc.clearRect(0, 0, 640, 480);
    gbc.drawImage(this.sprites, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
  }

  public moveLeft(gbc: CanvasRenderingContext2D) {
    if (this.xPos - this.speed < 0) {
      this.xPos = 0;
    } else {
      this.xPos -= this.speed;
    }
    gbc.clearRect(0, 0, 640, 480);
    gbc.drawImage(this.sprites, 25 + this.width * 3, 10, this.width, this.height, this.xPos, this.yPos, this.width,
      this.height);
  }

  public moveRight(gbc: CanvasRenderingContext2D) {
    this.xPos += this.speed;
    gbc.clearRect(0, 0, 640, 480);
    gbc.drawImage(this.sprites, 20 + this.width * 2, 10, this.width, this.height, this.xPos, this.yPos, this.width,
      this.height);
  }

}
