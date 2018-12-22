import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

public carro: Carro;
public precoTotal: Number;
public nome: string = '';
public data: string = new Date().toISOString();
public placa: string = '';

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


  gravar(){
  console.log(this.placa);
  console.log(this.nome);
  console.log(this.data);
  }

  salva(cadastro){
  let chave = this.nome + this.data.substr(0,10);
  let promise = this._storage.set(chave, cadastro);

  return Observable.fromPromise(promise);
  }

  gravar(){
  let cadastro:Cadastro = {
    nome: this.nome,
    placa: this.placa,
    data: this.data,
    precoTotal: this.precoTotal,
    confirmado: false,
    enviado: false;
    };
  }

  gravar(){
  if(!this.nome || !this.placa || !this.data){
  this._alertCtrl.create({
  title: 'Aviso',
  subtitle: 'Preencha todos os campos',
  buttons:[
  {text:'OK', handler:() => {this.navCtrl.setRoot(HomePage)}}
    ]
  }).present();
  return;
  }

  }

  this._cadastroService.compra(cadastro)
  .mergeMap( (valor)=>{
  let Observable = this.salva(cadastro)

  if(valor instaceof Error){
    throw valor;
  }

  return observable;

  }) 
  .finally(

  () => {
      this._alerta.setSubTitle(mensagem);
      this._alerta.present();
    }
  )
  .subscribe(

  () => {
    mensagem = 'Cadastro Realizado!';
    },

    (erro: Error) =>{
      mensagem = error.message;
    }
   );

}
