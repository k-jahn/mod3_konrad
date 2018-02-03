// service for favorites list TODO: implement ==================================
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';


import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import {FavList } from '../class/favlist';

@Injectable()
export class FavoriteService {

  private connection;
  private user: firebase.User;
  private favorites = new BehaviorSubject<FavList>({});


  public setFavorite(teamId: number, isFavorite: boolean): void {
    const message = {};
    message[teamId.toString()] = isFavorite;
    this.databaseService.update('user/' + this.user.uid + '/favorites/' , message);
  }
  public getFavorites(): Observable<FavList> {
    return this.favorites;
  }
  public getFavorite(teamId: number): Observable<boolean> {
    return this.favorites.pipe(
      map(fav => fav[teamId.toString()] || false)
    );
  }
  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService,
  ) {
    this.authService.user.subscribe(user => {
      if (this.connection) {
        this.connection.unsubscribe();
      }
      this.user = user;
      if (this.user) {
        this.connection = this.databaseService.getObject('user/' + this.user.uid + '/favorites').subscribe(fav => {
          this.favorites.next(fav as FavList);
        });
      } else {
        this.favorites.next({});
      }
    });
  }

}
