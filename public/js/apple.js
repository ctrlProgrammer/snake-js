export default class Apple {
  constructor(game, character) {
    this.game = game;
    this.character = character;
    this.pos = { x: 0, y: 0 };
    this.size = 15;
    this.color = "#ff0000";
    this.generateNewPos();
  }

  print() {
    this.game.ctx.beginPath();
    this.game.ctx.rect(this.pos.x, this.pos.y, this.size, this.size);
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fill();
  }

  generateNewPos() {
    this.pos.x =
      Math.floor((Math.random() * (this.game.canvas.width - this.size)) / 15) *
        15 +
      this.size;
    this.pos.y =
      Math.floor((Math.random() * (this.game.canvas.height - this.size)) / 15) *
        15 +
      this.size;
  }
}
