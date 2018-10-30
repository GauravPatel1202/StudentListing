import { TestBed } from '@angular/core/testing';

import { CommSeriveService } from './comm-serive.service';

describe('CommSeriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommSeriveService = TestBed.get(CommSeriveService);
    expect(service).toBeTruthy();
  });
});
