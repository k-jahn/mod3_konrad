// service for /public/ data ===================================================

import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

// class
import { Game } from '../class/game';
import { Event } from '../class/event';
import { Team } from '../class/team';

// service
import { DatabaseService } from '../_database.service';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class PublicDataService extends DatabaseService {

  private teams = this.getArray('/public/teams/').pipe(
    map(x => x as Team[])
  );

  private games = this.getArray('/public/games/').pipe(
    map(x => x as Game[])
  );

  private events = this.getArray('/public/events/').pipe(
    map(x => x as Event[])
  );

  constructor(
    db: AngularFireDatabase
  ) {
    super(db);
  }

  // games methods ========================================================

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

  // events methods ==================================================================
  getEvents(): Observable<Event[]> {
    return this.events;
  }

  // team methods ======================================================
  getTeams(): Observable<Team[]> {
    return this.teams
      .pipe(
      map(teams => teams.filter(team => team.id !== 0))
      );
  }

  getRankedTeams(): Observable<Team[]> {
    return this.teams
      .pipe(
      map(teams => teams
        .filter(team => team.id !== 0)
        .sort((a, b) => a.rank - b.rank)
      )
      );
  }
  getTeam(id: number): Observable<Team> {
    return this.teams
      .pipe(
      map(teams => teams.filter(team => team.id === id)[0])
      );
  }

}
