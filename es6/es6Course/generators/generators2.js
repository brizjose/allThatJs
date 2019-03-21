// a step by step approach with a generator builds the iterable

function* gen() {
  yield 1;
  yield 2;
}

// a generator asynchronously executes something or adjusts the generated values

let obj = {
  [Symbol.iterator]: gen
};

// a for-of loop executes the process

for (let element of obj) {
  console.log(element);
}

// however, the for-of is not necessary to do the looping.  see next example
