import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAnalyzerComponent } from './time-analyzer.component';

describe('TimeAnalyzerComponent', () => {
  let component: TimeAnalyzerComponent;
  let fixture: ComponentFixture<TimeAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
