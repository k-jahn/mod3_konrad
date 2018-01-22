// library
import { Component, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

// services
import { AppTitleService } from '../service/app-title.service';


@Component({
  selector: 'app-detail-about',
  templateUrl: './detail-about.component.html',
  styleUrls: ['./detail-about.component.scss']
})
export class DetailAboutComponent implements OnInit {

  constructor(
    private titleService: AppTitleService,
  ) {
  }
  ngOnInit() {
    Promise.resolve(() => this.titleService.setTitle.next('About NYSL'));
  }

}
