import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeasonComponent } from './detail-season.component';

describe('DetailSeasonComponent', () => {
  let component: DetailSeasonComponent;
  let fixture: ComponentFixture<DetailSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
