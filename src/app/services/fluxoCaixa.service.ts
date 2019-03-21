import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { API } from '../config/api';
import { FluxoCaixa } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class FluxoCaixaService {

  constructor( private http: HttpClient) { }

  createOrUpdate(fluxoCaixa: FluxoCaixa){
    if(fluxoCaixa.id !=null && fluxoCaixa.id !=''){
      return this.http.put(`${API}/fluxosCaixa/${fluxoCaixa.id}`, fluxoCaixa);
    }else{
      fluxoCaixa.id = null;
      return this.http.post(`${API}/fluxosCaixa`, fluxoCaixa);
    }
  }

  findAll(){
    return this.http.get(`${API}/fluxosCaixa`);
  }
  
  findAllPage(page: number, count: number, ano: number){
    return this.http.get(`${API}/fluxosCaixa/${page}/${count}/${ano}`);
  }

  findById(id:string){
    return this.http.get(`${API}/fluxosCaixa/${id}`); 
  }

  delete(id:string){
    return this.http.delete(`${API}/fluxosCaixa/${id}`);
  }  
}
