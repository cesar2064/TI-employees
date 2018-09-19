import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICountryModel } from '../../../shared/models/country.model';
import { ActivatedRoute } from '@angular/router';
import { CommonComponent } from '../../../shared/abstract/common-component.abstract';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RootStoreState, EmployeeStoreSelectors, EmployeeStoreActions } from '../../../root-store';
import { EmployeeSaveAction } from '../../../root-store/employee-store/actions';

declare var moment: any;

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent extends CommonComponent implements OnInit {
    title = 'New Employee';
    employeeForm: FormGroup;
    countries: ICountryModel[] = [];
    area: string;
    formSent = false;

    constructor(
        private fb: FormBuilder,
        private acr: ActivatedRoute,
        private store$: Store<RootStoreState.State>,
        private router: Router
    ) {
        super();
    }

    ngOnInit() {
        this.acr.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.countries = data.countries;
        });
        this.initForm();
    }

    private initForm(): void {

        this.employeeForm = this.fb.group({
            name: ['', Validators.required],
            area: ['', Validators.required],
            dob: ['', Validators.compose([Validators.required, this.validateAge])],
            jobTitle: ['', Validators.required],
            country: ['', Validators.required],
            tipRate: [{ value: '', disabled: true }],
            username: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9a-zA-Z]+/g)])],
            hireDate: ['', Validators.compose([Validators.required, this.validateDate])],
            status: [true, Validators.required]
        });
        this.onJobChange();
    }

    private validateAge(c: FormControl) {
        const validity = {
            validateAge: {
                valid: false
            }
        };
        const value = c.value;
        if (value && value instanceof Date) {
            if (moment().diff(value, 'years') >= 18) {
                return null;
            }
        }
        return validity;
    }

    private validateDate(c: FormControl) {
        const validity = {
            validateYear: {
                valid: false
            }
        };
        const value = c.value;
        if (value && value instanceof Date) {
            if (moment().diff(value, 'hours') >= 0) {
                return null;
            }
        }
        return validity;
    }

    private onJobChange() {
        const tipRateControl = this.employeeForm.controls.tipRate as FormControl;
        const jobTitleControl = this.employeeForm.controls.jobTitle as FormControl;
        // used for dynamic validation in tip rate
        const tipRateValidators = [Validators.required, Validators.pattern(/[0-9]+/g)];

        jobTitleControl.valueChanges.pipe(takeUntil(this.destroy$), distinctUntilChanged()).subscribe((job) => {
            switch (job) {
                case 'waitress': case 'dinningroommanager':
                    // validates only when the field is enabled
                    tipRateControl.setValidators(tipRateValidators);
                    tipRateControl.enable({ onlySelf: true });
                    break;
                default:
                    tipRateControl.clearValidators();
                    tipRateControl.disable({ onlySelf: true });
                    break;
            }
        });

    }

    save() {
        this.store$.dispatch(new EmployeeSaveAction({ employee: this.employeeForm.value }));
        this.formSent = true;
        this.router.navigate(['../']);
    }
}
