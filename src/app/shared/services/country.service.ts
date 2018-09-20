import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountryModel } from '../models/country.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<ICountryModel[]>(`${environment.api.countries}/all`);
  }
}
