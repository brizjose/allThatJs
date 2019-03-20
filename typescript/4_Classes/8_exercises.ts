// 1
class Car {
  private _acceleration: number = 0;

  constructor(public name: string) {}

  get acceleration() {
    return this._acceleration;
  }

  accelerate(n: number) {
    this._acceleration += 10;
  }

  honk() {
    console.log('Toooot!');
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// 2
abstract class BaseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends BaseObject {
  constructor(public width: number = 2, public length: number = 1) {
    super();
  }

  calcSize() {
    return this.width * this.length;
  }
}

const rectan = new Rectangle();
console.log(rectan.calcSize());

const rectan2 = new Rectangle(5, 2);
console.log(rectan2.calcSize());

// 3
class Dude {
  private _firstName: string = '';

  set firstName(fn: string) {
    if (fn.length > 3) {
      this._firstName = fn;
    }
  }

  get firstName() {
    return this._firstName;
  }
}

const dudemon = new Dude();
dudemon.firstName = 'Ma';
console.log(dudemon.firstName);
dudemon.firstName = 'Maximilian';
console.log(dudemon.firstName);
