import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Carro} from '../../modelos/carro';
import {AgendamentosServiceProvider} from '../../providers/agendamento-service/agendamento-service';
import {Agendamento} from '../../modelos/agendamento';

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
  private _agendamentosService: AgendamentosServiceProvider,
  private _alertCtrl: AlertController)
  {
    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');

    

   }

    agenda(){
      if(!this.nome || !this.endereco || !this.email){
        this._alertCtrl.create({
          title: 'Preenchimento obrigatorio',
          subtitle: 'Preencha todos os campos!',
          buttons: [
            {text: 'ok'}
          ]
        }).present();

        return;
      }

      let agendamento: Agendamento ={

      nomeCliente> this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal
      };

    this._alerta = this_alertCtrl.create({
      title: 'Aviso!'
      buttons: [
        {
        text:'OK!',
        handler: () => {
          this.navCtrl.setRoot(HomePage);
          }
        }
      ];
    });

    let mensagem = '';

    this.agendamentoService.agenda(agendamento)
    .finally(
      () => {

        this._alerta.setSubtitle(mensagem);
        this._alerta.present();
      }
    )
    .subscribe(
      () =>{
      mensagem = 'Agendamento realizado!';
      },
      () =>{
       mensagem = 'Falha no seu agendamento! Tente denovo!';
          }
        );
      }
    }

  

