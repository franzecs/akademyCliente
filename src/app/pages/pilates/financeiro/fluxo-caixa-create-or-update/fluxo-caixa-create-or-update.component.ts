import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@Angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CreateOrUpdate, FluxoCaixa, ResponseApi, ItemFluxoCaixa, EmpresaDTO, User, Turma } from 'src/app/shared';
import { FluxoCaixaService, ItemFluxoCaixaService, AuthService, UserService, TurmaService } from 'src/app/services';
import { take } from 'rxjs/operators';
import { MsgType } from 'src/app/components';
import { CurrencyPipe } from '@angular/common';
import { RelatorioService } from 'src/app/services/relatorio.service';
import { FinanceiroService } from '../financeiro.service';


@Component({
  selector: 'app-fluxo-caixa-create-or-update',
  templateUrl: './fluxo-caixa-create-or-update.component.html',
  styleUrls: ['./fluxo-caixa-create-or-update.component.css']
})
export class FluxoCaixaCreateOrUpdateComponent extends CreateOrUpdate implements OnInit {

  fluxoCaixa: FluxoCaixa = new FluxoCaixa(null, null, null, null, null, null);
  itemFluxo: ItemFluxoCaixa = new ItemFluxoCaixa(null, null, null, null, null, null, null, null);
  despesas: ItemFluxoCaixa[] = []
  alunos: User[];
  instrutores: any;
  turmas: Turma[];
  empresaUser: EmpresaDTO;
  idItem: string;

  constructor(
    private userService: UserService,
    private turmaService: TurmaService,
    private fluxoCaixaService: FluxoCaixaService,
    private itemFluxoService: ItemFluxoCaixaService,
    private relatorioService: RelatorioService,
    private authService: AuthService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
  ) {
    super(formBuilder, null, route)
  }

  findById(id: string) {
    this.fluxoCaixaService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.fluxoCaixa = responseApi.data;
      console.log(this.fluxoCaixa)
      this.fluxoCaixa.previsto = this.fluxoCaixa.itens.reduce(function (prevVal, elem) {
        return prevVal + elem.valor;
      }, 0);

      this.fluxoCaixa.executado = this.fluxoCaixa.itens.reduce(function (prevVal, elem) {
        if (elem.status === 'REALIZADO') {
          return prevVal + elem.valor;
        } else {
          return prevVal + 0;
        }
      }, 0);

      this.formulario = this.formBuilder.group({
        id: [this.fluxoCaixa.id],
        empresa: [this.fluxoCaixa.empresa],
        mes: [this.fluxoCaixa.mes, [Validators.required]],
        ano: [this.fluxoCaixa.ano, [Validators.required, Validators.minLength(4)]],
        previsto: [this.fluxoCaixa.previsto],
        executado: [this.fluxoCaixa.executado],
      })
    }, err => {
      this.openModal(`Falha ao localizar turma!! (${err['error']['message']})`, MsgType.ERROR)
    })
  }

  newRecord() {
    this.authService.getCurrentUser().subscribe((resposta: any) => {
      this.empresaUser = resposta['data'].empresa;
    });

    this.formulario = this.formBuilder.group({
      id: [this.fluxoCaixa.id],
      empresa: [this.fluxoCaixa.empresa],
      mes: [this.fluxoCaixa.mes, [Validators.required]],
      ano: [this.fluxoCaixa.ano, [Validators.required, Validators.minLength(4)]],
      previsto: [this.fluxoCaixa.previsto],
      executado: [this.fluxoCaixa.executado],
    })
  }

  onSubmite() {
    this.fluxoCaixa = this.formulario.value
    this.save(this.fluxoCaixa)
  }

  save(fluxoCaixa: FluxoCaixa): void {
    this.fluxoCaixaService.createOrUpdate(fluxoCaixa).pipe(take(1))
      .subscribe((responseApi: any) => {
        this.fluxoCaixa = responseApi.data
        this.modalMsg.showAlertSuccess('Cadastro realizado com sucesso!!')
        this.geraItens(this.fluxoCaixa);
      }, err => {
        this.modalMsg.showAlertDanger(`Falha ao realizar cadastro!! (${err['error']['message']})`)
      })
  }

  geraItens(fluxo: FluxoCaixa) {
    this.modalMsg.showAlertInfo('Gerando itens do Fluxo de Caixa...')

    for (let d of FinanceiroService.itens) {
      let item = new ItemFluxoCaixa(null, d.empresa, fluxo, "SAIDA", d.dia, d.descricao, d.valor * -1, 'PENDENTE');
      this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
      })
    }

    for (let instrutor of FinanceiroService.instrutores) {
      let item = new ItemFluxoCaixa(null, instrutor.empresa, fluxo, "SAIDA", '5', `Pag.Inst.: ${instrutor.nome}`, instrutor.faturamento * -1, 'PENDENTE');
      this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
      })
    }

    for (let a of FinanceiroService.alunos) {
      let item = new ItemFluxoCaixa(null, a.empresa, fluxo, "ENTRADA", a.diaPagamento, `Mesalidade: ${a.nome}`, a.plano.valor, 'PENDENTE');
      this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
      })
    }

    /*

    this.itemFluxoService.listDespesas().pipe(take(1))
      .subscribe((responseApi: any) => {
        this.despesas = responseApi;
        for (let d of this.despesas) {
          let item = new ItemFluxoCaixa(null, d.empresa, fluxo, "SAIDA", d.dia, d.descricao, d.valor * -1, 'PENDENTE');
          this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
          })
        }
      })

    this.userService.findListAllByTipo('Instrutor').pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.instrutores = responseApi;
      for (let instrutor of this.instrutores) {
        this.turmaService.findListByInstrutor(instrutor.id).subscribe((resposta: ResponseApi) => {
          this.turmas = resposta.data;
          instrutor.faturamento = instrutor.comissao * this.turmas.length * 4
          let item = new ItemFluxoCaixa(null, instrutor.empresa, fluxo, "SAIDA", '5', `Pag.Inst.: ${instrutor.nome}`, instrutor.faturamento * -1, 'PENDENTE');
          this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
          })
        })
      }
    })

    this.userService.findListAlunosAtivos().pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.alunos = responseApi.data;
        this.openModal("Gerando itens de Mensalidades!!", MsgType.INFO)
        for (let a of this.alunos) {
          let item = new ItemFluxoCaixa(null, a.empresa, fluxo, "ENTRADA", a.diaPagamento, `Mesalidade: ${a.nome}`, a.plano.valor, 'PENDENTE');
          this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
          })
        }
      }, error => { }
        , () => { this.modalMsg.hideMsg() })
   */
  }

  openModalDelete(id, nome, usuario) {
    this.idItem = id
    this.openModal(`Deseja deletar ${usuario}: ${nome}`, MsgType.DELETE)
  }

  deletar(evento) {
    if (evento === true) {
      this.deleteFluxo(this.idItem)
    }
  }

  deleteFluxo(id: string) {
    this.itemFluxoService.delete(id).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.openModal(`Fluxo de Caixa deletado com sucesso!`, MsgType.SUCCESS)
        this.ngOnInit()
      }, err => {
        this.openModal(`Falha ao deletar!! (${err['error']['message']})`, MsgType.ERROR)
      })
  }

  relatorio() {
    this.modalMsg.showAlertInfo('Gerando Fluxo de Caixa...');
    this.relatorioService.relFluxoCaixa(this.fluxoCaixa)
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);
        window.open(url);
      })
      .then(() => this.modalMsg.hideMsg())
  }
} 