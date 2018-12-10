import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediterraneanComponent } from './mediterranean.component';

describe('MediterraneanComponent', () => {
  let component: MediterraneanComponent;
  let fixture: ComponentFixture<MediterraneanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediterraneanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediterraneanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
