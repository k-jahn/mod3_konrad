// library
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';

// services
import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';

import { Game } from '../class/game';
import { Team } from '../class/team';



@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent implements OnInit {
  gameId: number;
  game: Game;
  teams: Team[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private app: AppComponent,
    private gameService: GameService,
    private teamService: TeamService
  ) {
  }

  ngOnInit() {
    // get teamId from route
    this.gameId = +this.route.snapshot.paramMap.get('id');
    // get game
    this.gameService.getGame(this.gameId).subscribe(game => {
      this.game = game;
      Promise.resolve(null).then(() => this.app.setTitle.next(this.game.name));
    });
  }


}
