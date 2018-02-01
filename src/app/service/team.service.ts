import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of'; // dev, remove when no longe needed
import { map, tap } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';

// class
import { Team } from '../class/team';

// dev data

@Injectable()
export class TeamService {
  teams = new BehaviorSubject<Team[]>([]);

  constructor(
    private db: AngularFireDatabase
  ) {
    db.list('public/teams')
      .valueChanges()
      .pipe(
        map(
          result => result.map(entry => new Team(entry))
        )
    ).subscribe(arr => this.teams.next(arr));
  }

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
