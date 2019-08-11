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

  public xIsWithinBoundaries(xPosition: number): boolean {
    const { left, right } = this;
    return left <= xPosition && xPosition <= right;
  }

  public yIsWithinBoundaries(yPosition: number): boolean {
    const { top, bottom } = this;
    return top <= yPosition && yPosition <= bottom;
  }
}

export default Boundaries;
