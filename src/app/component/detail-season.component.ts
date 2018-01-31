import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Game } from '../class/game';
import { Team } from '../class/team';

// service
import { GameService } from '../service/game.service';
import { AppTitleService } from '../service/app-title.service';

@Component({
  selector: 'app-detail-season',
  templateUrl: './detail-season.component.html',
  styleUrls: ['./detail-season.component.scss']
})

export class DetailSeasonComponent implements OnInit {

  games: Game[];
  teams: Team[];


  private findTeam(id: number): Team {
    return this.teams.filter(x => x.id === id)[0];
  }

  constructor(
    private gameService: GameService,
    private titleService: AppTitleService,
    private router: Router,
  ) { }

  ngOnInit() {
    // get data
    this.gameService.getPlayedGames().subscribe(games => {
      this.games = games;
    });
    this.titleService.setTitle.next('Archive: Season');
  }
}
