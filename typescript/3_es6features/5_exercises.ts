const double = (v: number): number => {
  return v * 2;
};

const greet = (name: string = 'Joe'): string => {
  return `The name is ${name}`;
};

const numArr: number[] = [-2, 33, 38, 5];
const min = Math.min(...numArr);
console.log(min);

const newArr: number[] = [55, 20];

const nextArr = [...numArr, ...newArr];

console.log(nextArr);

const testResults = [3.89, 2.99, 1.38];
console.log(...testResults);

const scientist = { firstName: 'Will', experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName);
