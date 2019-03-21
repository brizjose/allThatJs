// set is an array of unique values

let set = new Set([1, 1, 1]);

for (el of set) {
  console.log(el);
}

set.add(2);

set.delete(1);

for (el of set) {
  console.log(el);
}

set.clear();

set.add(3);
set.add(6);
set.add(9);

for (el of set) {
  console.log(el);
}

// we can check if a set contains a certain value
console.log(set.has(3));

// can retrieve elements as key value pairs, also keys, also values:
for (el of set.entries()) {
  console.log(el);
}

const doubled = arr => {
  let doub = [];
  arr.forEach(v => doub.push(v * 2));
  return doub;
};

console.log(doubled(set));
