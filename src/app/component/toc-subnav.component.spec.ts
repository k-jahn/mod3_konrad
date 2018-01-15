import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocSubnavComponent } from './toc-subnav.component';

describe('TocSubnavComponent', () => {
  let component: TocSubnavComponent;
  let fixture: ComponentFixture<TocSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
