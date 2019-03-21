function waitASecond(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      seconds++;
      resolve(seconds);
    }, 1000);
  });
}

// return values automatically passed on through the next async function parameter...
waitASecond(0)
  .then(waitASecond)
  .then(seconds => console.log(seconds));
