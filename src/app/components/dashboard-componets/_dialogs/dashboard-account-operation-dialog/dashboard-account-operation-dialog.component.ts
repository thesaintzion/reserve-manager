import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DasboardAddTransactionDialogComponent } from '../dasboard-add-transaction-dialog/dasboard-add-transaction-dialog.component';

@Component({
  selector: 'app-dashboard-account-operation-dialog',
  templateUrl: './dashboard-account-operation-dialog.component.html',
  styleUrls: ['./dashboard-account-operation-dialog.component.scss']
})
export class DashboardAccountOperationDialogComponent implements OnInit {

  transactionForm;
  loading = false;
  require: Validators = Validators.nullValidator;
  transaction
  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, public dialogRef: MatDialogRef<DasboardAddTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,) { 
  
    // Transaction form
    this.transactionForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      account_transfer_from: ['', [this.require]],
      account_transfer_to: ['', [this.require]],
    })
  }

  onAccountOperationFormSubmit(){
    if(this.transactionForm.invalid){
      this.sharedService.openSnackBar('Please fill all required fields', 'Ok', 9000, 'bg-danger');
    }else{
     
      this.transaction = this.transactionForm.value;
      // this.sharedService.openSnackBar('Good job', 'Ok', 9000, 'bg-success');
      this.dialogRef.close(this.transactionForm.value);

    }
  }

  ngOnInit() {
    if(this.data.type == 'transfer'){
      this.require = Validators.required
    }
  }

}
