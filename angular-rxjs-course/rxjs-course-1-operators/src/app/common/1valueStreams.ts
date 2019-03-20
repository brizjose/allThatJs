// value streams without rxjs may require nested callbacks like this:

// see it does not scale well...

export function callbackHell() {
  // the following are examples of streams of values, a core concept of rxjs:

  // 1. perform a task in intervals
  function intervals() {
    let counter = 3;
    function run() {
      console.log(counter);
      counter--;
    }
    return setInterval(run, 1000);
  }

  // 2. detect a stream of clicks anywhere in the document:
  document.addEventListener('click', e => {
    console.log(e);
    const intervalo = intervals();

    // 3. a stream that emits one value and then stops
    setTimeout(() => {
      console.log('finished...');
      clearInterval(intervalo);
    }, 4000);
  });
}
