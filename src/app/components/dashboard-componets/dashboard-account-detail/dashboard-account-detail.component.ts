import { Component, OnInit } from '@angular/core';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DasboardAddTransactionDialogComponent } from '../_dialogs/dasboard-add-transaction-dialog/dasboard-add-transaction-dialog.component';
import { DashboardAccountOperationDialogComponent } from '../_dialogs/dashboard-account-operation-dialog/dashboard-account-operation-dialog.component';

@Component({
  selector: 'app-dashboard-account-detail',
  templateUrl: './dashboard-account-detail.component.html',
  styleUrls: ['./dashboard-account-detail.component.scss']
})
export class DashboardAccountDetailComponent implements OnInit {
loading;
result;
  accountId =  this.router.url.split('/')[3];
  account =  {
id:  '',
uid:  '',
account_number: '',
denomination_id:  '',
account_type_id:  '',
investment_period_id:  '',
balance:  0,
createdAt: '',
updatedAt: '',
status: '',
denomination:  '',
account_type:  '',
investment_period: '',
firstname:  '',
lastname:  '',
    }


  constructor(private dialog: MatDialog, public sharedService: SharedService, 
    public apiService: ApiService, private router: Router, public location: Location) { }


  // confirm delete
  openConfirmDialog(account_id): void {
    let message = 'Are you sure you want to delete this account?'
    const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, { 
       width: '300px',
       data:{message: message},
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result) {
      this.sharedService.openSnackBar('Delete in progress..', '', 30000000, '');

      this.apiService.deleteAccount(account_id).subscribe(
       res => {
       this.getLoggedInUser();
       this.sharedService.openSnackBar('Account deleted..', '', 3000, 'bg-success');
      this.router.navigate(['/dashboard/accounts']);
       },
       err => {
       console.log(err);
       this.sharedService.openSnackBar('Could not delete account please try again later', '', 3000, 'bg-danger');
       });
    }

   });
   }



//  Get logged in user
getLoggedInUser(){
  this.apiService.getLoggedInUser().subscribe(
    res => {
this.apiService.USER.firstname =  res.user.firstname;
this.apiService.USER.firstname =  res.user.firstname;
this.apiService.USER.user_type_id =  res.user.user_type_id;
this.apiService.USER.id = res.user.id;

    },
    err => {
     this.router.navigate(['/login']);
      console.log(err);
   
    })
}




// Get account
getAccount(uid, account_id, query){
  this.apiService.getAccount(uid, account_id, query).subscribe(
    res => {
this.account.id =  res.accounts[0].id ;
this.account.uid =  res.accounts[0].uid ;
this.account.account_number =  res.accounts[0].account_number;
this.account.denomination_id =  res.accounts[0].denomination_id ;
this.account.account_type_id =  res.accounts[0].account_type_id;
this.account.investment_period_id =  res.accounts[0].investment_period_id ;
this.account.balance =  res.accounts[0].balance ;
this.account.createdAt =  res.accounts[0].createdAt;
this.account.updatedAt =  res.accounts[0].updatedAt;
this.account.status =  res.accounts[0].status;
this.account.denomination =  res.accounts[0].denomination ;
this.account.account_type =  res.accounts[0].account_type ;
this.account.investment_period =  res.accounts[0].investment_period;
this.account.firstname =  res.accounts[0].firstname ;
this.account.lastname =  res.accounts[0].lastname ;
    },
    err => {
      console.log(err);
      this.sharedService.openSnackBar('Oops..!! Problem finding account.. Please try again later.', '', 3000, 'bg-success');
      this.router.navigate(['/dashboard/accounts']);
    });
}

// Opean account operation dialog
   openAccountOperationDialog(type, account_number, balance): void {
    const  dialogRef = this.dialog.open(DashboardAccountOperationDialogComponent, {  
       width: '400px',
       data:{ type: type, account_number, balance },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.result = true;
        this.apiService.LOADING.isLoading =  true;
        this.loading = true;
      
          let request = {
            uid:this.apiService.USER.id,
            request_type: type,
            request_amount:  result.request_amount,
            comment: '',
            request_account_number:  account_number,
          }
    

          // Call to api
          this.apiService.addRequest(request).subscribe(
            res => {
              console.log(res);
              setTimeout( ()=>{ 
              this.apiService.LOADING.isLoading =  false;
              this.loading = false; 
              if(type == 'withdraw'){
                this.sharedService.openSnackBar('Your Withdrawal request has been sent successfully. You will get a response from the admin soon. Thank you!!', 'Ok', 19000, 'bg-success');
              }else if(type == 'deposite'){
                this.sharedService.openSnackBar('Your Deposite request has been sent successfully. You will get a response from the admin soon. Thank you!!', 'Ok', 19000, 'bg-success');
              }else{
                this.sharedService.openSnackBar('Transfer was successful. Thank you!!', 'Ok', 19000, 'bg-success');
              }
            }, 2000);
            },
            err => {
              console.log(err);
              setTimeout( ()=>{ 
              this.apiService.LOADING.isLoading =  false;
              this.loading = false;  
              this.sharedService.openSnackBar('Something went wrong.. Please try again after some time.', 'Ok', 9000, 'bg-danger');
            }, 2000);
            })
     }
    });
  
   }





  ngOnInit() {
    this.getLoggedInUser();
    if(this.accountId){
    this.getAccount(this.apiService.USER.id, this.accountId, 'single');
    }
  }

}
