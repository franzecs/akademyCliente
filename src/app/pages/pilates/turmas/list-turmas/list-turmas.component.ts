import { Component, OnInit } from '@angular/core';

import { Turma, ResponseApi, Dias } from '../../../../shared';
import { TurmaService, SharedService } from '../../../../services';

declare var $: any;

@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.css']
})
export class ListTurmasComponent implements OnInit {

  turmas: Turma[];
  dias: Dias = new Dias([], [], [], [], [], [])
  shared: SharedService;

  base64Img = null;
  margins = {
    top: 70,
    bottom: 40,
    left: 30,
    width: 550
  };

  constructor(
    private turmaService: TurmaService,
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.turmaService.findAll().subscribe((responseApi: ResponseApi) => {
      this.turmas = responseApi.data;
      for (let t of this.turmas) {
        if (t.dia === "SEGUNDA") {
          this.dias.segunda.push(t)
        }
        if (t.dia === "TERCA") {
          this.dias.terca.push(t)
        }
        if (t.dia === "QUARTA") {
          this.dias.quarta.push(t)
        }
        if (t.dia === "QUINTA") {
          this.dias.quinta.push(t)
        }
        if (t.dia === "SEXTA") {
          this.dias.sexta.push(t)
        }
        if (t.dia === "SABADO") {
          this.dias.sabado.push(t)
        }
      }

    })
  }

  makerPdf() {
    this.shared.pdfMaker(document.getElementById('my-table-p1'), document.getElementById('my-table-p2') );
  }

  compare(a, b) {
    if (a.horario < b.horario) {
      return -1;
    }
    if (a.horario > b.horario) {
      return 1;
    }
    return 0;
  }

  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    var color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      // options
      icon: 'fa fa-plus',
      title: 'Bootstrap notify',
      message: 'Turning standard Bootstrap alerts into "notify" like notifications',
      url: 'https://github.com/mouse0270/bootstrap-notify',
      target: '_blank'
    }, {
        // settings
        element: 'body',
        position: null,
        type: "info",
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
          from: "top",
          align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> <br>' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });

  }
}
