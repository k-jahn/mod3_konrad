import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// parents
import { Unsubscribe } from '../_unsubscribe';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { PublicDataService } from '../service/public-data.service';
import { AppTitleService } from '../service/app-title.service';

@Component({
  selector: 'app-detail-season',
  templateUrl: './detail-season.component.html',
  styleUrls: ['./detail-season.component.scss']
})

export class DetailSeasonComponent extends Unsubscribe implements OnInit {

  games: Game[];
  teams: Team[];


  private findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  constructor(
    private publicDataService: PublicDataService,
    private titleService: AppTitleService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    // get data
    this.addSubscription(
      this.publicDataService.getPlayedGames().subscribe(games => {
        this.games = games;
      })
    );
  }
}
