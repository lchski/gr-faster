import { Component, Input } from "@angular/core";

import { Shelf } from "./shelf";

@Component({
  selector: 'shelf-detail',
  template: `
<section *ngIf="shelf">
  <h2>Selected shelf: {{ shelf.name }}</h2>
</section>
  `
})
export class ShelfDetailComponent {
  @Input()
  shelf: Shelf;
}
