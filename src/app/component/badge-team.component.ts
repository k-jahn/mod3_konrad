// library
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// service
import { TeamService } from '../service/team.service';

// class
import { Team } from '../class/team';

// const
import { SCHOOL } from '../const/school';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-badge-team',
  templateUrl: './badge-team.component.html',
  styleUrls: ['./badge-team.component.scss']
})
export class BadgeTeamComponent implements OnInit, OnChanges {
  @Input() teamId: number;
  @Input() format: string;
  team: Team;
  detailActive = false;
  favorite: boolean;

  school = SCHOOL;

  constructor(
    private favoriteService: FavoriteService,
    private location: Location,
    private router: Router,
    private teamService: TeamService,
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.teamService.getTeam(this.teamId).subscribe(team => {
      this.team = team;
      this.favoriteService.getFavorite(this.teamId).subscribe(fav => this.favorite = fav);
    });
    this.router.events.subscribe((val) => {
      if (this.location.path() === '/team/' + this.teamId) {
        this.detailActive = true;
      } else {
        this.detailActive = false;
      }
    });
  }
}
