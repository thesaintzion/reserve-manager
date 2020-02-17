import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-create-account-dialog',
  templateUrl: './dashboard-create-account-dialog.component.html',
  styleUrls: ['./dashboard-create-account-dialog.component.scss']
})
export class DashboardCreateAccountDialogComponent implements OnInit {
loading = false;
accountForm;
  constructor(public dialogRef: MatDialogRef< DashboardCreateAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private formBuilder: FormBuilder) { 

      this.accountForm = this.formBuilder.group({
        accountType: ['', [Validators.required]],
        accountDenomination: ['', [Validators.required]],
        investmentPeriod: ['', [Validators.required]]
      })
    }

  onFormSubmit(){
  this.loading = true;
  setTimeout( ()=>{
this.loading = false;
  }, 2000);
}

//prefill form
fillForm(){
if( this.data.selectedAccount){
  this.accountForm.patchValue({
    accountType: this.data.selectedAccount.type,
    accountDenomination:  this.data.selectedAccount.denomination,
    investmentPeriod: this.data.selectedAccount.period,
   })
}
}


  ngOnInit() {
    this.fillForm();
   
   

  }

}
