import { interval, timer, fromEvent } from 'rxjs';

// HANDLERS

// streams take 3 parameters:
// 1. the first parameter is the main action callback,
// 2. second callback is the error: what to do if errors out
// 3. completion: what to do upon completion

// like this:

export const clicks = () => {
  const clicking$ = fromEvent(document, 'click');
  clicking$.subscribe(
    evt => console.log(evt),
    err => console.log(err),
    () => console.log('completed')
  );
};

// UNSUBSCRIPTION:

// using the return value of the subscribe call, we can unsubscribe.

// this is done like this:

export const streams = () => {
  const stream$ = timer(3000, 1000);
  const subscription = stream$.subscribe(
    val => console.log('streaming! => ', val),
    err => console.error(err),
    () => console.log('stream completed')
  );
  setTimeout(() => subscription.unsubscribe(), 9000);
};
