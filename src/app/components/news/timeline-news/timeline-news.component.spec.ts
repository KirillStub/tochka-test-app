import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineNewsComponent } from './timeline-news.component';

describe('TimelineNewsComponent', () => {
  let component: TimelineNewsComponent;
  let fixture: ComponentFixture<TimelineNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
