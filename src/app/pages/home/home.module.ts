import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerModule } from 'src/app/components/banner/banner.module';
import { GridCardsModule } from 'src/app/components/grid-cards/grid-cards.module';
import { SliderModule } from 'src/app/components/slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    GridCardsModule,
    SliderModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
