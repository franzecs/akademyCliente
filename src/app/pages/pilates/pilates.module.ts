import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@Angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { PilatesComponent } from './pilates.component';
import { PilatesRoutingModule } from './pilates.routing';
import { InstrutoresListComponent } from './instrutores/instrutores-list/instrutores-list.component';
import { InstrutoresCreateOrUpdateComponent } from './instrutores/instrutores-create-or-update/instrutores-create-or-update.component';
import { AlunosCreateOrUpdateComponent } from './alunos/alunos-create-or-update/alunos-create-or-update.component';
import { AlunosListComponent } from './alunos/alunos-list/alunos-list.component';
import { FluxoCaixaListComponent } from './financeiro/fluxo-caixa-list/fluxo-caixa-list.component';
import { FluxoCaixaCreateOrUpdateComponent } from './financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component';
import { TurmasCreateOrUpdateComponent } from './turmas/turmas-create-or-update/turmas-create-or-update.component';
import { TurmasListComponent } from './turmas/turmas-list/turmas-list.component';
import { PlanosListComponent } from './planos/planos-list/planos-list.component';
import { PlanosCreateOrUpdateComponent } from './planos/planos-create-or-update/planos-create-or-update.component';
import { ListTurmasComponent } from './turmas/list-turmas/list-turmas.component';
import { FrequenciaComponent } from './alunos/frequencia/frequencia.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { DespesasListComponent } from './financeiro/despesas-list/despesas-list.component';
import { DespesasCreateOrUpdateComponent } from './financeiro/despesas-create-or-update/despesas-create-or-update.component';
import { ItensCreateOrUpdateComponent } from './financeiro/itens-create-or-update/itens-create-or-update.component';

@NgModule({
    imports: [
      ReactiveFormsModule,
      CommonModule,
      ComponentsModule,
      PilatesRoutingModule
    ],
    declarations: [PilatesComponent, InstrutoresListComponent, InstrutoresCreateOrUpdateComponent,
                  AlunosCreateOrUpdateComponent, AlunosListComponent, FluxoCaixaListComponent,
                  FluxoCaixaCreateOrUpdateComponent, TurmasCreateOrUpdateComponent, TurmasListComponent,
                  PlanosListComponent, PlanosCreateOrUpdateComponent, ListTurmasComponent,
FrequenciaComponent, FinanceiroComponent, DespesasListComponent, DespesasCreateOrUpdateComponent, ItensCreateOrUpdateComponent],
    exports: [PilatesComponent]
  })
  export class PilatesModule { }
