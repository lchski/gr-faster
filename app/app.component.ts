import { Component } from '@angular/core';

export class Shelf {
  id: number;
  name: string;
  book_count: number;
}

@Component({
    selector: 'my-app',
    template: `
<h1>{{ title }}</h1>
<ul>
  <li *ngFor="let shelf of shelves" (click)="onSelect(shelf)">{{ shelf.name }}</li>
</ul>
<section *ngIf="selectedShelf">
  <h2>Selected shelf: {{ selectedShelf.name }}</h2>
</section>
    `
})
export class AppComponent {
  title = 'Fast Web Wrapper';
  public shelves = SHELVES;
  selectedShelf: Shelf;
  onSelect(shelf: Shelf) {
    this.selectedShelf = shelf;
  }
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
