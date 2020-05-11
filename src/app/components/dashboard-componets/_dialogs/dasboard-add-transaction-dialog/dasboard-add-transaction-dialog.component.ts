import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dasboard-add-transaction-dialog',
  templateUrl: './dasboard-add-transaction-dialog.component.html',
  styleUrls: ['./dasboard-add-transaction-dialog.component.scss']
})
export class DasboardAddTransactionDialogComponent implements OnInit {
  transactionForm;
  loading = false;
  require: Validators = Validators.nullValidator;
  transaction
  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, public dialogRef: MatDialogRef<DasboardAddTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,) { 
  
    // Transaction form
    this.transactionForm = this.formBuilder.group({
      uid: ['', [Validators.required]],
      account_number: ['', [Validators.required]],
      transaction_type: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      account_transfer_from: ['', [this.require]],
      account_transfer_to: ['', [this.require]],
    })
  }


  onChange(){
    if(this.transactionForm.value.transaction_type == 'transfer'){
      this.require = Validators.required
    }
  }

  onTransactionFormSubmit(){
    if(this.transactionForm.invalid){
      this.sharedService.openSnackBar('Please fill all required fields', 'Ok', 9000, 'bg-danger');
    }else{
     
      this.transaction = this.transactionForm.value;
      // this.sharedService.openSnackBar('Good job', 'Ok', 9000, 'bg-success');
      this.dialogRef.close(this.transactionForm.value);

    }
  }

  ngOnInit() {
  }

}
