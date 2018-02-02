import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { FavoriteService } from '../service/favorite.service';
import { SettingsService } from '../service/settings.service';

import { Settings } from '../class/settings';
import { TeamService } from '../service/team.service';

import { Team } from '../class/team';

@Component({
  selector: 'app-detail-settings',
  templateUrl: './detail-settings.component.html',
  styleUrls: ['./detail-settings.component.scss']
})
export class DetailSettingsComponent implements OnInit {

  private settings: Settings;
  private teams: Team[];

  change(): void {
    console.log('beep');
  }

  constructor(
    private authService: AuthService,
    private favoriteService: FavoriteService,
    private settingsService: SettingsService,
    private teamService: TeamService,
  ) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

}
