import { TestBed } from '@angular/core/testing';

import { AutorizadoCGuard } from './autorizado-c.guard';

describe('AutorizadoCGuard', () => {
  let guard: AutorizadoCGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutorizadoCGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
