import { TestBed, async } from '@angular/core/testing';

import { Forecast5Service } from './forecast5.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Forecast5Service', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient, HttpHandler
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: Forecast5Service = TestBed.get(Forecast5Service);
    expect(service).toBeTruthy();
  });
});
