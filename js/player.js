class Player {
  constructor(center) {
    this.center = center;
    this.size = 20;
  }

  draw(ctx) {
    const { center, size } = this;
    ctx.beginPath();
    ctx.arc(center.x, center.y, size, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }
}
