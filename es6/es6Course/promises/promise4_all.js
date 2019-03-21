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

// all combines all promises and returns until all are completed.  If one is rejected, the return of Promise.all is the rejection

Promise.all([promise1, promise2])
  .then(success => console.log(success))
  .catch(error => console.error(error));
