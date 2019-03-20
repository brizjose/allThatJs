import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import {
  catchError,
  delay,
  delayWhen,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap
} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class Store {
  // private to make sure our subject is only accessible inside this class; only our store has the power to emit an observable list of courses
  // late subscribers need the latest emitted value, so we need our subject to have "memory", therefore we use BehaviorSubject and instantiate it with an empty array
  // Course[] type makes our BehaviorSubject only take arrays of courses, not of any other kind
  private subject = new BehaviorSubject<Course[]>([]);

  // subject emits values to the courses$ observable to be consumed in other parts of the application
  courses$: Observable<Course[]> = this.subject.asObservable();

  // NOTE: inject the Store service in the app.component.ts to trigger the initialization logic of the Store when app is instantiated

  // from app.component, init() is called when application starts and we make the call to backend to get the first Course[]
  init() {
    const http$ = createHttpObservable('/api/courses');

    const courses$: Observable<Course[]> = http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map(res => Object.values(res['payload']))
      )
      .subscribe(courses => this.subject.next(courses));
  }

  selectBeginnerCourses() {
    return this.filterByCategory('BEGINNER');
  }

  selectAdvancedCourses() {
    return this.filterByCategory('ADVANCED');
  }

  filterByCategory(category: string) {
    return this.courses$.pipe(
      map(courses => courses.filter(course => course.category == category))
    );
  }
}
