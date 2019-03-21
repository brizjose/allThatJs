// the functionality can be access via the iterator symbol that is built in JS objects
// for complete list of built in symbols, search JS built in symbols

let array = [1, 2, 3];

let it = array[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
