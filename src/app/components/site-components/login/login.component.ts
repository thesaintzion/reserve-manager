import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  submitted = false;
  loading = false;
  notVerified  = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private sharedService: SharedService, private apiService: ApiService ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

   
  get f(){return this.loginForm.controls;};

  login(){
    this.submitted = true;
    const user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
    }
    console.log(user);
    // debugger;
  
    if(this.loginForm.invalid){
     this.sharedService.openSnackBar('Please fill in the required fields', 'Ok', 6000, 'bg-danger');
  } else {

    this.loading = true;
    this.apiService.login(user).subscribe(
  (res) => {
  
    console.log(res);
    let userName = `${res.user.firstname} ${res.user.lastname}`
    this.loading = false;
    this.router.navigate(['/dashboard']);
    this.sharedService.openSnackBar(`Welcome Home ${userName}`, 'Ok', 6000, 'bg-success');
    localStorage.setItem('API_KEY', res.token); 
  
 
  },
  (err) => {
    setTimeout( () => {
    this.loading = false;
    if(err.error.statusMsg && err.status > 0){
      this.sharedService.openSnackBar(err.error.statusMsg, 'Ok', 9000, 'bg-danger');
    }else{
      this.sharedService.openSnackBar('Oopps..!! Something went wrong.. Are you offline??', 'Ok', 7000, 'bg-danger');
    }
    console.log(err);
  }, 600);
  }
  
  );
   
  
  
  }
   }

  ngOnInit() {
    this.sharedService.openSnackBar('Please Login', '', 2000, '');
  }

}
