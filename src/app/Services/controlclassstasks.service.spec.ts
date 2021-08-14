import { TestBed } from '@angular/core/testing';

import { ControlclassstasksService } from './controlclassstasks.service';

describe('ControlclassstasksService', () => {
  let service: ControlclassstasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlclassstasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
