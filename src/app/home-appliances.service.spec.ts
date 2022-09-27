import { TestBed } from '@angular/core/testing';

import { HomeAppliancesService } from './home-appliances.service';

describe('HomeAppliancesService', () => {
  let service: HomeAppliancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAppliancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
