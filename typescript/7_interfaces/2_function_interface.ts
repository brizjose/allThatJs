interface sumUp {
  (arg1: number, arg2: number): number;
}

const mySumFunction: sumUp = (num1: number, num2: number): number =>
  num1 + num2;
