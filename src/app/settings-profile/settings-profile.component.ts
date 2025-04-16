import { Component, input } from '@angular/core';

@Component({
  selector: 'app-settings-profile',
  imports: [],
  templateUrl: './settings-profile.component.html',
  styleUrl: './settings-profile.component.css'
})
export class SettingsProfileComponent {
message=input();
}
