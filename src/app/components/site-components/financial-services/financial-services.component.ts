import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-services',
  templateUrl: './financial-services.component.html',
  styleUrls: ['./financial-services.component.scss']
})
export class FinancialServicesComponent implements OnInit {

  constructor() { }



  fServices =[ 
    {
      icon: 'school',
      title: 'School Fees Planning',
      description: [
        `School Fees and Career 
        Cost are Periodical payments
        Parents, Guardians and Individual
       are require to make for their Wards
       and Children, as such adequate 
       plans are advice to be made in
       order to avoid being under pressure
       or stress to meet up.`,

       `We are in Business to help
       you make plans with as little
       as less than 20 percentage of full
        period cost or 100 percentage of 
       period cost for a lifetime, of this obligation.`,
      
       `Our slogan is, "Pay Your School Fees 
       only once, As only single 
       investment plan would be 
       sufficient for a lifetime`,

       `No matter how confortable you
       are sure of the future, if you 
       do not have reserves plan for this
       purpose, then you are death.`
      ]
    },
    {
      icon: 'business_center',
      title: 'Your Business and House Rent Planning',
      description: [
        `Your Business and House Rent are 
        Periodical payments that reduce your 
        Assets, when you create a reserves
        Investment plans for it, it no longer a 
        liabiliy that reduce your wealth,
        your investment plans make it a comfort.
        Please do not tell us you are a house owner
        ,you as Landlord require this plan as well.`,

       `Other categories of areas you require this plan are`,
      
       `Housing Projects funding`,

       `Housing Maintenance`,
       `Housing Rebuild and Replacement`,
     
      ]
    },
    {
      icon: 'favorite_border',
      title: 'Religious Obligations',
      description: [
        `Religious Obligations are neccessary
        to increase our spiritual strength.
        We can help you plan them with few funds and  
        make it easier for you to perform these rights 
       as often as you wish.`,

       `Islamic Hajj & Umrah Rights,
       Go to Mecca & Medina every year`,
      
       `Christian Pilgrimage, Go to
       Jerusalem & Rome as you wish`,
      ]
    },

    {
      icon: 'monetization_on',
      title: 'Mortgage  & Assets Acquisition',
      description: [
        `Housing Projects,
        Finance your Home with
        less than twentyfive 
        percentage of fund 
        required.`,

       `Longterm Asset Project
       Development ,Funding of 
       Governmental &
       Corporation projects  with 
         less than twentyfive 
       percentage of fund required`,
      
       `You plan your Car Purchase
       with less than twentyfive 
       percentage of fund required
       As well as all other 
       Fixed Assets`,
      ]
    },
    {
      icon: 'airplanemode_active',
      title: 'Holiday & Socialisation',
      description: [
        `Period Holiday & Leisure 
        Making with single investment `,

       `Annual Festivities`,
      
       `Burial & Funeral Preparation`,

       `Meeting Hosting and other Social Planning`
      ]
    },
    {
      icon: 'group_work',
      title: 'General Reserves',
      description: [
        `The value of Your
        General Financial 
        Reserves, is a measure 
        how Liquidly you are
        well now and in future.
        It could be used to know
        how quickly you can
        recover when financial
        and other disasters struck`,

       `Corporate and Governmental
       Overhead Funding`,
      
       `We help you plan for every Obligation 
				and Transactions that would require you
				to make payments in future`,

      ]
    },

    {
      icon: 'check_box',
      title: 'Microfund Pigibox',
      description: [
        `Do you know that every
        50 Nigeria Naira you drop 
        in our Investment Pigibox 
        every day have potential 
        to yield up to 500 percent
        within 365 days ? So do not 
        throw it away again`
      ]
    },

    {
      icon: 'local_hospital',
      title: 'Medical Health Cares',
      description: [
        `Healthy living 
        is a Happy Life, 
        please plan for it`
      ]
    },

    
    {
      icon: 'school',
      title: 'Cost of Foreign Education',
      description: [
        `With less than 10pencent of 
        Required Cost, We can help Your 
        Children plan for Foreign 
        Education, If you start Today, Now`
      ]
    },
    
    
  ];

 






  ngOnInit() {
  }

}
