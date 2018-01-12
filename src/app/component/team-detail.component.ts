import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  constructor(
    private app: AppComponent,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.app.title = 'Team Detail';
  }

}
