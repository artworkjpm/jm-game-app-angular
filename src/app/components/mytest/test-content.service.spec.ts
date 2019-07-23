import { TestBed } from '@angular/core/testing';

import { TestContentService } from './test-content.service';

describe('TestContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestContentService = TestBed.get(TestContentService);
    expect(service).toBeTruthy();
  });
});
