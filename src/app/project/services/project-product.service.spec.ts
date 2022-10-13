import { TestBed } from '@angular/core/testing';

import { ProjectProductService } from './project-product.service';

describe('ProjectProductService', () => {
  let service: ProjectProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
