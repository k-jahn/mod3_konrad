import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeGameComponent } from './badge-game.component';

describe('BadgeGameComponent', () => {
  let component: BadgeGameComponent;
  let fixture: ComponentFixture<BadgeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
