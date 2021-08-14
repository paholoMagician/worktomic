import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatedWorkedComponent } from './lated-worked.component';

describe('LatedWorkedComponent', () => {
  let component: LatedWorkedComponent;
  let fixture: ComponentFixture<LatedWorkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatedWorkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatedWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
