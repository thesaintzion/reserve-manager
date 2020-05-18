import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DasboardAddTransactionDialogComponent } from '../dasboard-add-transaction-dialog/dasboard-add-transaction-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-account-operation-dialog',
  templateUrl: './dashboard-account-operation-dialog.component.html',
  styleUrls: ['./dashboard-account-operation-dialog.component.scss']
})
export class DashboardAccountOperationDialogComponent implements OnInit {

  transactionForm;
  depositeForm;
  withdrawForm;
  requestForm;
  loading = false;
  require: Validators = Validators.nullValidator;
  transaction;
  bankDetails;
  noBankDetails;
  goNext: boolean = false;
  lowBalance: boolean = false;
  
  constructor(private apiService: ApiService ,
     private formBuilder: FormBuilder, 
     private sharedService: SharedService, 
     public dialogRef: MatDialogRef<DasboardAddTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router
    ) { 
  
    // Transaction form
    this.transactionForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      account_transfer_from: ['', [this.require]],
      account_transfer_to: ['', [this.require]],
    });

      // Request form
         // uid,
          // request_type,
          // request_amount,
          // comment,
          // request_account_number
      this.depositeForm = this.formBuilder.group({
        request_amount: ['', [Validators.required]],
      });

      this.withdrawForm = this.formBuilder.group({
        request_amount: ['', [Validators.required]],
      });
     
  }

  onAccountOperationFormSubmit(){
    if(this.transactionForm.invalid){
      this.sharedService.openSnackBar('Please fill all required fields', 'Ok', 9000, 'bg-danger');
    }else{
     
      // this.transaction = this.transactionForm.value;
      // this.sharedService.openSnackBar('Good job', 'Ok', 9000, 'bg-success');
      this.dialogRef.close(this.transactionForm.value);

    }
  }

      // GET USER BANK DETAILS
getUserBankDetails(uid){
  let all = false;
  this.apiService.getUserBankDetails(uid, all).subscribe(
    res => {
    
     this.noBankDetails = false;
     this.bankDetails = res.bankDetails[0];
     console.log('getBankDetails', this.bankDetails);
    //  this.bankDetailsForm.patchValue({
    //   account_number: res.bankDetails[0].account_number,
    //   account_name: res.bankDetails[0].account_name,
    //   bank_name:  res.bankDetails[0].bank_name
    //  })
    },
    err => {
    console.log('getBankDetails', err);
    if(err.status == 404){
      this.noBankDetails = true;
    }
    }
  )
}

 // Get loggedin user
 getLoggedInUser(){
  this.apiService.getLoggedInUser().subscribe(
    res => {
 this.apiService.USER.firstname =  res.user.firstname;
 this.apiService.USER.email =  res.user.email;
 this.apiService.USER.firstname =  res.user.firstname;
 this.apiService.USER.user_type_id =  res.user.user_type_id;
 this.apiService.USER.id =  res.user.id;
 this.getUserBankDetails(res.user.id);


 if( res.user.user_type_id != 2){
  this.sharedService.openSnackBar(`Bad request`, '', 3000, 'bg-danger');
  this.router.navigate(['/login']);
}
    },
    err => {
     this.router.navigate(['/login']);
      console.log(err);
   
    }
  )
}

onWithdrawFormSubmit(){
  if(this.withdrawForm.invalid){
    this.sharedService.openSnackBar('Please fill all amount.', 'Ok', 9000, 'bg-danger');
  }else{
    if(this.data.balance < this.withdrawForm.value.request_amount){
      // this.lowBalance = true;
      this.withdrawForm.reset();
      this.sharedService.openSnackBar('Sorry, you have insufficient balance. Please deposite/fund your account and try again.', 'Ok', 93000, 'bg-danger');
    }else if(this.withdrawForm.value.request_amount < 5000){
      this.sharedService.openSnackBar('Sorry, you can on withdraw 5000 and above.', 'Ok', 93000, 'bg-danger');
    }
    else{
      this.dialogRef.close(this.withdrawForm.value);
    }
  }

}
onDepositeFormSubmit(){
  if(this.depositeForm.invalid){
    this.sharedService.openSnackBar('Please fill all amount.', 'Ok', 9000, 'bg-danger');
  }else if(this.depositeForm.value.request_amount < 5000){
      this.sharedService.openSnackBar('Sorry, you can on deposite 5000 and above.', 'Ok', 93000, 'bg-danger');
  }else{
    this.dialogRef.close(this.depositeForm.value);
  }

}


  ngOnInit() {
    this.getLoggedInUser();
    if(this.data.type == 'transfer'){
      this.require = Validators.required
    }
  }

}
