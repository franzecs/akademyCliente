import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { MsgType } from '../../../../components';
import { DialogService, UserService } from '../../../../services';
import { PageList, ResponseApi } from '../../../../shared';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent extends PageList implements OnInit {

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
    this.usuariosService.findAll(page, count).pipe(take(1))
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
        this.openModal(`Usuário deletado com sucesso!`, MsgType.SUCCESS)
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
