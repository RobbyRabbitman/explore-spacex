import { TestBed } from '@angular/core/testing';

import { LaunchGuard } from './launch.guard';

describe('LaunchGuard', () => {
  let guard: LaunchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LaunchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
