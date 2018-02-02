import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { FavoriteService } from '../service/favorite.service';
import { SettingsService } from '../service/settings.service';

import { Settings } from '../class/settings';

@Component({
  selector: 'app-detail-settings',
  templateUrl: './detail-settings.component.html',
  styleUrls: ['./detail-settings.component.scss']
})
export class DetailSettingsComponent implements OnInit {

  private settings: Settings;

  constructor(
    private authService: AuthService,
    private favoriteService: FavoriteService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
  }

}
