'use strict';

// methods executed in the body of the class are done so in strict mode even when we don't write 'use strict'

class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  // methods here go to the prorotype
  draw() {
    console.log(this);
  }
  // static methods can be called on the class itself
  // used for utility functions not tied to a particular object
  static explain() {
    console.log('I am a circle');
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) throw new Error('invalid radius');
    this._radius = value;
  }
}

Circle.explain();

const c = new Circle(1);
c.draw();

// proof that method executed in strict mode!  this keyword is pointing to inside the class...
const draw = c.draw();

console.log(c.radius);

c.radius = 3;

console.log(c.radius);
