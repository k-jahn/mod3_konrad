import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { GameService } from '../service/game.service';
import { FavoriteService } from '../service/favorite.service';
import { TeamService } from '../service/team.service';
import { SettingsService } from '../service/settings.service';

// parents
import { Unsubscribe } from './_unsubscribe';

@Component({
  selector: 'app-main-games',
  templateUrl: './main-games.component.html',
  styleUrls: ['./main-games.component.scss']
})

export class MainGamesComponent extends Unsubscribe implements OnInit, OnDestroy {
  games: Game[];
  teams: Team[];
  favorites = {};
  getFavGames(teamId: number): Game[] {
    return this.games.filter(game => game.team1Id === teamId || game.team2Id === teamId).slice(0, 2);
  }

  constructor(
    private favoriteService: FavoriteService,
    private gameService: GameService,
    private teamService: TeamService,
    private router: Router,
    private settingsService: SettingsService,
  ) {
    super();
  }

  ngOnInit() {
    // get data
    super.addSubscription(
      this.gameService.getUnplayedGames().subscribe(games => {
        this.games = games;
      }),
      this.favoriteService.getFavorites().subscribe(fav => this.favorites = fav),
      this.teamService.getTeams().subscribe(teams => this.teams = teams),
    );
  }

  ngOnDestroy() {
  }
}
