import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { CountryService } from './services/country.service';
import { CountriesResolver } from './services/countries.resolver';
import { GetAgePipe } from './pipes/get-age.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService,
    CountryService,
    CountriesResolver
  ],
  declarations: [
    LoaderComponent,
    GetAgePipe
  ],
  exports: [
    LoaderComponent,
    GetAgePipe
  ]
})
export class SharedModule { }
