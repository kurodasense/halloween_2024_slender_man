class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    const center = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
    this.player = new Player(center);
    const areaSize = 1000;
    const bounds = {
      top: center.y - areaSize / 2,
      right: center.x + areaSize / 2,
      bottom: center.y + areaSize / 2,
      left: center.x - areaSize / 2,
    };
    const treeMaxCount = 10000;
    const minDistance = 100;
    this.trees = this.#generateTrees(treeMaxCount, bounds, minDistance);
  }

  start() {
    this.#animate();
  }

  #animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.update();
    this.player.draw(this.ctx);
    this.trees.forEach((tree) => tree.draw(this.ctx));
    requestAnimationFrame(() => this.#animate());
  }

  #generateTrees(count, bounds, minDistance) {
    const trees = [];
    for (let i = 0; i < count; i++) {
      const x = lerp(bounds.left, bounds.right, Math.random());
      const y = lerp(bounds.top, bounds.bottom, Math.random());
      const center = { x, y };

      const centers = trees.map((tree) => tree.center);
      centers.push(this.player.center);
      const nearbyItem = centers.find(
        (loc) => distance(center, loc) < minDistance
      );
      if (!nearbyItem) {
        trees.push(new Tree(center));
      }
    }
    return trees;
  }
}
