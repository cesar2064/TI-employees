import { Component, Input, ViewChild, Output, EventEmitter, forwardRef } from '@angular/core';
import { MatSelect } from '@angular/material';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-employee-job-title',
  templateUrl: './employee-job-title.component.html',
  styleUrls: ['./employee-job-title.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmployeeJobTitleComponent),
      multi: true
    }
  ]
})
export class EmployeeJobTitleComponent implements ControlValueAccessor {

  private _area: string;
  disabled = false;

  @ViewChild('select') select: MatSelect;

  @Input()
  set area(area: string) {
    this.jobs = this.areas[area];
    this.select.value = '';
    this._area = area;
  }
  get area(): string {
    return this._area;
  }

  jobs = [];

  areas = {
    services: [
      {
        key: 'manager',
        description: 'Manager'
      },
      {
        key: 'waitress',
        description: 'Waitress'
      },
      {
        key: 'host',
        description: 'Host'
      },
      {
        key: 'tuttofare',
        description: 'Tuttofare'
      },
      {
        key: 'dinningroommanager',
        description: 'Dinning Room Manager'
      }
    ],
    kitchen: [
      {
        key: 'souschef',
        description: 'Sous Chef'
      },
      {
        key: 'chef',
        description: 'Chef'
      },
      {
        key: 'dishwasher',
        description: 'DishWasher'
      }
    ]
  };

  propagateChange;
  propagateTouch;

  constructor() { }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  change(job: string) {
    this.propagateTouch();
    this.propagateChange(job);
  }

  registerOnTouched(fn) {
    this.propagateTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  writeValue(value: any) {
    this.select.value = value;
  }

}
