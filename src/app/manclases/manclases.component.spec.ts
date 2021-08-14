import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManclasesComponent } from './manclases.component';

describe('ManclasesComponent', () => {
  let component: ManclasesComponent;
  let fixture: ComponentFixture<ManclasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManclasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
