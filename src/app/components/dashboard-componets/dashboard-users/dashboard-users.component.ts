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
  this.apiService.USER.email =  res.user.email;
  }else{
   this.sharedService.openSnackBar('Oops!! Bad Request.', `I'm Sorry`, 2000, 'bg-danger');
   this.router.navigate(['/dashboard']);
  }
     },
     err => {
      this.router.navigate(['/login']);
       console.log(err);
    
     }
   )
 }

 getUsers(){
  this.apiService.getUsers().subscribe(
    res => {
     setTimeout( () =>{
this.loading = false;
     }, 2000);
console.log(res);
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
