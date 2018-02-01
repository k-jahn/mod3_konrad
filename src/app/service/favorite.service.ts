// service for favorites list TODO: implement ==================================
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';


import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable()
export class FavoriteService {
  private user: firebase.User;
  private favorites = new BehaviorSubject<object>({});
  public toggleFavorite(teamId: number): void {
    if (!this.user) {
      return;
    }
    const message = {};
    message[teamId] = !this.getFavorites().getValue()[teamId] || true;
    this.databaseService.update('user/' + this.user.uid + '/favorites', message);
  }
  public getFavorites(): BehaviorSubject<object> {
    return this.favorites;
  }
  public getFavorite(teamId: number) {
    return this.favorites.pipe(
      map(fav => fav[teamId] || false)
    );
  }
  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService,
  ) {
    this.authService.user.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.databaseService.get('user/' + this.user.uid + '/favorites').subscribe(fav => this.favorites.next(fav));
      } else {
        this.favorites.next({});
      }
    });
  }

}
