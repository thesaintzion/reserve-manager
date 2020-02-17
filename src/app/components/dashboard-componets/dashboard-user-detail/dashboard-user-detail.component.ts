import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-user-detail',
  templateUrl: './dashboard-user-detail.component.html',
  styleUrls: ['./dashboard-user-detail.component.scss']
})
export class DashboardUserDetailComponent implements OnInit {
action;
userForm;
  constructor(private activatedRoute: ActivatedRoute, public sharedService: SharedService, private formBuilder: FormBuilder) {
this.userForm = this.formBuilder.group({
firstName: [''],
lastName: [''],
email: [''],
phone: [''],
address: [''],
gender: [''],
country: [''],
userType: [''],
status: [''],
idNumber: [''],
utilityBill: ['']
})
   }


   fileChange(e){
     
   }

  ngOnInit() {

console.log(this.sharedService.user);
    this.activatedRoute.queryParams.subscribe( params =>{
      console.log(params);
      if(params.action && params.action !== ""){
        this.action = params.action;
        console.log(params.action);
      }else{ 
        console.log('params');
      }

    })
  }

}
