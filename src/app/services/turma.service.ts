import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { API } from '../config/api';
import { Turma } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor( private http: HttpClient) { }

  createOrUpdate(turma: Turma){
    if(turma.id !=null && turma.id !=''){
      return this.http.put(`${API}/turmas/${turma.id}`, turma);
    }else{
      turma.id = null;
      return this.http.post(`${API}/turmas`, turma);
    }
  }

  findAll(){
    return this.http.get(`${API}/turmas`);
  }

  findAllPage(page: number, count: number){
    return this.http.get(`${API}/turmas/${page}/${count}`);
  }

  findById(id:string){
    return this.http.get(`${API}/turmas/${id}`); 
  }

  findAllPageByInstrutor(page: number, count: number, instrutorId: string){
    return this.http.get(`${API}/turmas/${page}/${count}/${instrutorId}`);
  }

  findListByInstrutor(instrutorId:string){
    return this.http.get(`${API}/turmas/list/${instrutorId}`); 
  }

  findByDia(dia:string){
    return this.http.get(`${API}/turmas/dia/${dia}`);
  }

  delete(id:string){
    return this.http.delete(`${API}/turmas/${id}`);
  }
}
