let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!');
  }, 1500);
});

promise.then(val => console.log(val), err => console.error(err));
