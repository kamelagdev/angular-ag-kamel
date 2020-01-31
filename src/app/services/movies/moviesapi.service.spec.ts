import { TestBed } from '@angular/core/testing';

import { MoviesapiService } from './moviesapi.service';

describe('MoviesapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesapiService = TestBed.get(MoviesapiService);
    expect(service).toBeTruthy();
  });
});
