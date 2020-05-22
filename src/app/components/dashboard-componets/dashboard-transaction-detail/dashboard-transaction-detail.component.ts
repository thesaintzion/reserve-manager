import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DasboardAddTransactionDialogComponent } from '../_dialogs/dasboard-add-transaction-dialog/dasboard-add-transaction-dialog.component';
@Component({
  selector: 'app-dashboard-transaction-detail',
  templateUrl: './dashboard-transaction-detail.component.html',
  styleUrls: ['./dashboard-transaction-detail.component.scss']
})
export class DashboardTransactionDetailComponent implements OnInit, OnDestroy {

  transaction_id =  this.router.url.split('/')[3];
  transaction = [];
  loading: boolean;
  sub;
  constructor(public sharedService: SharedService, 
    private dialog: MatDialog, public apiService: ApiService, private router: Router, public location: Location,) { }


   //  Gte transactions
   getTransaction(){
    let transaction_id = this.transaction_id;
    this.sub = this.apiService.getTransactionsById(transaction_id).subscribe(
    res => {
    console.log('Transaction', res);
    this.transaction = res.transaction[0];
    },
    err => {
      console.log('Transaction err', err);
    })
 }
   //  Get logged in user
   getLoggedInUser(){
    this.sub = this.apiService.getLoggedInUser().subscribe(
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


  ngOnInit() {
    this.getTransaction();
    this.getLoggedInUser();
    console.log(this.transaction_id);
  }

  ngOnDestroy(){
    this.sub;
  }


}
