import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';

@Component({
  selector: 'app-dashboard-accounts',
  templateUrl: './dashboard-accounts.component.html',
  styleUrls: ['./dashboard-accounts.component.scss']
})
export class DashboardAccountsComponent implements OnInit {

  constructor(public sharedService: SharedService, private dialog: MatDialog) { }


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



  ngOnInit() {
  }

}
