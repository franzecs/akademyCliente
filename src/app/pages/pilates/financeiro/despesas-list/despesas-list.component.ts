import { Component, OnInit } from '@angular/core';
import { ItemFluxoCaixaService } from 'src/app/services';
import { PageList, ItemFluxoCaixa, ResponseApi } from 'src/app/shared';
import { take } from 'rxjs/operators';
import { MsgType } from 'src/app/components';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.css']
})
export class DespesasListComponent extends PageList implements OnInit {

  id: string;
  despesas: ItemFluxoCaixa[];

  constructor(
    private itemFluxoService: ItemFluxoCaixaService,
  ) {
    super()
   }

  ngOnInit() {
    this.getList(this.page, this.count)
  }

  getList(page: number, count: number){
    this.itemFluxoService.listDespesas().pipe(take(1))
      .subscribe((responseApi: any) =>{
        this.despesas = responseApi;
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
    this.itemFluxoService.delete(this.id).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.openModal(`Despesa deletada com sucesso!`, MsgType.SUCCESS)
        this.getList(this.page, this.count)
      }, err => {
        this.openModal(`Falha ao deletar!! (${err['error']['message']})`, MsgType.ERROR)
      })
  }
}
