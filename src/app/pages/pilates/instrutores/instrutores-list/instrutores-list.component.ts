import { Component, OnInit } from '@angular/core';
import { PageList, ResponseApi } from 'src/app/shared';
import { DialogService, UserService } from 'src/app/services';
import { MsgType } from 'src/app/components';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-instrutores-list',
  templateUrl: './instrutores-list.component.html',
  styleUrls: ['./instrutores-list.component.css']
})
export class InstrutoresListComponent extends PageList implements OnInit {

  usuarios = [];
  id: string;

  constructor(
    private dialogService: DialogService,
    private usuariosService: UserService,
  ) {
    super()
  }

  ngOnInit() {
    this.getList(this.page, this.count)
  }

  getList(page: number, count: number) {
    this.usuariosService.findAllByTipo(page, count, 'Instrutor').pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.usuarios = responseApi['data']['content'];
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
      this.usuariosService.delete(this.id).subscribe((responseApi: ResponseApi) => {
        this.openModal(`Instrutor deletado com sucesso!`, MsgType.SUCCESS)
        this.getList(this.page, this.count)
      }, err => {
        this.openModal(`Falha ao deletar!! (${err['error']['errors'][0]})`, MsgType.ERROR)
      })
    }
  }

  resetPassword(email) {

  }
  isAtivo(status, id) {
    if (status != null) {
      this.usuariosService.updateStatus(status, id).pipe(take(1)).subscribe(() => {
        this.getList(this.page, this.count)
      }, err => {
        this.openModal(`erro ao modificar status: (${err['error']['errors'][0]})`, MsgType.ERROR)
      });
    }
  }
}
