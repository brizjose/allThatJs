import { Observable } from 'rxjs';

// this is the structure of all observables (observable contract) that are offered by rxjs Observable library:

// definition of an http stream:

const http$ = Observable.create(observer => {
  fetch('/api/courses')
    .then(res => {
      return res.json();
    })
    .then(body => {
      observer.next(body);
      observer.complete();
    })
    .catch(err => {
      observer.error(err);
    });
});

// subscription

http$.subscribe(
  courses => console.log(courses),
  () => {},
  () => console.log('completed')
);

// by creating an observable out of responses, we get access to all the rxjs functionality
