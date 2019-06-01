import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {PerfilPage} from '../pages/perfil/pefil';

import {ListaAgendamentosPage} from '../pages/lista-agendamentos/lista-agendamentos';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

@ViewChild(Nav) public nav: Nav;
  rootPage:any = LoginPage;

  public paginas = [
    { titulo:'Agendamentos', componente: ListaAgendamentosPage.name, icone: 'calendar'}
    { titulo:'Perfil', componente:PerfilPage.name,icone: 'person'}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(componente){
    this.nav.push(componente);
  }
}

