// service controlling site titlebar ===========================================================
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class AppTitleService {

  private title = new BehaviorSubject<string>('');
  private titleMap = [
    {
      regEx: /game/,
    },
  ];


  public getTitle() {
    return this.title;
  }


  constructor(
    private location: Location,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      const url = location.path();

    });
  }

}
