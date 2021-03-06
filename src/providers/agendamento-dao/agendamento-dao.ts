import { Injectable } from '@angular/core';
import {Agendamento} from '../../modelos/agendamento';

import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AgendamentoDaoProvider {

  constructor(private _storage: Storage) {
   
  }

  private _geraChave(agendammento: Agendamento){
    return agendammento.emailCliente + agendammento.data.substr(0,10);
  }

  salva(agendammento: Agendamento){
  let chave = this._geraChave(agendammento);
  let promise = this._storage.set(chave,agendammento);

  return Observable.fromPromise(promise);
  }

  ehDuplicado(agendammento: Agendamento){
  let chave = this._geraChave(agendammento);
  let promise = this._storage
                    .get(chave)
                    .then(dado => dado ? true : false);
  return Observable.fromPromise(promise);
  }

  listaTodos(){
  let agendammentos: Agendamento[] = [];
  let promise = this._storage.forEach((agendammento: Agendamento)=> {
    agendammentos.push(agendammento);

  }).then(() => agendammentos);

  return Observable.fromPromise(promise);
  }

}
