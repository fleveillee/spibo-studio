import Character from './Character';

class Canvas {
  private _mainCharacter: Character | null = null;
  protected width: number;
  protected height: number;
  protected element: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D | null;
  protected refreshLoop: number;

  public constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.element = document.createElement('canvas');
    this.context = this.element.getContext('2d');
    document.body.appendChild(this.element);
    const self = this;
    this.refreshLoop = setTimeout((): void => self.refresh(), 1000);
  }

  public get mainCharacter(): Character | null {
    return this._mainCharacter;
  }

  public set mainCharacter(value: Character | null) {
    this._mainCharacter = value;
  }

  public reset(): void {
    if (this.context) {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.width, this.height);
    }
  }

  public draw(): void {
    if (this.context) {
      if (this.mainCharacter && this.mainCharacter.sprite) {
        this.context.drawImage(
          this.mainCharacter.image,
          this.mainCharacter.sprite.xPos,
          this.mainCharacter.sprite.yPos,
          this.mainCharacter.width,
          this.mainCharacter.height,
          this.mainCharacter.xPos,
          this.mainCharacter.yPos,
          this.mainCharacter.width,
          this.mainCharacter.height,
        );
      }
    }
  }

  public move(keyboardEvent: KeyboardEvent): void {
    console.log(keyboardEvent.key);

    if (this.mainCharacter) {
      switch (keyboardEvent.key) {
        case 'w':
        case 'ArrowUp':
          this.mainCharacter.moveUp();
          console.log('Move Up');
          break;
        case 'a':
        case 'ArrowLeft':
          this.mainCharacter.moveLeft();
          console.log('Move Left');
          break;
        case 's':
        case 'ArrowDown':
          this.mainCharacter.moveDown();
          console.log('Move Down');
          break;
        case 'd':
        case 'ArrowRight':
          this.mainCharacter.moveRight();
          console.log('Move Right');
          break;
      }
    }
  }

  public refresh(): void {
    this.reset();
    this.draw();
  }
}

export default Canvas;
