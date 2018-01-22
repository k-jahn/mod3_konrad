import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';

import { Game } from '../class/game';
import { Team  } from '../class/team';


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

  constructor(
    private gameService: GameService,
    private teamService: TeamService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    // this.gameService.getGame(this.gameId).subscribe(game => {
    //   this.game = game;
    //   this.teamService.getTeam(this.game.team1Id).subscribe(team => this.team1 = team);
    //   this.teamService.getTeam(this.game.team2Id).subscribe(team => this.team2 = team);
    // });
    // this.router.events.subscribe((val) => {
    //   if (this.location.path() === '/game/' + this.gameId) {
    //     this.detailActive = true;
    //   } else {
    //     this.detailActive = false;
    //   }
    // });
  }
  ngOnChanges() {
    this.gameService.getGame(this.gameId).subscribe(game => {
      this.game = game;
      this.teamService.getTeam(this.game.team1Id).subscribe(team => this.team1 = team);
      this.teamService.getTeam(this.game.team2Id).subscribe(team => this.team2 = team);
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
