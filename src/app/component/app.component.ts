import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location, NgClass } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = '';
  url = '';
  @ViewChild('sidenav') public menu: MatSidenav;


  constructor(
    private router: Router,
    private location: Location
  ) {
    router.events.subscribe((val) => {
        this.url = location.path();
        console.log(this.url);
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
