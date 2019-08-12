import CanvasImage from './Canvas/CanvasImage';
import CanvasPosition from './Canvas/CanvasPosition';
import CanvasRectangle from './Canvas/CanvasRectangle';
import BackgroundPositionFactory from './Background/BackgroundPositionFactory';

class Background extends CanvasImage {
  public scrollable: boolean = false;

  public restrictedZones: CanvasRectangle[] = [];

  public constructor(
    imageSrc: string,
    width?: number,
    height?: number,
    scrollable?: boolean,
    position?: CanvasPosition,
  ) {
    super(imageSrc, width, height);
    if (scrollable != null) this.scrollable = scrollable;
    if (position != null) this.position = position;
  }

  public get height(): number {
    return this.image.height;
  }

  public get width(): number {
    return this.image.width;
  }

  public get pos(): CanvasPosition | undefined {
    return this.position;
  }

  public isRestricted(position: CanvasPosition): boolean {
    let restricted = false;
    const charBgPos = BackgroundPositionFactory.getBackgroundPosFromCanvasPos(position, this);
    if (charBgPos) {
      this.restrictedZones.forEach((zone: CanvasRectangle): void => {
        if (
          charBgPos.x > zone.pos.x &&
          charBgPos.x < zone.pos.x + zone.width &&
          (charBgPos.y > zone.pos.y && charBgPos.y < zone.pos.y + zone.height)
        ) {
          restricted = true;
          return;
        }
      });
    }
    return restricted;
  }

  public moveUp(speed: number, framerate: number): void {
    const { scrollable, pos } = this;
    if (scrollable && pos && pos.y > 0) {
      let newYpos = pos.y - speed / framerate;
      if (newYpos < 0) newYpos = 0;
      pos.y = newYpos;
    }
  }

  public moveDown(speed: number, framerate: number, canvasHeight: number): void {
    const { height, pos, scrollable } = this;
    if (scrollable && pos && pos.y < height - canvasHeight) {
      const newYpos = pos.y + speed / framerate;
      pos.y = newYpos > height - canvasHeight ? height - canvasHeight : newYpos;
    }
  }

  public moveLeft(speed: number, framerate: number): void {
    const { scrollable, pos } = this;
    if (scrollable && pos && pos.x > 0) {
      let newXpos = pos.x - speed / framerate;
      if (newXpos < 0) newXpos = 0;
      pos.x = newXpos;
    }
  }

  public moveRight(speed: number, framerate: number, canvasWidth: number): void {
    const { pos, scrollable, width } = this;
    if (scrollable && pos && pos.x < width - canvasWidth) {
      const newXpos = pos.x + speed / framerate;
      pos.x = newXpos > width - canvasWidth ? width - canvasWidth : newXpos;
    }
  }
}

export default Background;
