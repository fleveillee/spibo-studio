import Sprite from './Sprite';

abstract class CanvasImage {
  public xPos: number = 0;
  public yPos: number = 0;
  public sprites: Sprite[] = [];
  private readonly _image: HTMLImageElement;

  protected constructor(src: string, width?: number, height?: number) {
    this._image = new Image(width, height);
    this._image.src = src;
  }

  public get image(): HTMLImageElement {
    return this._image;
  }

}

export default CanvasImage;
