import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LandingComponent } from './components/landing/landing.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { LoginComponent } from './components/login/login.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { PaginaCardapioComponent } from './components/pagina-cardapio/pagina-cardapio.component';
import { DenunciaAdmComponent } from './components/denuncia-adm/denuncia-adm.component';
import { FeedbackAdmComponent } from './components/feedback-adm/feedback-adm.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DenunciaComponent } from './components/denuncia/denuncia.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';

const routes: Routes = [
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
    path:"adm",
    component: LoginComponent
  },
  {
    path:"editProduto/:id",
    component: EditarProdutoComponent
  },
  {
    path:"cardapio",
    component: PaginaCardapioComponent
  },
  {
    path:"denunciaAdm",
    component: DenunciaAdmComponent
  },
  {
    path:"feedbackAdm",
    component: FeedbackAdmComponent
  },
  {
    path:"feedback",
    component: FeedbackComponent
  },
  {
    path:"denuncia",
    component: DenunciaComponent
  },
  {
    path:"homeAdmin",
    component:HomeAdminComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
