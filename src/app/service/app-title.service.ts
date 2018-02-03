// service controlling site titlebar ===========================================================
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class AppTitleService {

  private title = new BehaviorSubject<string>('');

  public getTitle() {
    return this.title;
  }


  constructor(
    private location: Location,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      console.log(location.path());
      switch (location.path()) {

      }
    });
  }

}
