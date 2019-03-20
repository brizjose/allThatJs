// when a function never finishes and never returns

function handleError(): never {
  throw new Error('An error!');
}

// use it in places you never thought you'd get to in your program, the dark corner of errors you really want to explore and correct.
