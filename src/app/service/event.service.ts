// service for event data
import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

// class
import { Event } from '../class/event';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DatabaseService } from './database.service';


@Injectable()
export class EventService {
  private events = new BehaviorSubject<Event[]>([]);
  constructor(
    private databaseService: DatabaseService
  ) {
    this.databaseService.get('public/events').subscribe(events => {
      this.events.next(events.map(e => new Event(e)));
    });
  }

  getEvents(): Observable<Event[]> {
    return this.events;
  }

}
