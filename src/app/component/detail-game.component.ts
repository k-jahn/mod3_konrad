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
  ) { }
  public findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  ngOnInit() {
    // get teamId from route
    this.gameId = +this.route.snapshot.paramMap.get('id');
    // get team
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
    // get upcoming games
    this.gameService.getGame(this.gameId).subscribe(game => {
      this.game = game;
      this.app.setTitle.next(game.name);
    });
  }


}
