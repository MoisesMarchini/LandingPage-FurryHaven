import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/components/grid-cards/card/card-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardsTitle = 'Histórias Inspiradoras de Animais Resgatados';
  cardsList: CardModel[] = [
    {
      title: 'Luna',
      subtitle: 'De Abandonada a Adorada',
      description: 'Luna, uma linda gatinha de pelagem preta, foi encontrada nas ruas em condições precárias. Com cuidados veterinários, alimentação adequada e muito carinho, Luna se recuperou e encontrou um lar amoroso. Agora, ela vive cercada de amor e é a alegria da família que a adotou.'
    },
    {
      title: 'Max',
      subtitle: 'De Solitário a Companheiro Leal',
      description: 'Max, um cãozinho de porte médio, passou grande parte de sua vida em um ambiente hostil antes de ser resgatado pelo FurryHaven. Com paciência e treinamento, Max se transformou em um companheiro leal e amoroso. Ele encontrou um lar onde recebe todo o amor e atenção que merece.'
    },
    {
      title: 'Bella',
      subtitle: 'De Traumas a Confiança',
      description: 'Bella, uma cadela de raça mista, sofreu maus-tratos antes de chegar ao FurryHaven. Com o apoio e cuidado dedicados de nossa equipe, Bella superou seus traumas e aprendeu a confiar novamente. Hoje, ela vive feliz em uma família carinhosa, mostrando que o amor pode curar até as feridas mais profundas.'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
