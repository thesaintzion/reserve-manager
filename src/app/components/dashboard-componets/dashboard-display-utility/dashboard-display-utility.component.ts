import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-display-utility',
  templateUrl: './dashboard-display-utility.component.html',
  styleUrls: ['./dashboard-display-utility.component.scss']
})
export class DashboardDisplayUtilityComponent implements OnInit {

@Input() countries;
  constructor() { }


  ngOnInit() {
    console.log('WE GOT IT', this.countries);
  }

}
