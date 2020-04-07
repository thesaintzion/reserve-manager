import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
public img = '../../../../assets/img/financial.jpg';
currentSlide = 0;
nextClick =  true;



  constructor() { }

  onPrevClick(){
    this.nextClick =  false;
    const prev = this.currentSlide - 1;
    if(prev < 0){
this.currentSlide = this.slides.length - 1;
    }else{
      this.currentSlide = prev;
    }
    console.log('Prexv clicked', this.currentSlide);
  }

  onNexClick(){
    this.nextClick =  true;
    const next = this.currentSlide + 1;
    if(next === this.slides.length){
this.currentSlide = 0;
    }else{
      this.currentSlide = next;
    }

    console.log('Next clicked', this.currentSlide);
  }

  @Input() slides;

  ngOnInit() {
    console.log(this.slides);
  }

}
