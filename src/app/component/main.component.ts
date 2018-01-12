import { Component, OnInit } from '@angular/core';

import { AppComponent } from './app.component';

import { Link } from '../class/link';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // links for main carousel
  navLinks = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'games',
      label: 'Games',
    },
    {
      path: 'teams',
      label: 'Teams',
    },
  ];
  // links for subnav, edited by current location
  public subnavLinks: Link[] =  [
    {
      path: '#mygames',
      label: 'My Games',
    },
    {
      path: '#upcoming',
      label: 'upcoming',
    },
  ];

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
    this.app.title = 'NYSL';
  }

}
