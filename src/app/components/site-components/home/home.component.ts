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
