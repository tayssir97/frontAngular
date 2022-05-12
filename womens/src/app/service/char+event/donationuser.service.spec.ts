import { TestBed } from '@angular/core/testing';

import { DonationuserService } from './donationuser.service';

describe('DonationuserService', () => {
  let service: DonationuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
