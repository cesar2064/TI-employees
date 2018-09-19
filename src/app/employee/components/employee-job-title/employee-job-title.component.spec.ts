import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobTitleComponent } from './employee-job-title.component';

describe('EmployeeJobTitleComponent', () => {
  let component: EmployeeJobTitleComponent;
  let fixture: ComponentFixture<EmployeeJobTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeJobTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeJobTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
