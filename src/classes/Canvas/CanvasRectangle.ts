import CanvasPosition from './CanvasPosition';

class CanvasRectangle {
  public position: CanvasPosition;

  public width: number;

  public height: number;

  public constructor(width: number, height: number, position: CanvasPosition) {
    this.width = width;
    this.height = height;
    this.position = position;
  }

  public get pos(): CanvasPosition {
    return this.position;
  }

  public set pos(position: CanvasPosition) {
    this.position = position;
  }
}

export default CanvasRectangle;
