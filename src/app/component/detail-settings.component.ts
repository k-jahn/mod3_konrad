import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';

// parents
import { Unsubscribe } from '../_unsubscribe';

import { UserDataService } from '../service/user-data.service';
import { PublicDataService } from '../service/public-data.service';

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
    this.userDataService.updateSetting(prop, this.model[prop]);
  }

  constructor(
    private authService: AuthService,
    private userDataService: UserDataService,
    private publicDataService: PublicDataService,
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(
      this.publicDataService.getTeams().subscribe(teams => this.teams = teams),
      this.userDataService.getFavorites().subscribe(favorites => this.favorites = favorites),
      this.userDataService.getSettings().subscribe(settings => {
        if (settings) {
          this.model.favoritesToShow = settings.favoritesToShow ? settings.favoritesToShow.toString() : '2';
        }
      }),
    );
  }

}
