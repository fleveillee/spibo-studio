import CanvasImage from './CanvasImage';
import Sprite from './Sprite';
import Canvas from './Canvas';

class Character extends CanvasImage {
  protected speed: number = 5;
  public activeSprite: Sprite | null = null;

  public constructor(imageSrc: string, width?: number, height?: number, speed?: number) {
    super(imageSrc, width, height);
    if (speed) {
      this.speed = speed;
    }
  }

  public moveUp(canvas: Canvas): void {
    const {
      background,
      framerate,
      boundaries: { top: boundary },
    } = canvas;
    const { activeSprite } = this;

    if (activeSprite) {
      const newY = this.yPos - this.speed / framerate;
      if (newY < boundary) {
        this.yPos = boundary;
        if (background && background.scrollable && background.yPos > 0) {
          const newBgYpos = background.yPos - this.speed / framerate;
          background.yPos = newBgYpos < 0 ? 0 : newBgYpos;
        }
      } else {
        this.yPos = newY;
      }
    }
  }

  public moveDown(canvas: Canvas): void {
    const {
      background,
      framerate,
      boundaries: { bottom: boundary },
    } = canvas;
    const { activeSprite } = this;
    if (activeSprite) {
      const newY = this.yPos + this.speed / framerate;
      if (newY + activeSprite.height > boundary) {
        this.yPos = boundary - activeSprite.height;
        if (background && background.scrollable && background.yPos + canvas.height < background.height) {
          const newBgYpos = background.yPos + this.speed / framerate;
          background.yPos =
            newBgYpos > background.height - canvas.height ? background.height - canvas.height : newBgYpos;
        }
      } else {
        this.yPos = newY;
      }
    }
  }

  public moveLeft(canvas: Canvas): void {
    const {
      background,
      framerate,
      boundaries: { left: boundary },
    } = canvas;
    const { activeSprite } = this;

    if (activeSprite) {
      const newX = this.xPos - this.speed / framerate;
      if (newX < boundary) {
        this.xPos = boundary;
        if (background && background.scrollable && background.xPos > 0) {
          const newBgXpos = background.xPos - this.speed / framerate;
          background.xPos = newBgXpos < 0 ? 0 : newBgXpos;
        }
      } else {
        this.xPos = newX;
      }
    }
  }

  public moveRight(canvas: Canvas): void {
    const {
      background,
      framerate,
      boundaries: { right: boundary },
    } = canvas;
    const { activeSprite } = this;

    if (activeSprite) {
      const newX = this.xPos + this.speed / framerate;
      if (newX + activeSprite.width > boundary) {
        this.xPos = boundary - activeSprite.width;
        if (background && background.scrollable && background.xPos < background.width - canvas.width) {
          const newBgXpos = background.xPos + this.speed / framerate;
          background.xPos = newBgXpos + canvas.width > background.width ? background.width - canvas.width : newBgXpos;
        }
      } else {
        this.xPos = newX;
      }
    }
  }

  public setActiveSprite(name: string): boolean {
    let found = false;
    this.sprites.forEach((sprite): void => {
      if (sprite.name == name) {
        this.activeSprite = sprite;
        found = true;
        return; // quits foreach
      }
    });
    return found;
  }
}

export default Character;
