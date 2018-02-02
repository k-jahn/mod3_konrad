// service for game data ===================================================

import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

// class
import { Game } from '../class/game';

// service
import { DatabaseService } from './database.service';


@Injectable()
export class GameService {
  games = new BehaviorSubject<Game[]>([]);

  constructor(
    private databaseService: DatabaseService
  ) {
    this.databaseService.getArray('public/games').subscribe(gamedata => {
      this.games.next(gamedata.map(entry => new Game(entry)));
    });
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
