import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Denuncia } from 'src/app/model/denuncia';
import { DenunciaService } from 'src/app/services/denuncia/denuncia.service';

@Component({
  selector: 'app-denuncia-adm',
  templateUrl: './denuncia-adm.component.html',
  styleUrls: ['./denuncia-adm.component.css']
})
export class DenunciaAdmComponent  implements AfterViewInit {

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private denunciaService: DenunciaService,
    private snackBar: MatSnackBar
  ) { }

  denunciaDataSource = new MatTableDataSource<Denuncia>();
  maismenos: string = '../../../assets/image/Mais.png';
  isExpanded: boolean[] = [];

  ngAfterViewInit() {
    this.buscardenuncia();
  }

  buscardenuncia(): void {
    this.denunciaService.buscarDenuncia().subscribe(
      (denuncias) => {
        this.denunciaDataSource.data = denuncias;
        this.isExpanded = new Array(denuncias.length).fill(false);
      },
      (error) => {
        console.error('Erro ao buscar denúncias:', error);
        this.snackBar.open('Erro ao buscar denúncias', 'Fechar', {
          duration: 3000,
        });
      }
    );
  }

  AbrirFeed(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  // Método para remover denuncia
  fecharDenuncia(denuncia: Denuncia) {
    denuncia.resolvido=true
    this.denunciaService.atualizarDenuncia(denuncia, denuncia.id).subscribe(
      (success) => {
        if (success) {
          // denuncia removido com sucesso
          // Recarrega a página para refletir as alterações
          location.reload();
        } else {
          // Falha ao remover denuncia
          console.error('Falha ao remover denuncia!');
        }
      },
      (error) => {
        // Erro ao fazer a requisição
        console.error('Erro ao remover denuncia:', error);
      }
    );
  }


}
