import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-piernas-cintura',
  templateUrl: './piernas-cintura.page.html',
  styleUrls: ['./piernas-cintura.page.scss'],
})
export class PiernasCinturaPage implements OnInit {
  piernascintura = [
    {
      id: 'Piernas y cintura 1',
      title: 'Zancada',
      subtitle: 'Piernas y cintura',
      imageURL:'assets/img/leg/zancada.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'Piernas y cintura 2',
      title: 'Peso muerto',
      subtitle: 'Piernas y cintura',
      imageURL:'assets/img/leg/peso_muerto.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'Piernas y cintura 3',
      title: 'Puente',
      subtitle: 'Piernas y cintura',
      imageURL:'assets/img/leg/puente.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'Piernas y cintura 4',
      title: 'Sentadilla',
      subtitle: 'Piernas y cintura',
      imageURL:'assets/img/leg/sentadilla.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'Piernas y cintura 5',
      title: 'Step',
      subtitle: 'Piernas y cintura',
      imageURL:'assets/img/leg/step.jpg',
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
  // segmentChanged(ev: any) {
  //   console.log('Segment changed', ev);}
}

