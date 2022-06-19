import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
              public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      nacimiento: new FormControl('', Validators.required),
      confirmacionPassword: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    const f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: '¡Faltan datos!',
        message: 'Rellena toda la información para continuar',
        buttons: ['Venga, lo relleno bien...']
      });

      await alert.present();
      return;
    }

    const usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      nacimiento: f.nacimiento,
      password: f.password,

    };
    const aviso = await this.alertController.create({
      header: '¡Tu usuario se ha registrado con éxito!',
      message: 'Dale al botón Escoger rutina para continuar',
      buttons: ['Okey!'],
    });

    localStorage.setItem('usuario',JSON.stringify(usuario));

    await aviso.present();
    return;
  }
}


