import { Component } from '@angular/core';

export class Shelf {
  id: number;
  name: string;
  book_count: number;
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent {
  title = 'Fast Web Wrapper';
  public shelves = SHELVES;
}

const SHELVES: Shelf[] = [
  {
    id: 87656268,
    name: 'read',
    book_count: 92
  },
  {
    id: 87656267,
    name: 'currently-reading',
    book_count: 8
  },
  {
    id: 87656266,
    name: 'to-read',
    book_count: 570
  }
];
