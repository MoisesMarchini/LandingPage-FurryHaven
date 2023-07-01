import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  readonly bannerPath = '/assets/images/banner/';
  bannerImg = this.bannerPath + 'banner-dog.png';

  constructor() { }

  ngOnInit() {
  }

}
