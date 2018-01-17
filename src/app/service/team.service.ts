import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; // dev, remove when no longe needed
import { map, tap } from 'rxjs/operators';

// class
import { Team } from '../class/team';

// dev data
import { TEAMS } from '../dev/data';

@Injectable()
export class TeamService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }

  getTeam(id: number): Observable<Team> {
    return of(TEAMS.filter(team => team.id === id)[0]);
  }

}
