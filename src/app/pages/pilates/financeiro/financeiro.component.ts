import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService, TurmaService, SharedService } from 'src/app/services';
import { User, ResponseApi, Turma, ItemFluxoCaixa, Semana } from 'src/app/shared';
import { take } from 'rxjs/operators';
import { ItemFluxoCaixaService } from 'src/app/services/itemFluxoCaixa.service';
import { ModalMessage } from 'src/app/components';
import { FinanceiroService } from './financeiro.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  @ViewChild(ModalMessage) messageModal: ModalMessage;

  turmas: Turma[] = [];
  alunos: User[];
  itens: ItemFluxoCaixa[];
  instrutores: any;
  comissao: number = 0;
  totalInstrutores: number = 0;
  totalAlunos: number = 0;
  totalDespesas: number = 0;
  semana: Semana = new Semana(0, 0, 0, 0, 0, 0, 0);
  semanaMes: Semana = new Semana(0, 0, 0, 0, 0, 0, 0);
  mes: string;


  constructor(
    private userService: UserService,
    private turmaService: TurmaService,
    private itemFluxoService: ItemFluxoCaixaService,
    private shared: SharedService,
  ) {
    const data = new Date();
    this.semanaMes = this.shared.diasSemanaMes(data.getFullYear(), data.getMonth() + 1);
    this.mes = this.shared.searchNameMonth(data.getMonth() + 1);
  }

  ngOnInit() {
    this.mensalidades();
    this.despesasFixas();
    this.pagamentoProfessor();
  }

  despesasFixas() {
    this.itemFluxoService.listDespesas().pipe(take(1))
      .subscribe((responseApi: any) => {
        this.itens = responseApi;
        this.totalDespesas = this.itens.reduce((total, item) => {
          return total + item.valor;
        }, 0);
      }, erro => { },
        () => FinanceiroService.itens = this.itens);
  }

  mensalidades() {
    this.userService.findListAlunosAtivos().pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.alunos = responseApi.data;
        this.totalAlunos = this.alunos.reduce((total, aluno) => {
          return total + aluno.plano.valor;
        }, 0);
      }, erro => { },
        () => FinanceiroService.alunos = this.alunos);
  }

  pagamentoProfessor() {

    this.userService.findListAllByTipo('Instrutor').pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.instrutores = responseApi;
      for (let instrutor of this.instrutores) {
        this.turmaService.findListByInstrutor(instrutor.id).pipe(take(1)).subscribe((resposta: ResponseApi) => {
          this.turmas = resposta.data;
          this.semana = new Semana(0, 0, 0, 0, 0, 0, 0);
          for (let t of this.turmas) {
            if (t.alunos.length > 0) {

              if (t.dia === 'SEGUNDA') {
                this.semana.segunda = this.semana.segunda + 1;
              }
              if (t.dia === 'TERCA') {
                this.semana.terca = this.semana.terca + 1;
              }
              if (t.dia === 'QUARTA') {
                this.semana.quarta = this.semana.quarta + 1;
              }
              if (t.dia === 'QUINTA') {
                this.semana.quinta = this.semana.quinta + 1;
              }
              if (t.dia === 'SEXTA') {
                this.semana.sexta = this.semana.sexta + 1;
              }

            }
          }
          this.semana.geraTotal();
          instrutor.semana = this.semana;
          const remunera = (instrutor.semana.segunda * instrutor.comissao * this.semanaMes.segunda) +
            (instrutor.semana.terca * instrutor.comissao * this.semanaMes.terca) +
            (instrutor.semana.quarta * instrutor.comissao * this.semanaMes.quarta) +
            (instrutor.semana.quinta * instrutor.comissao * this.semanaMes.quinta) +
            (instrutor.semana.sexta * instrutor.comissao * this.semanaMes.sexta);
          instrutor.faturamento = 0;
          instrutor.faturamento = remunera; // instrutor.comissao * this.turmas.length * 4
          this.totalInstrutores = this.totalInstrutores + instrutor.faturamento;
        }, erro => { },
          () => { FinanceiroService.instrutores = this.instrutores; });
        /*
        if (instrutor.comissao === 30) { //pagamento por hora aula
          this.turmaService.findListByInstrutor(instrutor.id).subscribe((resposta: ResponseApi) => {
            this.turmas = resposta.data;
            instrutor.faturamento = instrutor.comissao * this.turmas.length * 4
            this.totalInstrutores = this.totalInstrutores + instrutor.faturamento;
            console.log('por hora aula')
          })
        } else { //pagamento por porcentagem/aula
          this.userService.findAlunoByInstrutor(instrutor.id).subscribe((responseApi: ResponseApi) => {
            this.alunos = responseApi.data
            for (let aluno of this.alunos) {
              this.comissao = this.comissao + aluno.plano.valor;
              console.log(this.comissao)
            }
            instrutor.faturamento = this.comissao * (instrutor.comissao/100)
          })
        }
        */
      }

    });
  }
}
