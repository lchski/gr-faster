import {Component, OnInit} from "@angular/core";

import {SettingsService} from "./settings.service";

@Component({
  selector: 'user-settings',
  template: `
    <h2>Settings</h2>
    
  `,
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  settings: Object;

  constructor(private settingsService: SettingsService) {}

  getSettings() {
    this.settingsService.getSettings().then(settings => this.settings = settings);
  }

  ngOnInit() {
    this.getSettings();
  }
}
