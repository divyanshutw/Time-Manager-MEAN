import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerTaskAddComponent } from './time-tracker-task-add.component';

describe('TimeTrackerTaskAddComponent', () => {
  let component: TimeTrackerTaskAddComponent;
  let fixture: ComponentFixture<TimeTrackerTaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTrackerTaskAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerTaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
