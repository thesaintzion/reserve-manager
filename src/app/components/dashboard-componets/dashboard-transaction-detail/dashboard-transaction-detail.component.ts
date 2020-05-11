import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard-transaction-detail',
  templateUrl: './dashboard-transaction-detail.component.html',
  styleUrls: ['./dashboard-transaction-detail.component.scss']
})
export class DashboardTransactionDetailComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

}
