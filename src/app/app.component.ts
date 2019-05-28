import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ListaAgendamentosPage} from '../pages/lista-agendamentos/lista-agendamentos';

@Component({
selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) public nav: Nav;
  rootPage:any = HomePage;

  public paginas = [{
    titulo: 'Agendamentos', Component: ListaAgendamentosPage.name,
    icone: 'calendar'
  }];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(Pagina){
    this.nav.push(componente);
  }
}

