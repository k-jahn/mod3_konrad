import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


import { AppComponent } from './app.component';

import { TeamService } from '../service/team.service';
import { GameService } from '../service/game.service';

import { Team } from '../class/team';
import { Game } from '../class/game';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {
  teamId: number;
  team: Team;
  games: Game[];
  teams: Team[];


  private findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  constructor(
    private app: AppComponent,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private teamService: TeamService,
    private gameService: GameService
  ) { }


  ngOnInit() {
    // get teamId from route
    this.teamId = +this.route.snapshot.paramMap.get('id');
    // get team
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
      this.team = this.findTeam(this.teamId);
      Promise.resolve(null).then(() => this.app.setTitle.next(this.team.name));
    });
    // get upcoming games
    this.gameService.getTeamGames(this.teamId).subscribe(games => this.games = games);
  }
}