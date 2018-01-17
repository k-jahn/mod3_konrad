import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAboutComponent } from './detail-about.component';

describe('DetailAboutComponent', () => {
  let component: DetailAboutComponent;
  let fixture: ComponentFixture<DetailAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
