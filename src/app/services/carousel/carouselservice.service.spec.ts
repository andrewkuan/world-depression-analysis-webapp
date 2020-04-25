import { TestBed } from '@angular/core/testing';

import { CarouselserviceService } from './carouselservice.service';

describe('CarouselserviceService', () => {
  let service: CarouselserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
