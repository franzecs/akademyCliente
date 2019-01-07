import { ViewChild, OnInit } from "@angular/core";
import { ModalMessage } from "src/app/components";
import { FormGroup, FormBuilder } from "@Angular/forms";
import { take, map, switchMap } from "rxjs/operators";

import { ConsultaCepService } from "src/app/services";
import { ActivatedRoute, Params } from "@angular/router";
import { EstadoBr, Cidade, Endereco } from "..";
import { empty } from "rxjs";

export abstract class CreateOrUpdate implements OnInit {

    @ViewChild(ModalMessage) modalMsg: ModalMessage
    formulario: FormGroup;
    id: string;
    estados: EstadoBr[];
    cidades: Cidade[];

    constructor(
        public formBuilder: FormBuilder,
        public cepService: ConsultaCepService,
        public route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.route.params.pipe(take(1)).subscribe((parametros: Params) => {
            if (parametros['id'] === '0') {
                this.newRecord();
            } else {
                this.id = parametros['id']
                this.findById(this.id)
            }
        })
    }

    newRecord() { }

    findById(id: string) { }

    openModal(msg, type) {
        this.modalMsg.showMessage(msg, type)
    }

    resetForm() {
        this.formulario.reset()
    }

    chageCitys() {
        this.formulario.get('endereco.estado').valueChanges
            .pipe(
                map(estado => this.estados.filter(e => e.sigla === estado)),
                map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
                switchMap((estadoId: number) => this.cepService.getCidades(estadoId)),
            )
            .subscribe(cidades => this.cidades = cidades);
    }

    consultaCEP() {
        const cep = this.formulario.get('endereco.cep').value;

        if (cep != null && cep !== '') {
            this.cepService.consultaCEP(cep).pipe(take(1)).subscribe((endereco: Endereco) => {
                this.populaDadosForm(endereco)
            })
        }
    }

    populaDadosForm(endereco) {
        this.formulario.patchValue({
            endereco: {
                cep: endereco.cep,
                logradouro: endereco.logradouro,
                complemento: endereco.complemento,
                bairro: endereco.bairro,
                cidade: endereco.localidade,
                estado: endereco.uf
            }
        });
    }
}