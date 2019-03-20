import { Component, OnInit } from '@angular/core';

import { Store } from './common/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store) {}

  ngOnInit() {
    // this method will only be triggered once at application start, the goal is to do the first fetch to db that will populate the initial instance of the store
    this.store.init();
  }
}
