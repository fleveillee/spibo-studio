import Canvas from './Canvas';

class KeyboardInteractions {
  public movingUp: number | null = null;

  public movingRight: number | null = null;

  public movingDown: number | null = null;

  public movingLeft: number | null = null;

  public constructor(canvas: Canvas) {
    document.addEventListener('keydown', (event): void => {
      if (canvas.mainCharacter) this.move(event, canvas);
    });
    document.addEventListener('keyup', (event): void => this.stopMoving(event, canvas));
  }

  public move(keyboardEvent: KeyboardEvent, canvas: Canvas): void {
    const { mainCharacter, framerate } = canvas;
    if (mainCharacter) {
      switch (keyboardEvent.key) {
        case 'w':
        case 'ArrowUp':
          if (!this.movingUp) {
            mainCharacter.setActiveSprite('movingUp');
            this.movingUp = setInterval(mainCharacter.moveUp.bind(mainCharacter), 1000 / framerate, canvas);
          }
          break;
        case 'a':
        case 'ArrowLeft':
          if (!this.movingLeft) {
            mainCharacter.setActiveSprite('movingLeft');
            this.movingLeft = setInterval(mainCharacter.moveLeft.bind(mainCharacter), 1000 / framerate, canvas);
          }
          break;
        case 's':
        case 'ArrowDown':
          if (!this.movingDown) {
            mainCharacter.setActiveSprite('movingDown');
            this.movingDown = setInterval(mainCharacter.moveDown.bind(mainCharacter), 1000 / framerate, canvas);
          }
          break;
        case 'd':
        case 'ArrowRight':
          if (!this.movingRight) {
            mainCharacter.setActiveSprite('movingRight');
            this.movingRight = setInterval(mainCharacter.moveRight.bind(mainCharacter), 1000 / framerate, canvas);
          }
          break;
        default:
          break;
      }
    }
  }

  public stopMoving(keyboardEvent: KeyboardEvent, canvas: Canvas): void {
    const { mainCharacter } = canvas;
    if (mainCharacter) {
      switch (keyboardEvent.key) {
        case 'w':
        case 'ArrowUp':
          if (this.movingUp) {
            clearInterval(this.movingUp);
            this.movingUp = null;
            if (mainCharacter.activeSprite && mainCharacter.activeSprite.name === 'movingUp') {
              if (this.movingLeft) mainCharacter.setActiveSprite('movingLeft');
              else if (this.movingRight) mainCharacter.setActiveSprite('movingRight');
              else if (this.movingDown) mainCharacter.setActiveSprite('movingDown');
            }
          }
          break;
        case 'a':
        case 'ArrowLeft':
          if (this.movingLeft) {
            clearInterval(this.movingLeft);
            this.movingLeft = null;
            if (mainCharacter.activeSprite && mainCharacter.activeSprite.name === 'movingLeft') {
              if (this.movingUp) mainCharacter.setActiveSprite('movingUp');
              else if (this.movingDown) mainCharacter.setActiveSprite('movingDown');
              else if (this.movingRight) mainCharacter.setActiveSprite('movingRight');
            }
          }
          break;
        case 's':
        case 'ArrowDown':
          if (this.movingDown) {
            clearInterval(this.movingDown);
            this.movingDown = null;
            if (mainCharacter.activeSprite && mainCharacter.activeSprite.name === 'movingDown') {
              if (this.movingLeft) mainCharacter.setActiveSprite('movingLeft');
              else if (this.movingRight) mainCharacter.setActiveSprite('movingRight');
              else if (this.movingUp) mainCharacter.setActiveSprite('movingUp');
            }
          }
          break;
        case 'd':
        case 'ArrowRight':
          if (this.movingRight) {
            clearInterval(this.movingRight);
            this.movingRight = null;
            if (mainCharacter.activeSprite && mainCharacter.activeSprite.name === 'movingRight') {
              if (this.movingUp) mainCharacter.setActiveSprite('movingUp');
              else if (this.movingDown) mainCharacter.setActiveSprite('movingDown');
              else if (this.movingLeft) mainCharacter.setActiveSprite('movingLeft');
            }
          }
          break;
        default:
          break;
      }
    }
  }
}

export default KeyboardInteractions;
