import CanvasImageSprite from './CanvasImageSprite';
import CanvasPosition from './CanvasPosition';

abstract class CanvasImage {
  public position: CanvasPosition | undefined;
  public sprites: CanvasImageSprite[] = [];
  private readonly _image: HTMLImageElement;

  protected constructor(src: string, width?: number, height?: number) {
    this._image = width && height ? new Image(width, height) : new Image();

    this._image.src = src;
  }

  public get image(): HTMLImageElement {
    return this._image;
  }

  public get pos(): CanvasPosition | undefined {
    return this.position;
  }

  public set pos(position: CanvasPosition | undefined) {
    this.position = position;
  }
}

export default CanvasImage;
