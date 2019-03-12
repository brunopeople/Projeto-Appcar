import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Carro} from '../../modelos/carros';
import {Acessorio} from '../../modelos/acessorio';
import {CadastroPage} from '../cadastro/cadastro';



@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

public carro: Carro;
public acessorios: Acessorio[];
public _precoTotal: number;

  constructor(public navCtrl: NavController,
  public navParams: NavParams) {

  this.carro = this.navParams.get('carroSelecionado');
  this._precoTotal = this.carro.preco;
  this.acessorios = [
    {nome:'FREIO ABS', preco: 600 },
    {nome:'MP3-PLayer', preco: 1500 },
    {nome:'AR-Condicionado', preco: 2000}

    ];
  }

  atualizaTotal(ativado:boolean, acessorio: Acessorio){
    ativado ?
    this._precoTotal += acessorio.preco:
    this._precoTotal -= acessorio.preco;
  }

  avancaCadastro(){
    this.navCtrl.push(CadastroPage.name,{
      carroSelecionado: this.carro,
      precoTotal: this._precoTotal
    });
  }


  get precoTotal()
  {
    return this._precoTotal;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscolhaPage');
  }

}
