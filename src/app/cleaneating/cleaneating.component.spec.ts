import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaneatingComponent } from './cleaneating.component';

describe('CleaneatingComponent', () => {
  let component: CleaneatingComponent;
  let fixture: ComponentFixture<CleaneatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaneatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaneatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
