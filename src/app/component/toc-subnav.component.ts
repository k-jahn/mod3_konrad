import { Component, OnInit } from '@angular/core';

import { Link } from '../class/link';

@Component({
  selector: 'app-toc-subnav',
  templateUrl: './toc-subnav.component.html',
  styleUrls: ['./toc-subnav.component.scss']
})
export class TocSubnavComponent implements OnInit {
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
