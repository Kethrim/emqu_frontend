import { TestBed } from '@angular/core/testing';

import { LatenciaService } from './latencia.service';

describe('LatenciaService', () => {
  let service: LatenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
