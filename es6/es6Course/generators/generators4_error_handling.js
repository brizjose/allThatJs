// generators manages state and handles errors so process not interrupted if error

function* gen(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (err) {
      console.error(err);
    }
  }
}

let it = gen(2);

console.log(it.next());
console.log(it.throw('An error ocurred!'));
console.log(it.next());
console.log(it.next());
