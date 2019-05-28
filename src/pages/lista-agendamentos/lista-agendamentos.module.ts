import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAgendamentosPage } from './lista-agendamentos';

@NgModule({
  declarations: [
    ListaAgendamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAgendamentosPage),
  ],
})
export class ListaAgendamentosPageModule {}
