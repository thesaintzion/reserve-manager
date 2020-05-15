import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {
loading = false;
profileForm;
imgPrevUrl = '../../../../assets/img/b1.jpg';
imgPrevMode = false;
countries = [];
genders = [];
promotionTypes = [];
identification_filename;
proof_of_address_filename;
  constructor(private apiService: ApiService, 
             private router: Router, private formBuilder: FormBuilder, private sharedService: SharedService) {

this.profileForm = this.formBuilder.group({
  uid: [''],
  firstname: ['', [Validators.required]],
  lastname:  ['', [Validators.required]],
  email:  [{value : '', disabled: true }, [Validators.required]],
  phone_number:   [''],
  gender_id:   [''],
  address:   [''],
  country_id:   [''],
  identification_filename:  [''],
  proof_of_address_filename:  [''],
});
this.apiService.LOADING.isLoading =  true;
     }
  fileChange(e){

  }

  onformSubmit(){
this.loading = true;
this.apiService.LOADING.isLoading =  true;
let user = {
  uid: this.profileForm.value.uid,
  firstname: this.profileForm.value.firstname,
  lastname: this.profileForm.value.lastname,
  email: this.profileForm.value.email,
  phone_number: this.profileForm.value.phone_number,
  gender_id: this.profileForm.value.gender_id,
  address: this.profileForm.value.address,
  country_id: this.profileForm.value.country_id,
  identification_filename: 'identification-1.svg',
  proof_of_address_filename: 'identification-1.svg'
}
let uid =  this.profileForm.value.uid;

console.log(user);
this.apiService.editUser(user, uid).subscribe(
  res => {
    console.log(res);
    this.getLoggedInUser();
    setTimeout( () =>{
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      this.sharedService.openSnackBar('Updated', 'ok', 3000, 'bg-success');
    }, 1000);
  },
  err =>{
    console.log(err);
    setTimeout( () =>{
      this.loading = false;
      this.apiService.LOADING.isLoading =  false;
      if(err.error.statusMsg){
        this.sharedService.openSnackBar(err.error.statusMsg, 'ok', 9000, 'bg-danger');
      }else{
        this.sharedService.openSnackBar('Oops!! An Error Occurred.. Please try again after sometime.', 'ok', 9000, 'bg-danger');
      }
    }, 1000);
  });
  }


  // get logged  user
  getLoggedInUser(){
    this.apiService.getLoggedInUser().subscribe(
      res => {
        console.log(res)
   this.apiService.LOADING.isLoading =  false;
   this.apiService.USER.firstname =  res.user.firstname;
   this.apiService.USER.email =  res.user.email;
   this.apiService.USER.user_type_id =  res.user.user_type_id;
   this.apiService.USER.id =  res.user.d;
   this.profileForm.patchValue({
     uid: res.user.id,
    firstname: res.user.firstname,
    lastname:  res.user.lastname,
    email:  res.user.email,
    phone_number:   res.user.phone_number,
    gender_id:   res.user.gender_id,
    address:   res.user.address,
    country_id:   res.user.country_id,
   });
      this.identification_filename = res.user.identification_filename;
      this.proof_of_address_filename = res.user.proof_of_address_filename;
      },
      err => {
        this.apiService.LOADING.isLoading =  false;
       this.router.navigate(['/login']);
        console.log(err);
     
      });
  }

  // GET UTILITIES
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
    
 

  // 
  viewImg(imgUrl){
this.imgPrevUrl = imgUrl;
this.imgPrevMode = true;
  }

  ngOnInit() {
    this.getLoggedInUser();
    this.getCountries();
    this.getGengers();
  }

}
