import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { Usuario } from '../../modelos/usuario';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = 'brunopessoa.melo@gmail.com'
  senha: string = 'admin@123';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              private _usuariosService: UsuariosServiceProvider) {
  }

  Logar(){
    console.log(this.email);
    console.log(this.senha);

    this._usuariosService
        .Logar(this.email, this.senha)
        .subscribe(
          (usuario: Usuario) => {
            console.log(usuario);
            this.navCtrl.setRoot(HomePage);
          },

          () =>{
            this._alertCtrl.create({
              title: 'Falha no Login',
              subTitle: 'Seu Email ou senha estão incorretos! Verifique!',
              buttons: [
                {text: 'Ok'}
              ]
            }).present();
          }
        )
  }

}
