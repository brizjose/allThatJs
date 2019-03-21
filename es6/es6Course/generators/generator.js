// generators and iterators go hand in hand
// generators return iterators that we can "loop" through, thus we need to use next()

function* select() {
  yield 'House';
  yield 'Garage';
}

let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());
