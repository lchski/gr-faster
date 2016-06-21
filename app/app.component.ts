import { Component } from '@angular/core';

import { Shelf } from "./shelf";
import { ShelfDetailComponent } from "./shelf-detail.component";

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

@Component({
    selector: 'my-app',
    template: `
<h1>{{ title }}</h1>
<ul>
  <li *ngFor="let shelf of shelves" (click)="onSelect(shelf)">{{ shelf.name }}</li>
</ul>
<shelf-detail [shelf]="selectedShelf"></shelf-detail>
`,
    directives: [ShelfDetailComponent]
})
export class AppComponent {
  title = 'Fast Web Wrapper';
  public shelves = SHELVES;
  selectedShelf: Shelf;
  onSelect(shelf: Shelf) {
    this.selectedShelf = shelf;
  }
}
