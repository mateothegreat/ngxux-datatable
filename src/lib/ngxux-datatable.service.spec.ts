import { TestBed } from '@angular/core/testing';

import { NgxuxDatatableService } from './ngxux-datatable.service';

describe('NgxuxDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxDatatableService = TestBed.get(NgxuxDatatableService);
    expect(service).toBeTruthy();
  });
});
