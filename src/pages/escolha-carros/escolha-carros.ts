import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Carro} from '../../modelos/carros';
import {Acessorio} from '../../modelos/acessorio';


@IonicPage()
@Component({
  selector: 'page-escolha-carros',
  templateUrl: 'escolha-carros.html',
})

export class EscolhaCarrosPage {

public carro: Carro;
public acessorio: Acessorio[];
private _precoTotal: number;

  constructor(public navCtrl: NavController,
  public navParams: NavParams) {

  this.carro = this.navParams.get('carroSelecionado');
  this._precoTotal = this.carro.preco;
  this.acessorio = [
      {nome: 'Freio ABS', preco:800},
      {nome: 'Ar-condicionado', preco:1500},
      {nome: 'MP3 Player', preco:600}
    ];
  }

  atualizaTotal(ativado:boolean, acessorio:Acessorio){
    ativado ?
    this._precoTotal += acessorio.preco:
    this._precoTotal -= acessorio.preco;
  }

  get precoTotal(){
    return this._precoTotal;
  }

}
