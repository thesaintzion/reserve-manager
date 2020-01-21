import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss']
})
export class SoftwareDevelopmentComponent implements OnInit {

  constructor() { }



  softwareDevs =[ 
    {
      image: 'software3.jpg',
      title: 'Software Development',
      description: `We provides Software Solutions for businesses in all forms whether Web Applications,
       Mobile or Desktop to support your organisation in the most appropriate way.`,
    },
    {
      image: 'e-advisor.jpg',
      title: 'MQL Expert Advisor',
      description: `Various applications to automate analysis and 
      trading are available as Expert Advisors. 
      It features various applications based on 
      different trading algorithms and provides different degrees of automation`,
    },
    {
      image: 'web-dev.jpg',
      title: 'Web Development',
      description: `We are also experts in providing 
      professionally looking websites or web applications for businesses.`,
    },
    {
      image: 'mobile-dev.jpg',
      title: 'Mobile Application',
      description: `If a Mobile Application whether on Android or iOS platform is 
      required for your business, we can provide that for you at competitive rates.`,
    },
  ];

  fServices =[ 
    {
      icon: 'school',
      title: 'Software Development',
      description: `We provides Software Solutions for businesses in all forms whether Web Applications,
       Mobile or Desktop to support your organisation in the most appropriate way.`,
    },
    {
      icon: 'business_center',
      title: 'MQL Expert Advisor',
      description: `Various applications to automate analysis and 
      trading are available as Expert Advisors. 
      It features various applications based on 
      different trading algorithms and provides different degrees of automation`,
    },
    {
      icon: 'favorite_border',
      title: 'Web Development',
      description: `We are also experts in providing 
      professionally looking websites or web applications for businesses.`,
    },

    {
      icon: 'monetization_on',
      title: 'Mobile Application',
      description: `If a Mobile Application whether on Android or iOS platform is 
      required for your business, we can provide that for you at competitive rates.`,
    },      
  ];

  ngOnInit() {
  }

}
