import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard-create-account-dialog',
  templateUrl: './dashboard-create-account-dialog.component.html',
  styleUrls: ['./dashboard-create-account-dialog.component.scss']
})
export class DashboardCreateAccountDialogComponent implements OnInit {
loading = false;
accountForm;
utilityFrom;
  constructor(public dialogRef: MatDialogRef< DashboardCreateAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private formBuilder: FormBuilder, private sharedService: SharedService) { 
// Account form
      this.accountForm = this.formBuilder.group({
        accountType: ['', [Validators.required]],
        accountDenomination: ['', [Validators.required]],
        investmentPeriod: ['', [Validators.required]]
      });

      // Utility form
      this.utilityFrom = this.formBuilder.group({
        utility: ['', [Validators.required]]
      });
    }

  onFormSubmit(){
  this.loading = true;
  setTimeout( ()=>{
this.loading = false;
  }, 2000);
}

// When Utility form is submited
onUtilityFormSubmit(){
  if(this.utilityFrom.invalid){
    this.sharedService.openSnackBar('Please fill in the field', 'ok', 2000, 'bg-danger')
  }else{
    this.loading = true;
    setTimeout( ()=>{
  this.loading = false;
    this.dialogRef.close(this.utilityFrom.value.utility);
    }, 2000);
  }
  
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
    console.log(this.data)
    this.fillForm();
   
   

  }

}
