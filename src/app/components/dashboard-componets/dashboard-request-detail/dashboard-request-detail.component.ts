import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DasboardAddTransactionDialogComponent } from '../_dialogs/dasboard-add-transaction-dialog/dasboard-add-transaction-dialog.component';

@Component({
  selector: 'app-dashboard-request-detail',
  templateUrl: './dashboard-request-detail.component.html',
  styleUrls: ['./dashboard-request-detail.component.scss']
})
export class DashboardRequestDetailComponent implements OnInit {
  requestId =  this.router.url.split('/')[3];
  request = [];
  loading: boolean;
  constructor(public sharedService: SharedService, private dialog: MatDialog, public apiService: ApiService, private router: Router, public location: Location,) { }


   //  Gte requests
   getRequests(){
    let uid = null;
    let request_id = this.requestId;
    let single = 'SINGLE';
    let all = null;
  this.apiService.getRequest( uid, request_id, single,  all).subscribe(
    res => {
    console.log('Request', res);
    this.request = res.request[0];
    },
    err => {
      console.log('Requests err', err);
    }
  )
 }
   //  Get logged in user
   getLoggedInUser(){
    this.apiService.getLoggedInUser().subscribe(
      res => {
   this.apiService.USER.firstname =  res.user.firstname;
   this.apiService.USER.lastname =  res.user.lastname;
   this.apiService.USER.email =  res.user.email;
   this.apiService.USER.user_type_id =  res.user.user_type_id;
      },
      err => {
       
       this.router.navigate(['/login']);
       this.sharedService.openSnackBar('Please login', '', 6000, '')
        console.log(err);
     
      }
    )
  }

  // Add transaction dialog
     openAddTransactionDialog(uid, account_number, transaction_type, amount, firstname, lastname, request_id): void {
      let title = 'Add Transaction';
      let transaction = {
        uid,
        account_number,
        transaction_type,
        amount,
        firstname,
        lastname,
        request_id
      }
  
      const  dialogRef = this.dialog.open(DasboardAddTransactionDialogComponent, {  
         width: '500px',
         data:{ title:  title, transaction},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.apiService.LOADING.isLoading =  true;
          this.loading = true;
          console.log('Transaction recieved..', result);
let transaction = {
  uid,
  transaction_type,
  amount,
  comment: result.comment,
  account_number,
  request_id,
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
      this.sharedService.openSnackBar('Transaction added...', '', 3000, 'bg-success');
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
  ngOnInit() {
    this.getRequests();
    this.getLoggedInUser();
    console.log(this.requestId);
  }

}
