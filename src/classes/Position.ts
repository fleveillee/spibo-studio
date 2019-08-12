abstract class Position {
  public x: number;

  public y: number;

  protected constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default Position;
