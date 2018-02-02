// database.service - exchanges data with localstore and backend =================================
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class DatabaseService {

  public connections = {};

  constructor(
    private db: AngularFireDatabase
  ) {  }

  public update(key: string, data: object): void {
    this.db.object(key).update(data);
  }

  // get information from db, manages localStore caching -----------------------------------
  public getArray(key: string): BehaviorSubject<any[]> {
    const behaviorSubject = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem(key)) || []);
    this.connections[key] = this.db.list(key).valueChanges().subscribe(response => {
      behaviorSubject.next(response);
      localStorage.setItem(key, JSON.stringify(response));
      console.log(key + ': recieved new data array, setting to localStorage');
    });
    return behaviorSubject;
  }

  public getObject(key: string): BehaviorSubject<object> {
    const behaviorSubject = new BehaviorSubject<object>(JSON.parse(localStorage.getItem(key)) || {});
    this.connections[key] = this.db.object(key).valueChanges().subscribe(response => {
      behaviorSubject.next(response);
      localStorage.setItem(key, JSON.stringify(response));
      console.log(key + ': recieved new data object, setting to localStorage');
    });
    return behaviorSubject;
  }

}
