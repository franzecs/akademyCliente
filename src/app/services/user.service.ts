import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../shared/models/user.model';
import { API } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  createOrUpdate(user: User){
    if(user.id !=null && user.id !=''){
      return this.http.put(`${API}/users/${user.id}`, user);
    }else{
      user.id = null; 
      return this.http.post(`${API}/users`, user);
    }
  }

  updateStatus(status, id){
    return this.http.put(`${API}/users/${status}/${id}`, status);
  }

  updateUrlPerfil(url, id){
    return this.http.put(`${API}/users/perfil/${id}`, url);
  }

  findAll(page: number, count: number){
    return this.http.get(`${API}/users/${page}/${count}`);
  }

  findAllByTipo(page: number, count: number, tipo: string){
    return this.http.get(`${API}/users/search/${page}/${count}/${tipo}`)
  }

  findAllByTipoNome(page: number, count: number, tipo: string, nome: string){
    return this.http.get(`${API}/users/search/${page}/${count}/${tipo}/${nome}`)
  }

  findListAllByTipo(tipo: string){
    return this.http.get(`${API}/users/search/${tipo}/empresa`)
  }

  findAlunoByInstrutor(instrutorId: string){
    return this.http.get(`${API}/users/search/${instrutorId}`)
  }

  findById(id:string){
    return this.http.get(`${API}/users/${id}`); 
  }

  delete(id:string){
    return this.http.delete(`${API}/users/${id}`);
  }
}
