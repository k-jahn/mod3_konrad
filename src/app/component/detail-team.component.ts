// library
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

// services
import { TeamService } from '../service/team.service';
import { GameService } from '../service/game.service';
import { AppTitleService } from '../service/app-title.service';
import { FavoriteService } from '../service/favorite.service';
import { AuthService } from '../service/auth.service';

// parents
import { Unsubscribe } from './_unsubscribe';

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
    private gameService: GameService,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private titleService: AppTitleService,
    private favoriteService: FavoriteService,
  ) {
    super();
  }


  ngOnInit() {
    super.addSubscription(
      // get teamId from route
      this.route.paramMap.subscribe(paraMap => {
        this.teamId = +paraMap.get('id');
        super.addSubscription(
          this.teamService.getTeam(this.teamId).subscribe(team => {
            this.team = team;
            super.addSubscription(
              this.gameService.getTeamGames(this.teamId).subscribe(games => this.games = games)
            );
          })
        );
      }),
      this.authService.user.subscribe(user => this.user = user),
      this.favoriteService.getFavorite(this.teamId).subscribe(fav => this.favorite = fav || false),
    );
  }
}
