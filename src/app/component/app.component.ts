import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location, NgClass } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppTitleService } from '../service/app-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = '';
  url = '';

  // expose sidnav to binding
  @ViewChild('sidenav') public menu: MatSidenav;


  constructor(
    private router: Router,
    private location: Location,
    private titleService: AppTitleService,
  ) {
    router.events.subscribe((val) => {
        this.url = location.path();
    });
    this.titleService.setTitle.subscribe(x => this.title = x);
  }

  goTo(path): void {
    this.router.navigate(path);
  }
  goBack(): void {
    this.location.back();
  }
}
