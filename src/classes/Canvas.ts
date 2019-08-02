import Character from './Character';

class Canvas {

  private _mainCharacter: Character | null = null;
  protected element: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D | null;

  public constructor(width: number, height: number) {
    this.element = document.createElement('canvas');

    this.element.width = width;
    this.element.height = height;
    this.element.id = 'game-board';
    this.context = this.element.getContext('2d');
    document.body.appendChild(this.element);
    // Listen for keyboard input
    document.addEventListener('keydown', (event): void => this.move(event));
  }

  public reset(): void {
    if (this.context) {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.element.width, this.element.height);
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
    if (this.mainCharacter) {
      switch (keyboardEvent.key) {
        case 'w':
        case 'ArrowUp':
          this.mainCharacter.moveUp();
          this.refresh();
          break;
        case 'a':
        case 'ArrowLeft':
          this.mainCharacter.moveLeft();
          this.refresh();
          break;
        case 's':
        case 'ArrowDown':
          this.mainCharacter.moveDown();
          this.refresh();
          break;
        case 'd':
        case 'ArrowRight':
          this.mainCharacter.moveRight();
          this.refresh();
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
    if (value) {
      this._mainCharacter = value;
      const self = this;
      this._mainCharacter.image.onload = function (): void {
        self.refresh();
      }
    }
  }

}

export default Canvas;
