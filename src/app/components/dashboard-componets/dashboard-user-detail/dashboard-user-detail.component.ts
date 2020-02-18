import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-user-detail',
  templateUrl: './dashboard-user-detail.component.html',
  styleUrls: ['./dashboard-user-detail.component.scss']
})
export class DashboardUserDetailComponent implements OnInit {
action;
userForm;
loading = false;
  constructor(private activatedRoute: ActivatedRoute, public sharedService: SharedService, private formBuilder: FormBuilder, private dialog: MatDialog) {
this.userForm = this.formBuilder.group({
firstName: [''],
lastName: [''],
email: [''],
phone: [''],
address: [''],
gender: [''],
country: [''],
userType: [''],
status: [''],
idNumber: [''],
utilityBill: ['']
})
   }


   fileChange(e){
     
   }

   onformSubmit(){
    // this.loading = true;
   }

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

  ngOnInit() {
console.log(this.sharedService.user);
    this.activatedRoute.queryParams.subscribe( params =>{
      console.log(params);
      if(params.action && params.action !== ""){
        this.action = params.action;
        console.log(params.action);
      }else{ 
        console.log('params');
      }

    })
  }

}
