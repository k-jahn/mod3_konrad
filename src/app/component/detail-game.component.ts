// library
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import * as firebase from 'firebase/app';

// parents
import { Unsubscribe } from '../_unsubscribe';

// services
import { AuthService } from '../service/auth.service';
import { PublicDataService } from '../service/public-data.service';
import { AppTitleService } from '../service/app-title.service';


// classes
import { Game } from '../class/game';
import { Team } from '../class/team';

// constants
import { SCHOOL } from '../const/school';
import { MONTH } from '../const/month';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent extends Unsubscribe implements OnInit {
  gameId: number;
  game: Game;
  user: firebase.User;
  // expose constants
  school = SCHOOL;
  month = MONTH;

  constructor(
    private authService: AuthService,
    private publicDataService: PublicDataService,
    private location: Location,
    private titleService: AppTitleService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    // get gameId from route
    this.addSubscription(
      this.route.paramMap.subscribe(paramMap => {
        this.gameId = +paramMap.get('id');
        this.addSubscription(
          this.publicDataService.getGame(this.gameId).subscribe(game => {
            this.game = game;
          })
        );
      })
    );
    // subscribe to user
    this.addSubscription(
      this.authService.user.subscribe(user => this.user = user)
    );
  }
}
