import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dasboard-add-transaction-dialog',
  templateUrl: './dasboard-add-transaction-dialog.component.html',
  styleUrls: ['./dasboard-add-transaction-dialog.component.scss']
})
export class DasboardAddTransactionDialogComponent implements OnInit {
  transactionForm;
  loading = false;
  require: Validators = Validators.nullValidator;
  transaction;
  users = [];
  constructor(private formBuilder: FormBuilder,
     private sharedService: SharedService, 
     public dialogRef: MatDialogRef<DasboardAddTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, 
    public apiService: ApiService
    ) { 
  
    // Transaction form
    this.transactionForm = this.formBuilder.group({
      uid: ['', [Validators.required]],
      account_number: ['', [Validators.required]],
      transaction_type: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      comment: [''],
    })
  }


  onChange(){
    if(this.transactionForm.value.transaction_type == 'transfer'){
      this.require = Validators.required
    }
  }

  // Handle transaction form
  onTransactionFormSubmit(){
    if(this.transactionForm.invalid){
      this.sharedService.openSnackBar('Please fill all required fields', 'Ok', 9000, 'bg-danger');
    }else{
      this.dialogRef.close(this.transactionForm.value);
    }
  }

  // Get users
  getUsers(){
    this.apiService.getUsers().subscribe(
      res => {
        console.log('The Userrs', res)
       setTimeout( () =>{
  this.loading = false;
       }, 2000);
  this.users = res.users;
  
      },
      err => {
        console.log('Get users error', err);
       setTimeout( () =>{
         this.loading = false;
         }, 2000);
      }
    )
   }

  ngOnInit() {
    this.getUsers();
    if(this.data){
      console.log(this.data);
      this.transactionForm.patchValue({
        uid: this.data.transaction.uid,
        account_number: this.data.transaction.account_number,
        transaction_type: this.data.transaction.transaction_type,
        amount: this.data.transaction.amount,
        // account_transfer_from: this.data.transaction.account_transfer_from,
        // account_transfer_to: this.data.transaction.account_transfer_to
      })
    }
  }

}
