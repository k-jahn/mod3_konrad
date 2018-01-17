import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTeamComponent } from './badge-team.component';

describe('BadgeTeamComponent', () => {
  let component: BadgeTeamComponent;
  let fixture: ComponentFixture<BadgeTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
