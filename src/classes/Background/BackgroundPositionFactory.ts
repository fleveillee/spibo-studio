import Background from '../Background';
import BackgroundPosition from './BackgroundPosition';
import CanvasPosition from '../Canvas/CanvasPosition';

class BackgroundPositionFactory {
  public static getBackgroundPosFromCanvasPos(
    canvasPosition: CanvasPosition,
    { position: bgPosition }: Background,
  ): BackgroundPosition | null {
    if (bgPosition) {
      return new BackgroundPosition(canvasPosition.x + bgPosition.x, canvasPosition.y + bgPosition.y);
    }
    return null;
  }
}

export default BackgroundPositionFactory;
