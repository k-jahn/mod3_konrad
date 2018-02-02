// service for user authentification with firebase ================================================
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DatabaseService } from './database.service';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private databaseService: DatabaseService,
  ) {
    this.user = firebaseAuth.authState;
  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.firebaseAuth
      .auth
      .signInWithPopup(provider);
  }
  logout(): void {
    for (const path in this.databaseService.connections) {
      if (/user/.test(path)) {
        this.databaseService.connections[path].unsubscribe();
      }
    }
    this.firebaseAuth
      .auth
      .signOut();
  }
}
