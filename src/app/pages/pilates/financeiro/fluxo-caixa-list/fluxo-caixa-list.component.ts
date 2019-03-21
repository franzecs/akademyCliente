import { Component, OnInit } from '@angular/core';
import { UserService, FluxoCaixaService, ItemFluxoCaixaService } from 'src/app/services';
import { PageList, ResponseApi, FluxoCaixa } from 'src/app/shared';
import { take } from 'rxjs/operators';
import { MsgType } from 'src/app/components';

@Component({
  selector: 'app-fluxo-caixa-list',
  templateUrl: './fluxo-caixa-list.component.html',
  styleUrls: ['./fluxo-caixa-list.component.css']
})
export class FluxoCaixaListComponent extends PageList implements OnInit {

  ano: number = 2019;
  id: string;
  fluxos: FluxoCaixa[];
  fluxo: FluxoCaixa = null;
  message: string;

  constructor(
    private fluxoCaixaService: FluxoCaixaService,
    private itemFluxoService: ItemFluxoCaixaService,
  ) {
    super()
  }

  ngOnInit() {
    this.getList(this.page, this.count);
  }

  getList(page: number, count: number) {
    this.message = 'Processando informações...'
    this.fluxoCaixaService.findAllPage(page, count, this.ano).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.fluxos = responseApi['data']['content'];

        for (let f of this.fluxos) {
          f.previsto = f.itens.reduce(function (prevVal, elem) {
            return prevVal + elem.valor;
          }, 0);

          f.executado = f.itens.reduce(function (prevVal, elem) {
            if (elem.status === 'REALIZADO') {
              return prevVal + elem.valor;
            } else {
              return prevVal + 0;
            }
          }, 0);
        }
        this.pages = new Array(responseApi['data']['totalPages'])
        this.totalElements = responseApi['data']['totalElements']
      }, err => {
        this.openModal(`Falha ao listar!! (${err['error']['message']})`, MsgType.ERROR)
      })

  }

  openModalDelete(id, nome, usuario) { 
    this.id = id
    this.openModal(`Deseja deletar ${usuario}: ${nome}`, MsgType.DELETE)
  }

  deletar(evento) {
    if (evento === true) {
      this.deleteFluxo(this.id)
    }
  }

  deleteFluxo(id: string) {

    this.fluxoCaixaService.findById(id).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.fluxo = responseApi.data;
        this.openModal(`Deletando itens!`, MsgType.INFO)
        for (let i of this.fluxo.itens) {
          this.itemFluxoService.delete(i.id).pipe(take(1))
            .subscribe(() => { })
        }
      }, err => { }, () => {
        this.del()
      })
  }

  del() {
    this.fluxoCaixaService.delete(this.id).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.modalMsg.showAlertSuccess(`Fluxo de Caixa deletado com sucesso!`)
        this.getList(this.page, this.count)
      }, err => {
        this.modalMsg.showAlertDanger(`Falha ao deletar!! (${err['error']['message']})`)
      })
  }

}
