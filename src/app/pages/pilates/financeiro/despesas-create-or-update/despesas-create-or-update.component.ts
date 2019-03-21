import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@Angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { CreateOrUpdate, ItemFluxoCaixa, ResponseApi, EmpresaDTO } from 'src/app/shared';
import { ItemFluxoCaixaService, AuthService } from 'src/app/services';
import { MsgType } from 'src/app/components';

@Component({
  selector: 'app-despesas-create-or-update',
  templateUrl: './despesas-create-or-update.component.html',
  styleUrls: ['./despesas-create-or-update.component.css']
})
export class DespesasCreateOrUpdateComponent extends CreateOrUpdate implements OnInit {

  itemFluxo: ItemFluxoCaixa = new ItemFluxoCaixa(null, null, null, null, null, null, null, null);
  empresaUser: EmpresaDTO;

  constructor(
    private itemFluxoService: ItemFluxoCaixaService,
    private authService: AuthService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
  ) {
    super(formBuilder, null, route)
  }

  findById(id: string) {
    this.itemFluxoService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.itemFluxo = responseApi.data;

      this.formulario = this.formBuilder.group({
        id: [this.itemFluxo.id],
        empresa: [this.itemFluxo.empresa],
        fluxoCaixa: [this.itemFluxo.fluxoCaixa],
        tipo: [this.itemFluxo.tipo],
        dia: [this.itemFluxo.dia],
        descricao: [this.itemFluxo.descricao],
        valor: [this.itemFluxo.valor],
        status: [this.itemFluxo.status]
      })
    }, err => {
      this.openModal(`Falha ao localizar despesa!! (${err['error']['message']})`, MsgType.ERROR)
    })
  }

  newRecord() {

    this.authService.getCurrentUser().subscribe((resposta: any) => {
      this.empresaUser = resposta['data'].empresa;
    });

    this.formulario = this.formBuilder.group({
      id: [this.itemFluxo.id],
      empresa: [this.empresaUser],
      fluxoCaixa: [this.itemFluxo.fluxoCaixa],
      tipo: ['DESPESASFIXAS'],
      dia: [this.itemFluxo.dia],
      descricao: [this.itemFluxo.descricao],
      valor: [this.itemFluxo.valor],
      status: [this.itemFluxo.status]
    })
  }

  onSubmite() {
    this.itemFluxo = this.formulario.value
    this.save(this.itemFluxo)
  }

  save(itemFluxo: ItemFluxoCaixa): void {
    this.itemFluxoService.createOrUpdate(itemFluxo).pipe(take(1))
      .subscribe((responseApi: any) => {
        this.itemFluxo = responseApi.data
        this.openModal("Cadastro realizado com sucesso!!", MsgType.SUCCESS)

      }, err => {
        this.openModal(`Falha ao realizar cadastro!! (${err['error']['message']})`, MsgType.ERROR)
      })
  }
}