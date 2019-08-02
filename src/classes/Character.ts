import CanvasImage from './CanvasImage';
import Sprite from './Sprite';

class Character extends CanvasImage {
  protected speed: number = 5;
  public activeSprite: Sprite | null = null;

  public constructor(imageSrc: string, width?: number, height?: number, speed?: number) {
    super(imageSrc, width, height);
    if (speed) {
      this.speed = speed;
    }
  }

  public moveUp(): void {
    if (this.yPos - this.speed < 0) {
      this.yPos = 0;
    } else {
      this.yPos -= this.speed;
    }
    this.setActiveSprite('movingUp');
  }

  public moveDown(): void {
    this.yPos += this.speed;
    this.setActiveSprite('movingDown');
  }

  public moveLeft(): void {
    if (this.xPos - this.speed < 0) {
      this.xPos = 0;
    } else {
      this.xPos -= this.speed;
    }
    this.setActiveSprite('movingLeft');
  }

  public moveRight(): void {
    this.xPos += this.speed;
    this.setActiveSprite('movingRight');
  }

  public setActiveSprite(name: string): boolean {
    let found = false;
    this.sprites.forEach((sprite): void => {
      if (sprite.name == name) {
        this.activeSprite = sprite;
        found = true;
        return;
      }
    });
    return found;
  }
}

export default Character;
