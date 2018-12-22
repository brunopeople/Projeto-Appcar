import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPage } from '../pages/escolha/escolha';
import {HttpClientModule} from '@angular/common/http';
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import { CadastrosServiceProvider } from '../providers/cadastros-service/cadastros-service';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/catch';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
    name: 'Projeto-Appcar',
    storeName: 'cadastro',
    driverOrder:['indexeddb']

    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarrosServiceProvider,
    CadastrosServiceProvider
  ],
})
export class AppModule {}
