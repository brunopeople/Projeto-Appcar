import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { Usuario } from '../../modelos/usuario';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

email: string = 'admin';
senha: string = 'admin123';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              private _usuarioService: UsuariosServiceProvider) {
  }

  Logar(){
    console.log(this.email);
    conselog.log(this.senha);

    this._usuarioService
        .efetuaLogin(this.email, this.senha)
        .subscribe(
          (usuario: Usuario) => {
            console.log(usuario);
            this.navCtrl.setRoot(HomePage);
          },

          ()=> {
            this._alertCtrl.create({
              title: 'Falha no Login',
              subTitle: 'Email ou senha incorretos! Verifique por favor!',
              buttons:[
                {text: 'OK'}
              ]
            }).present();
          }
        )
    }
  }
