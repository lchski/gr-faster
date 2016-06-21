import {Component} from "@angular/core";

import {ShelfService} from "./shelf.service";
import {ShelvesComponent} from "./shelves.component";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <shelves-list></shelves-list>
  `,
  directives: [ShelvesComponent],
  providers: [
    ShelfService
  ]
})
export class AppComponent {
  title = 'Fast Web Wrapper'
}
