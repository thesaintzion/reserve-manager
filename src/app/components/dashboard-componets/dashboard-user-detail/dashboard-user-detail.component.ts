import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dashboard-user-detail',
  templateUrl: './dashboard-user-detail.component.html',
  styleUrls: ['./dashboard-user-detail.component.scss']
})
export class DashboardUserDetailComponent implements OnInit {
action;
userForm;
loading = false;
userId;
edit;
user;

defaultImgUrl: string = '';
fileToUpload: File = null;
countries = [];
genders = [];
  identification_filename: any;
  proof_of_address_filename: any;
  imgPrevUrl: any = '../../../../assets/img/b1.jpg';
  imgPrevMode: boolean;

  constructor(private activatedRoute: ActivatedRoute, 
    public sharedService: SharedService,
     private formBuilder: FormBuilder,
      private dialog: MatDialog,
       private apiService: ApiService, 
       private router: Router,
       public location: Location
       ) {
this.userForm = this.formBuilder.group({
uid: [''],
firstname: [''],
lastname: [''],
email: [''],
phone_number: [''],
address: [''],
gender_id: [''],
country_id: [''],
})
}

  //  images priview
  fileChange(e: FileList){
    console.log(e.length);
    if(e.length > 0){
      this.fileToUpload =  e.item(0);
      let fileReader = new FileReader();
      fileReader.onload = (event: any) => {
      this.defaultImgUrl = event.target.result;
}
    fileReader.readAsDataURL(this.fileToUpload);
    }else{
      this.sharedService.openSnackBar('Please sectect an image', 'ok', 3000, 'bg-danger');
    }
  }

  onformSubmit(){
    this.loading = true;
    this.apiService.LOADING.isLoading =  true;
    let user = {
      uid: this.userForm.value.uid,
      firstname: this.userForm.value.firstname,
      lastname: this.userForm.value.lastname,
      email: this.userForm.value.email,
      phone_number: this.userForm.value.phone_number,
      gender_id: this.userForm.value.gender_id,
      address: this.userForm.value.address,
      country_id: this.userForm.value.country_id,

      identification_filename: 'identification-1.svg',
      proof_of_address_filename: 'identification-1.svg'
    }
    let uid =  this.userForm.value.uid;
    
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

  //  onformSubmit(){
  //   this.loading = true;
  //   this.apiService.LOADING.isLoading =  true;

  //   setTimeout( () =>{
  //     this.loading = false;
  //     this.apiService.LOADING.isLoading =  false;
  //     this.sharedService.openSnackBar('Not ready yet...', 'ok', 3000, 'bg-s');
  //   }, 3000);
  //  }

   openConfirmDialog(): void {
    
    let message = 'Are you sure you want to delete this?'
    const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, {  
      //  width: '400px',
       data:{message: message},
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result) {
      console.log(result);
      this.sharedService.openSnackBar('Account deleted', '', 4000, 'bg-success');
     
    }
   });
   }

  // get user info
  getUserInfo(){
    this.activatedRoute.params.subscribe( params =>{
      if(params.userId !== ''){
        this.apiService.getUserInfo(params.userId).subscribe(
          res => {
        console.log('User Info', res);
        this.user = res.user;
          this.userForm.patchValue({
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
          console.log(err);
        })
      }else{
        this.router.navigate(['/dashboard/users']);
        this.sharedService.openSnackBar('Bad Request', '', 3000, 'bg-danger');
      }
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
            console.log('Gender', res.gender);
            this.genders = res.gender;
          },
          err => {
        console.log(err)
          });
    
      }


  

 //  Get logged in user
getLoggedInUser(){
  this.apiService.getLoggedInUser().subscribe(
    res => {
this.apiService.USER.firstname =  res.user.firstname;
this.apiService.USER.firstname =  res.user.firstname;
this.apiService.USER.user_type_id =  res.user.user_type_id;
this.apiService.USER.id = res.user.id;

    },
    err => {
     this.router.navigate(['/login']);
      console.log(err);
   
    })
}



 // 
 viewImg(imgUrl){
  this.imgPrevUrl = imgUrl;
  this.imgPrevMode = true;
    }
  

  ngOnInit() {
    this.getLoggedInUser();
      this.getUserInfo();
      this.getGengers();
      this.getCountries();
      this.activatedRoute.queryParams.subscribe( params =>{
        console.log('the full params', params);
        if(params.action && params.action.toLowerCase() === 'edit' ){
          this.action = params.action;
        this.getUserInfo();
        }else{
          this.action = '';
        }
    
      })

      

  
  }

}
