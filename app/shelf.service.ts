import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shelf } from "./shelf";

@Injectable()
export class ShelfService {
  private shelvesUrl = 'http://api.gr-faster.dev:8080/shelf/27072166';

  constructor(private http: Http) { }

  getShelves(): Promise<Shelf[]> {
    return this.http.get(this.shelvesUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
