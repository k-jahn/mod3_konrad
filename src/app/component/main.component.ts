import { Component, OnInit, OnDestroy } from '@angular/core';


import { Link } from '../class/link';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  // links for main carousel
  navLinks = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'games',
      label: 'Games',
    },
    {
      path: 'teams',
      label: 'Teams',
    },
  ];
  selectedIndex = 1;
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  // swipe detection
  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 // Short enough
        && Math.abs(direction[1]) < Math.abs(direction[0]) // Horizontal enough
        && Math.abs(direction[0]) > 30) {  // Long enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        // testing
        if (swipe === 'next') {
          if (this.selectedIndex < 2) {
            this.selectedIndex++;
          }
        } else {
          if (this.selectedIndex > 0) {
            this.selectedIndex--;
          }
        }
      }
    }
  }

  constructor(
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
