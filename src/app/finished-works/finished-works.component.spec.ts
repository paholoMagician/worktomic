import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedWorksComponent } from './finished-works.component';

describe('FinishedWorksComponent', () => {
  let component: FinishedWorksComponent;
  let fixture: ComponentFixture<FinishedWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
