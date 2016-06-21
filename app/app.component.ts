import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {ShelfService} from "./shelf.service";
import {ShelvesComponent} from "./shelves.component";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['Shelves']">Shelves</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ShelfService
  ]
})
@RouteConfig([
  {
    path: '/shelves',
    name: 'Shelves',
    component: ShelvesComponent
  }
])
export class AppComponent {
  title = 'Fast Web Wrapper'
}
