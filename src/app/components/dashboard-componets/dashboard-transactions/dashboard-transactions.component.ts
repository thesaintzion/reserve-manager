import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';

@Component({
  selector: 'app-dashboard-transactions',
  templateUrl: './dashboard-transactions.component.html',
  styleUrls: ['./dashboard-transactions.component.scss']
})
export class DashboardTransactionsComponent implements OnInit {

 
  loading = true;
  users = [];
  accounts = [];
  objectKeys = Object.length;
    constructor(public sharedService: SharedService, private dialog: MatDialog, private apiService: ApiService, private router: Router) {
    
     }
  
  
    // confirm delete
    openConfirmDialog(): void {
      
      let message = 'Are you sure you want to delete this?'
      const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, {  
        //  width: '400px', 
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
  openEditAccountDialog(accountNo, type, denomination, period): void {
    let title = 'Edit Account';
    let selectedAccount  = {
      accountNo: accountNo,
      type: type,
      denomination: denomination,
      period:  period
    }
    const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
       width: '400px',
       data:{selectedAccount: selectedAccount, title:  title, type: 'editAccount' },
    });
   }
  
      // form dialog
  openCreatAccountDialog(): void {
    let title = 'Create New Account';
    const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
       width: '400px',
       data:{ title:  title, type: 'createAccount' },
    });
   }
  
  
  getLoggedInUser(){
     this.apiService.getLoggedInUser().subscribe(
       res => {
  console.log('Logged In User', res);
  if(res.user.user_type_id === 1){
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
  
    }else{
     this.sharedService.openSnackBar('Bad Request.', ``, 2000, 'bg-danger');
     this.router.navigate(['/dashboard']);
    }
       },
       err => {
        this.router.navigate(['/login']);
         console.log(err);
      
       }
     )
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
  
   getUsers(){
    this.apiService.getUsers().subscribe(
      res => {
       setTimeout( () =>{
  this.loading = false;
       }, 2000);
  console.log('Users', res);
  this.users = res.users;
  
      },
      err => {
        console.log(err);
       setTimeout( () =>{
         this.loading = false;
         }, 2000);
      }
    )
   }
  
    ngOnInit() {
    
      this.getUsers();
      this.getLoggedInUser();
      
    }
  

}
