import { TestBed } from '@angular/core/testing';

import { CrudServiceService } from './crud-service.service';
// Made By Dev Chhaniyara

describe('CrudServiceService', () => {
  let service: CrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
