import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-delete-confirm-dialog',
  templateUrl: './dashboard-delete-confirm-dialog.component.html',
  styleUrls: ['./dashboard-delete-confirm-dialog.component.scss']
})
export class DashboardDeleteConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DashboardDeleteConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,) { }



    onFormSubmit(){
      
    }
  ngOnInit() {
    console.log(this.data);
  }

}
