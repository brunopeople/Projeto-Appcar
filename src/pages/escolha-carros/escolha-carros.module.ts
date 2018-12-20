import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolhaCarrosPage } from './escolha-carros';

@NgModule({
  declarations: [
    EscolhaCarrosPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolhaCarrosPage),
  ],

  exports:[
    EscolhaCarrosPage
  ]
})
export class EscolhaCarrosPageModule {}
