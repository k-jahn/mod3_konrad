import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../service/auth.service';
import { FavoriteService } from '../service/favorite.service';
import { SettingsService } from '../service/settings.service';
import { TeamService } from '../service/team.service';

// parents
import { Unsubscribe } from './_unsubscribe';


import { Team } from '../class/team';
import { FavList } from '../class/favlist';

@Component({
  selector: 'app-detail-settings',
  templateUrl: './detail-settings.component.html',
  styleUrls: ['./detail-settings.component.scss']
})
export class DetailSettingsComponent extends Unsubscribe implements OnInit {

  private teams: Team[];
  private favorites: FavList;


  // ngModel values
  private model = {
    favoritesToShow: '',
  };

  change(prop: string): void {
    this.settingsService.updateSetting(prop, this.model[prop]);
  }

  constructor(
    private authService: AuthService,
    private favoriteService: FavoriteService,
    private settingsService: SettingsService,
    private teamService: TeamService,
  ) {
    super();
  }

  ngOnInit() {
    super.addSubscription(
      this.teamService.getTeams().subscribe(teams => this.teams = teams),
      this.favoriteService.getFavorites().subscribe(favorites => this.favorites = favorites),
      this.settingsService.getSettings().subscribe(settings => {
        if (settings) {
          this.model.favoritesToShow = settings.favoritesToShow ? settings.favoritesToShow.toString() : '2';
        }
      }),
    );
  }

}
