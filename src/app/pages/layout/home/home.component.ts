import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { OpcaoMenu } from '../../../components';
import { SharedService, AuthService, StorageService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: OpcaoMenu[];

  constructor(
    public storageService: StorageService,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.changeMenu();
    this.authService.refreshToken().subscribe(response => {
      this.authService.successfulLogin(response.headers.get('Authorization'));
    }, err => this.authService.logout());
  }

  changeMenu() {

    this.authService.currentUser(this.storageService.getLocalUser().email).subscribe((resposta: any) => {
      const perfis = resposta.data.perfis;

      if (perfis.includes('ADMIN_SISTEMA')) {
        this.menuRoot();
      }
      if (perfis.includes('ADMIN_EMPRESA')) {
        this.menuAdm();
      }
      if (perfis.includes('INSTRUTOR')) {
        this.menuInstrutor();
      }
      if (perfis.includes('ALUNO')) {
        this.menuAluno();
      }
    });
  }

  menuRoot() {
    this.menus = [
      new OpcaoMenu('Empresas', 'fa-address-card', 'primary', '/root/empresas'),
      new OpcaoMenu('Usuarios', 'fa-product-hunt', 'success', '/root/usuarios'),
      new OpcaoMenu('Configirações', 'fa-usd', 'danger', '/root/config')
    ];
  }

  menuAdm() {
    this.menus = [
      new OpcaoMenu('Planos', 'fa fa-shopping-cart', 'info', '/pilates/planos'),
      new OpcaoMenu('Instrutores', 'fa fa-users', 'success', '/pilates/instrutores'),
      new OpcaoMenu('Turmas', 'fa fa-table', 'warning', '/pilates/turmas'),
      new OpcaoMenu('Alunos', 'fa fa-address-card', 'primary', '/pilates/alunos'),
      new OpcaoMenu('Frequencia', 'fa fa-table', 'info', '/pilates/alunos/frequencia'),
      new OpcaoMenu('Horário', 'fa fa-clock-o', 'success', '/pilates/listturmas'),
      new OpcaoMenu('Financeiro', 'fa fa-usd', 'danger', '/pilates/financeiro'),
    ];
  }

  menuInstrutor() {
    this.menus = [
      new OpcaoMenu('Turmas', 'fa-address-card', 'primary', '')
    ];
  }

  menuAluno() {
    this.menus = [
      new OpcaoMenu('Perfil', 'fa-address-card', 'primary', '')
    ];
  }
}
