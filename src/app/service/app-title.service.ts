import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppTitleService {

  public setTitle = new BehaviorSubject<string>('');

  constructor() { }

}
