import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { TeamService } from '../service/team.service';

import { Team } from '../class/team';

@Component({
  selector: 'app-badge-team',
  templateUrl: './badge-team.component.html',
  styleUrls: ['./badge-team.component.scss']
})
export class BadgeTeamComponent implements OnInit, OnChanges {
  @Input() teamId: number;
  @Input() format: object;
  team: Team;
  detailActive = false;

  constructor(
    private teamService: TeamService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.teamService.getTeam(this.teamId).subscribe(team => this.team = team);
    this.router.events.subscribe((val) => {
      if (this.location.path() === '/team/' + this.teamId) {
        this.detailActive = true;
      } else {
        this.detailActive = false;
      }
    });
  }
}
