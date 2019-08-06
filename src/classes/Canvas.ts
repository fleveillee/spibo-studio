import Character from './Character';
import Background from './Background';
import Boundaries from './Boundaries';
import KeyboardInteractions from './KeyboardInteractions';

class Canvas {
  public background: Background | null = null;
  public mainCharacter: Character | null = null;
  public boundaries: Boundaries;
  protected canvas: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D | null;
  private _framerate!: number;
  private refreshInterval: number;
  private refreshIntervalTime: number = 100;
  private keyboardInteractions: KeyboardInteractions;

  public constructor(width: number, height: number, framerate: number = 40) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'game-board';
    this.canvas.width = width;
    this.canvas.height = height;
    this.boundaries = new Boundaries(0, this.width, this.height, 0);
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    // Listen for keyboard input
    const self = this;
    this.framerate = framerate;
    this.refreshInterval = setInterval((): void => self.refresh());

    this.keyboardInteractions = new KeyboardInteractions(this);
  }

  public reset(): void {
    if (this.context) {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  public draw(): void {
    if (this.context) {
      if (this.background) {
        let xScale, yScale;

        if (this.background.scrollable) {
          xScale = this.background.width;
          yScale = this.background.height;
        } else {
          xScale = this.canvas.width;
          yScale = this.canvas.height;
        }
        this.context.drawImage(
          this.background.image,
          this.background.xPos,
          this.background.yPos,
          this.background.width,
          this.background.height,
          0,
          0,
          xScale,
          yScale,
        );
      }
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

  public refresh(): void {
    this.reset();
    this.draw();
  }

  public get height(): number {
    return this.canvas.height;
  }

  public get width(): number {
    return this.canvas.width;
  }

  public set framerate(framerate: number) {
    this._framerate = framerate;
    this.refreshIntervalTime = Math.round(1000 / this.framerate);
  }

  public get framerate(): number {
    return this._framerate;
  }

  //TODO : on set unset or change maincharacter : stop keyboard moving intervals
}

export default Canvas;
