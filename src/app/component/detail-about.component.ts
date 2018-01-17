import { Component, OnInit } from '@angular/core';
import { AppComponent } from './app.component';


@Component({
  selector: 'app-detail-about',
  templateUrl: './detail-about.component.html',
  styleUrls: ['./detail-about.component.scss']
})
export class DetailAboutComponent implements OnInit {

  constructor(
    private app: AppComponent
  ) {
  }
  ngOnInit() {
    Promise.resolve(null).then(() => this.app.setTitle.next('About NYSL'));
  }

}
