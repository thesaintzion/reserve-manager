import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-bank-details',
  templateUrl: './dashboard-bank-details.component.html',
  styleUrls: ['./dashboard-bank-details.component.scss']
})
export class DashboardBankDetailsComponent implements OnInit {
  loading = false;
  bankDetailsForm;
  noBankDetails;

  constructor(public apiService: ApiService, 
              private sharedService: SharedService,
              private router: Router,
              private formBuilder: FormBuilder, private apiServive: ApiService) {
                this.bankDetailsForm = this.formBuilder.group({
                  account_number: ['', [Validators.required]],
                  account_name: ['', [Validators.required]],
                  bank_name: ['', [Validators.required]],
                })

               }
            
   
// onBankFormSubmit
onBankFormSubmit(status){
  if(this.bankDetailsForm.invalid){
    this.sharedService.openSnackBar('Please fill the form.', 'ok', 3000, 'bg-danger')
  }else{
    this.loading = true;
    this.apiService.LOADING.isLoading =  true;
    let bank = {
      uid: this.apiService.USER.id,
      account_number: this.bankDetailsForm.value.account_number,
      account_name: this.bankDetailsForm.value.account_name,
      bank_name: this.bankDetailsForm.value.bank_name
    }
  

// ADD
    if(status == 'add'){
      this.apiService.addUserBankDetails(bank).subscribe(
        res => {
          console.log('Added', res);
          setTimeout( () =>{
            this.getLoggedInUser();
            this.loading = false;
            this.apiService.LOADING.isLoading =  false;
            this.sharedService.openSnackBar('Added', 'ok', 9000, 'bg-success');
          }, 1000);  
        },
        err => {
          console.log('Err Adding', err);
          setTimeout( () =>{
            this.loading = false;
            this.apiService.LOADING.isLoading =  false;
            if(err.error.statusMsg){
              this.sharedService.openSnackBar(err.error.statusMsg, 'ok', 9000, 'bg-danger');
            }else{
              this.sharedService.openSnackBar('Oops!! An Error Occurred.. Please try again after some time.', 'ok', 9000, 'bg-danger');
            }
          }, 1000);
        });

// EDIT
          }else if(status == 'edit'){
            let id =  this.apiService.USER.id;  
            this.apiServive.editUserBankDetails(bank, id).subscribe(
              res => {
                console.log('Edited', res);
                setTimeout( () =>{
                  this.getLoggedInUser();
                  this.loading = false;
                  this.apiService.LOADING.isLoading =  false;
                  this.sharedService.openSnackBar('Updated', 'ok', 9000, 'bg-success');
                }, 1000);  
              },
              err => {
                console.log('Err editing', err);
                setTimeout( () =>{
                  this.loading = false;
                  this.apiService.LOADING.isLoading =  false;
                  if(err.error.statusMsg){
                    this.sharedService.openSnackBar(err.error.statusMsg, 'ok', 9000, 'bg-danger');
                  }else{
                    this.sharedService.openSnackBar('Oops!! An Error Occurred.. Please try again after some time.', 'ok', 9000, 'bg-danger');
                  }
                }, 1000);
              });
          }
  }
 
    }


    // GET USER BANK DETAILS
getUserBankDetails(uid){
  let all = false;
  this.apiServive.getUserBankDetails(uid, all).subscribe(
    res => {
     console.log('getBankDetails', res);
     this.noBankDetails = false;
     this.bankDetailsForm.patchValue({
      account_number: res.bankDetails[0].account_number,
      account_name: res.bankDetails[0].account_name,
      bank_name:  res.bankDetails[0].bank_name
     })
    },
    err => {
    console.log('getBankDetails', err);
    if(err.status == 404){
      this.noBankDetails = true;
    }
    }
  )
}



    // Get loggedin user
    getLoggedInUser(){
      this.apiService.getLoggedInUser().subscribe(
        res => {
     this.apiService.USER.firstname =  res.user.firstname;
     this.apiService.USER.email =  res.user.email;
     this.apiService.USER.firstname =  res.user.firstname;
     this.apiService.USER.user_type_id =  res.user.user_type_id;
     this.apiService.USER.id =  res.user.id;
     this.getUserBankDetails(res.user.id);
  

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
