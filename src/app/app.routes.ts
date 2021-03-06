import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';

import { Routes, RouterModule } from "@angular/router"

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: 'cadastro', component: CadastroComponent },
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'inbox' 
    }, 
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: 'login' 
    }
]

export const ModuloRoteamento = RouterModule.forRoot(routes);
