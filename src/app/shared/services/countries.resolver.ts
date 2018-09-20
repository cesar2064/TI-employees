import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ICountryModel } from '../models/country.model';
import { CountryService } from './country.service';

@Injectable()
export class CountriesResolver implements Resolve<ICountryModel[]> {

  constructor(
    private countryService: CountryService
  ) { }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<ICountryModel[]> {
    return this.countryService.getAll();
  }
}
