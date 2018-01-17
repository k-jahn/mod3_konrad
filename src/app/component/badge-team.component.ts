import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';
import { Router } from '@angular/router';

import { Team } from '../class/team';

@Component({
  selector: 'app-badge-team',
  templateUrl: './badge-team.component.html',
  styleUrls: ['./badge-team.component.scss']
})
export class BadgeTeamComponent implements OnInit {
  @Input() teamId: number;
  @Input() format: object;
  team: Team;

  constructor(
    private teamService: TeamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.teamService.getTeam(this.teamId).subscribe(team => this.team = team);
  }

}
