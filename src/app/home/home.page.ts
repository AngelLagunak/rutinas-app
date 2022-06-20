import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              public menuController: MenuController) {
    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('', [Validators.required,
                                  Validators.minLength(3),
                                  Validators.pattern( /^[a-zA-Z]*$/)]),
      apellido: new FormControl('', [Validators.required,
                                  Validators.minLength(3),
                                  Validators.pattern( /^[a-zA-Z]*$/)]),
      password: new FormControl('', [Validators.required,
                                  Validators.minLength(6)]
                                  ),
      nacimiento: new FormControl('', Validators.required),
      confirmacionPassword: new FormControl('', Validators.required)
    });
  }

  readonly toggleMenu= () =>{
    this.menuController.toggle();

};


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


