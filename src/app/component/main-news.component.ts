import { Component, OnInit, OnDestroy } from '@angular/core';

// class
import { Event } from '../class/event';

// service
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit, OnDestroy {
  events: Event[];

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit(  ) {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  ngOnDestroy(  ) {
  }
}
