// library
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// class
import { Team } from '../class/team';

// service
import { TeamService } from '../service/team.service';
import { MainLocationService } from '../service/main-location.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams: Team[];
  teamsByRank: Team[];
  scroll = 0;

  sortTeams(sort: string): Team[] {
    console.log('sorting');
    const out = JSON.parse(JSON.stringify(this.teams));
    return out.sort(function(a, b) {
      switch (typeof this.teams[0][sort]) {
        case 'number':
          return a[sort] - b[sort];
        case 'string':
          return a[sort] < b[sort] ? -1 : 1;
      }
    });
  }


  constructor(
    private locationService: MainLocationService,
    private teamService: TeamService,
    private router: Router,
  ) { }

  ngOnInit() {
    // set scroll
    this.scroll = this.locationService.scroll.home;
    // get Teams
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams.filter(team => team.id !== 0);
      this.teamsByRank = this.teams.sort((a, b) => a.rank - b.rank);
    });
  }

  ngOnDestroy() {
    // save scroll
    this.locationService.scroll.teams = this.scroll = document.querySelector('.page').scrollTop;
  }
}
