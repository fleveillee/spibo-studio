import Image from './Image';

class Character extends Image {
  protected speed: number;

  public constructor(image: HTMLImageElement, xPos: number, yPos: number, speed: number) {
    super(image, xPos, yPos);
    this.speed = speed;
  }

  public draw(gbc: CanvasRenderingContext2D | null): void {
    if (gbc) {
      gbc.drawImage(this.image, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    }
  }

  public moveUp(gbc: CanvasRenderingContext2D | null): void {
    if (this.yPos - this.speed < 0) {
      this.yPos = 0;
    } else {
      this.yPos -= this.speed;
    }
    if (gbc) {
      gbc.clearRect(0, 0, 640, 480);
      gbc.drawImage(
        this.image,
        15 + this.width,
        10,
        this.width,
        this.height,
        this.xPos,
        this.yPos,
        this.width,
        this.height,
      );
    }

  }

  public moveDown(gbc: CanvasRenderingContext2D | null): void {
    this.yPos += this.speed;
    if (gbc) {
      gbc.clearRect(0, 0, 640, 480);
      gbc.drawImage(this.image, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    }
  }

  public moveLeft(gbc: CanvasRenderingContext2D | null): void {
    if (this.xPos - this.speed < 0) {
      this.xPos = 0;
    } else {
      this.xPos -= this.speed;
    }
    if (gbc) {
      gbc.clearRect(0, 0, 640, 480);
      gbc.drawImage(
        this.image,
        25 + this.width * 3,
        10,
        this.width,
        this.height,
        this.xPos,
        this.yPos,
        this.width,
        this.height,
      );
    }

  }

  public moveRight(gbc: CanvasRenderingContext2D | null): void {
    this.xPos += this.speed;
    if (gbc) {
      gbc.clearRect(0, 0, 640, 480);
      gbc.drawImage(
        this.image,
        20 + this.width * 2,
        10,
        this.width,
        this.height,
        this.xPos,
        this.yPos,
        this.width,
        this.height,
      );
    }

  }
}

export default Character;
