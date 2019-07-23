import Image from './Image';

class Background extends Image {
  public constructor(image: HTMLImageElement, xPos = 0, yPos = 0) {
    super(image, xPos, yPos);
  }
}

export default Background;
