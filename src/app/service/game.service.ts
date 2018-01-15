import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// class
import { Game } from '../class/game';

// dev data
import { GAMES } from '../dev/data';

@Injectable()
export class GameService {

  constructor() { }

  public getGames(): Observable<Game[]> {
    return of(GAMES);
  }
  public getTeamGames(teamId: number): Observable<Game[]> {
    return of(GAMES
      .filter(game => game.team1Id === teamId || game.team2Id === teamId)
      .map(game => {
        if (game.team1Id !== teamId) {
          game.team2Id = game.team1Id;
          game.team1Id = teamId;
        }
        return game;
       })
    );
  }
  public getGame(id: number): Observable<Game> {
    return of(GAMES.filter(game => game.id === id)[0]);
  }
}
