import { TestBed } from '@angular/core/testing';

import { StripePaysService } from './stripe-pays.service';

describe('StripePaysService', () => {
  let service: StripePaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StripePaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
