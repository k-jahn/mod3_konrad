import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { GameService } from '../service/game.service';
import { TeamService } from '../service/team.service';
import { MainLocationService } from '../service/main-location.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnDestroy {
  myGames: Game[];
  games: Game[];
  teams: Team[];
  scroll = 50;

  test() {
    console.log(this.scroll)
  }

  private findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  constructor(
    private gameService: GameService,
    private teamService: TeamService,
    private router: Router,
    private locationService: MainLocationService
) { }

  ngOnInit() {
    // set scroll
    // this.scroll = this.locationService.scroll.games;
    // get data
    this.gameService.getGames().subscribe(games => {
      this.games = games;
      this.myGames = games.filter((x, i) => i % 2);
    });
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }
  ngOnDestroy() {
    // save scroll
    console.log(this.scroll);
    this.locationService.scroll.games = this.scroll;
  }
}
