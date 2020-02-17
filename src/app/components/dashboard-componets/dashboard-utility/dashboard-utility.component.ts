import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard-utility',
  templateUrl: './dashboard-utility.component.html',
  styleUrls: ['./dashboard-utility.component.scss']
})
export class DashboardUtilityComponent implements OnInit {
slug = 'genda';
active = 'genda';
  constructor(private router: Router, private dialog: MatDialog, private sharedService: SharedService) { }

  getGlug(slug){
    this.active = '';
this.slug = slug;
this.active = slug;
  }


    // confirm delete
    openConfirmDialog(): void {
      let message = 'Are you sure you want to delete this?'
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

  ngOnInit() {

    let siteSlug =  this.router.url.split('/')[1];
  }

}
