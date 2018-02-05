import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { PublicDataService } from '../service/public-data.service';
import { UserDataService } from '../service/user-data.service';

// parents
import { Unsubscribe } from '../_unsubscribe';

@Component({
  selector: 'app-main-games',
  templateUrl: './main-games.component.html',
  styleUrls: ['./main-games.component.scss']
})

export class MainGamesComponent extends Unsubscribe implements OnInit {
  games: Game[];
  teams: Team[];
  favorites = {};
  getFavGames(teamId: number): Game[] {
    return this.games.filter(game => game.team1Id === teamId || game.team2Id === teamId).slice(0, 2);
  }

  constructor(
    private userDataService: UserDataService,
    private publicDataService: PublicDataService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    // get data
    this.addSubscription(
      this.publicDataService.getUnplayedGames().subscribe(games => {
        this.games = games;
      }),
      this.userDataService.getFavorites().subscribe(fav => this.favorites = fav),
      this.publicDataService.getTeams().subscribe(teams => this.teams = teams),
    );
  }

}
