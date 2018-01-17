import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-main-games',
  templateUrl: './main-games.component.html',
  styleUrls: ['./main-games.component.scss']
})

export class MainGamesComponent implements OnInit, OnDestroy {
  myGames: Game[];
  games: Game[];
  teams: Team[];


  private findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  constructor(
    private gameService: GameService,
    private teamService: TeamService,
    private router: Router,
) { }

  ngOnInit() {
    // get data
    this.gameService.getGames().subscribe(games => {
      this.games = games;
    });
    this.gameService.getTeamGames(1).subscribe(games => {
      this.myGames = games;
    });
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }
  ngOnDestroy() {
  }
}
