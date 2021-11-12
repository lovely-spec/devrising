import { TestBed } from '@angular/core/testing';

import { AddNewMemberService } from './add-new-member.service';

describe('AddNewMemberService', () => {
  let service: AddNewMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
