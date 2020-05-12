import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import { DashboardDeleteConfirmDialogComponent } from '../../dashboard-componets/_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FeaturesUpdateDialogComponent } from '../../dashboard-componets/_dialogs/features-update-dialog/features-update-dialog.component';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  fancyBg = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
     public sharedService: SharedService, 
     private dialog: MatDialog, 
     private rouer: Router, public apiService: ApiService) {}


    //  Logout dialog
  logOutDialog(): void {
    localStorage.removeItem('API_KEY');
this.rouer.navigate(['login']);

//     let message = 'Are you sure you want to logout?'
//     const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, {  
//       //  width: '300px',
//        data:{message: message},
//     });

//     dialogRef.afterClosed().subscribe(result => {
//      if(result) {
//       console.log(result);
//       this.sharedService.openSnackBar('Logging Out.. Bye!!', '', 3000, '');
//       setTimeout( ()=>{
// localStorage.removeItem('API_KEY');
// this.rouer.navigate(['login']);
//       }, 3000);
//     }
//    });
   }

  //  Features update dialog
    // confirm delete
    openFeaturesUpdateDialog(): void {
      const  dialogRef = this.dialog.open(FeaturesUpdateDialogComponent, {  
               width: '400px',
            });
    
     }

  ngOnInit() {
    this.apiService.USER.firstname = '* * * *';
    this.apiService.USER.email = '* * * * * * * * * *';
  setTimeout( () =>{
    this.fancyBg = false;
  }, 3000);
  }
}
