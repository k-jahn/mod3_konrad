import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

// rxjs
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

// class
import { Event } from '../class/event';



@Injectable()
export class EventService {
  private events: Observable<Event[]>;
  constructor(
    private db: AngularFireDatabase
  ) {
    this.events = this.db.list('public/events').valueChanges().pipe(
      map(result => result.map(item => new Event(item)))
    );
  }

  getEvents(): Observable<Event[]> {
    return this.events;
  }

}
