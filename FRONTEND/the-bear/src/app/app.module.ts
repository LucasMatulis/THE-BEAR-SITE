import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RouterOutlet } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { CardapioHomeComponent } from './components/cardapio-home/cardapio-home.component';
import { MatButtonModule } from '@angular/material/button';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DenunciaComponent } from './components/denuncia/denuncia.component';
import { DenunciaAdmComponent } from './components/denuncia-adm/denuncia-adm.component';
import { FeedbackAdmComponent } from './components/feedback-adm/feedback-adm.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { PaginaCardapioComponent } from './components/pagina-cardapio/pagina-cardapio.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LandingComponent,
    CadastroComponent,
    FooterComponent,
    CardapioHomeComponent,
    EditarProdutoComponent,
    FeedbackComponent,
    DenunciaComponent,
    DenunciaAdmComponent,
    FeedbackAdmComponent,
    LocalizacaoComponent,
    PaginaCardapioComponent,
    HomeAdminComponent,    
  ],
  imports: [
    CommonModule,
    ConsultaComponent,
    CardapioComponent,
    MatButtonModule,
    MatTableModule,
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }