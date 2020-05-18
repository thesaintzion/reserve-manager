import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordMatch } from 'src/app/helpers/passwordlMatch';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  userId =  this.router.url.split('/')[3];
  loading = false;
  countries = [];
  genders = [];
  promotionTypes = [];
  registerForm;
  submited = false;
  successful: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService, 
    private sharedService: SharedService, private formBuider: FormBuilder,  public location: Location ) { 

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
      {validator:  PasswordMatch('password', 'conf_password')}
      )
    }
    get f() { return this.registerForm.controls; }


// REGISTRATION
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

if(this.registerForm.invalid){
  this.sharedService.openSnackBar('Please fill in the required fields', 'ok', 9000, 'bg-danger');
}else{
  this.loading = true;
  this.apiService.LOADING.isLoading =  true;

  this.apiService.addUser(user).subscribe(
  res => {
    console.log('res', res);
    setTimeout( () =>{
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      this.router.navigate(['/dashboard/users']);
      this.successful = true;
      this.sharedService.openSnackBar('Registeration succesful, please login', 'ok', 90000, 'bg-success');
      }, 1000);
  },

  err => {
    console.log('err', err);
    setTimeout( () =>{
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      if(err.error && err.error.statusMsg !== ''){
        this.sharedService.openSnackBar(err.error.statusMsg, 'ok', 9000, 'bg-danger');
      }else{
        this.sharedService.openSnackBar('Oops!! An Error Occurred.. Please try again after sometime', 'ok', 9000, 'gb-danger');
      }
      }, 1000);
   
  });
}
}
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
        console.log(err);
     
      }
    )
  }

  ngOnInit() {
    // this.upload();
    this.getCountries();
    this.getGengers();
    this.getPromotionTypes();
    this.getLoggedInUser();
    
    this.activatedRoute.queryParams.subscribe( params =>{
      if(params.user){
        console.log(params.user);
      }else{
        console.log('Take Em Back now');
      }
    });   

  }

  // console.log(this.router.url.split('/')[4])
}
