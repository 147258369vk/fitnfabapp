import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlansComponent } from './workout-plans.component';

describe('WorkoutPlansComponent', () => {
  let component: WorkoutPlansComponent;
  let fixture: ComponentFixture<WorkoutPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
