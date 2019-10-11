import Character from "./character.js";
import Apple from "./apple.js";

class Game {
  constructor() {
    //Principal config
    this.fps = 60;
    this.rate = this.fps / 1000;
    this.width = 60 * 15;
    this.height = 30 * 15;
    this.canvas = document.getElementById("principal-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  print() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "rgb(0, 0, 0)";
    this.ctx.fill();
  }

  update() {
    this.print();
  }

  printGrid() {
    for (
      var count = 0;
      count < this.width;
      count = count + this.character.size
    ) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.moveTo(count, 0);
      this.ctx.lineTo(count, this.height);
      this.ctx.stroke();
    }

    for (
      var count = 0;
      count < this.height;
      count = count + this.character.size
    ) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.moveTo(0, count);
      this.ctx.lineTo(this.width, count);
      this.ctx.stroke();
    }
  }
}

const game = new Game();
const apple = new Apple(game);
const character = new Character(game, apple);

game.print();
character.print();
character.moveHandler();
character.move();

//Principal loop
setInterval(() => {
  game.update();
  apple.print();
  character.print();
}, game.rate);
