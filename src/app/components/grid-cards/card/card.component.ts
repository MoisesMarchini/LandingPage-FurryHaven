import { Component, Input, OnInit } from '@angular/core';
import { CardModel, CardOptions } from './card-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() model?: CardModel;
  @Input() options?: CardOptions;

  constructor() { }

  ngOnInit() {
  }

}
