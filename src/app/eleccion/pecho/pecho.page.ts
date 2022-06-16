import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pecho',
  templateUrl: './pecho.page.html',
  styleUrls: ['./pecho.page.scss'],
})
export class PechoPage implements OnInit {
  pecho = [
    {
      id: 'pecho 1',
      title: 'Flexiones',
      subtitle: 'Pecho',
      imageURL:'assets/img/pecho/flexiones.jpg',
      select: false,
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'pecho 2',
      title: 'Remo',
      subtitle: 'Pecho',
      imageURL:'assets/img/pecho/remo.jpg',
      select: false,
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'pecho 3',
      title: 'Tiras elásticas',
      subtitle: 'Pecho',
      imageURL:'assets/img/pecho/tiras-elasticas.jpg',
      select: false,
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
