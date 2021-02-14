import { TestBed } from '@angular/core/testing';

import { CourseCategoryMockService } from './course-category-mock.service';

describe('CourseCategoryMockService', () => {
  let service: CourseCategoryMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCategoryMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
