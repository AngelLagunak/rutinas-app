import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eleccion',
  templateUrl: './eleccion.page.html',
  styleUrls: ['./eleccion.page.scss'],
})

export class EleccionPage implements OnInit {
  rutinas = [
    {
      id: 'Pecho',
      title: 'Pecho',
      image:'./assets/img/portada-pecho.jpg',
      href: './eleccion/pecho/pecho.page.html',
    },
    {
      id: 'Abdominales',
      title: 'Abdominales',
      image:'./assets/img/portada-abs.jpg',
      href: './eleccion/abdominales/abdominales.page.html',
    },
    {
      id: 'Piernas-cintura',
      title: 'Piernas y cintura',
      image:'./assets/img/portada-pierna.jpg',
      href: './eleccion/piernas-cintura/piernas-cintura.page.html',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
