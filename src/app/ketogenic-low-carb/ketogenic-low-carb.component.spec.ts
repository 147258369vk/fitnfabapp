import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetogenicLowCarbComponent } from './ketogenic-low-carb.component';

describe('KetogenicLowCarbComponent', () => {
  let component: KetogenicLowCarbComponent;
  let fixture: ComponentFixture<KetogenicLowCarbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetogenicLowCarbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetogenicLowCarbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
