import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from './banner/banner.module';
import { GridCardsModule } from './grid-cards/grid-cards.module';
import { SliderModule } from './slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    GridCardsModule,
    SliderModule
  ],
  declarations: [

  ]
})
export class ComponentsModule { }
