import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermittentfastingComponent } from './intermittentfasting.component';

describe('IntermittentfastingComponent', () => {
  let component: IntermittentfastingComponent;
  let fixture: ComponentFixture<IntermittentfastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermittentfastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermittentfastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
