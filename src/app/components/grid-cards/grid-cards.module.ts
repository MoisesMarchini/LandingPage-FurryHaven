import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardsComponent } from './grid-cards.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridCardsComponent, CardComponent],
  exports: [GridCardsComponent, CardComponent],
})
export class GridCardsModule { }
