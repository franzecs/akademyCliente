import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@Angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { Empresa, ResponseApi, EmpresaDTO, CreateOrUpdate } from 'src/app/shared';
import { MsgType } from 'src/app/components';
import { EmpresaService, ConsultaCepService } from 'src/app/services';


@Component({
  selector: 'app-empresas-create',
  templateUrl: './empresas-create.component.html',
  styleUrls: ['./empresas-create.component.css']
})
export class EmpresasCreateComponent extends CreateOrUpdate implements OnInit {

  empresa: Empresa;
  empresas: Empresa[]
 
  constructor(
    private empresaService: EmpresaService,
    public formBuilder: FormBuilder,
    public cepService: ConsultaCepService,
    public route: ActivatedRoute,
  ) {
    super(formBuilder,cepService,route)
  }
 
  findById(id: string) {
    this.empresaService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.empresa = responseApi.data;
      this.cepService.getCidadeNome(this.empresa.endereco.cidade).subscribe(dados => this.cidades = dados);

      this.listFactory()
      this.formulario = this.formBuilder.group({
        id: [this.empresa.id],
        nome: [this.empresa.nome, [Validators.required, Validators.minLength(3)]],
        cnpj: [this.empresa.cnpj, [Validators.required, Validators.minLength(11)]],
        telefone: [this.empresa.telefone, [Validators.required]],
        email: [this.empresa.email, [Validators.required, Validators.email]],
        tipo: [this.empresa.tipo, [Validators.required]],
        matriz: [this.empresa.matriz],
        endereco: this.formBuilder.group({
          cep: [this.empresa.endereco.cep, [Validators.required]],
          numero: [this.empresa.endereco.numero],
          complemento: [this.empresa.endereco.complemento],
          logradouro: [this.empresa.endereco.logradouro, Validators.required],
          bairro: [this.empresa.endereco.bairro, Validators.required],
          cidade: [this.empresa.endereco.cidade, Validators.required],
          estado: [this.empresa.endereco.estado, Validators.required]
        }),
        url_logo: [this.empresa.url_logo],
      })
      this.chageCitys()
    }, err => {
      this.openModal(`Falha ao localizar empresa!! (${err['error']['errors'][0]})`, MsgType.ERROR)
    })
  }

  newRecord() {
    this.listFactory()
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      cnpj: [null, [Validators.required, Validators.minLength(11)]],
      telefone: [null, [, Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      tipo: ["Matriz", [Validators.required]],
      matriz: [null],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null],
        complemento: [null],
        logradouro: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      url_logo: [""],
    })
    this.chageCitys()
  }

  onSubmite() {
    this.empresa = this.formulario.value
    if(this.empresa.matriz === null){
      this.empresa.matriz = new EmpresaDTO(null,null,null,null,null)
    }
    this.save(this.empresa)
  }

  save(empresa: Empresa): void {
    this.empresaService.createOrUpdate(empresa).pipe(take(1))
    .subscribe((responseApi: ResponseApi)=>{
      this.empresa = null;
      let empRet: Empresa = responseApi.data;
      this.openModal("Cadastro realizado com sucesso!!", MsgType.SUCCESS)
      this.resetForm()
    }, err =>{
      this.openModal(`Falha ao realizar cadastro!! (${err['error']['errors'][0]})`, MsgType.ERROR) 
    })
   
  }

  listFactory() {
    this.empresaService.findAll().pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.empresas = responseApi['data'];
    })
    this.cepService.getEstadosBr().pipe(take(1)).subscribe(dados => this.estados = dados);
  }

  testEmpresa(emp1: Empresa, emp2: Empresa) {
    return emp1 && emp2 ? (emp1.nome === emp2.nome && emp1.id === emp2.id) : emp1 === emp2
  }
} 