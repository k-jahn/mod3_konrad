import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SchoolService {
  schools: Observable<Object>;
  constructor(
    private db: AngularFireDatabase
  ) {
    this.schools = this.db.object('public/school').valueChanges();
  }



}
