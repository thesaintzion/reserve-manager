import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dedicated-trading-accounts',
  templateUrl: './dedicated-trading-accounts.component.html',
  styleUrls: ['./dedicated-trading-accounts.component.scss']
})
export class DedicatedTradingAccountsComponent implements OnInit {

  constructor() { }
  consultancyServices =[ 
    {
      icon: 'info_1.svg',
      description: [
        `FX`
      ]
    },

    {
      icon: 'info_2.svg',
      description: [
       `CFD`,
      ]
    },
    {
      icon: 'info_2.svg',
      description: [
       `FUTURES`,
      ]
    },
    {
      icon: 'info_1.svg',
      description: [
       `METAL, OIL & GAS`,
      ]
    },
  ];

  ngOnInit() {
  }

}
