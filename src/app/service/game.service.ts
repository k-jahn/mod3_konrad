import { Injectable } from '@angular/core';

// angular
import { AngularFireDatabase } from 'angularfire2/database';

// rxjs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

// class
import { Game } from '../class/game';


@Injectable()
export class GameService {
  games = new BehaviorSubject<Game[]>([]);


  constructor(
    private db: AngularFireDatabase
  ) {
    db.list('public/games').valueChanges().pipe(
      // cast to game(fix?)
      map(result => result.map(entry => new Game(entry)))
    ).subscribe(arr => this.games.next(arr));
  }

  public getPlayedGames(): Observable<Game[]> {
    return this.games
      .pipe(
        map(
          games => games.filter(game => game.played)
        )
      );
  }
  public getUnplayedGames(): Observable<Game[]> {
    return this.games
      .pipe(
        map(
          games => games.filter(game => !game.played)
        )
      );
  }
  public getTeamGames(teamId: number): Observable<Game[]> {
    return this.games
      .pipe(
        map(
          games => games.filter(game => game.team1Id === teamId || game.team2Id === teamId).filter(game => !game.played)
        )
      );
  }
  public getGame(id: number): Observable<Game> {
    return this.games
      .pipe(
        map(games => games.filter(game => game.id === id)[0])
      );
  }
}
