import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { interval, Observable, of, timer, noop } from 'rxjs';
import {
  catchError,
  delayWhen,
  map,
  retryWhen,
  shareReplay,
  tap,
  filter
} from 'rxjs/operators';

import { httpObservable } from '../common/util';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor() {}

  ngOnInit() {
    // http$ observable emits the exact payload from the server
    const http$ = httpObservable('/api/courses');

    http$.subscribe(courses => console.log(courses), noop, () =>
      console.log('completed')
    );

    // courses$ is an observable that emits a value array of courses
    // Object.values turns it into an array
    const courses$: Observable<Course[]> = http$.pipe(
      tap(() => console.log('HTTP request executed')),
      map(response => Object.values(response['payload'])),
      shareReplay()
    );
    // tap acceses the stream to perform parallel operations with it, like logging
    // shareReplay() shares the http request across derived observables and avoids the need for additional fetches of the same data.  Just like the requests by beginnerCourses$ and advancedCourses$ below.

    courses$.subscribe(courses => console.log(courses));

    // each course array will be a derived observable as we apply a second map operator and filter the courses based on their category
    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course['category'] == 'BEGINNER'))
    );
    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course['category'] == 'ADVANCED'))
    );
  }
}
