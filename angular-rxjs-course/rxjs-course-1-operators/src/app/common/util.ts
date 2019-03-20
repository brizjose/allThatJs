import { Observable } from 'rxjs';

// create a function of the observable structure so it can be reused...

export function httpObservable(url: string) {
  return Observable.create(observer => {
    fetch(url)
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
}
