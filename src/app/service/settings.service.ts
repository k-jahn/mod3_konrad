// service for event data =====================================================================
import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

// firebase
import * as firebase from 'firebase/app';

// service
import { DatabaseService } from './database.service';
import { AuthService } from './auth.service';

// interface
import { Settings } from '../class/settings';

@Injectable()
export class SettingsService {
  private user: firebase.User;
  private settings = new BehaviorSubject<Settings>(null);

  constructor(
    private databaseService: DatabaseService,
    private authService: AuthService,
  ) {
    this.authService.user.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.databaseService.getObject(`user/${this.user.uid}/settings`).subscribe(settings => this.settings.next(settings as Settings));
      }
    });
  }

  getSettings(): Observable<Settings> {
    return this.settings;
  }
  updateSetting(settingName: string, settingValue: number | string | boolean): void {
    const message = {};
    message[settingName] = settingValue;
    this.databaseService.update(`/user/${this.user.uid}/settings`, message);
  }
}