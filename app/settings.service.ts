import { Injectable } from "@angular/core";

import { SETTINGS } from "./mock-settings";
import {Settings} from "./settings";

@Injectable()
export class SettingsService {
  getSettings() {
    const lsSettings = JSON.parse(localStorage.getItem('fww-settings'));

    return Promise.resolve((lsSettings == null || lsSettings.length == 0) ? new Settings : lsSettings);
  }

  setSettings(settings) {
    return Promise.resolve(localStorage.setItem('fww-settings', JSON.stringify(settings)));
  }
}
