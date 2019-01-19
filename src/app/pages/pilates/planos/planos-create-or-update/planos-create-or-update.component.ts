import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@Angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CreateOrUpdate, Plano, ResponseApi } from '../../../../shared';
import { PlanoService } from '../../../../services';
import { MsgType } from '../../../../components';

@Component({
  selector: 'app-planos-create-or-update',
  templateUrl: './planos-create-or-update.component.html',
  styleUrls: ['./planos-create-or-update.component.css']
})
export class PlanosCreateOrUpdateComponent extends CreateOrUpdate implements OnInit {

  plano: Plano;
 
  constructor(
    private planoService: PlanoService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
  ) {
    super(formBuilder,null,route)
  }
 
  findById(id: string) {
    this.planoService.findById(id).pipe(take(1)).subscribe((responseApi: ResponseApi) => {
      this.plano = responseApi.data;
      this.formulario = this.formBuilder.group({
        id: [this.plano.id],
        nome: [this.plano.nome, [Validators.required, Validators.minLength(3)]],
        valor: [this.plano.valor, [Validators.required, Validators.minLength(11)]],
        descricao: [this.plano.descricao],
        empresa: [this.plano.empresa],
      })
    }, err => {
      this.openModal(`Falha ao localizar plano!! (${err['error']['errors'][0]})`, MsgType.ERROR)
    })
  }

  newRecord() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      valor: [null, [Validators.required, Validators.minLength(5)]],
      descricao: [null],
      empresa: [null],
    })
  }

  onSubmite() {
    this.plano = this.formulario.value
    this.save(this.plano)
  }

  save(plano: Plano): void {
    this.planoService.createOrUpdate(plano).pipe(take(1))
    .subscribe((responseApi: ResponseApi)=>{
      this.plano = null;
      this.openModal("Cadastro realizado com sucesso!!", MsgType.SUCCESS)
      this.resetForm()
    }, err =>{
      this.openModal(`Falha ao realizar cadastro!! (${err['error']['errors'][0]})`, MsgType.ERROR) 
    })
   
  }
} 