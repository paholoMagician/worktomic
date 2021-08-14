import { TestBed } from '@angular/core/testing';

import { ControllerLoginService } from './controller-login.service';

describe('ControllerLoginService', () => {
  let service: ControllerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
