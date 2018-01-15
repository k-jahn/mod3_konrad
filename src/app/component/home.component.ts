import { Component, OnInit, OnDestroy } from '@angular/core';

// class
import { Event } from '../class/event';

// service
import { EventService } from '../service/event.service';
import { MainLocationService } from '../service/main-location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  events: Event[];
  scroll = 0;

  constructor(
    private eventService: EventService,
    private locationService: MainLocationService
  ) { }

  ngOnInit(  ) {
    this.eventService.getEvents().subscribe(events => this.events = events);
    // set scroll
    this.scroll = this.locationService.scroll.home;
  }

  ngOnDestroy(  ) {
    // save scroll
    this.locationService.scroll.home = this.scroll = document.querySelector('.page').scrollTop;
  }
}
