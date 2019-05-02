import { Component, OnInit } from '@angular/core';
import { DialogService, UserService, SharedService } from '../../../../services';
import { PageList, ResponseApi } from '../../../../shared';
import { MsgType } from '../../../../components';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css']
})
export class AlunosListComponent extends PageList implements OnInit {

  usuarios = [];
  id: string;
  shared: SharedService;

  constructor(
    private usuariosService: UserService,
    private router: Router
  ) {
    super();
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.getList(this.page, this.count);
  }

  getList(page: number, count: number) {
    this.usuariosService.findAllByTipoNome(page, count, 'Aluno', this.search).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.usuarios = responseApi['data']['content'];
        this.pages = new Array(responseApi['data']['totalPages']);
        this.totalElements = responseApi['data']['totalElements'];
      }, err => {
        this.openModal(`Falha ao listar!! (${err['error']['message']})`, MsgType.ERROR);
      });
  }

  openModalDelete(id, nome, usuario) {
    this.id = id;
    this.openModal(`Deseja deletar ${usuario}: ${nome}`, MsgType.DELETE);
  }

  deletar(evento) {
    if (evento === true) {
      this.usuariosService.delete(this.id).subscribe((responseApi: ResponseApi) => {
        this.openModal(`Aluno deletado com sucesso!`, MsgType.SUCCESS);
        this.getList(this.page, this.count);
      }, err => {
        this.openModal(`Falha ao deletar!! (${err['error']['message']})`, MsgType.ERROR);
      });
    }
  }

  resetPassword(email) {

  }
  isAtivo(status, id) {
    if (status != null) {
      this.usuariosService.updateStatus(status, id).pipe(take(1)).subscribe(() => {
        this.getList(this.page, this.count);
      }, err => {
        this.openModal(`erro ao modificar status: (${err['error']['message']})`, MsgType.ERROR);
      });
    }
  }

  baixarPlanilha() {
    const tabela = '<table>' + document.getElementById('tablebx').innerHTML + '</table>';
    this.shared.saveXls(tabela, 'Alunos');
  }

  creatOreditPage() {
    this.router.navigate(['/alunos', this.id] );
  }
}
