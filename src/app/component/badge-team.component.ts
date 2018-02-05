// library
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// service

// parent
import { Unsubscribe } from '../_unsubscribe';

// interface
import { Team } from '../class/team';

// const
import { SCHOOL } from '../const/school';
import { UserDataService } from '../service/user-data.service';
import { PublicDataService } from '../service/public-data.service';

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
    private userDataService: UserDataService,
    private location: Location,
    private router: Router,
    private publicDataService: PublicDataService,
  ) {
    super();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.addSubscription(
      this.publicDataService.getTeam(this.teamId).subscribe(team => {
        this.team = team;
        this.addSubscription(
          this.userDataService.getFavorite(this.teamId).subscribe(fav => this.favorite = fav)
        );
      })
    );
    this.addSubscription(
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
