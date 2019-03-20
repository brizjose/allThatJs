// rest and spread operators

// work with arrays and lists of data

const numbers = [1, 3, 5, 7];

// spread operator:  turns the array into a list of values

const result = Math.max(...numbers);

console.log(result);

// rest operator combines a group of parameters into an array

function makeArray(...args: number[]): number[] {
  return args;
}

const myArray = makeArray(1, 3, 4);
console.log(myArray);

function makeModArray(name: string, ...args: number[]) {
  return args;
}
// it does not breake if we explicitly separate parameters
console.log(makeModArray('Bob', 1, 2, 3, 4));

// but it shows error if parameter format does not match the function definition
// console.log(makeModArray(1,2,3));

// combine data into tuples to make more elegant function paramenters:

function comboOrig(name: string, age: number) {
  return `My name is ${name} and I am ${age} years old`;
}
function comboMod(...args: [string, number]) {
  return `My name is ${args[0]} and I am ${args[1]} years old`;
}

console.log(comboOrig('Bob', 63));
console.log(comboMod('Bob', 63));
