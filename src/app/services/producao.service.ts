import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProducaoAvulsa } from '../ProducaoAvulsa';
import { Producao } from '../Producao';

@Injectable({
  providedIn: 'root'
})
export class ProducaoService {
  
  constructor(private http: HttpClient) {}
  producao(): Observable<Producao[]>{
    return this.http.get<Producao[]>('http://192.168.11.125:3333/api/producao_teste')
  }
  producao_reimp(): Observable<Producao[]>{
    return this.http.get<Producao[]>('http://192.168.11.125:3333/api/producao_reimp')
  }  
  producao_avulsas(): Observable<ProducaoAvulsa[]>{
    return this.http.get<ProducaoAvulsa[]>('http://192.168.11.125:3333/api/producao_avulsas')
  }    
}

