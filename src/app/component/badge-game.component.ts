import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// parent
import { Unsubscribe } from '../_unsubscribe';

import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';
import { FavoriteService } from '../service/favorite.service';

import { Game } from '../class/game';
import { Team  } from '../class/team';

import { MONTH } from '../const/month';
import { SCHOOL } from '../const/school';



@Component({
  selector: 'app-badge-game',
  templateUrl: './badge-game.component.html',
  styleUrls: ['./badge-game.component.scss']
})
export class BadgeGameComponent extends Unsubscribe implements OnInit, OnChanges, OnDestroy {


  @Input() gameId: number;
  @Input() format: object;
  private game: Game;
  private team1: Team;
  private team2: Team;
  private detailActive = false;
  private favoriteTeam1: boolean;
  private favoriteTeam2: boolean;
  private favorite: boolean;

  private month = MONTH;

  constructor(
    private favoriteService: FavoriteService,
    private gameService: GameService,
    private teamService: TeamService,
    private router: Router,
    private location: Location,
  ) {
    super();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    super.addSubscription(
      this.gameService.getGame(this.gameId).subscribe(game => {
        this.game = game;
        super.addSubscription(
            this.teamService.getTeam(this.game.team1Id).subscribe(team => {
            this.team1 = team;
            super.addSubscription(
              this.favoriteService.getFavorite(this.team1.id).subscribe(fav => this.favoriteTeam1 = fav)
            );
          })
        );
        super.addSubscription(
            this.teamService.getTeam(this.game.team2Id).subscribe(team => {
            this.team2 = team;
            super.addSubscription(
              this.favoriteService.getFavorite(this.team2.id).subscribe(fav => this.favoriteTeam2 = fav)
            );
          })
        );
    }));
    super.addSubscription(
      this.router.events.subscribe((val) => {
        if (this.location.path() === '/game/' + this.gameId) {
          this.detailActive = true;
        } else {
          this.detailActive = false;
        }
      })
    );
  }
}
