import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubnavComponent } from './main-subnav.component';

describe('MainSubnavComponent', () => {
  let component: MainSubnavComponent;
  let fixture: ComponentFixture<MainSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
