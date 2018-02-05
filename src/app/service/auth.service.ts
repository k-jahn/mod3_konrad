// service for user authentification with firebase ================================================
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
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
    this.firebaseAuth
      .auth
      .signOut();
  }
}
