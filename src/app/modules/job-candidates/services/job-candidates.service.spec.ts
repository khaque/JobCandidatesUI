import { TestBed } from '@angular/core/testing';

import { JobCandidatesService } from './job-candidates.service';

describe('JobCandidatesService', () => {
  let service: JobCandidatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobCandidatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
