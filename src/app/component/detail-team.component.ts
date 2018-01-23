// library
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


// services
import { TeamService } from '../service/team.service';
import { GameService } from '../service/game.service';


// classes
import { Team } from '../class/team';
import { Game } from '../class/game';
import { AppTitleService } from '../service/app-title.service';


// constants
import { SCHOOL } from '../const/school';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {
  teamId: number;
  team: Team;
  games: Game[];
  school = SCHOOL;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private teamService: TeamService,
    private gameService: GameService,
    private titleService: AppTitleService,
  ) { }


  ngOnInit() {
    // get teamId from route
    this.route.paramMap.subscribe(paraMap => {
      this.teamId = +paraMap.get('id');
      this.teamService.getTeam(this.teamId).subscribe(team => {
        this.team = team;
        Promise.resolve(null).then(() => this.titleService.setTitle.next(this.team.name));
        this.gameService.getTeamGames(this.teamId).subscribe(games => this.games = games);
      });
    });
  }
}
