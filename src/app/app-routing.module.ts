import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { MotoqueiroComponent } from './views/motoqueiro/motoqueiro.component';
import { BairrosComponent } from './views/bairros/bairros.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ContabilidadeComponent } from './views/contabilidade/contabilidade.component';
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"clientes",
    component: ClientesComponent
  },
  {
    path:"motoqueiro",
    component: MotoqueiroComponent
  },
  {
    path:"bairros",
    component: BairrosComponent
  },
  {
    path:"produtos",
    component: ProdutosComponent
  },
  {
    path:"contabilidade",
    component: ContabilidadeComponent
  },
  {
    path:"funcionarios",
    component: FuncionariosComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
