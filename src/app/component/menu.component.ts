import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

import * as firebase from 'firebase/app';

import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user: firebase.User;

  constructor(
    private app: AppComponent,
    private authService: AuthService,
    private router: Router,
  ) { }

  goTo(path: string[]): void {
    this.router.navigate(path);
    this.app.menu.toggle();
  }

  ngOnInit() {
    this.authService.user.subscribe(user => this.user = user);
  }

}
