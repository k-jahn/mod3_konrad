import { Component, OnInit, OnDestroy } from '@angular/core';

// class
import { Event } from '../class/event';
import { PublicDataService } from '../service/public-data.service';

// service

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit, OnDestroy {
  events: Event[];

  constructor(
    private publicDataService: PublicDataService,
  ) { }

  ngOnInit(  ) {
    this.publicDataService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  ngOnDestroy(  ) {
  }
}
