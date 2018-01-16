import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = '';
  url = '';

  constructor(
    private router: Router,
    private location: Location
  ) {
    router.events.subscribe((val) => {
        this.url = location.path();
    });
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
