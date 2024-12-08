import { TestBed } from '@angular/core/testing';

import { FirebaseCommsService } from './firebase-comms.service';

describe('FirebaseCommsService', () => {
  let service: FirebaseCommsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCommsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
