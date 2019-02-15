import { Injectable, EventEmitter } from '@angular/core';
import { User, Endereco, Empresa, Turma } from '../shared';

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

  showMessage(message: { type: string, text: string }): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined
    }, 3000);
  }

  buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-' + type] = true;
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

  pdfMaker(html1: any, html2?:any) {
    var pdf = new jsPDF('p','mm','a4');

    html2canvas(html1).then(canvas =>{
      var imgWidht = 208;
      var pageHeight = 295;
      var imgHeight =  300//canvas.height * imgWidht / canvas.width;
      var heightLeft = imgHeight;

      const contentDataUrl = canvas.toDataURL('image/png')
      var position = 0;
      pdf.addImage(contentDataUrl, 'PNG', 0, position, imgWidht, imgHeight);
      pdf.addPage()

      html2canvas(html2).then(canvas =>{  
        const contentDataUrl2 = canvas.toDataURL('image/png')
        pdf.addPage()
        pdf.addImage(contentDataUrl2, 'PNG', 0, position, imgWidht, imgHeight);
        pdf.save('teste.pdf')
      })
    })

   
  }

}
