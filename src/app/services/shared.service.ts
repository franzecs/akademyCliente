import { Injectable, EventEmitter } from '@angular/core';
import { User, Endereco, Empresa, Turma, Semana } from '../shared';

import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = null;
  user: User;
  turma: Turma
  userEmpty = new User(null, '', '', '', '', null, [], false, '', '', null, '', '', null, '');
  enderecoEmpty = new Endereco("", "", "", "", "", "", "");
  empresaEmpty = new Empresa(null, "", "", "", "", "Matriz", null, this.enderecoEmpty);
  token: string;
  showTemplate = new EventEmitter<boolean>();
  message = {}
  classCss = {}
  semana: Semana = new Semana(0, 0, 0, 0, 0, 0, 0);

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn(): boolean {
    if (this.user == null) {
      return false;
    }
    return this.user.email != '';
  }

  emailFactory(): string {
    var letras = '123456789abcdefghiklmnopqrstuvwxyz';
    var empresa = '@estacaopilates.com'
    var email = '';
    for (var i = 0; i < 10; i++) {
      var rnum = Math.floor(Math.random() * letras.length);
      email += letras.substring(rnum, rnum + 1);
    }
    return email + empresa;
  }

  saveXls(tabela: string, nomeArquivo: string) {
    var htmlPlanilha = tabela;
    console.log(htmlPlanilha)
    var htmlBase64 = btoa(htmlPlanilha);
    var link = "data:application/vnd.ms-excel;base64," + htmlBase64;

    var hyperlink = document.createElement("a");
    hyperlink.download = nomeArquivo;
    hyperlink.href = link;
    hyperlink.style.display = 'none';

    document.body.appendChild(hyperlink);
    hyperlink.click();
    document.body.removeChild(hyperlink);
  }

  pdfMaker(html1: any, html2?: any) {
    var pdf = new jsPDF('p', 'mm', 'a4');

    html2canvas(html1).then(canvas => {
      var imgWidht = 208;
      var pageHeight = 295;
      var imgHeight = 300//canvas.height * imgWidht / canvas.width;
      var heightLeft = imgHeight;

      const contentDataUrl = canvas.toDataURL('image/png')
      var position = 0;
      pdf.addImage(contentDataUrl, 'PNG', 0, position, imgWidht, imgHeight);
      pdf.addPage()

      html2canvas(html2).then(canvas => {
        const contentDataUrl2 = canvas.toDataURL('image/png')
        pdf.addPage()
        pdf.addImage(contentDataUrl2, 'PNG', 0, position, imgWidht, imgHeight);
        pdf.save('teste.pdf')
      })
    })
  }

  diasSemanaMes(year, month): Semana {

    this.semana = new Semana(0, 0, 0, 0, 0, 0, 0);
    var ultimoDia = (new Date(year, month, 0)).getDate();

    for (let d = 1; d < ultimoDia + 1; d++) {
      let dia = new Date(`${year}/${month}/${d}`).getDay()
      if (dia === 1) {
        this.semana.segunda = this.semana.segunda + 1
      }
      if (dia === 2) {
        this.semana.terca = this.semana.terca + 1
      }
      if (dia === 3) {
        this.semana.quarta = this.semana.quarta + 1
      }
      if (dia === 4) {
        this.semana.quinta = this.semana.quinta + 1
      }
      if (dia === 5) {
        this.semana.sexta = this.semana.sexta + 1
      }
    }
    return this.semana
  }

  searchNameMonth(mes): string {
    switch (mes) {
      case 1:
        return 'Janeiro'
      case 2:
        return 'Fevereiro'
      case 3:
        return 'Março'
      case 4:
        return 'Abril'
      case 5:
        return 'Maio'
      case 6:
        return 'Junho'
      case 7:
        return 'Julho'
      case 8:
        return 'Agosto'
      case 9:
        return 'Setembro'
      case 10:
        return 'Outubro'
      case 11:
        return 'Novembro'
      case 12:
        return 'Dezembro'
    }
  }
}
