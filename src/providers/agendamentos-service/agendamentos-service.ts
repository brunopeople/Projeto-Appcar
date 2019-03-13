import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Agendamento} from '../../modelos/agendamento';



@Injectable()
export class AgendamentosServiceProvider {

private _url = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) {
  }

  agenda(agendamento: Agendamento){
    return this._http
                .post(this._url+'/agendamento/agenda', agendamento)
                .do(() =>agendamento.enviado = true )
                .catch((err) =>Observable.of(new Error('Falha de agendamento! Tente denovo!')));
               
  }

}
