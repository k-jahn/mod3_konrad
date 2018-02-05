// database.service - exchanges data with localstore and backend =================================
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';


export class DatabaseService {

  private connections: Subscription[] = [];

  public closeConnections(): void {
    this.connections.forEach(x => {
      x.unsubscribe();
    });
    this.connections = [];
  }

  constructor(
    private db: AngularFireDatabase
  ) { }

  protected update(key: string, data: object): void {
    this.db.object(key).update(data);
  }

  // get information from db, manages localStore caching -----------------------------------
  protected getArray(key: string): BehaviorSubject<any[]> {
    const behaviorSubject = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem(key)) || null);
    this.connections.push(
      this.db.list(key).valueChanges().subscribe(response => {
        behaviorSubject.next(response);
        localStorage.setItem(key, JSON.stringify(response));
        console.log(key + ': recieved new data array, setting to localStorage');
      })
    );
    return behaviorSubject;
  }

  protected getObject(key: string): BehaviorSubject<object> {
    const behaviorSubject = new BehaviorSubject<object>(JSON.parse(localStorage.getItem(key)) || null);
    this.connections.push(
      this.db.object(key).valueChanges().subscribe(response => {
        behaviorSubject.next(response);
        localStorage.setItem(key, JSON.stringify(response));
        console.log(key + ': recieved new data object, setting to localStorage');
      })
    );
    return behaviorSubject;
  }

}
