import { Component, OnInit } from '@angular/core';
import { PageList, ResponseApi } from '../../../../shared';
import { DialogService, PlanoService } from '../../../../services';
import { take } from 'rxjs/operators';
import { MsgType } from '../../../../components';
import { RelatorioService } from 'src/app/services/relatorio.service';

@Component({
  selector: 'app-planos-list',
  templateUrl: './planos-list.component.html',
  styleUrls: ['./planos-list.component.css']
})
export class PlanosListComponent extends PageList implements OnInit {
  
  planos = [];
  id: string;

  constructor(
    private dialogService: DialogService,
    private planoService: PlanoService,
    private relatorioService : RelatorioService
  ) {
    super()
   }

  ngOnInit() {
    this.getList(this.page, this.count)
  }

  getList(page: number, count: number) {
    this.planoService.findAllPage(page, count).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.planos = responseApi['data']['content'];
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
      this.planoService.delete(this.id).subscribe((responseApi: ResponseApi) => {
        this.openModal(`Plano deletado com sucesso!`, MsgType.SUCCESS)
        this.getList(this.page, this.count)
      }, err => {
        this.openModal(`Falha ao deletar!! (${err['error']['errors'][0]})`, MsgType.ERROR)
      })
    }
  }

  relatorio(){
    this.relatorioService.relPlanos()
    .then(relatorio =>{
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    })
  }
}