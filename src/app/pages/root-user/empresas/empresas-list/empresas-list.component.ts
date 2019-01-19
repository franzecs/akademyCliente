import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { ResponseApi, PageList } from '../../../../shared';
import { EmpresaService, DialogService } from '../../../../services';
import { MsgType } from '../../../../components';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent extends PageList implements OnInit {
  
  empresas = [];
  id: string;

  constructor(
    private dialogService: DialogService,
    private empresaService: EmpresaService,
  ) {
    super()
   }

  ngOnInit() {
    this.getList(this.page, this.count)
  }

  getList(page: number, count: number) {
    this.empresaService.findAllPage(page, count).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.empresas = responseApi['data']['content'];
        this.pages = new Array(responseApi['data']['totalPages'])
        this.totalElements = responseApi['data']['totalElements']
      }, err => {
        this.openModal(`Falha ao listar!! (${err['error']['errors'][0]})`, MsgType.ERROR)
      })
  }

  delete(id: string) {
    this.dialogService.confirm('Você deseja deletar a empresa selecionada?')
      .then((candelete: boolean) => {
        if (candelete) {
          this.empresaService.delete(id).subscribe((responseApi: ResponseApi) => {
            this.openModal(`Empresa deletada com sucesso!`, MsgType.SUCCESS)
            this.getList(this.page, this.count)
            //this.dialogService.mostraDialogo("sdfsdf","info","2000")
          }, err => {
            this.openModal(`Falha ao deletar!! (${err['error']['errors'][0]})`, MsgType.ERROR)
          })
        }
      })
  }

  openModalDelete(id, nome, usuario) {
    this.id = id
    this.openModal(`Deseja deletar ${usuario}: ${nome}`, MsgType.DELETE)
  }

  deletar(evento) {
    if (evento === true) {
      this.empresaService.delete(this.id).subscribe((responseApi: ResponseApi) => {
        this.openModal(`Empresa deletada com sucesso!`, MsgType.SUCCESS)
        this.getList(this.page, this.count)
      }, err => {
        this.openModal(`Falha ao deletar!! (${err['error']['errors'][0]})`, MsgType.ERROR)
      })
    }
  }
}