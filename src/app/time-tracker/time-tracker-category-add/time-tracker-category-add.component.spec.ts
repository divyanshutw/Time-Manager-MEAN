import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerCategoryAddComponent } from './time-tracker-category-add.component';

describe('TimeTrackerCategoryAddComponent', () => {
  let component: TimeTrackerCategoryAddComponent;
  let fixture: ComponentFixture<TimeTrackerCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTrackerCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
