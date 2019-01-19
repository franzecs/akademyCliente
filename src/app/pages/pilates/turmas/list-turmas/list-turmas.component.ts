import { Component, OnInit } from '@angular/core';

import { Turma, ResponseApi } from '../../../../shared';
import { TurmaService, SharedService } from '../../../../services';

@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.css']
})
export class ListTurmasComponent implements OnInit {

  turmas: Turma[];

  segunda: Turma[] = [];
  terca: Turma[] = [];
  quarta: Turma[] = [];
  quinta: Turma[] = [];
  sexta: Turma[] = [];
  sabado: Turma[] = [];

  shared: SharedService;

  constructor(
    private turmaService: TurmaService,
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.getList()
  }

  getList() { 
    this.turmaService.findAll().subscribe((responseApi: ResponseApi) => {
      this.turmas = responseApi.data;  
      console.log(this.turmas)
      for (let t of this.turmas) {
        this.turmaService.findById(t.id).subscribe((responseApi: ResponseApi) => {
          let tt = responseApi.data
          if (tt.dia === "SEGUNDA") {
            this.segunda.push(tt)
          }
          if (tt.dia === "TERCA") {
            this.terca.push(tt)
          }
          if (tt.dia === "QUARTA") {
            this.quarta.push(tt)
          }
          if (tt.dia === "QUINTA") {
            this.quinta.push(tt)
          }
          if (tt.dia === "SEXTA") {
            this.sexta.push(tt)
          }
          if (tt.dia === "SABADO") {
            this.sabado.push(tt)
          }
        })
      }
    })
  }

  geraPDF() {
    this.shared.pdfMaker();
  }
}
