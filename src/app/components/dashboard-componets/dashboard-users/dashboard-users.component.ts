import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss']
})
export class DashboardUsersComponent implements OnInit {
  
loading = true;
users = [];
accounts = [];
objectKeys = Object.length;
userToDelete: any = '';
  constructor(public sharedService: SharedService, private dialog: MatDialog, private apiService: ApiService, private router: Router) {
  
   }


  // confirm delete
  openConfirmDialog(uid): void {
    let message = 'Delete this user?'
    const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, {  
      //  width: '400px', 
       data:{message: message},
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result) {
      this.apiService.deleteUser(uid).subscribe(
        res => {
         this. getUsers();
          this.sharedService.openSnackBar('User deleted..', '', 3000, 'bg-success');
          },
          err => {
          console.log(err);
          this.sharedService.openSnackBar('Could not delete user please try again later.', '', 3000, 'bg-danger');
          });
      // this.sharedService.openSnackBar('Account deleted'+ uid, '', 4000, 'bg-success');
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
  this.apiService.USER.firstname =  res.user.firstname;
  this.apiService.USER.firstname =  res.user.firstname;
  this.apiService.USER.user_type_id =  res.user.user_type_id;
  this.apiService.USER.id = res.user.id;
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
    this.getLoggedInUser();
    
  }

}
