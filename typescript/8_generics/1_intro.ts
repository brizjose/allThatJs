// generic type <T> lets ts know we'll it to handle/infer the data type from the arguments that are passed

function echo<T>(data: T) {
  return data;
}

console.log(echo('drublito'));
console.log(echo(30));

// we can also pre-pend the data type with the function call

console.log(echo<string>('drublito'));
console.log(echo<number>(32));
