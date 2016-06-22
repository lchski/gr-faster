import { Injectable } from "@angular/core";

import { SETTINGS } from "./mock-settings";

@Injectable()
export class SettingsService {
  getSettings() {
    return Promise.resolve(JSON.parse(localStorage.getItem('fww-settings')));
  }

  setSettings(settings) {
    return Promise.resolve(localStorage.setItem('fww-settings', JSON.stringify(settings)));
  }
}
