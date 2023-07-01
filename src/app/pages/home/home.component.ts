import { Component, OnInit } from '@angular/core';
import { CardModel, CardOptions } from 'src/app/components/grid-cards/card/card-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardsTitle = 'Histórias Inspiradoras de Animais Resgatados';
  readonly iconsPath = '/assets/images/icons/'
  readonly testimonialsPath = '/assets/images/testimonials/'

  cardsList: CardModel[] = [
    {
      title: 'Luna',
      imgPath: this.testimonialsPath+'portrait-Luna.jpg',
      subtitle: 'De Abandonada a Adorada',
      description: 'Luna, uma linda gatinha de pelagem preta, foi encontrada nas ruas em condições precárias. Com cuidados veterinários, alimentação adequada e muito carinho, Luna se recuperou e encontrou um lar amoroso. Agora, ela vive cercada de amor e é a alegria da família que a adotou.'
    },
    {
      title: 'Max',
      imgPath: this.testimonialsPath+'portrait-Max.jpg',
      subtitle: 'De Solitário a Companheiro Leal',
      description: 'Max, um cãozinho de porte médio, passou grande parte de sua vida em um ambiente hostil antes de ser resgatado pelo FurryHaven. Com paciência e treinamento, Max se transformou em um companheiro leal e amoroso. Ele encontrou um lar onde recebe todo o amor e atenção que merece.'
    },
    {
      title: 'Bella',
      imgPath: this.testimonialsPath+'portrait-Bella.jpg',
      subtitle: 'De Traumas a Confiança',
      description: 'Bella, uma cadela de raça mista, sofreu maus-tratos antes de chegar ao FurryHaven. Com o apoio e cuidado dedicados de nossa equipe, Bella superou seus traumas e aprendeu a confiar novamente. Hoje, ela vive feliz em uma família carinhosa, mostrando que o amor pode curar até as feridas mais profundas.'
    },
  ]

  howToHelpList: { title: string, body: string }[] = [
    {
      title: 'Adote um Amigo Peludo',
      body: 'Ao adotar um animal do FurryHaven, você estará dando a ele uma segunda chance e um lar amoroso. Nossos animais são cuidadosamente avaliados para encontrar a combinação perfeita entre o animal e o adotante. Venha conhecer nossos amigos peludos pessoalmente e descubra o companheiro perfeito para você.'
    },
    {
      title: 'Divulgue nas Redes Sociais',
      body: 'Compartilhe as histórias emocionantes de animais resgatados e a importância da adoção responsável em suas redes sociais. Ao aumentar a conscientização, você ajuda a encontrar lares amorosos para mais animais e inspira outras pessoas a se envolverem.'
    },
    {
      title: 'Faça uma Doação',
      body: 'Contribuições financeiras são fundamentais para o funcionamento do FurryHaven. Com sua doação, podemos fornecer cuidados médicos, alimentação, abrigo e programas de reabilitação para os animais resgatados. Cada centavo faz a diferença na vida de um animal necessitado.'
    },
    {
      title: 'Voluntarie-se',
      body: 'Se você tem tempo e habilidades para oferecer, junte-se à nossa equipe de voluntários. Desde ajudar nos cuidados diários dos animais até auxiliar em eventos de adoção e arrecadação de fundos, há várias maneiras de ajudar no FurryHaven. Sua dedicação fará uma diferença direta na vida dos animais resgatados.'
    },
    {
      title: 'Contribua com Suprimentos',
      body: 'Além de doações em dinheiro, também aceitamos suprimentos e alimentos para animais. Entre em contato conosco para saber quais itens são necessários no momento. Cada doação de suprimentos ajuda a garantir que nossos animais tenham tudo o que precisam enquanto aguardam por um lar permanente.'
    },
  ]

  contactList: CardModel[] = [
    {
      title: 'Telefone',
      imgPath: this.iconsPath+'phone-solid.svg',
      description: 'Ligue para o nosso número de contato, disponível de segunda a sexta-feira, das 9h às 17h. Nossa equipe estará pronta para fornecer informações adicionais e orientações sobre o processo de adoção.'
    },
    {
      title: 'E-mail',
      imgPath: this.iconsPath+'envelope-solid.svg',
      description: 'Envie-nos um e-mail para info@furryhaven.com e teremos o prazer de responder a todas as suas perguntas. Nossa equipe responderá o mais breve possível, geralmente em até 24 horas.'
    },
    {
      title: 'Visita Presencial',
      imgPath: this.iconsPath+'house-solid.svg',
      description: 'Agende uma visita ao nosso abrigo para conhecer nossos animais pessoalmente. Nossa equipe terá prazer em recebê-lo, mostrar as instalações e ajudá-lo a encontrar o amigo peludo perfeito para você.'
    },
    {
      title: 'Mídias Sociais',
      imgPath: this.iconsPath+'hashtag-solid.svg',
      description: 'Siga-nos em nossas redes sociais para ficar por dentro das últimas notícias, eventos de adoção e histórias inspiradoras de animais resgatados. Conecte-se conosco no Facebook, Instagram e Twitter para fazer parte da nossa comunidade apaixonada por animais.'
    }
  ]

  smalIconsOptions: CardOptions = {
    imgSize: '1.75rem',
    squared: true,
    paddingClass: 'p-1'
  }

  constructor() { }

  ngOnInit() {
  }

}
