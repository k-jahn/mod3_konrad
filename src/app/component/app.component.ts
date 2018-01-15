import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = '';
  constructor(
    private router: Router,
    private location: Location
  ) { }

  goTo(path): void {
    this.router.navigate(path);
  }
}
