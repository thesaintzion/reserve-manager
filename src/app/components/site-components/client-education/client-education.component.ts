import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-education',
  templateUrl: './client-education.component.html',
  styleUrls: ['./client-education.component.scss']
})
export class ClientEducationComponent implements OnInit {
  loading = true;
  constructor() { }



  ngOnInit() {

    setTimeout( () =>{
      this.loading = false;
    }, 800);
  }

}
