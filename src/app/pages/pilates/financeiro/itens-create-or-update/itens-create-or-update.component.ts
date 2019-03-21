import { Component, OnInit } from '@angular/core';
import { CreateOrUpdate, ItemFluxoCaixa, EmpresaDTO, ResponseApi, FluxoCaixa } from 'src/app/shared';
import { ItemFluxoCaixaService, AuthService, FluxoCaixaService } from 'src/app/services';
import { FormBuilder } from '@Angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MsgType } from 'src/app/components';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-itens-create-or-update',
  templateUrl: './itens-create-or-update.component.html',
  styleUrls: ['./itens-create-or-update.component.css']
})
export class ItensCreateOrUpdateComponent extends CreateOrUpdate implements OnInit {

  itemFluxo: ItemFluxoCaixa = new ItemFluxoCaixa(null, null, null, null, null, null, null, null);
  fluxo: FluxoCaixa = null
  empresaUser: EmpresaDTO;
  idf: string;

  constructor(
    private itemFluxoService: ItemFluxoCaixaService,
    private fluxoService: FluxoCaixaService,
    private authService: AuthService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
  ) {
    super(formBuilder, null, route)
    this.authService.getCurrentUser().subscribe((resposta: any) => {
      this.empresaUser = resposta['data'].empresa;
    });

    this.checkIdFluxo();
  }

  findById(id: string) {
    this.itemFluxoService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.itemFluxo = responseApi.data;

      this.formulario = this.formBuilder.group({
        id: [this.itemFluxo.id],
        empresa: [this.empresaUser],
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
    this.checkIdFluxo();
    this.formulario = this.formBuilder.group({
      id: [this.itemFluxo.id],
      empresa: [this.empresaUser],
      fluxoCaixa: [this.fluxo],
      tipo: [this.itemFluxo.tipo],
      dia: [this.itemFluxo.dia],
      descricao: [this.itemFluxo.descricao],
      valor: [this.itemFluxo.valor],
      status: [this.itemFluxo.status]
    })
  }

  onSubmite() {
    this.itemFluxo = this.formulario.value;
    this.itemFluxo.fluxoCaixa = this.fluxo;
    if( this.itemFluxo.tipo === 'SAIDA'){
      if(this.itemFluxo.valor > 0){
        this.itemFluxo.valor = this.itemFluxo.valor * -1;
      }
    }
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

  checkIdFluxo(){
    this.route.params.pipe(take(1)).subscribe((parametros: Params) => {
      this.idf = parametros['idf'];
      this.fluxoService.findById(this.idf).subscribe((responseApi: ResponseApi) =>{
        this.fluxo = responseApi.data;
      })
  })
  }
}