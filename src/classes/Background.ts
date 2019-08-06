import CanvasImage from './CanvasImage';

class Background extends CanvasImage {
  public scrollable: boolean = false;
  public xPos: number = 0;
  public yPos: number = 0;

  public constructor(
    imageSrc: string,
    width?: number,
    height?: number,
    scrollable?: boolean,
    xPos?: number,
    yPos?: number,
  ) {
    super(imageSrc, width, height);
    if (scrollable != null) this.scrollable = scrollable;
    if (xPos != null) this.xPos = xPos;
    if (yPos != null) this.yPos = yPos;
  }

  public get height(): number {
    return this.image.height;
  }

  public get width(): number {
    return this.image.width;
  }
}

export default Background;
