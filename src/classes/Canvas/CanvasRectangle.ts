import BackgroundPosition from '../Background/BackgroundPosition';

class CanvasRectangle {
  public position: BackgroundPosition;

  public width: number;

  public height: number;

  public constructor(width: number, height: number, position: BackgroundPosition) {
    this.width = width;
    this.height = height;
    this.position = position;
  }

  public get pos(): BackgroundPosition {
    return this.position;
  }

  public set pos(position: BackgroundPosition) {
    this.position = position;
  }

  public isInside(position: BackgroundPosition): boolean {
    return (
      position.x > this.pos.x &&
      position.x < this.pos.x + this.width &&
      position.y > this.pos.y &&
      position.y < this.pos.y + this.height
    );
  }
}

export default CanvasRectangle;
