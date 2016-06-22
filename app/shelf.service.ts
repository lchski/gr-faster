import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shelf } from "./shelf";
import { SHELVES } from "./mock-shelves";

@Injectable()
export class ShelfService {
  private shelvesUrl = 'https://www.goodreads.com/shelf/list.xml';

  constructor(private http: Http) { }

  getShelves(): Promise<Shelf[]> {
    return this.http.get(this.shelvesUrl)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
