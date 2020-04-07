import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.scss']
})
export class DashboardSettingsComponent implements OnInit {

  constructor(public apiService: ApiService, private router: Router, private sharedService: SharedService) { }

// get loggedin user
getLoggedInUser(){
  this.apiService.getLoggedInUser().subscribe(
    res => {

 this.apiService.USER.firstname =  res.user.firstname;
 this.apiService.USER.firstname =  res.user.firstname;
 this.apiService.USER.user_type_id =  res.user.user_type_id;

//  if( this.apiService.USER.user_type_id === 1){
//   this.sharedService.openSnackBar(`No User`, '', 3000, 'bg-danger');
// }

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
