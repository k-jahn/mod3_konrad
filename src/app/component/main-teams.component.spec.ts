import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeamsComponent } from './main-teams.component';

describe('TeamsComponent', () => {
  let component: MainTeamsComponent;
  let fixture: ComponentFixture<MainTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
