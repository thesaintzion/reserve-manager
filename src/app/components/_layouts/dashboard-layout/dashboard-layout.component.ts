import { Component, OnInit, OnDestroy} from '@angular/core';
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
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  requests  = []
  fancyBg = true;
  sub;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay());

  constructor(private breakpointObserver: BreakpointObserver,
     public sharedService: SharedService, 
     private dialog: MatDialog, 
     private router: Router, public apiService: ApiService) {}

      //  Gte requests
      getRequests(user_type_id, userId){
        let uid = null;
        let request_id = null;
        let single = null;
        let all = 'ALL';
  if(user_type_id == 2){
    all = null;
    uid = userId;
  }
      this.apiService.getRequest( uid, request_id, single,  all).subscribe(
        res => {
        console.log('Request From Layout', res);
  this.requests = res.requests;
        },
        err => {
          console.log('Requests err', err);
        }
      )
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


    //  Logout dialog
  logOutDialog(): void {
    localStorage.removeItem('API_KEY');
this.router.navigate(['login']);

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
    this.getLoggedInUser();
  setTimeout( () =>{
    this.fancyBg = false;
  }, 3000);
  }
  ngOnDestroy(){
    this.sub;
  }
}
