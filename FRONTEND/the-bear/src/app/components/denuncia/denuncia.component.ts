import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Denuncia } from 'src/app/model/denuncia';
import { DenunciaService } from 'src/app/services/denuncia/denuncia.service';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent {

  constructor(
    private denunciaService: DenunciaService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  denuncia: Denuncia = {
    id: 0,
    nome: "",
    texto: "",
    dataCriacao: new Date(), 
    resolvido: false
  }

  criarDenuncia() {
    this.denuncia.nome = this.denuncia.nome?.trim();
    this.denuncia.texto = this.denuncia.texto?.trim();
    
    this.denuncia.dataCriacao = new Date();

    if (this.denuncia.texto !== "") {
      if(this.denuncia.nome=="")
        this.denuncia.nome="Anonimo"
      this.denunciaService.inserirDenuncia(this.denuncia).subscribe(
        response => {
          this.snackBar.open("Denúncia criada com sucesso!", "OK!");
          this.denuncia.nome=""
          this.denuncia.texto=""
        },
        error => {
          console.log(error);
          this.snackBar.open("Erro ao criar denúncia!", "OK!");
        }
      );
    } else {
      this.snackBar.open("O texto está vazio!", "OK!");
    }
  }
}
