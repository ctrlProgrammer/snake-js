import Game from "./game.js";

const pixelSize = 15;

const config = {
  environment: "production",
  fps: 60,
  width: 60 * pixelSize,
  height: 30 * pixelSize,
  pixelSize: pixelSize
};

new Game(config);
