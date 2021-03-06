let array = [1, 2, 3];

// can change the behavior of the iterator

array[Symbol.iterator] = function() {
  let nextValue = 10;
  return {
    next: function() {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue
      };
    }
  };
};

for (let el of array) {
  console.log(el);
}
