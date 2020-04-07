import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 loading  = true;
 contactForm;
 public slides =
 [
  { 
    src: '../../../../assets/img/financial.jpg',
    title: 'Solutions that make You Become a Market Broker Because of Your Purchasing Power',
    decription: ['Adequate disposable income ease financial stress.', 
                 'Best Financial Futures Merchant',
                 'We help you plan for every obligation and transactions that would require you to make payments in future',
    ],
    link: 'financial-services'
},
{ 
  src: '../../../../assets/img/consult.jpg',
  title: 'Governmental and Corporate Failure as Result of Poor Overhead Funding',
  decription: ['Any government and corporate body that cannot generate adequate funds internaly to cover overhead cost is not viable.', 
               '"Best Financial Futures Merchant"',
               'We help you plan for every obligation and transactions that would require you to make payments in future',
  ],
  link: 'financial-services'
},

{ 
  src: '../../../../assets/img/b1.jpg',
  title: 'Our Rent and School Fees Obligation Planning Are Excellent',
  decription: ['Do you know that if your annual rent is &#8358;500,000 if you invest that amount and hold on that investment "without withdrawal" for 365 days, you rely on the returns pay your rent into perpertuity.', 
               '"Best Financial Futures Merchant"',
               'We help you plan for every obligation and transactions that would require you to make payments in future',
  ],
  link: 'financial-services'
},

{ 
  src: '../../../../assets/img/trading2.jpg',
  title: 'Every Penny You Throw Away Has Potential To Make Substantial Invesment Returns !!!',
  decription: ['You rather drop it in our Investment Pigibox.', 
               'It has potential to grow by more than 500 pencent in 356 days.',
               'We help you plan for every obligation and transactions that would require you to make payments in future',
  ],
  link: 'financial-services'
},
 ]
  constructor( private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }


  ngOnInit() {
    setTimeout( ()=>{
      this.loading = false
    }, 1500);
    
  }

}
