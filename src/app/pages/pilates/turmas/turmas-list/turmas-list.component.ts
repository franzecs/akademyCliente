import { Component, OnInit } from '@angular/core';
import { TurmaService, UserService } from '../../../../services';
import { PageList, ResponseApi, Turma, User } from '../../../../shared';
import { take } from 'rxjs/operators';
import { MsgType } from '../../../../components';

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.css']
})
export class TurmasListComponent extends PageList implements OnInit {

  turmas = [];
  id: string;
  instrutores: any;
  instrutor: any = "all" 

  constructor(
    private turmaService: TurmaService,
    private userService: UserService,
  ) {
    super()
  }

  ngOnInit() {
    this.listFactory();
    this.getList(this.page, this.count);
  }

  getList(page: number, count: number) {
    if (this.instrutor === "all") {
      this.turmaService.findAllPage(page, count).pipe(take(1))
        .subscribe((responseApi: ResponseApi) => {
          this.turmas = responseApi['data']['content'];
          this.pages = new Array(responseApi['data']['totalPages'])
          this.totalElements = responseApi['data']['totalElements']
        }, err => {
          this.openModal(`Falha ao listar!! (${err['error']['message']})`, MsgType.ERROR)
        })
    }else{
      this.turmaService.findAllPageByInstrutor(page,count,this.instrutor.id).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.turmas = responseApi['data']['content'];
        this.pages = new Array(responseApi['data']['totalPages'])
        this.totalElements = responseApi['data']['totalElements']
      }, err => {
        this.openModal(`Falha ao listar!! (${err['error']['message']})`, MsgType.ERROR)
      })
    }
  }

  openModalDelete(id, nome, usuario) {
    this.id = id
    this.openModal(`Deseja deletar ${usuario}: ${nome}`, MsgType.DELETE)
  }

  deletar(evento) {
    if (evento === true) {
      this.checkTurma(this.id)
    }
  }

  deleteTurma(id: string){
    this.turmaService.delete(this.id).subscribe((responseApi: ResponseApi) => {
      this.openModal(`Turma deletada com sucesso!`, MsgType.SUCCESS)
      this.getList(this.page, this.count)
    }, err => {
      this.openModal(`Falha ao deletar!! (${err['error']['message']})`, MsgType.ERROR)
    })
  }

  listFactory() {
    this.userService.findListAllByTipo('Instrutor').pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.instrutores = responseApi;
    })
  }

  testInstrutor(inst1: User, inst2: User) {
    return inst1 && inst2 ? (inst1.nome === inst2.nome && inst1.id === inst2.id) : inst1 === inst2
  }

  checkTurma(id: string){
    var turma: Turma;
    this.turmaService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi)=>{
      turma = responseApi.data;
      console.log(turma.alunos)
      if(turma.alunos.length !== 0 ){
        this.openModal(`A turma tem alunos vinculados (${turma.alunos.length})`, MsgType.ERROR)
      }else{
        this.deleteTurma(this.id);
      }
    });

  }
}