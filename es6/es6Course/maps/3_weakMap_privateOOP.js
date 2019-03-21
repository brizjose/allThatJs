const _radius = new WeakMap();
const _paint = new WeakMap();
const _erase = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _paint.set(this, () => `coloring ${this}`);
  }

  [_erase]() {
    return `didn't like this ${typeof this}`;
  }

  draw() {
    return `drawing with radius of ${_radius.get(this)}`;
  }

  erase() {
    return this[_erase]();
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('invalid radius');
    _radius.set(this, value);
  }
}

const c = new Circle(1);

console.log(c.draw());

console.log(c.erase());

console.log(c.radius);

c.radius = 3;

console.log(c.radius);
