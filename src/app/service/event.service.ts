import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// class
import { Event } from '../class/event';

// dev data
import { EVENTS } from '../dev/data';

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(EVENTS);
  }

}
