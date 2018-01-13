import { Component, OnInit } from '@angular/core';

// class
import { Event } from '../class/event';

// service
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[];

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(  ) {
    this.eventService.getEvents().subscribe(events => this.events = events);

  }

}
