import CanvasImageSpritePosition from './CanvasImageSpritePosition';

class CanvasImageSprite {
  public name: string;

  public width: number;

  public height: number;

  public position: CanvasImageSpritePosition;

  public constructor(name: string, width: number, height: number, position: CanvasImageSpritePosition) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.position = position;
  }

  public get pos(): CanvasImageSpritePosition {
    return this.position;
  }

  public set pos(position: CanvasImageSpritePosition) {
    this.position = position;
  }
}

export default CanvasImageSprite;
