import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { API } from '../config/api';
import { ItemFluxoCaixa } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ItemFluxoCaixaService {

  constructor( private http: HttpClient) { }

  createOrUpdate(itemFluxoCaixa: ItemFluxoCaixa){
    if(itemFluxoCaixa.id !=null && itemFluxoCaixa.id !=''){
      return this.http.put(`${API}/itensFluxo/${itemFluxoCaixa.id}`, itemFluxoCaixa);
    }else{
      itemFluxoCaixa.id = null;
      return this.http.post(`${API}/itensFluxo`, itemFluxoCaixa);
    }
  }
   
  findAllPage(page: number, count: number, fluxoId: string){
    return this.http.get(`${API}/itensFluxo/${page}/${count}/${fluxoId}`);
  }

  findById(id:string){
    return this.http.get(`${API}/itensFluxo/${id}`); 
  }

  delete(id:string){
    return this.http.delete(`${API}/itensFluxo/${id}`);
  } 
  
  listDespesas(){
    return this.http.get(`${API}/itensFluxo/despesas`)
  }
}
