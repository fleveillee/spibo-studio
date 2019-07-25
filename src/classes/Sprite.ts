class Sprite {
  public name: string;
  public xPos: number;
  public yPos: number;
  public width: number;
  public height: number;

  public constructor(name: string, xPos: number, yPos: number, width: number, height: number) {
    this.name = name;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

export default Sprite;
