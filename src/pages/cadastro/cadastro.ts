import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

public carro:Carro;
public precoTotal: Number;
public nome: string = '';
public endereco: string = '';
public email: string = '';
public data: string = new Date().toISOString();

private _alerta: Alert;

public 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
