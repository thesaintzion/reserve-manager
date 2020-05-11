import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { PasswordMatch } from 'src/app/helpers/passwordlMatch';

@Component({
  selector: 'app-dashboard-change-password',
  templateUrl: './dashboard-change-password.component.html',
  styleUrls: ['./dashboard-change-password.component.scss']
})
export class DashboardChangePasswordComponent implements OnInit {
  loading = false;
  passwordForm;
  submited = false;
  successful = false;

  constructor(private formBuilder: FormBuilder, 
              private apiService: ApiService, 
              private sharedService: SharedService, private router: Router) { 
    this.passwordForm = this.formBuilder.group({
      uid: [''],
     old_pass: ['', [Validators.required]],
      new_pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      conf_pass: ['', [Validators.required]]
},
{validator:  PasswordMatch('new_pass', 'conf_pass')}
);
}
// onBankFormSubmit
// onBankFormSubmit(){
//   this.loading = true;
//   setTimeout( () =>{
//     this.loading = false;
//   }, 3000);
//     }


    
// Add bank details
onPasswordFormSubmit(){
  this.submited = true;
  if(this.passwordForm.invalid){
this.sharedService.openSnackBar('Please fill in all fields', 'Ok', 6000, 'bg-danger');

  }else{
    this.loading = true;
    this.apiService.LOADING.isLoading =  true;
    let body = {
      oldpassword: this.passwordForm.value.old_pass,
      newpassword: this.passwordForm.value.new_pass,
    }
    let uid =  this.passwordForm.value.uid; 
   
this.apiService.editPassword(body, uid).subscribe(
  res => {
    console.log(res);
    this.getPassword();
    setTimeout( () =>{
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      this.sharedService.openSnackBar('User Password Updated Successfully', 'ok', 9000, 'bg-success');
      this.passwordForm.reset();
      this.successful = true;
    }, 1000);  
  },
  err => {
    console.log(err);
    setTimeout( () =>{
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      if(err.error && err.error.statusMsg !== ''){
        this.sharedService.openSnackBar(err.error.statusMsg, 'ok', 9000, 'bg-danger');
      }else{
        this.sharedService.openSnackBar('Oops!! An Error Occurred.. Please try again after sometime.', 'ok', 9000, 'bg-danger');
      }
    }, 1000);
  }
)
  }
}

getPassword(){

}


// get loggedin user
getLoggedInUser(){
  this.apiService.getLoggedInUser().subscribe(
    res => {
 this.apiService.USER.firstname =  res.user.firstname;
 this.apiService.USER.email =  res.user.email;
 this.passwordForm.patchValue({
  uid:  res.user.id
 })
},
    err => {
     this.router.navigate(['/login']);
      console.log(err);
   
    })
}
  ngOnInit() {
    this.getLoggedInUser();
  }

}
