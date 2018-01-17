import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location, NgClass } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title = '';
  url = '';

  // expose sidnav to binding
  @ViewChild('sidenav') public menu: MatSidenav;
  public setTitle = new BehaviorSubject<string>('');

  constructor(
    private router: Router,
    private location: Location
  ) {
    router.events.subscribe((val) => {
        this.url = location.path();
    });
    this.setTitle.subscribe(x => this.title = x);
  }

  goTo(path): void {
    this.router.navigate(path);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
  }


}
