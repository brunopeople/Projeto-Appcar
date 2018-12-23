import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import {Cadastro} from '../../modelos/cadastro';

@Injectable()
export class CadastroDaoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CadastroDaoProvider Provider');
  }

  private _geraChave(cadastro: Cadastro){
    return cadastro.emailCliente + cadastro.data.substr(0,10);
  }

  salva (cadastro:Cadastro){
    let chave = this._geraChave(cadastro);
    let promise = this._storage.set(chave, cadastro);

    return Observable.fromPromise(promise);
  }

  ehDuplicado( cadastro: Cadastro){

  let chave = this._geraChave(cadastro);
  let promise = this._storage
                    .get(chave)
                    .then(dado => dado ? true : false);

                    return Observable.fromPromise(promise);
  }

}
