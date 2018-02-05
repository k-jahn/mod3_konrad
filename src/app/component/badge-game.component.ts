import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// parent
import { Unsubscribe } from '../_unsubscribe';


import { Game } from '../class/game';
import { Team  } from '../class/team';

import { MONTH } from '../const/month';
import { SCHOOL } from '../const/school';
import { UserDataService } from '../service/user-data.service';
import { PublicDataService } from '../service/public-data.service';



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
    private userDataService: UserDataService,
    private publicDataService: PublicDataService,
    private router: Router,
    private location: Location,
  ) {
    super();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.addSubscription(
      this.publicDataService.getGame(this.gameId).subscribe(game => {
        this.game = game;
        this.addSubscription(
            this.publicDataService.getTeam(this.game.team1Id).subscribe(team => {
            this.team1 = team;
            this.addSubscription(
              this.userDataService.getFavorite(this.team1.id).subscribe(fav => this.favoriteTeam1 = fav)
            );
          })
        );
        this.addSubscription(
            this.publicDataService.getTeam(this.game.team2Id).subscribe(team => {
            this.team2 = team;
            this.addSubscription(
              this.userDataService.getFavorite(this.team2.id).subscribe(fav => this.favoriteTeam2 = fav)
            );
          })
        );
    }));
    this.addSubscription(
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
