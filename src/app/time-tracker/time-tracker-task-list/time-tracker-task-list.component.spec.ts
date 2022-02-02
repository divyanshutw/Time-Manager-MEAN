import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerTaskListComponent } from './time-tracker-task-list.component';

describe('TimeTrackerTaskListComponent', () => {
  let component: TimeTrackerTaskListComponent;
  let fixture: ComponentFixture<TimeTrackerTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTrackerTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
