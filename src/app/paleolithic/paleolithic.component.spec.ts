import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaleolithicComponent } from './paleolithic.component';

describe('PaleolithicComponent', () => {
  let component: PaleolithicComponent;
  let fixture: ComponentFixture<PaleolithicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaleolithicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaleolithicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
