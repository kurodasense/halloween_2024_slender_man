class Camera {
  constructor(center, target) {
    this.center = center;
    this.target = target;
    this.maxViewDistance = 100;
    this.fovAngle = Math.PI / 2;
  }

  update() {
    this.center = this.target.center;
    const frontOffset = Vector.fromPolar(this.target.dir, this.maxViewDistance);
    this.front = Vector.add(this.center, frontOffset);
    const leftOffset = Vector.fromPolar(
      this.target.dir - this.fovAngle / 2,
      this.maxViewDistance
    );
    const rightOffset = Vector.fromPolar(
      this.target.dir + this.fovAngle / 2,
      this.maxViewDistance
    );
    this.left = Vector.add(this.center, leftOffset);
    this.right = Vector.add(this.center, rightOffset);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.left.x, this.left.y);
    ctx.lineTo(this.center.x, this.center.y);
    ctx.lineTo(this.right.x, this.right.y);
    ctx.closePath();
    ctx.strokeStyle = "cyan";
    ctx.stroke();
  }
}
