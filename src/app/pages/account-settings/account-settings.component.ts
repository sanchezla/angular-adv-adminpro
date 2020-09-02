import { Component, OnInit} from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public links: NodeListOf<Element>;

  constructor(protected settingsService: SettingsService) { }

  ngOnInit() {
    this.links = document.querySelectorAll('.selector');
    this.settingsService.setLinks = this.links;
    this.settingsService.checkCurrentTheme();
  }

  onChangeTheme(theme:string) {
    this.settingsService.onChangeTheme(theme);

  }


}
