import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class AgendamentoServiceProvider {

private _url = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) {
  }

  agenda(agendamentos: Agendamento){
    return this._http.post(this._url+'/agendamento/agenda',agendamento);
  }

}
