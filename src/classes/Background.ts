import CanvasImage from './CanvasImage';

class Background extends CanvasImage {
  public constructor(imageSrc: string, width?: number, height?: number) {
    super(imageSrc, width, height);
  }
}

export default Background;
