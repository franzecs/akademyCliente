import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { API } from '../config/api';
import { Plano } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class PlanoService{

  constructor( private http: HttpClient) { }

  createOrUpdate(plano: Plano){
    if(plano.id !=null && plano.id !=''){
      return this.http.put(`${API}/planos/${plano.id}`, plano);
    }else{
      plano.id = null;
      return this.http.post(`${API}/planos`, plano);
    }
  }

  findAll(){
    return this.http.get(`${API}/planos`);
  }

  findAllPage(page: number, count: number){
    return this.http.get(`${API}/planos/${page}/${count}`);
  }

  findById(id:string){
    return this.http.get(`${API}/planos/${id}`); 
  }

  delete(id:string){
    return this.http.delete(`${API}/planos/${id}`);
  }
}
