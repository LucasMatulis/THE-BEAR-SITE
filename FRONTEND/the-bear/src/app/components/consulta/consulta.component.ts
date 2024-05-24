import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Produto } from 'src/app/model/produto';
import { catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule, MatIconModule,
    MatPaginatorModule, MatButtonModule,
    MatSortModule, MatTooltipModule,
    MatDialogModule 
  ],
})
export class ConsultaComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nome', 'preco', 'descricao', 'tipo', 'editar'];
  dataSource = new MatTableDataSource<Produto>();
  termoPesquisa: string = '';

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private produtoService: ProdutoService,
    private snackBar : MatSnackBar,
    public dialog: MatDialog,
  ) {}

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.buscarProdutos();
  }

  buscarProdutos(): void {
    this.produtoService.buscarProduto().subscribe(
      (produtos) => {
        this.dataSource.data = produtos;
      },
      (error) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  cadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  removerProduto(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.produtoService.removerProduto(id).subscribe({
          next: (res) => {
            this.buscarProdutos();
            if (res) console.log(res);
          },
          error: (erro) => {
            console.log(erro);
          }
        });
      }
    });
  }

  editarProduto(id:number): void {
    this.router.navigateByUrl(`/editProduto/${id}`);
  }

  pesquisar(): void {
    if (this.termoPesquisa.trim() === '') {
      this.dataSource.filter = '';
      this.buscarProdutos();
      return;
    }

    this.dataSource.filter = this.termoPesquisa.trim().toLowerCase();
  }

  getTipoDescricao(tipo: number): string {
    switch(tipo) {
      case 1: return 'Comida';
      case 2: return 'Bebidas';
      default: return 'Outros';
    }
  }
}
