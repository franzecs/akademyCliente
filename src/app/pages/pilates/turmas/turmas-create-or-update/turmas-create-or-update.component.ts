import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@Angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { CreateOrUpdate, User, Turma, ResponseApi } from '../../../../shared';
import { TurmaService, UserService } from '../../../../services';
import { MsgType } from '../../../../components';

@Component({
  selector: 'app-turmas-create-or-update',
  templateUrl: './turmas-create-or-update.component.html',
  styleUrls: ['./turmas-create-or-update.component.css']
})
export class TurmasCreateOrUpdateComponent extends CreateOrUpdate implements OnInit {

  turma: Turma;
  instrutores: any;
  alunos: any;
  
  constructor(
    private turmaService: TurmaService,
    private userService: UserService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
  ) {
    super(formBuilder,null,route)
  }
 
  findById(id: string) { 
    this.turmaService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.turma = responseApi.data;
      this.alunos = this.turma.alunos
      this.listFactory()
      this.formulario = this.formBuilder.group({
        id: [this.turma.id],
        dia: [this.turma.dia, [Validators.required, Validators.minLength(3)]],
        horario: [this.turma.horario, [Validators.required, Validators.minLength(2)]],
        tipo: ["Normal"],
        empresa: [this.turma.empresa],
        instrutor: [this.turma.instrutor, [Validators.required]],
      })
    }, err => {
      this.openModal(`Falha ao localizar turma!! (${err['error']['errors'][0]})`, MsgType.ERROR)
    })
  }

  newRecord() {
    this.listFactory()
    this.formulario = this.formBuilder.group({
      id: [null],
      dia: [null, [Validators.required, Validators.minLength(3)]],
      horario: [null, [Validators.required, Validators.minLength(5)]],
      tipo: ['Normal'],
      empresa: [null],
      instrutor: [null, [Validators.required]],
    })
  }

  onSubmite() {
    this.turma = this.formulario.value
    this.save(this.turma)
  }

  save(turma: Turma): void {
    this.turmaService.createOrUpdate(turma).pipe(take(1))
    .subscribe((responseApi: ResponseApi)=>{
      this.turma = null;
      this.openModal("Cadastro realizado com sucesso!!", MsgType.SUCCESS)
      this.resetForm()
    }, err =>{
      this.openModal(`Falha ao realizar cadastro!! (${err['error']['errors'][0]})`, MsgType.ERROR) 
    })
   
  }

  listFactory() {
    this.userService.findListAllByTipo('Instrutor').pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.instrutores = responseApi;
    })
  }

  testInstrutor(inst1: User, inst2: User) {
    return inst1 && inst2 ? (inst1.nome === inst2.nome && inst1.id === inst2.id) : inst1 === inst2
  }
} 