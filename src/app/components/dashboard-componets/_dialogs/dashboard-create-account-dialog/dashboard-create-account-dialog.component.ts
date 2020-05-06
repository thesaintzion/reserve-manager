import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
// import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard-create-account-dialog',
  templateUrl: './dashboard-create-account-dialog.component.html',
  styleUrls: ['./dashboard-create-account-dialog.component.scss']
})
export class DashboardCreateAccountDialogComponent implements OnInit {
loading = false;
accountForm;
utilityFrom;
accountTypes = [];
denominations = [];
investmentPeriods = [];
account = [];

accountEdit =  {
accountNo: '',
uid: '',
balance: '',
createdAt: '',
type: '',
denomination: '',
period: '',
account_id: ''
}

selected = 'option3';
  constructor(public dialogRef: MatDialogRef<DashboardCreateAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private formBuilder: FormBuilder, public apiService: ApiService, private router: Router) { 
// Account form
      this.accountForm = this.formBuilder.group({
        accountType: ['', [Validators.required]],
        denomination: ['', [Validators.required]],
        investmentPeriod: ['', [Validators.required]]
      });

      // Utility form
      this.utilityFrom = this.formBuilder.group({
        utility: ['', [Validators.required]]
      });
    }


    // Add an account
  onAccountFormSubmit(){
  if(this.data.type == 'editAccount'){
    let account = {
      account_id:  this.accountEdit.account_id,
      denomination_id: this.accountForm.value.denomination,
      account_type_id:  this.accountForm.value.accountType,
      investment_period_id: this.accountForm.value.investmentPeriod,
    } 
    this.dialogRef.close(account);
  }else{
    let account = {
      denomination_id: this.accountForm.value.denomination,
      account_type_id:  this.accountForm.value.accountType,
      investment_period_id: this.accountForm.value.investmentPeriod,
    }
    this.dialogRef.close(account)


  } 
}

// Add utility
onUtilityFormSubmit(){
  if(this.utilityFrom.invalid){
    // this.sharedService.openSnackBar('Please fill in the field', 'ok', 2000, 'bg-danger')
  }else{
    this.loading = true;
    setTimeout( ()=>{
  this.loading = false;
    this.dialogRef.close(this.utilityFrom.value.utility);
    }, 2000);
  }
  
}

// Get account types
getAccountTypes(){
  this.apiService.getAccountTypes().subscribe(
    res => {
      console.log(res);
      this.accountTypes = res.accountType;
    },
    err => {
      console.log(err); 
    })
}

// Get denominations types
getDenominations(){
  this.apiService.getDenominations().subscribe(
    res => {
      console.log(res);
      this.denominations = res.denomination;
    },
    err => {
      console.log(err); 
    })
}
getInvestmentPeriods(){
  this.apiService.getInvestmentPeriods().subscribe(
    res => {
      console.log(res);
      this.investmentPeriods = res.investmentPeriod;
    },
    err => {
      console.log(err); 
    })
}

getAccount(uid, account_id, query){
  this.apiService.getAccount(uid, account_id, query).subscribe(
    res => {
      console.log('the account', res);
    if(this.data.type == 'editAccount' && this.data.account_id){
  this.accountForm.patchValue({
accountType: res.accounts[0].account_type_id,
denomination:  res.accounts[0].denomination_id,
investmentPeriod:  res.accounts[0].investment_period_id,
    });
  this.accountEdit.uid =   `${res.accounts[0].firstname} ${res.accounts[0].lastname}`;
  this.accountEdit.balance = res.accounts[0].balance;
  this.accountEdit.createdAt =  res.accounts[0].createdAt;
  this.accountEdit.accountNo =  res.accounts[0].account_number;
  this.accountEdit.account_id =  res.accounts[0].id;

}
    },
    err => {
      console.log(err);
    });
}

//  Get loggedin user
getLoggedInUser(){
  this.apiService.getLoggedInUser().subscribe(
    res => {
this.apiService.USER.firstname =  res.user.firstname;
this.apiService.USER.firstname =  res.user.firstname;
this.apiService.USER.user_type_id =  res.user.user_type_id;
this.apiService.USER.id = res.user.id;
let account_id =  this.data.account_id;

let query = 'single';
this.getAccount(res.user.id, account_id, query);

    },
    err => {
     this.router.navigate(['/login']);
      console.log(err);
   
    })
}

  ngOnInit() {
    this.getAccountTypes();
    this.getDenominations();
    this.getInvestmentPeriods();
    this.getLoggedInUser(); 
  }
}
