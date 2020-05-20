import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';
import { DasboardAddTransactionDialogComponent } from '../_dialogs/dasboard-add-transaction-dialog/dasboard-add-transaction-dialog.component';

@Component({
  selector: 'app-dashboard-transactions',
  templateUrl: './dashboard-transactions.component.html',
  styleUrls: ['./dashboard-transactions.component.scss']
})
export class DashboardTransactionsComponent implements OnInit {

 result = false;
  loading = false;
  users = [];
  accounts = [];
  objectKeys = Object.length;
  transactions = [];
    constructor(public sharedService: SharedService, private dialog: MatDialog, public apiService: ApiService, private router: Router) {
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
  
  
   // Open dialog for adding transaction
   openAddTransactionDialog(): void {

    const  dialogRef = this.dialog.open(DasboardAddTransactionDialogComponent, {  
       width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.apiService.LOADING.isLoading =  true;
        this.loading = true;
        console.log('Transaction recieved..', result);
let transaction = {
uid: result.uid,
transaction_type: result.transaction_type,
amount: result.amount,
comment: result.comment,
account_number: result.account_number,
request_id: '',
account_transfer_from: '',
account_transfer_to: ''
}
console.log('the transaction', transaction);
// debugger;
this.apiService.addTransaction(transaction).subscribe(
res =>{
  console.log(res);
  setTimeout( ()=>{
    this.apiService.LOADING.isLoading =  false;
    this.loading = false;
    this.sharedService.openSnackBar('Transaction added', '', 3000, 'bg-success');
    this.getLoggedInUser();
  }, 3000);
},
err => {
console.log(err);
setTimeout( ()=>{
this.apiService.LOADING.isLoading =  false;
this.loading = false;
this.sharedService.openSnackBar('Something went wrong.. please try again latter.', '', 3000, 'bg-danger');
}, 3000);
})
     
}
});
  
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
  // this.loading = false;
       }, 2000);
  console.log('Users', res);
  this.users = res.users;
  
      },
      err => {
        console.log(err);
       setTimeout( () =>{
        //  this.loading = false;
         }, 2000);
      }
    )
   }

  //  Get transactions
  getTransactions(user_type_id, userId){
    let uid = userId;
    let all = 'all';
    if(user_type_id == 1){
      // Get all transctions for admin...
      this.apiService.getTransactions(all).subscribe(
        res => {
  this.transactions = res.transactions;
  console.log('Transactions', res);
        },
         err => {
  console.log(err);
        })
      }else{
        // Get transactions for a spacific user...
        this.apiService.getTransactionsByUid(uid).subscribe(
          res => {
    this.transactions = res.transactions;
    console.log('User Transactions', res);
          },
           err => {
    console.log(err);
          })

      }
  }

  getLoggedInUser(){
    this.apiService.getLoggedInUser().subscribe(
      res => {
 console.log('Logged In User', res);
   this.apiService.USER.firstname =  res.user.firstname;
   this.apiService.USER.firstname =  res.user.firstname;
   this.apiService.USER.user_type_id =  res.user.user_type_id;
   this.apiService.USER.id = res.user.id;
   this.getTransactions(res.user.user_type_id, res.user.id);
      },
      err => {
       this.router.navigate(['/login']);
        console.log(err);
     
      }
    )
  }
  
    ngOnInit() {
      this.getUsers();
      this.getLoggedInUser();
      
    }
  

}
