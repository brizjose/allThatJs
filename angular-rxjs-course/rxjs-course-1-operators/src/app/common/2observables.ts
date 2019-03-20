import { interval, timer, fromEvent } from 'rxjs';

// observables solve the callback hell.

// key feature is that they are templates of the stream.

// stream starts via a subscription

// 1 - an rxjs observable that behaves like the native setInterval
// however, this is not a stream of values but a definition of a stream of values
let repetitive$ = interval(1000);

// an observable only turns into a stream of values if we subscribe to it:

repetitive$.subscribe(val => console.log('stream 1' + val));

// see that it is only a blue print, therefore, scalable:

repetitive$.subscribe(val => console.log('stream 2' + val));

// 2 - another observable is timer(initial delay, subsecuent timing)

const timing$ = timer(3000, 1000);

timing$.subscribe(val => console.log('stream 3 ' + val));

// 3 an observable of clicks

const click$ = fromEvent(document, 'click');

click$.subscribe(evt => console.log(evt + 'observable'));
