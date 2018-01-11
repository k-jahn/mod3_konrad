import { Component, OnInit } from '@angular/core';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  private games: Game[];
  private teams: Team[];


  private findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  constructor(
    private gameService: GameService,
    private teamService: TeamService,
  ) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(games => this.games = games);
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

}
