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
  sideBySide = false;

  // expose sidnav to binding
  @ViewChild('sidenav') public menu: MatSidenav;


  constructor(
    private router: Router,
    private location: Location,
    private titleService: AppTitleService,
  ) {
    router.events.subscribe((val) => {
        const reg = /(game)|(team)/;
        this.url = location.path();
        if (reg.test(this.url)) {
          this.sideBySide = true;
        } else {
          this.sideBySide = false;
        }
    });
    this.titleService.getTitle().subscribe(x => this.title = x);
  }

  goTo(path): void {
    this.router.navigate(path);
  }
  goBack(): void {
    this.location.back();
  }
}
