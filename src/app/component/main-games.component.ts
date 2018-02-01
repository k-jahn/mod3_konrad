import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { GameService } from '../service/game.service';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-main-games',
  templateUrl: './main-games.component.html',
  styleUrls: ['./main-games.component.scss']
})

export class MainGamesComponent implements OnInit, OnDestroy {
  games: Game[];
  teams: Team[];
  favorites = {};

  private findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  constructor(
    private favoriteService: FavoriteService,
    private gameService: GameService,
    private router: Router,
) { }

  ngOnInit() {
    // get data
    this.gameService.getUnplayedGames().subscribe(games => {
      this.games = games;
    });
    this.favoriteService.getFavorites().subscribe(fav => this.favorites = fav);
  }
  ngOnDestroy() {
  }
}
