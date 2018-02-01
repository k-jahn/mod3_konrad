// database.service - exchanges data with localstore and backend =================================
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase
  ) {  }

  public get(key: string): BehaviorSubject<any[]> {
    const behaviorSubject = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem(key)) || []);
    this.db.list(key).valueChanges().subscribe(response => {
      behaviorSubject.next(response);
      localStorage.setItem(key, JSON.stringify(response));
      console.log(key + ': recieved new data, setting to localStorage');
    });
    return behaviorSubject;
  }
}