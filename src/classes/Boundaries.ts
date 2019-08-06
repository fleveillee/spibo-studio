class Boundaries {
  public top: number = 0;
  public right: number;
  public bottom: number;
  public left: number = 0;

  public constructor(top: number, right: number, bottom: number, left: number) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
}

export default Boundaries;
