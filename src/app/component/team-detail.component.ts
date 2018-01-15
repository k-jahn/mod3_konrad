import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


import { AppComponent } from './app.component';

import { TeamService } from '../service/team.service';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  teamId: number;

  constructor(
    private app: AppComponent,
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService,
    private gameServixe: GameService
  ) { }

  ngOnInit() {
    this.teamId = +this.route.snapshot.paramMap.get('id');
    this.app.title = 'Team Detail';
  }
}
