import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultancy-services',
  templateUrl: './consultancy-services.component.html',
  styleUrls: ['./consultancy-services.component.scss']
})
export class ConsultancyServicesComponent implements OnInit {

  constructor() { }


  consultancyServices =[ 
    {
      icon: 'info_1.svg',
      description: [
        `Software, Derivative Trading &amp; Financial Services`
      ]
    },

    {
      icon: 'info_2.svg',
      description: [
       `Properties &amp; Asset Acquisition`,
      ]
    },
  ];
  ngOnInit() {
  }




}
