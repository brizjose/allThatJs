class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    return `drawing shapes!`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    // we can customize the method at the child class, and also access the parent method if we want by calling super.method()!
    return `my favorite activity, ${super.draw()}`;
  }
}

const c = new Circle('red', 1);

console.log(c.draw());
