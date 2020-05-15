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
    constructor(public sharedService: SharedService, private dialog: MatDialog, private apiService: ApiService, private router: Router) {
    let transactions = [
      {
        id: 1,
        uid: 'K49485494N',
        type: 'Deposite',
        amount: '9000',
        date: Date.now()
      },
      {
        id: 2,
        uid: 'K4785494N',
        type: 'Transfer',
        amount: '700000',
        date: Date.now()
      },
      {
        id: 3,
        uid: 'K494878494N',
        type: 'Withdraw',
        amount: '900000',
        date: Date.now()
      },
      {
        id: 4,
        uid: 'K49485494N',
        type: 'Deposite',
        amount: '20000',
        date: Date.now()
      },
      {
        id: 5,
        uid: 'K4785494N',
        type: 'Transfer',
        amount: '10000',
        date: Date.now()
      },
      {
        id: 6,
        uid: 'K494878494N',
        type: 'Withdraw',
        amount: '900000',
        date: Date.now()
      },
      {
        id: 5,
        uid: 'K4785494N',
        type: 'Transfer',
        amount: '700000',
        date: Date.now()
      },
      {
        id: 6,
        uid: 'K494878494N',
        type: 'Withdraw',
        amount: '900000',
        date: Date.now()
      },
      {
        id: 6,
        uid: 'K494878494N',
        type: 'Withdraw',
        amount: '900000',
        date: Date.now()
      },
    ];
    this.transactions = transactions;
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
    let title = 'Add Transaction';
    const  dialogRef = this.dialog.open(DasboardAddTransactionDialogComponent, {  
       width: '600px',
       data:{ title:  title, type: 'createAccount' },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.result = true;
        this.apiService.LOADING.isLoading =  true;
        this.loading = true;
        setTimeout( ()=>{
          this.apiService.LOADING.isLoading =  false;
          this.loading = false;
          this.sharedService.openSnackBar('Transaction added...', '', 3000, 'bg-success');
        }, 4000);

      //   let account = {
      //   uid: this.apiService.USER.id,
      //   denomination_id: result.denomination_id,
      //   account_type_id: result.account_type_id,
      //   investment_period_id:  result.investment_period_id
      //  }
      //  console.log('account', account);
      // this.apiService.addAccount(account).subscribe(
      // res => {
      //   this.getLoggedInUser();
      // console.log('Account created', res);

      // this.sharedService.openSnackBar('Account Created', '', 3000, 'bg-success');
      // this.accntAdded = true;
      // setTimeout( ()=>{
      // this.accntAdded = false;
      // }, 3000);
      // },
      // err => {
      // console.log(err);
      // if(err.error && err.error.statusMsg !== ''){
      //   this.sharedService.openSnackBar(err.error.statusMsg, 'Ok', 9000, 'bg-danger');
      // }else{
      // this.sharedService.openSnackBar('Could not create account please try again later', '', 3000, 'bg-danger');
      // }
      // });
     }
    });
  
   }
  
  
  getLoggedInUser(){
     this.apiService.getLoggedInUser().subscribe(
       res => {
  console.log('Logged In User', res);
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
  
    ngOnInit() {
      this.getUsers();
      this.getLoggedInUser();
      
    }
  

}
