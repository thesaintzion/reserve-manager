import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mydate = new  Date().getFullYear();
  pageSlug = '';
  constructor(private router: Router, public sharedService: SharedService) { }

  ngOnInit() {

    this.pageSlug =  this.router.url.split('/')[1];
  }

}
