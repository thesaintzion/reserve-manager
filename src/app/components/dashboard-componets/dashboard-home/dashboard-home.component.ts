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

  constructor(private apiService: ApiService, private router: Router, private sharedService: SharedService ) { }

  getLoggedInUser(){
    this.apiService.getLoggedInUser().subscribe(
      res => {

   this.apiService.USER.firstname =  res.user.firstname;
   this.apiService.USER.email =  res.user.email;
  
      },
      err => {
       this.router.navigate(['/login']);
        console.log(err);
     
      }
    )
  }
  ngOnInit() {
    this.getLoggedInUser();
  }

}
