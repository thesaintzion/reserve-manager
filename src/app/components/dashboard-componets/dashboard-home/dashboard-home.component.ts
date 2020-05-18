import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor(public apiService: ApiService, private router: Router, private sharedService: SharedService ) {
    this.getLoggedInUser();

   }

  //  Get logged in user
  getLoggedInUser(){
    this.apiService.LOADING.isLoading =  true;
    this.apiService.getLoggedInUser().subscribe(
      res => {
        this.apiService.LOADING.isLoading =  false;
   this.apiService.USER.firstname =  res.user.firstname;
   this.apiService.USER.lastname =  res.user.lastname;
   this.apiService.USER.email =  res.user.email;
   this.apiService.USER.user_type_id =  res.user.user_type_id;
  
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

}
