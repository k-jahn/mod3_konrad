import { Injectable } from '@angular/core';

@Injectable()
export class MainLocationService {

  constructor() { }

  public selectedIndex = 1;
  public scroll = {
    home: 0,
    games: 0,
    teams: 0
  };
}
