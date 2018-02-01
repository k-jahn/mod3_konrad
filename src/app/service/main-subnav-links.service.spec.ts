import { TestBed, inject } from '@angular/core/testing';

import { MainSubnavLinksService } from './main-subnav-links.service';

describe('MainSubnavLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainSubnavLinksService]
    });
  });

  it('should be created', inject([MainSubnavLinksService], (service: MainSubnavLinksService) => {
    expect(service).toBeTruthy();
  }));
});
