// used to organize libraries of related variables and methods, like a mathemtical lib.

// removes its members from the global scope
// requires export of members we want available for use outside

namespace MyMath {
  export const PI = 3.1416;

  export function calculateCircumference(diameter: number) {
    return diameter * PI;
  }

  export function calculateRectangle(width: number, length: number) {
    return width * length;
  }
}

console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(3, 5));
