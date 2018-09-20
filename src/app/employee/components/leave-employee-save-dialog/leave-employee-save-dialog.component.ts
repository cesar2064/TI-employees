import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-leave-employee-save-dialog',
  templateUrl: './leave-employee-save-dialog.component.html',
  styleUrls: ['./leave-employee-save-dialog.component.scss']
})
export class LeaveEmployeeSaveDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LeaveEmployeeSaveDialogComponent>
  ) { }

  ngOnInit() {
  }

  close(leave: boolean) {
    this.dialogRef.close(leave);
  }
}
