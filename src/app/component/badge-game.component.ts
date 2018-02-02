import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';

import { Game } from '../class/game';
import { Team  } from '../class/team';

import { MONTH } from '../const/month';
import { SCHOOL } from '../const/school';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-badge-game',
  templateUrl: './badge-game.component.html',
  styleUrls: ['./badge-game.component.scss']
})
export class BadgeGameComponent implements OnInit, OnChanges {
  @Input() gameId: number;
  @Input() format: object;
  game: Game;
  team1: Team;
  team2: Team;
  detailActive = false;
  favoriteTeam1: boolean;
  favoriteTeam2: boolean;
  favorite: boolean;

  month = MONTH;

  constructor(
    private favoriteService: FavoriteService,
    private gameService: GameService,
    private teamService: TeamService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.gameService.getGame(this.gameId).subscribe(game => {
      this.game = game;
      this.teamService.getTeam(this.game.team1Id).subscribe(team => {
        this.team1 = team;
        this.favoriteService.getFavorite(this.team1.id).subscribe(fav => this.favoriteTeam1 = fav);
      });
      this.teamService.getTeam(this.game.team2Id).subscribe(team => {
        this.team2 = team;
        this.favoriteService.getFavorite(this.team2.id).subscribe(fav => this.favoriteTeam2 = fav);
      });
    });
    this.router.events.subscribe((val) => {
      if (this.location.path() === '/game/' + this.gameId) {
        this.detailActive = true;
      } else {
        this.detailActive = false;
      }
    });
  }
}
