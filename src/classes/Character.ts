import Image from './Image';
import Sprite from './Sprite';

class Character extends Image {
  protected speed: number;
  private _sprite: Sprite | null = null;

  public constructor(image: HTMLImageElement, xPos: number = 0, yPos: number = 0, speed: number) {
    super(image, xPos, yPos);
    this.speed = speed;
  }

  public get sprite(): Sprite | null {
    return this._sprite;
  }

  public set sprite(value: Sprite | null) {
    this._sprite = value;
  }

  public moveUp(): void {
    if (this.yPos - this.speed < 0) {
      this.yPos = 0;
    } else {
      this.yPos -= this.speed;
    }
    this.setSpriteByName('moveUp');
  }

  public moveDown(): void {
    this.yPos += this.speed;
    this.setSpriteByName('moveDown');
  }

  public moveLeft(): void {
    if (this.xPos - this.speed < 0) {
      this.xPos = 0;
    } else {
      this.xPos -= this.speed;
    }
    this.setSpriteByName('moveLeft')

  }

  public moveRight(): void {
    this.xPos += this.speed;
    this.setSpriteByName('moveRight')
  }

  private setSpriteByName(name: string): boolean {
    let found = false;
    this.sprites.forEach((sprite): void => {
      if (sprite.name == name) {
        this.sprite = sprite;
        found = true;
        return;
      }
    });
    return found;
  }
}

export default Character;
