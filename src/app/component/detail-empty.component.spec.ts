import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmptyComponent } from './detail-empty.component';

describe('DetailEmptyComponent', () => {
  let component: DetailEmptyComponent;
  let fixture: ComponentFixture<DetailEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
