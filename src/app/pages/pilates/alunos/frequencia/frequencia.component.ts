import { Component, OnInit, ViewChild } from '@angular/core';
import { TurmaService, SharedService } from 'src/app/services';
import { ResponseApi, Semana } from 'src/app/shared';
import { take } from 'rxjs/operators';
import { ItemFrequencia } from 'src/app/shared/models/itemFrequencia';

import { HttpClient, HttpParams } from '@angular/common/http';
import { RelatorioService } from 'src/app/services/relatorio.service';
import { ModalMessage } from 'src/app/components';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.css']
})
export class FrequenciaComponent implements OnInit {

  @ViewChild(ModalMessage) messageModal: ModalMessage

  shared: SharedService;
  mes = new Date().getMonth() + 1;
  dias = [
    { 'dia': '01', 'sem': new Date(`2019/${this.mes}/01`).getDay() },
    { 'dia': `02`, 'sem': new Date(`2019/${this.mes}/02`).getDay() },
    { 'dia': `03`, 'sem': new Date(`2019/${this.mes}/03`).getDay() },
    { 'dia': `04`, 'sem': new Date(`2019/${this.mes}/04`).getDay() },
    { 'dia': `05`, 'sem': new Date(`2019/${this.mes}/05`).getDay() },
    { 'dia': `06`, 'sem': new Date(`2019/${this.mes}/06`).getDay() },
    { 'dia': `07`, 'sem': new Date(`2019/${this.mes}/07`).getDay() },
    { 'dia': `08`, 'sem': new Date(`2019/${this.mes}/08`).getDay() },
    { 'dia': `09`, 'sem': new Date(`2019/${this.mes}/09`).getDay() },
    { 'dia': `10`, 'sem': new Date(`2019/${this.mes}/10`).getDay() },
    { 'dia': '11', 'sem': new Date(`2019/${this.mes}/11`).getDay() },
    { 'dia': `12`, 'sem': new Date(`2019/${this.mes}/12`).getDay() },
    { 'dia': `13`, 'sem': new Date(`2019/${this.mes}/13`).getDay() },
    { 'dia': `14`, 'sem': new Date(`2019/${this.mes}/14`).getDay() },
    { 'dia': `15`, 'sem': new Date(`2019/${this.mes}/15`).getDay() },
    { 'dia': `16`, 'sem': new Date(`2019/${this.mes}/16`).getDay() },
    { 'dia': `17`, 'sem': new Date(`2019/${this.mes}/17`).getDay() },
    { 'dia': `18`, 'sem': new Date(`2019/${this.mes}/18`).getDay() },
    { 'dia': `19`, 'sem': new Date(`2019/${this.mes}/19`).getDay() },
    { 'dia': `20`, 'sem': new Date(`2019/${this.mes}/20`).getDay() },
    { 'dia': '21', 'sem': new Date(`2019/${this.mes}/21`).getDay() },
    { 'dia': `22`, 'sem': new Date(`2019/${this.mes}/22`).getDay() },
    { 'dia': `23`, 'sem': new Date(`2019/${this.mes}/23`).getDay() },
    { 'dia': `24`, 'sem': new Date(`2019/${this.mes}/24`).getDay() },
    { 'dia': `25`, 'sem': new Date(`2019/${this.mes}/25`).getDay() },
    { 'dia': `26`, 'sem': new Date(`2019/${this.mes}/26`).getDay() },
    { 'dia': `27`, 'sem': new Date(`2019/${this.mes}/27`).getDay() },
    { 'dia': `28`, 'sem': new Date(`2019/${this.mes}/28`).getDay() },
    { 'dia': `29`, 'sem': new Date(`2019/${this.mes}/29`).getDay() },
    { 'dia': `30`, 'sem': new Date(`2019/${this.mes}/30`).getDay() },
    { 'dia': `31`, 'sem': new Date(`2019/${this.mes}/31`).getDay() }
  ]

  semana = [
    { 'semana': 'Segunda', 'int': 1 },
    { 'semana': 'Terça', 'int': 2 },
    { 'semana': 'Quarta', 'int': 3 },
    { 'semana': 'Quinta', 'int': 4 },
    { 'semana': 'Sexta', 'int': 5 },
  ]
  itemFrequencia: ItemFrequencia;
  itensFrequencia: ItemFrequencia[] = [];
  turmas: any;
  objFrq: any[] = [];

  constructor(
    private turmaService: TurmaService,
    private relatorioService: RelatorioService,
    private http: HttpClient,
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.turmaService.findAll().pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.turmas = responseApi.data

        for (let t of this.turmas) {
          this.itemFrequencia = new ItemFrequencia(t.dia, t.horario, t.alunos)
          this.itensFrequencia.push(this.itemFrequencia)
        }
      });
  }

  relatorio() {
    this.messageModal.showAlertInfo('Gerando frequencias...');
    this.relatorioService.relFrequencia()
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);
        window.open(url);
      })
      .then(() => this.messageModal.hideMsg())
  }

  teste() {

  }
}
