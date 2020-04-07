import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-bank-details',
  templateUrl: './dashboard-bank-details.component.html',
  styleUrls: ['./dashboard-bank-details.component.scss']
})
export class DashboardBankDetailsComponent implements OnInit {
  loading = false;

  constructor(public apiService: ApiService, private sharedService: SharedService, private router: Router) { }
// onBankFormSubmit
onBankFormSubmit(){
  this.loading = true;
  
  setTimeout( () =>{
    this.loading = false;
  }, 3000);
    }


    // Get loggedin user
    getLoggedInUser(){
      this.apiService.getLoggedInUser().subscribe(
        res => {
     this.apiService.USER.firstname =  res.user.firstname;
     this.apiService.USER.email =  res.user.email;
     this.apiService.USER.firstname =  res.user.firstname;
     this.apiService.USER.user_type_id =  res.user.user_type_id;

     if( res.user.user_type_id != 2){
      this.sharedService.openSnackBar(`Bad request`, '', 3000, 'bg-danger');
      this.router.navigate(['/login']);
    }
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
