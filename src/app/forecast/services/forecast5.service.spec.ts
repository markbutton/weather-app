import { TestBed } from '@angular/core/testing';

import { Forecast5Service } from './forecast5.service';

describe('Forecast5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Forecast5Service = TestBed.get(Forecast5Service);
    expect(service).toBeTruthy();
  });
});
