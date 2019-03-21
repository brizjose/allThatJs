// race only returns the first promise that finalizes

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected!');
  }, 2000);
});

Promise.race([promise1, promise2])
  .then(success => console.log(success))
  .catch(error => console.error(error));
