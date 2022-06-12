import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dorsales-espalda',
  templateUrl: './dorsales-espalda.page.html',
  styleUrls: ['./dorsales-espalda.page.scss'],
})
export class DorsalesEspaldaPage implements OnInit {
  dorsales = [
    {
      id: 'Dorsales 1',
      title: 'Dorsales 1',
      subtitle: 'Dorsales 1 subtitulo',
      imageURL:'https://www.mundodeportivo.com/files/image_948_465/uploads/2020/08/20/60e78153f3dc3.jpeg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
    {
      id: 'Dorsales 2',
      title: 'Dorsales 2',
      subtitle: 'Dorsales 2 subtitulo',
      imageURL:'https://www.mundodeportivo.com/files/image_948_465/uploads/2020/08/20/60e78153f3dc3.jpeg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
