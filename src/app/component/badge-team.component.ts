// library
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// service
import { TeamService } from '../service/team.service';

// parent
import { Unsubscribe } from '../_unsubscribe';

// interface
import { Team } from '../class/team';

// const
import { SCHOOL } from '../const/school';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-badge-team',
  templateUrl: './badge-team.component.html',
  styleUrls: ['./badge-team.component.scss']
})
export class BadgeTeamComponent extends Unsubscribe implements OnInit, OnChanges {
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
  ) {
    super();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    super.addSubscription(
      this.teamService.getTeam(this.teamId).subscribe(team => {
        this.team = team;
        super.addSubscription(
          this.favoriteService.getFavorite(this.teamId).subscribe(fav => this.favorite = fav)
        );
      })
    );
    super.addSubscription(
      this.router.events.subscribe((val) => {
        if (this.location.path() === '/team/' + this.teamId) {
          this.detailActive = true;
        } else {
          this.detailActive = false;
        }
      })
    );
  }
}
