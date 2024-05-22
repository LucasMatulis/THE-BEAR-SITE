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
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule, MatIconModule,
    MatPaginatorModule, MatButtonModule,
    MatSortModule
  ],
})

export class CardapioComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'preco', 'descricao'];
  termoPesquisa: string = '';
  outrosDataSource = new MatTableDataSource<Produto>();
  bebidasDataSource = new MatTableDataSource<Produto>();
  comidasDataSource = new MatTableDataSource<Produto>();
  mostrarComidas: boolean = true;
  imagemComidas: string = '../../../assets/image/Menos.png';
  mostrarBebidas: boolean = true;
  imagemBebidas: string = '../../../assets/image/Menos.png';
  mostrarOutros: boolean = true;
  imagemOutros: string = '../../../assets/image/Menos.png';


  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private produtoService: ProdutoService,
    private snackBar : MatSnackBar,

  ) {}

  @ViewChild('sortOutros') sortOutros!: MatSort;
  @ViewChild('sortComida') sortComida!: MatSort;
  @ViewChild('sortBebida') sortBebida!: MatSort;

  @ViewChild(MatPaginator)
  paginatorOutros!: MatPaginator;

  @ViewChild(MatPaginator)
  paginatorComida!: MatPaginator;

  @ViewChild(MatPaginator)
  paginatorBebida!: MatPaginator;

  ngAfterViewInit() {
    this.outrosDataSource.sort = this.sortOutros;
    this.outrosDataSource.sort.direction = 'asc';
    this.outrosDataSource.sort.active = 'nome';

    this.comidasDataSource.sort = this.sortComida;
    this.comidasDataSource.sort.direction = 'asc';
    this.comidasDataSource.sort.active = 'nome';

    this.bebidasDataSource.sort = this.sortBebida;
    this.bebidasDataSource.sort.direction = 'asc';
    this.bebidasDataSource.sort.active = 'nome';

    this.outrosDataSource.paginator = this.paginatorOutros;
    this.comidasDataSource.paginator = this.paginatorComida;
    this.bebidasDataSource.paginator = this.paginatorBebida;

    this.buscarProdutos();
  }

  buscarProdutos(): void {
    this.produtoService.buscarProdutoTipo(0).subscribe(
      (produtos) => {
        this.outrosDataSource.data = produtos;
      },
      (error) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );

    this.produtoService.buscarProdutoTipo(1).subscribe(
      (produtos) => {
        this.comidasDataSource.data = produtos;
      },
      (error) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );

    this.produtoService.buscarProdutoTipo(2).subscribe(
      (produtos) => {
        this.bebidasDataSource.data = produtos;
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
  
  getTipoLabel(tipo: number): string {
    if(tipo == 0){
      return "Outros"
    } else if (tipo == 1){
      return "Comida"
    } else{
      return "Bebida"
    }
  }

  

  toggleComidas(): void {
    this.mostrarComidas = !this.mostrarComidas;
    this.imagemComidas = this.mostrarComidas ? '../../../assets/image/Menos.png' : '../../../assets/image/Mais.png';
  }

  toggleBebidas(): void {
    this.mostrarBebidas = !this.mostrarBebidas;
    this.imagemBebidas = this.mostrarBebidas ? '../../../assets/image/Menos.png' : '../../../assets/image/Mais.png';
  }

  toggleOutros(): void {
    this.mostrarOutros = !this.mostrarOutros;
    this.imagemOutros = this.mostrarOutros ? '../../../assets/image/Menos.png' : '../../../assets/image/Mais.png';
  }

}

