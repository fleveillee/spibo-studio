import Sprite from './Sprite';

abstract class CanvasImage extends Image {
  public xPos: number = 0;
  public yPos: number = 0;
  public sprites: Sprite[] = [];

  protected constructor(src: string, width?: number, height?: number) {
    super(width, height);
    this.src = src;
  }

}

export default CanvasImage;
