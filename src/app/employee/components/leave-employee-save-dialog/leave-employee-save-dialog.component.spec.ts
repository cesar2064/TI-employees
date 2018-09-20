import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEmployeeSaveDialogComponent } from './leave-employee-save-dialog.component';

describe('LeaveEmployeeSaveDialogComponent', () => {
  let component: LeaveEmployeeSaveDialogComponent;
  let fixture: ComponentFixture<LeaveEmployeeSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveEmployeeSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveEmployeeSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
