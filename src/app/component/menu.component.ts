import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items = [
    {text: 'MenuItem 1'},
    {text: 'MenuItem 2'},
    {text: 'MenuItem 3'},
    {text: 'MenuItem 4'},
    {text: 'MenuItem 5'},
    {text: 'MenuItem 6'},
    {text: 'MenuItem 7'},
  ];


  constructor(
    private router: Router,
    private app: AppComponent,
  ) { }

  goTo(path: string[]): void {
    this.router.navigate(path);
    this.app.menu.toggle();
  }

  ngOnInit() {
  }

}
