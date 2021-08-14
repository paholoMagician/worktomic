import { TestBed } from '@angular/core/testing';

import { VapidKeysService } from './vapid-keys.service';

describe('VapidKeysService', () => {
  let service: VapidKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VapidKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
