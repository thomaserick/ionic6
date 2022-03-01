import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL =
  'https://cors-anywhere.herokuapp.com/https://proxyapp.correios.com.br/v1/sro-rastro/';

@Injectable({
  providedIn: 'root',
})
export class CorreioService {
  constructor(private readonly _http: HttpClient) {}

  //QC260605194BR
  localizarObjeto(codigo: string) {
    let headers = new HttpHeaders().set('Content-type', 'aplication/json');
    return this._http.get(`${URL}${codigo}`, { headers });
  }
}
