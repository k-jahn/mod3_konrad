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
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(
    private teamService: TeamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

}
