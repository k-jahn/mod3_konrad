import { Component, OnInit } from '@angular/core';

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
  ]
  constructor() { }

  ngOnInit() {
  }

}
