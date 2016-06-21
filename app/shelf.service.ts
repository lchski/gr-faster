import { Injectable } from "@angular/core";

import { SHELVES } from "./mock-shelves";

@Injectable()
export class ShelfService {
  getShelves() {
    return SHELVES;
  }
}
