// library
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

// services
import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';
import { AppTitleService } from '../service/app-title.service';


// classes
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private gameService: GameService,
    private titleService: AppTitleService,
  ) {
  }

  ngOnInit() {
    // get gameId from route
    this.route.paramMap.subscribe(paramMap => {
      this.gameId = +paramMap.get('id');
      this.gameService.getGame(this.gameId).subscribe(game => {
        this.game = game;
        Promise.resolve(null).then(() => this.titleService.setTitle.next(this.game.name));
      });
    });
  }


}
