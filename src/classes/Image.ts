import Sprite from './Sprite';

abstract class Image {
  public image: HTMLImageElement;
  public xPos: number;
  public yPos: number;
  private _sprites: Sprite[] = [];

  protected constructor(image: HTMLImageElement, xPos = 0, yPos = 0) {
    this.image = image;
    this.xPos = xPos;
    this.yPos = yPos;
  }

  public get width(): number {
    return this.image.width;
  }

  public get height(): number {
    return this.image.height;
  }

  public get sprites(): Sprite[] {
    return this._sprites;
  }

  public set sprites(value: Sprite[]) {
    this._sprites = value;
  }
}

export default Image;
