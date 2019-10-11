import Character from "./character.js";
import Apple from "./apple.js";

export default class Game {
  constructor(config) {
    //Principal config
    this.config = config;

    this.fps = this.config.fps;
    this.rate = this.fps / 1000;
    this.pixelSize = this.config.pixelSize;

    this.width = this.config.width;
    this.height = this.config.height;

    this.canvas = document.getElementById("principal-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.points = 0;
    this.pointsDisplay = document.getElementById("show-points");

    this.apple = new Apple(this);
    this.character = new Character(this, this.apple);

    this.run();
  }

  print() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "rgb(0, 0, 0)";
    this.ctx.fill();
  }

  reset() {
    this.points = 0;
    this.pointsDisplay.innerHTML = this.points;
  }

  addPoint() {
    this.points++;
    this.pointsDisplay.innerHTML = this.points;
  }

  update() {
    this.print();
  }

  printGrid() {
    for (var count = 0; count < this.width; count = count + this.pixelSize) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.moveTo(count, 0);
      this.ctx.lineTo(count, this.height);
      this.ctx.stroke();
    }

    for (var count = 0; count < this.height; count = count + this.pixelSize) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.moveTo(0, count);
      this.ctx.lineTo(this.width, count);
      this.ctx.stroke();
    }
  }

  run() {
    this.print();
    this.character.print();
    this.character.moveHandler();
    this.character.move();
    //Principal loop
    setInterval(() => {
      this.update();
      this.apple.print();
      this.character.print();
      if (this.config.environment == "development") this.printGrid();
    }, this.rate);
  }
}
