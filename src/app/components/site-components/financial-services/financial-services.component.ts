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
        `School fees and career 
        cost are periodical payments.
        Parents, guardians and individual
       are require to make payment for their wards
       and children, as such adequate 
       plans are advised  to be made in
       order to avoid being under pressure
       or stress to meet up.`,

       `We are in business to help
       you make plans with as little
       as less than 20 percentage of full
        period cost or 100 percentage of 
       period cost for a lifetime of this obligation.`,
      
       `Our slogan is, "Pay Your School Fees" 
       only once, as only single 
       investment plan would be 
       sufficient for a lifetime`
      ]
    },
    {
      icon: 'business_center',
      title: 'Your Business and House Rent Planning',
      description: [
        `Your business and house rent are 
        periodical payments that reduce your 
        assets, when you create a reserves
        investment plans for it, it's no longer a 
        liability that reduces your wealth,
        your investment plans make it a comfort.
        Please do not tell us you are a house owner
        ,you as Landlord require this plan as well.`,

       `Other categories of areas you require this plan are
       housing projects funding
       housing maintenance
       housing rebuild and replacement`,
     
      ]
    },
    {
      icon: 'favorite_border',
      title: 'Religious Obligations',
      description: [
        `Religious obligations are necessary
        to increase our spiritual strength.
        We can help you plan them with few funds and  
        make it easier for you to perform these rights 
       as often as you wish.`,

       `Islamic Hajj & Umrah rights,
       go to Mecca & Medina every year`,
      
       `Christian pilgrimage, go to
       Jerusalem & Rome as you wish`,
      ]
    },

    {
      icon: 'monetization_on',
      title: 'Mortgage  & Assets Acquisition',
      description: [
        `Housing projects,
        finance your home with
        less than twenty-five 
        percentage of fund 
        required.`,

       `Long-term  asset project
       development , funding of 
       governmental &
       corporation projects  with 
         less than twenty-five 
       percentage of fund required`,
      
       `You plan your car purchase
       with less than twenty-five 
       percentage of fund required
       as well as all other 
       fixed assets`,
      ]
    },
    {
      icon: 'airplanemode_active',
      title: 'Holiday & Socialisation',
      description: [
        `Period holiday & leisure 
        making with single investment `,

       `Annual festivities`,
      
       `Burial & funeral preparation`,

       `Meeting hosting and other social planning`
      ]
    },
    {
      icon: 'group_work',
      title: 'General Reserves',
      description: [
        `The value of your
        general financial 
        reserves, is a measure 
        how liquidity you are
        well now and in future.
        It could be used to know
        how quickly you can
        recover when financial
        and other disasters struck`,

       `Corporate and governmental
       overhead funding`,
      
       `We help you plan for every obligation 
				and transactions that would require you
				to make payments in future`,

      ]
    },

    {
      icon: 'check_box',
      title: 'Microfund Pigibox',
      description: [
        `Do you know that every
        &#8358;50 you drop 
        in our investment pigibox 
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
        is a happy life, 
        please plan for it`
      ]
    },

    
    {
      icon: 'school',
      title: 'Cost of Foreign Education',
      description: [
        `With less than 10 percent of 
        required cost, we can help your 
        children plan for foreign 
        education, if you start today`
      ]
    },
    
    
  ];

 






  ngOnInit() {
  }

}
