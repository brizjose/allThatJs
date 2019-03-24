// weak sets create sets of objects, and holds only those that are in use to increase performance
// weak sets are not iterable

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const set = new WeakSet([obj1, obj2, obj2]);

set.add(obj3);

console.log(set.has(obj3));
