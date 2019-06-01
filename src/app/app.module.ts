import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import {AgendamentosServiceProvider} from '../providers/agendamentos-service/agendamentos-service';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';


import {IonicStorageModule} from '@ionic/storage';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
    name: 'Appcar',
    storeName: 'agendamentos',
    driverOrder: ['indexeddb']
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarrosServiceProvider,
    AgendamentosServiceProvider,
    AgendamentoDaoProvider,
    UsuariosServiceProvider
  ]
})
export class AppModule {}
