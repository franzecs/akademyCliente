import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PilatesComponent } from "./pilates.component";
import { AlunosCreateOrUpdateComponent, AlunosListComponent, InstrutoresListComponent, InstrutoresCreateOrUpdateComponent,
         PlanosListComponent, PlanosCreateOrUpdateComponent, TurmasCreateOrUpdateComponent, TurmasListComponent} from ".";
import { ListTurmasComponent } from "./turmas/list-turmas/list-turmas.component";
import { FluxoCaixaListComponent } from "./financeiro/fluxo-caixa-list/fluxo-caixa-list.component";
import { FrequenciaComponent } from "./alunos/frequencia/frequencia.component";

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

            { path:'financeiro', component: FluxoCaixaListComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(pilatesRoutes)],
    exports: [RouterModule]
})
export class PilatesRoutingModule { }