import Background from './Background';
import Canvas from './Canvas';
import CanvasImage from './Canvas/CanvasImage';
import CanvasPosition from './Canvas/CanvasPosition';
import CanvasImageSprite from './Canvas/CanvasImageSprite';

class Character extends CanvasImage {
  protected speed: number = 5;

  public activeSprite: CanvasImageSprite | null = null;

  public constructor(imageSrc: string, width?: number, height?: number, speed?: number) {
    super(imageSrc, width, height);
    if (speed) {
      this.speed = speed;
    }
  }

  public moveUp(canvas: Canvas): void {
    const { background, framerate, boundaries } = canvas;
    const { activeSprite, pos: currentPos, speed } = this;

    if (activeSprite && currentPos) {
      const newPos = new CanvasPosition(currentPos.x, currentPos.y - speed / framerate);

      if (!boundaries.yIsWithinBoundaries(newPos.y)) {
        newPos.y = boundaries.top;
        if (background) background.moveUp(speed, framerate);
      }
      if (!this.areFeetRestricted(background, newPos)) {
        this.pos = newPos;
        if (background) this.verifyGateways(background, newPos);
      }
    }
  }

  public moveDown(canvas: Canvas): void {
    const { background, framerate, boundaries, height: canvasHeigth } = canvas;
    const { activeSprite, pos: currentPos, speed } = this;

    if (activeSprite && currentPos) {
      const newPos = new CanvasPosition(currentPos.x, currentPos.y + this.speed / framerate);

      if (!boundaries.yIsWithinBoundaries(newPos.y + activeSprite.height)) {
        newPos.y = boundaries.bottom - activeSprite.height;
        if (background) background.moveDown(speed, framerate, canvasHeigth);
      }
      if (!this.areFeetRestricted(background, newPos)) {
        this.pos = newPos;
        if (background) this.verifyGateways(background, newPos);
      }
    }
  }

  public moveLeft(canvas: Canvas): void {
    const { background, framerate, boundaries } = canvas;
    const { activeSprite, pos: currentPos, speed } = this;

    if (activeSprite && currentPos) {
      const newPos = new CanvasPosition(currentPos.x - speed / framerate, currentPos.y);

      if (!boundaries.xIsWithinBoundaries(newPos.x)) {
        newPos.x = boundaries.left;
        if (background) background.moveLeft(speed, framerate);
      }
      if (!this.areFeetRestricted(background, newPos)) {
        this.pos = newPos;
        if (background) this.verifyGateways(background, newPos);
      }
    }
  }

  public moveRight(canvas: Canvas): void {
    const { background, framerate, boundaries, width: canvasWidth } = canvas;
    const { activeSprite, pos: currentPos, speed } = this;

    if (activeSprite && currentPos) {
      const newPos = new CanvasPosition(currentPos.x + this.speed / framerate, currentPos.y);

      if (!boundaries.xIsWithinBoundaries(newPos.x + activeSprite.width)) {
        newPos.x = boundaries.right - activeSprite.width;
        if (background) background.moveRight(speed, framerate, canvasWidth);
      }
      if (!this.areFeetRestricted(background, newPos)) {
        this.pos = newPos;
        if (background) this.verifyGateways(background, newPos);
      }
    }
  }

  public setActiveSprite(name: string): boolean {
    let found = false;
    const newSprite = this.sprites.find((sprite: CanvasImageSprite): boolean => sprite.name === name);

    if (newSprite) {
      this.activeSprite = newSprite;
      found = true;
    }

    return found;
  }

  public areFeetRestricted(background: Background | null, pos: CanvasPosition): boolean {
    if (background) {
      const feetPositions = this.getFeetPosition(pos);
      if (feetPositions) {
        return background.isRestricted(feetPositions[0]) || background.isRestricted(feetPositions[1]);
      }
    }
    return false;
  }

  public verifyGateways(background: Background | null, pos: CanvasPosition): boolean {
    if (background) {
      const feetPositions = this.getFeetPosition(pos);
      if (feetPositions) {
        background.checkGateways(feetPositions[0]);
        background.checkGateways(feetPositions[1]);
      }
    }
    return false;
  }

  public getFeetPosition(pos: CanvasPosition): CanvasPosition[] | null {
    const { activeSprite } = this;
    if (activeSprite) {
      const outerLeftFoot = new CanvasPosition(pos.x, pos.y + activeSprite.height);
      const outerRightFoot = new CanvasPosition(pos.x + activeSprite.width, pos.y + activeSprite.height);
      return [outerLeftFoot, outerRightFoot];
    }
    return null;
  }
}

export default Character;
