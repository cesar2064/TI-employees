import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeSaveDeactivate } from './employe-save.deactivate';

describe('EmployeSaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeSaveDeactivate]
    });
  });

  it('should ...', inject([EmployeSaveDeactivate], (deactivate: EmployeSaveDeactivate) => {
    expect(deactivate).toBeTruthy();
  }));
});
