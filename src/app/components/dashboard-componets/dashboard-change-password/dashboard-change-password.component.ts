import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-change-password',
  templateUrl: './dashboard-change-password.component.html',
  styleUrls: ['./dashboard-change-password.component.scss']
})
export class DashboardChangePasswordComponent implements OnInit {

  loading = false;

  constructor() { }
// onBankFormSubmit
onBankFormSubmit(){
  this.loading = true;
  
  setTimeout( () =>{
    this.loading = false;
  }, 3000);
    }

  ngOnInit() {
  }

}
