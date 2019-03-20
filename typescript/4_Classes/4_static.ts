// get access to properties and methods that have more general use but have been organized in an object

class Helpers {
  static PI: number = 3.1416;
  static circumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(Helpers.PI);
console.log(Helpers.circumference(6));
