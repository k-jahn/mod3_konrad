// service for favorites list TODO: implement ==================================
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';


import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

interface favList {
  [propName: string]: boolean;
}
@Injectable()
export class FavoriteService {
  private user: firebase.User;
  private favorites = new BehaviorSubject<object>({});
  public setFavorite(teamId: number, isFavorite: boolean): void {
    const message = {};
    message[teamId.toString()] = isFavorite;
    this.databaseService.update('user/' + this.user.uid + '/favorites/' , message);
  }
  public getFavorites(): Observable<object> {
    console.log(this.favorites.getValue());
    return this.favorites;
  }
  // public getFavorite(teamId: number): Observable<boolean> {
  //   return this.favorites.pipe(
  //     map(fav => fav[teamId] = fav || false)
  //   );
  // }
  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService,
  ) {
    this.authService.user.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.databaseService.getObject('user/' + this.user.uid + '/favorites').subscribe(fav => {
          this.favorites.next(fav as favList);
        });
      } else {
        this.favorites.next({});
      }
    });
  }

}
