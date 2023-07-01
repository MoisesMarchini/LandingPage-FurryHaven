import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides = [
    'bg-danger',
    'bg-info',
    'bg-warning'
  ]
  totalSlides = 3;
  currentSliderIndex = 0;
  increaseSlider(value: number) {
    this.currentSliderIndex = (this.currentSliderIndex + value) % this.totalSlides;
    if (this.currentSliderIndex < 0) 
      this.currentSliderIndex = this.totalSlides - 1;
  }
  nextSlide() {
    return (this.currentSliderIndex + 1) % this.totalSlides;
  }
  prevSlide() {
    if (this.currentSliderIndex - 1 < 0) {
      return this.totalSlides - 1;
    } else {
      return (this.currentSliderIndex - 1) % this.totalSlides;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
