export default class Apple {
  constructor(game) {
    this.game = game;
    this.pos = { x: 0, y: 0 };
    this.size = this.game.pixelSize;
    this.color = "#ff0000";
  }

  print() {
    this.game.ctx.beginPath();
    this.game.ctx.rect(this.pos.x, this.pos.y, this.size, this.size);
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fill();
  }

  generateNewPos(x, y) {
    this.pos.x = x;
    this.pos.y = y;
    this.print();
  }
}
