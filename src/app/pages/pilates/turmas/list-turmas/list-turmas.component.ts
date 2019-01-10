import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services';
import { ResponseApi, Turma } from 'src/app/shared';

@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.css']
})
export class ListTurmasComponent implements OnInit {

  turmas: Turma[];

  segunda: Turma[]=[];
  terca: Turma[]=[];
  quarta: Turma[]=[];
  quinta: Turma[]=[];
  sexta: Turma[]=[];
  sabado: Turma[]=[];

  constructor(
    private turmaService: TurmaService,
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList(){
    this.turmaService.findAll().subscribe((responseApi: ResponseApi) =>{
      this.turmas = responseApi.data;

      for(let t of this.turmas){
        this.turmaService.findById(t.id).subscribe((responseApi: ResponseApi)=>{
          let tt = responseApi.data
          if(tt.dia === "SEGUNDA"){
            this.segunda.push(tt)
          }
          if(tt.dia === "TERCA"){
            this.terca.push(tt)
          }
          if(tt.dia === "QUARTA"){
            this.quarta.push(tt)
          }
          if(tt.dia === "QUINTA"){
            this.quinta.push(tt)
          }
          if(tt.dia === "SEXTA"){
            this.sexta.push(tt)
          }
          if(tt.dia === "SABADO"){
            this.sabado.push(tt)
          }
        })
      }
    })
  }

}
