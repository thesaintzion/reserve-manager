import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit, OnDestroy {

  sub;
  requests = []

  constructor(public apiService: ApiService, private router: Router, private sharedService: SharedService ) {
    this.getLoggedInUser();

   }

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
          console.log('Request From Home', res);
         this.requests = res.requests;
          },
          err => {
            console.log('Requests err', err);
          }
)
       }

  //  Get logged in user
  getLoggedInUser(){
    this.apiService.LOADING.isLoading =  true;
    this.sub = this.apiService.getLoggedInUser().subscribe(
      res => {
        this.apiService.LOADING.isLoading =  false;
   this.apiService.USER.firstname =  res.user.firstname;
   this.apiService.USER.lastname =  res.user.lastname;
   this.apiService.USER.email =  res.user.email;
   this.apiService.USER.user_type_id =  res.user.user_type_id;
   this.apiService.USER.id =  res.user.id;
  //  this.getRequests(res.user.user_type_id, res.user.id)
      },
      err => {
        this.apiService.LOADING.isLoading =  false;
       this.router.navigate(['/login']);
       this.sharedService.openSnackBar('Please login', '', 6000, '')
        console.log(err);
     
      }
    )
  }
  ngOnInit() {
    this.getLoggedInUser();
    
  }

  ngOnDestroy(){
    this.sub
  }

}
