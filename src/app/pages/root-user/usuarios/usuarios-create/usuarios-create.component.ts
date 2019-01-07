import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@Angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { CheckboxItem, MsgType } from 'src/app/components';
import { User, Endereco, Empresa, Listas, ResponseApi, CreateOrUpdate, Plano, Turma } from 'src/app/shared';
import { SharedService, UserService, EmpresaService, ConsultaCepService, PlanoService, TurmaService } from 'src/app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent extends CreateOrUpdate implements OnInit {

  user: User;
  perfis: any[]= []
  userPerfis = new Array<CheckboxItem>();
  pathUpload = "/usuarios"
  endereco: Endereco
  empresas: Empresa[]
  turmas: Turma[]
  turmasDB: Turma[]
  planos:Plano[]
  frmTurma: FormGroup
  shared: SharedService;

  constructor(
    private usuariosService: UserService,
    private empresaService: EmpresaService,
    private planoService: PlanoService,
    private turmaService: TurmaService,
    public formBuilder: FormBuilder,
    public cepService: ConsultaCepService,
    public route: ActivatedRoute,
  ) {
    super(formBuilder, cepService, route)
    this.shared = SharedService.getInstance();

    this.frmTurma = this.formBuilder.group({
      turma:[null]
    })
  }

  findById(id: string) {
    this.usuariosService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.user = responseApi.data;
      this.turmas = this.user.turmas;
      this.cepService.getCidadeNome(this.user.endereco.cidade).subscribe(dados => this.cidades = dados)
      this.userPerfis = Listas._perfil.map(x => {
        if (this.user.perfis.includes(x.perfil)) {
          this.perfis.push(x.cod)
          return new CheckboxItem(x.cod, x.perfil, true)
        } else {
          return new CheckboxItem(x.cod, x.perfil, false)
        }
      })

      this.onRolesChange(this.perfis)

      this.listFactory()

      let dt = new DatePipe('pt-BR')

      this.formulario = this.formBuilder.group({
        id: [this.user.id],
        nome: [this.user.nome, [Validators.required, Validators.minLength(3)]],
        email: [this.user.email, [Validators.required, Validators.email]],
        ativo:[this.user.ativo],
        senha: [this.user.senha, [Validators.required, Validators.minLength(6)]],
        endereco: this.formBuilder.group({
          cep: [this.user.endereco.cep, [Validators.required]],
          numero: [this.user.endereco.numero],
          complemento: [this.user.endereco.complemento],
          logradouro: [this.user.endereco.logradouro, Validators.required],
          bairro: [this.user.endereco.bairro, Validators.required],
          estado: [this.user.endereco.estado, Validators.required],
          cidade: [this.user.endereco.cidade, Validators.required],
        }),
        telefone:[this.user.telefone],
        celular:[this.user.celular],
        rg:[this.user.rg],
        cpf:[this.user.cpf],
        dataNascimento:[dt.transform(this.user.dataNascimento,'dd/MM/yyyy')],
        dataCadastro:[this.user.dataCadastro],
        sexo:[this.user.sexo],
        peso:[this.user.peso],
        diaPagamento:[this.user.diaPagamento],
        plano:[this.user.plano],
        obs:[this.user.obs],
        tipoUser:[this.user.tipoUser],
        turmas:[this.turmas],
        empresa: [this.user.empresa],
        url_perfil:[this.user.url_perfil],
      })
      this.chageCitys()
      this.id = this.formulario.value.id
    }, err => {
      this.openModal(`Falha ao localizar usuário!! (${err['error']['errors'][0]})`, MsgType.ERROR)
    })
  }

  newRecord() {
    this.listFactory()
    this.userPerfis = Listas._perfil.map(x => new CheckboxItem(x.cod, x.perfil));

    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      ativo:[true],
      senha: ['123456', [Validators.required, Validators.minLength(6)]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null],
        complemento: [null],
        logradouro: [null, Validators.required],
        bairro: [null, Validators.required],
        estado: [null, Validators.required],
        cidade: [null, Validators.required],
      }),
      telefone:[null],
      celular:[null],
      rg:[null],
      cpf:[null],
      dataNascimento:[null],
      dataCadastro:[null],
      sexo:[null],
      peso:[null],
      diaPagamento:[null],
      plano:[null],
      obs:[null],
      tipoUser:[null],
      turmas:[this.turmas],
      empresa: [null],
      url_perfil:['/assets/img/prod.jpg'],
    })
    this.chageCitys()
  }

  onSubmite() {
    if (this.formulario.value.id === null) {
      this.user = this.formulario.value
      this.user.perfis = this.perfis
      this.user.dataCadastro = new Date()
      this.save(this.user)
    } else {
      this.user = this.formulario.value
      this.user.perfis = this.perfis
      this.user.dtr = this.formulario.value.dataNascimento 
      this.user.dataNascimento=null
      this.update(this.user)
    }
  }

  save(user: User): void {
    this.usuariosService.createOrUpdate(user).pipe(take(1))
      .subscribe((responseApi: ResponseApi) => {
        this.user = this.shared.userEmpty;
        let userRet: User = responseApi.data;
        this.openModal("Cadastro realizado com sucesso!!", MsgType.SUCCESS)
        this.resetForm()
      }, err => {
        this.openModal(`Falha ao realizar cadastro!! (${err['error']['errors'][0]})`, MsgType.ERROR)
      })
  } 

  update(user: User) {
    this.usuariosService.createOrUpdate(user).pipe(take(1)).subscribe(() => {
      this.openModal("Dados editados com sucesso!!", MsgType.SUCCESS)
    }, err => {
      this.openModal(`Falha ao editar!!(${err['error']['errors'][0]})`, MsgType.ERROR)
    })
  }

  addTurma(turma:Turma){
    this.turmas.push(turma)
  }
  removeTurma(turma: Turma){
    this.turmas.splice(this.turmas.indexOf(this.verificaTurma(turma)),1)
  }
  verificaTurma(turma: Turma):Turma{
    let turmaEncontrada = this.turmas.find((t: Turma)=> t.id === turma.id)
    return turmaEncontrada
  }

  receiveUrl(evento) {
    this.usuariosService.updateUrlPerfil(evento, this.user.id).pipe(take(1)).subscribe(() => {
      this.findById(this.id);
      this.openModal("Upload ok", MsgType.SUCCESS)
    }, err => {
      this.openModal(`Falha no upload!!(${err['error']['errors'][0]})`, MsgType.ERROR)
    })
  }

  listFactory() {
    this.empresaService.findAll().pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.empresas = responseApi['data'];
    })

    this.planoService.findAll().pipe(take(1)).subscribe((responseApi: ResponseApi) =>{
      this.planos = responseApi['data'];
    })

    this.turmaService.findAll().pipe(take(1)).subscribe((responseApi: ResponseApi) =>{
      this.turmasDB = responseApi['data'];
    })
    this.cepService.getEstadosBr().pipe(take(1)).subscribe(dados => this.estados = dados);
  }

  onRolesChange(value) {
    this.perfis = value
  }

  resetForm() {
    this.formulario.reset()
    this.userPerfis = Listas._perfil.map(x => new CheckboxItem(x.cod, x.perfil));
  }

  testEmpresa(emp1: Empresa, emp2: Empresa) {
    return emp1 && emp2 ? (emp1.nome === emp2.nome && emp1.id === emp2.id) : emp1 === emp2
  }

  testPlano(plano1: Plano, plano2: Plano) {
    return plano1 && plano2 ? (plano1.nome === plano2.nome && plano1.id === plano2.id) : plano1 === plano2
  }
}