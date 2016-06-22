import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from "@angular/http";

import {ShelfService} from "./shelf.service";
import {ShelvesComponent} from "./shelves.component";

import {SettingsComponent} from "./settings.component";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a [routerLink]="['Shelves']">Shelves</a>
      <a [routerLink]="['Settings']">Settings</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    ShelfService
  ]
})
@RouteConfig([
  {
    path: '/shelves',
    name: 'Shelves',
    component: ShelvesComponent
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsComponent
  }
])
export class AppComponent {
  title = 'Fast Web Wrapper'
}
