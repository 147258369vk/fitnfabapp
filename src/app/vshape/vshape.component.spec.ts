import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VshapeComponent } from './vshape.component';

describe('VshapeComponent', () => {
  let component: VshapeComponent;
  let fixture: ComponentFixture<VshapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VshapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
