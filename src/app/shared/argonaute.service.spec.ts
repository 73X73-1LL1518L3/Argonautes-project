import { TestBed } from '@angular/core/testing';

import { ArgonauteService } from './argonaute.service';

describe('ArgonauteService', () => {
  let service: ArgonauteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgonauteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
