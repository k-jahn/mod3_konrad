import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  scroll = 0;
  constructor(
    private router: Router,
    private location: Location,
    private app: AppComponent,
  ) { }

  ngOnInit() {
    this.app.title = 'Game Detail';
  }

  goBack(): void {
    this.location.back();
  }

}
