function lerp(a, b, t) {
  return a + (b - a) * t;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromPolar(dir, mag) {
    return new Vector(mag * Math.cos(dir), mag * Math.sin(dir));
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  static add(a, b) {
    return new Vector(a.x + b.x, a.y + b.y);
  }
}
