import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { API } from 'src/app/config/api';
import { PlanoService } from '.';
import { FluxoCaixa } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(
    private planoService: PlanoService,
    private http: HttpClient,
  ) { }

  relPlanos(){
    const params = new HttpParams()
    return this.http.get(`${API}/relatorios/planos`, {params, responseType:'blob'})
      .toPromise();
  }

  relAlunos(){
    const params = new HttpParams()    
    return this.http.get(`${API}/relatorios/alunos`, {params, responseType:'blob'})
      .toPromise();
  }

  relFrequencia(){
    const params = new HttpParams()    
    return this.http.get(`${API}/relatorios/alunos/frequencia`, {params, responseType:'blob'})
      .toPromise();
  }

  relFluxoCaixa(fluxo: FluxoCaixa){
    const params = new HttpParams()    
    return this.http.post(`${API}/relatorios/fluxoCaixa`, fluxo, {params, responseType:'blob'})
      .toPromise();
  }

}
