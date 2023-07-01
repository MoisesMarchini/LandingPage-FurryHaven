import { Component, Input, OnInit } from '@angular/core';
import { CardModel, CardOptions } from './card/card-model';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements OnInit {
  @Input() cardsList: CardModel[] = [{title: 'Teste'}];
  @Input() options?: CardOptions;

  constructor() { }

  ngOnInit() {
  }

}
