import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { DenunciaComponent } from './components/denuncia/denuncia.component';
import { FeedbakComponent } from './components/feedbak/feedbak.component';

export const routes: Routes = [
    {
        path:'',
        component: LandingComponent
      },
      {
        path:'cadastro',
        component: CadastroComponent
      },
      {
        path:"consulta",
        component: ConsultaComponent
      },
      {
        path:"login",
        component: LoginComponent
      },
      {
        path:"editProduto/:id",
        component: EditarProdutoComponent
      },
      {
        path:"cardapio",
        component: CardapioComponent
      },
      {
        path:"denuncia",
        component: DenunciaComponent
      },
      {
        path:"feedback",
        component: FeedbakComponent
      },
    
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
  })
  export class AppRoutes { }
