import { Component, OnInit } from '@angular/core';

import { Link } from '../class/link';

@Component({
  selector: 'app-main-subnav',
  templateUrl: './main-subnav.component.html',
  styleUrls: ['./main-subnav.component.scss']
})
export class MainSubnavComponent implements OnInit {
  links: Link[] = [
    {
      path: '',
      label: 'ToC 1'
    },
    {
      path: '',
      label: 'ToC 2'
    },
    {
      path: '',
      label: 'ToC 3'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
