import Character from './Character';

class Canvas {

  private _mainCharacter: Character | null = null;
  protected width: number;
  protected height: number;
  protected element: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D | null;

  public constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.element = document.createElement('canvas');

    this.element.width = width;
    this.element.height = height;
    this.element.id = 'game-board';
    this.context = this.element.getContext('2d');
    document.body.appendChild(this.element);


    document.addEventListener('keydown', (event): void => this.move(event));
  }

  public reset(): void {
    if (this.context) {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.width, this.height);
    }
  }

  public draw(): void {
    if (this.context) {
      if (this.mainCharacter && this.mainCharacter.activeSprite) {
        this.context.drawImage(
          this.mainCharacter.image,
          this.mainCharacter.activeSprite.xPos,
          this.mainCharacter.activeSprite.yPos,
          this.mainCharacter.activeSprite.width,
          this.mainCharacter.activeSprite.height,
          this.mainCharacter.xPos,
          this.mainCharacter.yPos,
          this.mainCharacter.activeSprite.width,
          this.mainCharacter.activeSprite.height,
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
          this.refresh();
          console.log('Move Up');
          break;
        case 'a':
        case 'ArrowLeft':
          this.mainCharacter.moveLeft();
          this.refresh();
          console.log('Move Left');
          break;
        case 's':
        case 'ArrowDown':
          this.mainCharacter.moveDown();
          this.refresh();
          console.log('Move Down');
          break;
        case 'd':
        case 'ArrowRight':
          this.mainCharacter.moveRight();
          this.refresh();
          console.log('Move Right');
          break;
      }
    }
  }

  public refresh(): void {
    this.reset();
    this.draw();
  }

  public get mainCharacter(): Character | null {
    return this._mainCharacter;
  }

  public set mainCharacter(value: Character | null) {
    console.log('seting up');
    this._mainCharacter = value;
    this.refresh();
  }
}

export default Canvas;
