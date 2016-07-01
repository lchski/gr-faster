import { Component, Input } from "@angular/core";

import { Shelf } from "./shelf";

@Component({
  selector: 'shelf-detail',
  template: `
<section *ngIf="shelf">
  <h2>Selected shelf: {{ shelf.name }} ({{ shelf.id }})</h2>
  
  <p>Books on shelf: {{ shelf.book_count }}</p>
</section>
  `
})
export class ShelfDetailComponent {
  @Input()
  shelf: Shelf;
}
