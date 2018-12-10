import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbcycleComponent } from './carbcycle.component';

describe('CarbcycleComponent', () => {
  let component: CarbcycleComponent;
  let fixture: ComponentFixture<CarbcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
