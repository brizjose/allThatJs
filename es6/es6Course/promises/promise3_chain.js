function waitASecond(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 2) {
      reject('out of time!');
    } else {
      setTimeout(() => {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}

// return values automatically passed on through the next async function parameter...
waitASecond(1)
  .then(waitASecond)
  .then(seconds => console.log(seconds))
  .catch(err => console.error(err));

// this one runs once and after 1 second gets rejected because the parameter of the 2nd run is > 2
waitASecond(2)
  .then(waitASecond)
  .then(seconds => console.log(seconds))
  .catch(err => console.error(err));

// this one is automatically rejected because 3 > 2
waitASecond(3)
  .then(waitASecond)
  .then(seconds => console.log(seconds))
  .catch(err => console.error(err));
