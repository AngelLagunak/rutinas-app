import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-abdominales',
  templateUrl: './abdominales.page.html',
  styleUrls: ['./abdominales.page.scss'],
},
)
export class AbdominalesPage implements OnInit {
  abdominales = [
    {
      id: 'Abdominales 1',
      title: 'Plancha sin dos apoyos',
      subtitle: 'Abdominales',
      imageURL: 'assets/img/abs/plancha_sin-dos-apoyos.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'Abdominales 2',
      title: 'Plancha sin un apoyo',
      subtitle: 'Abdominales',
      imageURL:'assets/img/abs/plancha_sin-un-apoyo.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'Abdominales 3',
      title: 'Rotación lateral',
      subtitle: 'Abdominales',
      imageURL:'assets/img/abs/rotacion-lateral.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
  ];
  type: string;
  constructor( public menuController: MenuController ) {
  }
  readonly toggleMenu= () =>{
    this.menuController.toggle();

  };

  ngOnInit() {this.type = 'Ejercicios';
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);}
}


