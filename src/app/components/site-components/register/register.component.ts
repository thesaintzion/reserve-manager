import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailMatch } from 'src/app/helpers/emailMatch';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userId =  this.router.url.split('/')[3];
  loading = false;
  countries = [];
  genders = [];
  promotionTypes = [];
  registerForm;
  submited = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService, 
    private sharedService: SharedService, private formBuider: FormBuilder ) { 

      this.registerForm = this.formBuider.group({
        firstname: ['',  [Validators.required, Validators.maxLength(30)]],
        lastname:  ['', [Validators.required, Validators.maxLength(30)]],
        email: ['', [Validators.required, Validators.maxLength(30)]],
        phone_number:  ['', [Validators.required, Validators.maxLength(15)]],
        address: ['', [Validators.required]],
        gender_id: ['', Validators.required],
        country_id:['', Validators.required],
        promotion_type_id: ['', Validators.required],
        password:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
        conf_password:  ['', Validators.required]
      },
      {validator: EmailMatch('password', 'conf_password')}
      )
    }
    get f() { return this.registerForm.controls; }


// REGISTRATIO
register(){
this.submited = true;
console.log(this.registerForm);
let user = {
firstname: this.registerForm.value.firstname,
lastname: this.registerForm.value.lastname,
email: this.registerForm.value.email,
phone_number: this.registerForm.value.phone_number,
address: this.registerForm.value.address,
gender_id: this.registerForm.value.gender_id,
country_id: this.registerForm.value.country_id,
user_type_id: '2',
promotion_type_id: this.registerForm.value.promotion_type_id,
password: this.registerForm.value.password,

}
console.log( JSON.stringify(user));
debugger
if(this.registerForm.invalid){
  this.sharedService.openSnackBar('Please fill in the required fields', 'ok', 9000, 'bg-danger');
}else{
  this.loading = true;

  this.apiService.addUser(user).subscribe(
  res => {
    console.log('res', res);
    setTimeout( () =>{
      this.loading = false;
      this.sharedService.openSnackBar('Registerted', 'ok', 9000, 'bg-success');
      }, 2000);
  },

  err => {
    console.log('err', err);
    setTimeout( () =>{
      this.loading = false;
      if(err.error.status == 400){
        this.sharedService.openSnackBar(err.error.statusMsg, 'ok', 9000, 'bg-danger');
      }else{
        this.sharedService.openSnackBar('Oops!! An Error Occurred.. Please try again after sometime', 'ok', 9000, 'gb-danger');
      }
      }, 2000);
   
  });


  
}





}

// formErrMsg(field){
//   if(this.submited && this.registerForm.controls.field.errors.required){
//  return true
//   }else{
//     return false;
//   }
// }


  upload(){
 
  }

  getCountries(){
this.apiService.getCountries().subscribe(
  res => {
    this.countries = res.country;
  },
  err => {
console.log(err)
  });
  }
  getGengers(){
    this.apiService.getGengers().subscribe(
      res => {
        this.genders = res.gender;
      },
      err => {
    console.log(err)
      });

  }

  getPromotionTypes(){
    this.apiService.getPromotionTypes().subscribe(
      res => {
    this.promotionTypes = res['promotionType'];
      },
      err => {
    console.log(err)
      });
  }

  ngOnInit() {
    this.upload();
    this.getCountries();
    this.getGengers();
    this.getPromotionTypes();
    
    this.activatedRoute.queryParams.subscribe( params =>{
      if(params.user){
        console.log(params.user);
      }else{
        console.log('Take Em Back now');
      }
    });

  

//     setTimeout( () =>{
//       this.userId = '3948585654094';
// this.router.navigate([`/register/upload/${this.userId}`]);

//     }, 3000);

   

  }

  // console.log(this.router.url.split('/')[4])





}
