import { TestBed } from '@angular/core/testing';

import { UtilityProviderService } from './utility-provider.service';

describe('UtilityProviderService', () => {
  let service: UtilityProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
