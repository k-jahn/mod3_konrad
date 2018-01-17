import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyDetailComponent } from './empty-detail.component';

describe('EmptyDetailComponent', () => {
  let component: EmptyDetailComponent;
  let fixture: ComponentFixture<EmptyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
