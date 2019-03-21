// symbols used to create or access metadata of objects
// metadata can be properties, like IDs or methods

let symbol1 = Symbol('sym');

// use case for symbols is to name private members of objects

const _radius = Symbol('secret property');
const _draw = Symbol('secret method');

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    return `drawing circle radius ${this[_radius]}`;
  }

  get draw() {
    console.log(this[_draw]());
  }
}

const c = new Circle(1);
c.draw;

console.log(c);
