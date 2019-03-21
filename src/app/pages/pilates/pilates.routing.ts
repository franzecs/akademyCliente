import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PilatesComponent } from "./pilates.component";
import { AlunosCreateOrUpdateComponent, AlunosListComponent, InstrutoresListComponent, InstrutoresCreateOrUpdateComponent,
         PlanosListComponent, PlanosCreateOrUpdateComponent, TurmasCreateOrUpdateComponent, TurmasListComponent, 
         FrequenciaComponent, ListTurmasComponent, FinanceiroComponent, FluxoCaixaListComponent, 
         FluxoCaixaCreateOrUpdateComponent, DespesasListComponent, DespesasCreateOrUpdateComponent, 
         ItensCreateOrUpdateComponent} from ".";

const pilatesRoutes = [
    { path:'', component: PilatesComponent,
        children:[
            { path:'alunos', component: AlunosListComponent },
            { path:'alunos/:id/add', component: AlunosCreateOrUpdateComponent },
            { path:'alunos/:id/edit', component: AlunosCreateOrUpdateComponent},
            { path:'alunos/frequencia', component: FrequenciaComponent},

            { path:'instrutores', component: InstrutoresListComponent },
            { path:'instrutores/:id/add', component: InstrutoresCreateOrUpdateComponent },
            { path:'instrutores/:id/edit', component: InstrutoresCreateOrUpdateComponent},

            { path:'turmas', component: TurmasListComponent },
            { path:'turmas/:id/add', component: TurmasCreateOrUpdateComponent },
            { path:'turmas/:id/edit', component: TurmasCreateOrUpdateComponent },

            { path:'listturmas', component: ListTurmasComponent },

            { path:'planos', component: PlanosListComponent },
            { path:'planos/:id/add', component: PlanosCreateOrUpdateComponent },
            { path:'planos/:id/edit', component: PlanosCreateOrUpdateComponent },

            { path:'financeiro', component: FinanceiroComponent },
            
            { path:'financeiro/fluxo', component: FluxoCaixaListComponent },
            { path:'financeiro/fluxo/:id/add', component: FluxoCaixaCreateOrUpdateComponent },
            { path:'financeiro/fluxo/:id/edit', component: FluxoCaixaCreateOrUpdateComponent },

            { path:'financeiro/despesas', component: DespesasListComponent },
            { path:'financeiro/despesas/:id/add', component: DespesasCreateOrUpdateComponent },
            { path:'financeiro/despesas/:id/edit', component: DespesasCreateOrUpdateComponent },

            { path:'financeiro/itens/:id/:idf/add', component: ItensCreateOrUpdateComponent },
            { path:'financeiro/itens/:id/:idf/edit', component: ItensCreateOrUpdateComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(pilatesRoutes)],
    exports: [RouterModule]
})
export class PilatesRoutingModule { }