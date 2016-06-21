import {Component, OnInit} from "@angular/core";

import {Settings} from "./settings";
import {SettingsService} from "./settings.service";

@Component({
  selector: 'user-settings',
  template: `
    <h2>Settings</h2>
    <form>
      <label for="settingDeveloperKey">Developer key:</label>
      <input type="text" id="settingDeveloperKey" [(ngModel)]="settings.developer_key">

      <label for="settingUserId">User ID:</label>
      <input type="text" id="settingUserId" [(ngModel)]="settings.user_id">

      <button type="submit">Submit</button>
    </form>
  `,
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(private settingsService: SettingsService) {}

  getSettings() {
    this.settingsService.getSettings().then(settings => this.settings = settings);
  }

  ngOnInit() {
    this.getSettings();
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
