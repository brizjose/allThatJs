const countDown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log('Done!', start);
};

// can call the function without a parameter without getting undefined

countDown();
