class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    const center = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
    this.player = new Player(center);
  }

  update() {
    const { ctx } = this;
    this.player.draw(ctx);
  }
}
