import { Component, OnInit } from '@angular/core';

import { Shelf } from "./shelf";
import { ShelfDetailComponent } from "./shelf-detail.component";
import { ShelfService } from "./shelf.service";

@Component({
    selector: 'my-app',
    template: `
<h1>{{ title }}</h1>
<ul>
  <li *ngFor="let shelf of shelves" (click)="onSelect(shelf)">{{ shelf.name }}</li>
</ul>
<shelf-detail [shelf]="selectedShelf"></shelf-detail>
    `,
  directives: [ShelfDetailComponent],
  providers: [ShelfService]
})
export class AppComponent implements OnInit {
  title = 'Fast Web Wrapper';
  shelves: Shelf[];
  selectedShelf: Shelf;

  constructor(private shelfService: ShelfService) {}

  getShelves() {
    this.shelves = this.shelfService.getShelves();
  }

  ngOnInit() {
    this.getShelves();
  }

  onSelect(shelf: Shelf) {
    this.selectedShelf = shelf;
  }
}
