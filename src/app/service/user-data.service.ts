// service for favorites list TODO: implement ==================================
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';


import { AuthService } from './auth.service';
import { DatabaseService } from '../_database.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { FavList } from '../class/favlist';
import { Settings } from '../class/settings';

@Injectable()
export class UserDataService extends DatabaseService {
  private user: firebase.User;
  private favorites = new BehaviorSubject<FavList>({});
  private settings = new BehaviorSubject<Settings>(null);

  constructor(
    private authService: AuthService,
    db: AngularFireDatabase
  ) {
    super(db);
    this.authService.user.subscribe(user => {
      this.closeConnections();
      this.user = user;
      if (this.user) {
        this.getObject(`/user/${this.user.uid}/favorites`).subscribe(favorite => this.favorites.next(favorite as FavList));
        this.getObject(`user/${this.user.uid}/settings`).map(settings => this.settings.next(settings as Settings));
      } else {
        this.favorites.next({});
        this.settings.next(null);
      }
    });
  }

  // favorites methods ============================================
  public setFavorite(teamId: number, isFavorite: boolean): void {
    const message = {};
    message[teamId.toString()] = isFavorite;
    this.update('user/' + this.user.uid + '/favorites/', message);
  }
  public getFavorites(): Observable<FavList> {
    return this.favorites;
  }
  public getFavorite(teamId: number): Observable<boolean> {
    return this.favorites.pipe(
      map(fav => fav[teamId.toString()] || false)
    );
  }

  // settings methods ==================================================

  getSettings(): Observable<Settings> {
    return this.settings;
  }
  updateSetting(settingName: string, settingValue: number | string | boolean): void {
    const message = {};
    message[settingName] = settingValue;
    this.update(`/user/${this.user.uid}/settings`, message);
  }

}
