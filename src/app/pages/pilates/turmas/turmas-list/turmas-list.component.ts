import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services';
import { PageList, ResponseApi, Turma, User } from 'src/app/shared';
import { take } from 'rxjs/operators';
import { MsgType } from 'src/app/components';

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.css']
})
export class TurmasListComponent extends PageList implements OnInit {
  
  turmas = [];
  id: string;
 
  constructor(
    private turmaService: TurmaService,
  ) {
    super()
   }

  ngOnInit() {
    this.getList(this.page, this.count)
  }

  getList(page: number, count: number) {
    this.turmaService.findAllPage(page, count).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.turmas = responseApi['data']['content'];
        this.pages = new Array(responseApi['data']['totalPages'])
        this.totalElements = responseApi['data']['totalElements']
      }, err => {
        this.openModal(`Falha ao listar!! (${err['error']['errors'][0]})`, MsgType.ERROR)
      })
  }

  openModalDelete(id, nome, usuario) {
    this.id = id
    this.openModal(`Deseja deletar ${usuario}: ${nome}`, MsgType.DELETE)
  }

  deletar(evento) {
    if (evento === true) {
      this.turmaService.delete(this.id).subscribe((responseApi: ResponseApi) => {
        this.openModal(`Turma deletada com sucesso!`, MsgType.SUCCESS)
        this.getList(this.page, this.count)
      }, err => {
        this.openModal(`Falha ao deletar!! (${err['error']['errors'][0]})`, MsgType.ERROR)
      })
    }
  }
}