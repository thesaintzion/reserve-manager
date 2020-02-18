import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {
loading = false
  constructor() { }
  fileChange(e){

  }
  onformSubmit(){
this.loading = true;

setTimeout( () =>{
  this.loading = false;
}, 3000);
  }

  ngOnInit() {
  }

}
