// library
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Team } from '../class/team';

// service
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  sortTeams(sort: string): Team[] {
    return this.teams.sort(function(a, b) {
      switch (typeof Team[sort]) {
        case 'number':
          return a[sort] - b[sort];
        case 'string':
          return a[sort] < b[sort] ? -1 : 1;
      }
    });
  }


  constructor(
    private teamService: TeamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams => this.teams = teams.filter(team => team.id !== 0));
  }

}
