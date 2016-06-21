import { Injectable } from "@angular/core";

@Injectable()
export class SettingsService {
  getSettings() {
    return Promise.resolve(localStorage.getItem('fww-settings'));
  }

  setSettings(settings) {
    return Promise.resolve(localStorage.setItem('fww-settings', JSON.stringify(settings)));
  }
}
