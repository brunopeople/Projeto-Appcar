import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Cadastro} from '../../modelos/cadastro';


@Injectable()
export class AgendamentoServiceProvider {

private _url = 'http://localhost:8080/api';

  constructor(public _http: HttpClient) {
    console.log('Hello AgendamentoServiceProvider Provider');
  }

  agenda(agendamento: Agendamento){
    return this._http
               .post(this._url+'/agendamento/agenda', agendamento)
               .do(() => agendamento.enviado = true)
               .catch((err) => Observable.of(new Error('Falha no Agendamento! Tente Novamente')));
  }

}
