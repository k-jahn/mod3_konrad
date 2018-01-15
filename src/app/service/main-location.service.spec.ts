import { TestBed, inject } from '@angular/core/testing';

import { MainLocationService } from './main-location.service';

describe('MainLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainLocationService]
    });
  });

  it('should be created', inject([MainLocationService], (service: MainLocationService) => {
    expect(service).toBeTruthy();
  }));
});
