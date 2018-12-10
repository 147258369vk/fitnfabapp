import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibledietingComponent } from './flexibledieting.component';

describe('FlexibledietingComponent', () => {
  let component: FlexibledietingComponent;
  let fixture: ComponentFixture<FlexibledietingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibledietingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibledietingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
