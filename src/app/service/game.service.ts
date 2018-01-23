import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

// class
import { Game } from '../class/game';

// dev data
import { GAMES } from '../dev/data';

@Injectable()
export class GameService {
  // placeholder, replace with call to server
  games = of(GAMES);


  constructor() { }

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
          games => games.filter(game => game.team1Id === teamId || game.team2Id === teamId)
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
