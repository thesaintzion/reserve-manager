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
accntAdded = false;
editedAccntId = '';
loading;

  constructor(public sharedService: SharedService, private dialog: MatDialog, public apiService: ApiService, private router: Router) { }


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
      
     
       },
       err => {
       console.log(err);
       this.sharedService.openSnackBar('Could not delete account please try again later', '', 3000, 'bg-danger');
       }
       );
    }

   });
   }


   // Open dialog for editing accont
openEditAccountDialog(account_id): void {
  let title = 'Edit Account';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
     width: '400px',
     data:{account_id, title:  title, type: 'editAccount' },
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result) {
     let account = {
      denomination_id: result.denomination_id,
      account_type_id: result.account_type_id,
      investment_period_id:  result.investment_period_id
     }
    //  this.sharedService.openSnackBar('Edit in progress..', '', 30000000, '');
     this.loading = true;
     this.apiService.LOADING.isLoading =  true;
     this.apiService.editAccount(account, result.account_id).subscribe(
      res => {
      setTimeout( ()=>{
        this.getLoggedInUser();
        this.editedAccntId = result.account_id;
        this.loading = false;
        this.apiService.LOADING.isLoading =  false;
      this.sharedService.openSnackBar('Successful!!', 'Ok', 3000, 'bg-success');

      setTimeout( ()=>{
        this.editedAccntId = '';
      },2000);
            }, 3000); 
      },
      err => {
      console.log(err);
      setTimeout( ()=>{
        this.loading = false;
        this.apiService.LOADING.isLoading =  false;
        if(err.error && err.error.statusMsg !== ''){
          this.sharedService.openSnackBar(err.error.statusMsg, 'Ok', 9000, 'bg-danger');
        }else{
        this.sharedService.openSnackBar('Could not edit account please try again later', 'Ok', 9000, 'bg-danger');
        }
            }, 3000); 
    
      });
   }
  });
 }

   // Open dialog for adding accont
openCreatAccountDialog(): void {
  let title = 'Create New Account';

  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
     width: '400px',
     data:{ title:  title, type: 'createAccount' },
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      this.loading = true;
      this.apiService.LOADING.isLoading =  true;

      let account = {
      uid: this.apiService.USER.id,
      denomination_id: result.denomination_id,
      account_type_id: result.account_type_id,
      investment_period_id:  result.investment_period_id
     }
     console.log('account', account);
    this.apiService.addAccount(account).subscribe(
    res => {
    console.log('Account created', res);
    setTimeout( ()=>{
      this.getLoggedInUser();
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      this.accntAdded = true;
      setTimeout( ()=>{
        this.accntAdded = false;
      },2000);
    }, 3000);
    },
    err => {
    console.log(err);
    setTimeout( ()=>{
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      if(err.error && err.error.statusMsg !== ''){
        this.sharedService.openSnackBar(err.error.statusMsg, 'Ok', 9000, 'bg-danger');
      }else{
      this.sharedService.openSnackBar('Could not edit account please try again later', 'Ok', 9000, 'bg-danger');
      }
          }, 3000); 
    });
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
let account_id = '1360742278';
let query = 'user';
if(res.user.user_type_id === 1){
query = 'all';
}
this.getAccount(res.user.id, account_id, query);

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
