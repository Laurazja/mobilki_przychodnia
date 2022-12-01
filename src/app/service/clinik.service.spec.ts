import { TestBed } from '@angular/core/testing';

import { ClinikService } from './clinik.service';

describe('ClinikService', () => {
  let service: ClinikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
