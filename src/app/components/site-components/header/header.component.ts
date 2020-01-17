import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;

  constructor(private router: Router) { }
  dataTest(e): void{
// alert(e);
this.router.navigate(['/register'], {queryParams: {
  'user': 'Saint'
}});
  }
  ngOnInit() {
  }

}
