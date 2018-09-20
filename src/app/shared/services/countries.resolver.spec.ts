import { TestBed, async, inject } from '@angular/core/testing';

import { CountriesResolver } from './countries.resolver';

describe('CountriesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesResolver]
    });
  });

  it('should ...', inject([CountriesResolver], (resolver: CountriesResolver) => {
    expect(resolver).toBeTruthy();
  }));
});
