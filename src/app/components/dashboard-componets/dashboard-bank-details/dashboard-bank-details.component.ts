import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-bank-details',
  templateUrl: './dashboard-bank-details.component.html',
  styleUrls: ['./dashboard-bank-details.component.scss']
})
export class DashboardBankDetailsComponent implements OnInit {
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
