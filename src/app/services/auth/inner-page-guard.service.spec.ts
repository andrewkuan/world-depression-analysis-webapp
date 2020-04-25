import { TestBed } from '@angular/core/testing';

import { InnerPageGuardService } from './inner-page-guard.service';

describe('InnerPageGuardService', () => {
  let service: InnerPageGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnerPageGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
