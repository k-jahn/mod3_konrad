import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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

}
