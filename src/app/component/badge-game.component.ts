import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';

import { Game } from '../class/game';

@Component({
  selector: 'app-badge-game',
  templateUrl: './badge-game.component.html',
  styleUrls: ['./badge-game.component.scss']
})
export class BadgeGameComponent implements OnInit {
  @Input() gameId: number;
  game: Game;

  constructor(
    private gameService: GameService,
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    this.gameService.getGame(this.gameId).subscribe(game => this.game = game);
  }

}
