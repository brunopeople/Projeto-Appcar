import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CadastrosServiceProvider {

private url = 'http://localhost:8080/api';

  constructor(public http: HttpClient) {
    
  }


  compra(cadastro){
    return this.http.post(this.url + '/cadastro/compra',cadastro)
    .do( ()=> cadastro.enviado = true)
    .catch((err)=> Observable.of(new Error('Falha no cadastro')));
  }
}
