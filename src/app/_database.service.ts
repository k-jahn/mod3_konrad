// database.service - exchanges data with localstore and backend =================================
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';


export class DatabaseService {

  private connections = {};

  public closeConnections(): void {
    for (const path of Object.getOwnPropertyNames(this.connections)) {
      console.log(`closing database connection: ${path}`);
      this.connections[path].unsubscribe();
    }
  }

  constructor(
    private db: AngularFireDatabase
  ) { }

  protected update(path: string, data: object): void {
    this.db.object(path).update(data);
  }

  // get information from db, manages localStore caching -----------------------------------
  protected getArray(path: string): BehaviorSubject<any[]> {
    console.log(`opening database connection ${path}`);
    const behaviorSubject = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem(path)) || null);
    this.connections[path] = this.db.list(path).valueChanges().subscribe(response => {
      behaviorSubject.next(response);
      localStorage.setItem(path, JSON.stringify(response));
      console.log(path + ': recieved new data array, setting to localStorage');
    });
    return behaviorSubject;
  }

  protected getObject(path: string): BehaviorSubject<object> {
    console.log(`opening database connection: ${path}`);
    const behaviorSubject = new BehaviorSubject<object>(JSON.parse(localStorage.getItem(path)) || null);
    this.connections[path] = this.db.object(path).valueChanges().subscribe(response => {
      behaviorSubject.next(response);
      localStorage.setItem(path, JSON.stringify(response));
      console.log(path + ': recieved new data object, setting to localStorage');
    });
    return behaviorSubject;
  }

}
