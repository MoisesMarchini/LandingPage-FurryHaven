import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  readonly slidesRootPath = '/assets/images/slider/'
  private timer: any;
  private timerValue: number = 0;
  private timerLimit: number = 800;
  private minTimerToChange: number = 250;

  @Input() slides = [
    this.slidesRootPath + 'slide (1).jpg',
    this.slidesRootPath + 'slide (2).jpg',
    this.slidesRootPath + 'slide (3).jpg',
    this.slidesRootPath + 'slide (4).jpg',
    this.slidesRootPath + 'slide (5).jpg',
  ]

  totalSlides: number = 0;
  currentSliderIndex = 0;

  constructor() { }

  ngOnInit() {
    this.totalSlides = this.slides.length;
    this.initTimer();
  }

  initTimer(resetTimer: boolean = true) {
    if (resetTimer)
      this.timerValue = this.timerLimit;
    this.timer = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
      }
      else {
        this.increaseSlider(1);
      }
    }, 0);
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  increaseSlider(value: number) {
    this.currentSliderIndex = (this.currentSliderIndex + value) % this.totalSlides;
    if (this.currentSliderIndex < 0)
      this.currentSliderIndex = this.totalSlides - 1;

    this.timerValue = this.timerLimit;
  }

  nextSlide() {
    return (this.currentSliderIndex + 1) % this.totalSlides;
  }

  prevSlide() {
    if (this.currentSliderIndex - 1 < 0)
      return this.totalSlides - 1;

    return (this.currentSliderIndex - 1) % this.totalSlides;
  }

}
