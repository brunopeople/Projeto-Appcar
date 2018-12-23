import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Carro} from '../../modelos/carro';
import {AgendamentoServiceProvider} from '../../providers/agendamentos-service/agendamentos-service';
import {Cadastro} from '../../modelos/cadastro';
import {CadastroDaoProvider} from '../../providers/cadastro-dao/cadastro-dao';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

public carro: Carro;
public precoTotal: Number;
public nome: string = '';
public email: string; 
public data: string = new Date().toISOString();
public endereco: string = '';

private _alerta: Alert;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private _cadastroService: CadastroServiceProvider,
  private _alertCtrl: AlertController,
  private _storage: Storage
  ) {
    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');

  }

  agenda(){
    if(!this.nome || !this.endereco || !this.email){
      this._alertCtrl.create({
        title: 'Preenchimento Obrigatório pra concluir o agendamento',
        subtitle: 'Por Favor Conclua o Preenchimento!',
        buttons:[
          {text: 'ok'}
        ]
      }).present();

      return;
    }

    let cadastro: Cadastro = {
      nomeCliente : this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal,
      confirmado: false,
      enviado: false,
      data: this.data
    };

    this._alerta = this._alertCtrl.create({
    title: 'Aviso',
    buttons: [
      text: 'ok',
      handler:() =>{
        this.navCtrl.setRoot(HomePage);
        }
      }
    ]
    });

    let mensagem = '';

    this._agendamentoDao.ehDuplicado(cadastro).mergeMap(ehDuplicado =>{
      if(ehDuplicado){
        throw new Error ('Cadastro Existente!');
      }
      return this._cadastroService.cadastro(cadastro);
    }).mergeMap((valor) => {
      let observable = this._cadastroDao.salva(cadastro);
        if(valor instanceof Error) {
          throw valor;
        }
        return observable;
    }).finally(
    () => {
      this._alerta.setSubTitle(mensagem);
      this._alerta.present();
    }
    ).subscribe((
      () => mensagem = 'Cadastro Realizado!',
      (err: Error) => mensagem = err.message
    );
  }
}
