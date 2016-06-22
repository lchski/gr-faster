import { Injectable } from "@angular/core";

import { SETTINGS } from "./mock-settings";

@Injectable()
export class SettingsService {
  getSettings() {
    console.log('getting settings');
    return Promise.resolve(SETTINGS);
    // return Promise.resolve(localStorage.getItem('fww-settings'));
  }

  setSettings(settings) {
    return Promise.resolve(localStorage.setItem('fww-settings', JSON.stringify(settings)));
  }
}
