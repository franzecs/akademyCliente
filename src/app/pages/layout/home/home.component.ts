import { Component, OnInit,OnDestroy , ViewChild } from '@angular/core';
import { OpcaoMenu, ItemMenu } from '../../../components';
import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../services/user.service';
import { SharedService, AuthService, StorageService } from '../../../services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus:OpcaoMenu[]
  
  constructor(
      public storageService: StorageService,
      public authService : AuthService,
      private router: Router,
    ) {     }
  
  ngOnInit() { 
    this.changeMenu();
    this.authService.refreshToken().subscribe(response => {
      this.authService.successfulLogin(response.headers.get('Authorization'));
    }, err => this.authService.logout())
  }

  changeMenu(){

    this.authService.currentUser(this.storageService.getLocalUser().email).subscribe((resposta: any)=>{
      let perfis = resposta.data.perfis; 

      if(perfis.includes("ADMIN_SISTEMA")){
        this.menuRoot()
      }
      if(perfis.includes("ADMIN_EMPRESA")){
        this.menuAdm()
      }
      if(perfis.includes("INSTRUTOR")){
        this.menuInstrutor()
      }
      if(perfis.includes("ALUNO")){
        this.menuAluno()
      }

    })
  }
  
  menuRoot(){
    this.menus = [
      new OpcaoMenu('Empresas','fa-address-card','primary','/root/empresas'),
      new OpcaoMenu('Usuarios','fa-product-hunt','success','/root/usuarios'),
      new OpcaoMenu('Configirações','fa-usd','danger','/root/config')
    ]
  }
  
  menuAdm(){
    this.menus = [
      new OpcaoMenu('Alunos','fa-address-card','primary','/pilates/alunos'),
      new OpcaoMenu('Instrutores','fa-product-hunt','success','/pilates/instrutores'),
      new OpcaoMenu('Planos','fa-shopping-cart','info','/pilates/planos'),
      new OpcaoMenu('Turmas','fa-table','warning','/pilates/turmas'),
      new OpcaoMenu('Financeiro','fa-usd','danger','/pilates/financeiro')
    ]
  }

  menuInstrutor(){
    this.menus = [
      new OpcaoMenu('Turmas','fa-address-card','primary','')
    ]
  }

  menuAluno(){
    this.menus = [
      new OpcaoMenu('Perfil','fa-address-card','primary','')
    ]
  }
}