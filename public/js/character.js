export default class Character {
  constructor(game, apple) {
    this.game = game;
    this.apple = apple;
    this.size = 15;
    this.v = 15;
    this.color = "rgb(255,255,255)";
    this.dir = [1, 0];
    this.lastPos = [{ x: 0, y: 0 }];
    this.positions = [{ x: 15, y: 15 }];
  }

  print() {
    this.positions.forEach((rect, index) => {
      this.game.ctx.beginPath();
      this.game.ctx.rect(rect.x, rect.y, 15, 15);
      this.game.ctx.fillStyle = this.color;
      this.game.ctx.fill();
    });
  }

  addSegment() {
    this.lastPos.push({ x: this.positions[0].x, y: this.positions[0].y });
    this.positions.push({ x: this.positions[0].x, y: this.positions[0].y });
  }

  move() {
    setInterval(() => {
      if (
        this.positions[0].x == this.apple.pos.x &&
        this.positions[0].y == this.apple.pos.y
      ) {
        this.addSegment();
        this.apple.generateNewPos();
        this.game.addPoint();
      }

      if (
        this.positions[0].x < 0 ||
        this.positions[0].y < 0 ||
        this.positions[0].x > this.game.canvas.width - this.size ||
        this.positions[0].y > this.game.canvas.height - this.size
      ) {
        this.game.reset();
        this.reset();
      }

      for (var count = 0; count < this.positions.length - 1; count++) {
        this.lastPos[count].x = this.positions[count].x;
        this.lastPos[count].y = this.positions[count].y;
      }

      this.positions[0].x += this.v * this.dir[0];
      this.positions[0].y += this.v * this.dir[1];

      for (var count = 0; count < this.positions.length - 1; count++) {
        this.positions[count + 1].x = this.lastPos[count].x;
        this.positions[count + 1].y = this.lastPos[count].y;
      }

      this.print();
    }, 50);
  }

  reset() {
    this.positions = [{ x: 15, y: 15 }];
    this.lastPos = [{ x: 0, y: 0 }];
    this.dir = [1, 0];
    this.apple.generateNewPos();
  }

  moveHandler() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 38:
          if (this.dir[1] != 1) {
            this.dir[1] = -1;
            this.dir[0] = 0;
          }
          break;
        case 37:
          if (this.dir[0] != 1) {
            this.dir[0] = -1;
            this.dir[1] = 0;
          }
          break;
        case 40:
          if (this.dir[1] != -1) {
            this.dir[1] = 1;
            this.dir[0] = 0;
          }
          break;
        case 39:
          if (this.dir[0] != -1) {
            this.dir[0] = 1;
            this.dir[1] = 0;
          }
          break;
      }
    });
  }
}
