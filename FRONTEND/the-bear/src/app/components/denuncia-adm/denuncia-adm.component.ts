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

  denunciaAbertaDataSource = new MatTableDataSource<Denuncia>();
  denunciaResolvidaDataSource = new MatTableDataSource<Denuncia>();
  maismenos: string = '../../../assets/image/Mais.png';
  isAbertaExpanded: boolean[] = [];
  isResolvidaExpanded: boolean[] = [];

  ngAfterViewInit() {
    this.buscardenuncia();
  }

  buscardenuncia(): void {
    this.denunciaService.buscarDenuncia().subscribe(
      (denuncias) => {
        const abertas = denuncias.filter(denuncia => !denuncia.resolvido);
        const resolvidas = denuncias.filter(denuncia => denuncia.resolvido);
        this.denunciaAbertaDataSource.data = abertas;
        this.denunciaResolvidaDataSource.data = resolvidas;
        this.isAbertaExpanded = new Array(abertas.length).fill(false);
        this.isResolvidaExpanded = new Array(resolvidas.length).fill(false);
      },
      (error) => {
        console.error('Erro ao buscar denúncias:', error);
        this.snackBar.open('Erro ao buscar denúncias', 'Fechar', {
          duration: 3000,
        });
      }
    );
  }

  AbrirFeed(index: number, type: string) {
    if (type === 'aberta') {
      this.isAbertaExpanded[index] = !this.isAbertaExpanded[index];
    } else {
      this.isResolvidaExpanded[index] = !this.isResolvidaExpanded[index];
    }
  }

  fecharDenuncia(denuncia: Denuncia, resolvido: boolean) {
    denuncia.resolvido = resolvido;
    this.denunciaService.atualizarDenuncia(denuncia, denuncia.id).subscribe(
      (success) => {
        if (success) {
          location.reload();
        } else {
          console.error('Falha ao atualizar denúncia!');
        }
      },
      (error) => {
        console.error('Erro ao atualizar denúncia:', error);
      }
    );
  }
}
