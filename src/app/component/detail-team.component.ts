// library
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

// services
import { PublicDataService } from '../service/public-data.service';
import { AppTitleService } from '../service/app-title.service';
import { UserDataService } from '../service/user-data.service';
import { AuthService } from '../service/auth.service';

// parents
import { Unsubscribe } from '../_unsubscribe';

// classes
import { Team } from '../class/team';
import { Game } from '../class/game';


// constants
import { SCHOOL } from '../const/school';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent extends Unsubscribe implements OnInit {
  teamId: number;
  team: Team;
  games: Game[];
  school = SCHOOL;
  user: firebase.User;
  favorite: boolean = null;



  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private titleService: AppTitleService,
    private publicDataService: PublicDataService,
    private userDataService: UserDataService,
  ) {
    super();
  }


  ngOnInit() {
    this.addSubscription(
      // get teamId from route
      this.route.paramMap.subscribe(paraMap => {
        this.teamId = +paraMap.get('id');
        this.addSubscription(
          this.publicDataService.getTeam(this.teamId).subscribe(team => {
            this.team = team;
            this.addSubscription(
              this.publicDataService.getTeamGames(this.teamId).subscribe(games => this.games = games)
            );
          })
        );
      }),
      this.authService.user.subscribe(user => this.user = user),
      this.userDataService.getFavorite(this.teamId).subscribe(fav => this.favorite = fav || false),
    );
  }
}
