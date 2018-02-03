// library
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Team } from '../class/team';

// service
import { TeamService } from '../service/team.service';


@Component({
  selector: 'app-main-teams',
  templateUrl: './main-teams.component.html',
  styleUrls: ['./main-teams.component.scss']
})
export class MainTeamsComponent implements OnInit, OnDestroy {

  teams: Team[];
  teamsRanked: Team[];



  constructor(
    private teamService: TeamService,
    private router: Router,
  ) { }

  ngOnInit() {
    // get Teams
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
    this.teamService.getRankedTeams().subscribe(teams => {
      this.teamsRanked = teams;
    });
  }

  ngOnDestroy() {
  }
}
