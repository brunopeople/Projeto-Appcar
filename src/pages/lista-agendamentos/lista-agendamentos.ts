import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AgendamentosDaoProvider} from '../../providers/agendamento-dao/agendamento-dao';
import { Agendamento } from '../../modelos/agendamento';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamento-service';


@IonicPage()
@Component({
  selector: 'page-lista-agendamentos',
  templateUrl: 'lista-agendamentos.html',
})
export class ListaAgendamentosPage {
  agendamentos: Agendamento[];
  private _alerta;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _alertCrtl: AlertController,
              private _agendamentoService: AgendamentoServiceProvider,
              private _agendamentoDao: AgendamentosDaoProvider) {
  }

  ionViewDidLoad() {
    this._agendamentoDao.listaTodos()
    .subscribe(
      (agendamentos: Agendamento[])=>{
        this.agendamentos = agendamentos;
      }
    )
  }

  reenvia(agendamento:Agendamento){
    this._alerta = this._alertCrtl.create({
      title: 'Aviso',
      buttons:[
      {
        text:'ok'
       }
      ]
    });

    let mensagem = '';

    this._agendamentoService.agenda(agendamento)
    .mergeMap((valor) => {

      let observable = this._agendamentoDao.salva(agendamento);
      if(valor instanceof Error){
        throw valor;
      }

      return observable;
    }).finally(
      ()=>{
        this._alerta.setSubTitle(mensagem);
        this._alerta.present();
      }
    )
    .subscribe(
      () => mensagem = 'Agendamento reenviado!',
      (err: Error) => mensagem = err.message
    );
  }

}
