import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  autorizado! : Boolean

  url = 'http://192.168.1.18:8683/rest/api/oauth2/v1/token'

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string){
    let parametro = new HttpParams
    parametro = parametro.appendAll(
      {'grant_type':'password',
      'username':`${usuario}`,
      'password':`${senha}`
      })

    return this.http.post(this.url, parametro)
  }

  esta_autorizado(resp: Boolean){
    this.autorizado = resp
  }
  
}
