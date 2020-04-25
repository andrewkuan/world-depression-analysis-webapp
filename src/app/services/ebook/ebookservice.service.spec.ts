import { TestBed } from '@angular/core/testing';

import { EbookserviceService } from './ebookservice.service';

describe('EbookserviceService', () => {
  let service: EbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
