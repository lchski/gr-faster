import { Component, OnInit } from '@angular/core';

import { Shelf } from "./shelf";
import { ShelfDetailComponent } from "./shelf-detail.component";
import { ShelfService } from "./shelf.service";

@Component({
    selector: 'shelves-list',
    template: `
<ul>
  <li *ngFor="let shelf of shelves" (click)="onSelect(shelf)">{{ shelf.name }}</li>
</ul>
<shelf-detail [shelf]="selectedShelf"></shelf-detail>
    `,
  directives: [ShelfDetailComponent]
})
export class ShelvesComponent implements OnInit {
  shelves: Shelf[];
  selectedShelf: Shelf;

  constructor(private shelfService: ShelfService) {}

  getShelves() {
    this.shelfService.getShelves().then(shelves => this.shelves = shelves);
  }

  ngOnInit() {
    this.getShelves();
  }

  onSelect(shelf: Shelf) {
    this.selectedShelf = shelf;
  }
}
