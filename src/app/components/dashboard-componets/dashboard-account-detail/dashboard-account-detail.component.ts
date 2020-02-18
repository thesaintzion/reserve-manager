import { Component, OnInit } from '@angular/core';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard-account-detail',
  templateUrl: './dashboard-account-detail.component.html',
  styleUrls: ['./dashboard-account-detail.component.scss']
})
export class DashboardAccountDetailComponent implements OnInit {

  constructor(private dialog: MatDialog, public sharedService: SharedService) { }



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


  ngOnInit() {
  }

}
