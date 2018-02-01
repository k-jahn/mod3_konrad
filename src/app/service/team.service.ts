// team data service =====================================================
import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

// class
import { Team } from '../class/team';

// service
import { DatabaseService } from './database.service';

@Injectable()
export class TeamService {
  teams = new BehaviorSubject<Team[]>([]);

  constructor(
    private databaseService: DatabaseService
  ) {
    this.databaseService.get('public/teams').subscribe(teamData => {
      this.teams.next(teamData.map(team => new Team(team)));
    });
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
