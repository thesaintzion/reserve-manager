import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-accounts',
  templateUrl: './dashboard-accounts.component.html',
  styleUrls: ['./dashboard-accounts.component.scss']
})
export class DashboardAccountsComponent implements OnInit {

accounts = [];

  constructor(public sharedService: SharedService, private dialog: MatDialog, public apiService: ApiService, private router: Router) { }


  // confirm delete
  openConfirmDialog(): void {
    let message = 'Are you sure you want to delete this account?'
    const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, {  
       width: '400px',
       data:{message: message},
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result) {
      console.log(result);
      this.sharedService.openSnackBar('Account deleted', '', 4000, 'bg-success');
     
    }
   });
   }


   // form dialog
openEditAccountDialog(account_number): void {
  let title = 'Edit Account';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
     width: '400px',
     data:{account_number, title:  title, type: 'editAccount' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
     let account = {
      account_number: result.account_number,
      denomination_id: result.denomination,
      account_type_id: result.accountType,
      investment_period_id:  result.investmentPeriod
     }
     console.log('Edit account', account);
     this.sharedService.openSnackBar('Editing account..', '', 3000, 'bg-success');
     
   }else{
    this.sharedService.openSnackBar('Not Editing Account..', '', 3000, 'bg-danger');
   }
  });
 }

   // form dialog
openCreatAccountDialog(): void {
  let title = 'Create New Account';

  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
     width: '400px',
     data:{ title:  title, type: 'createAccount' },
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      this.sharedService.openSnackBar('Creating account..', '', 30000000, '');
      let account = {
      uid: this.apiService.USER.id,
      denomination_id: result.denomination,
      account_type_id: result.accountType,
      investment_period_id:  result.investmentPeriod
     }
     console.log('account', account);
    this.apiService.addAccount(account).subscribe(
    res => {
      this.getLoggedInUser();
    console.log('Account created', res);

    this.sharedService.openSnackBar('Account Created', '', 3000, 'bg-success');
    },
    err => {
    console.log(err);
    this.sharedService.openSnackBar('Could not create account please try again later', '', 3000, 'bg-danger');
    });

     
   }else{
    this.sharedService.openSnackBar('Not Creating Account..', '', 3000, 'bg-danger');
   }
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
let account_number = '1360742278';
let query = 'user';
if(res.user.user_type_id === 1){
query = 'all';
}
this.getAccount(res.user.id, account_number, query);

    },
    err => {
     this.router.navigate(['/login']);
      console.log(err);
   
    })
}

 getAccount(uid, account_number, query){
   this.apiService.getAccount(uid, account_number, query).subscribe(
     res => {
       console.log(res);
       this.accounts = res.accounts;
     },
     err => {
       console.log(err);
     });
 }

  ngOnInit() {
    this.getLoggedInUser();
    
    
    // this.apiService.USER.user_type_id
  }

}
