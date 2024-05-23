import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  setaAberta: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  produtos?: Produto[];
  produto: Produto = {
    id: 0,
    nome: "",
    preco: 0,
    descricao: "",
    tipo: 0
  };

  ngOnInit(): void {
    this.buscarProdutos();
  }

  criarProduto() {
    // Trim nome e descricao do produto
    this.produto.nome = this.produto.nome?.trim();
    this.produto.descricao = this.produto.descricao?.trim();

    // Verifica se já existe um produto com o mesmo nome
    const produtoExistente = this.produtos?.find(
      (element) => element.nome === this.produto.nome
    );

    if (produtoExistente) {
      // Exibe mensagem se o produto já existe
      this.snackBar.open("Este produto já existe", "OK!");
    } else {
      // Substitui vírgula por ponto no preço e converte para número
      const precoSanitizado = this.produto.preco.toString().replace(',', '.');
      const precoNumerico = parseFloat(precoSanitizado);

      // Verifica se o nome não é vazio e o preço é maior que 0
      if (this.produto.nome !== "" && !isNaN(precoNumerico) && precoNumerico > 0) {
        this.produto.preco = precoNumerico;  // Atualiza o preço do produto

        // Chama o serviço para inserir o produto
        this.produtoService.inserirProduto(this.produto).subscribe(
          (response) => {
            this.buscarProdutos();  // Atualiza a lista de produtos
            this.snackBar.open("Produto cadastrado!", "OK!");
            this.produto = {
              id: 0,
              nome: "",
              preco: 0,
              descricao: "",
              tipo: 0
            }
          },
          (error) => {
            console.log(error);
            this.snackBar.open("Erro ao cadastrar produto!", "OK!");
          }
        );
      } else {
        this.snackBar.open("Nome ou preço do produto inválido!", "OK!");
      }
    }
  }


  buscarProdutos(): void {
    this.produtoService.buscarProduto()
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      )
      .subscribe((produtos) => {
        this.produtos = produtos as Produto[];
      });
  }

  rodarSeta(){
    const setaElement = this.el.nativeElement.querySelector('.select-arrow ');
    if(!this.setaAberta){
      this.renderer.setStyle(setaElement, 'transform', 'translateY(50%) rotate(-225deg)');
      this.setaAberta = true
    } else {
      this.renderer.setStyle(setaElement, 'transform', 'translateY(0%) rotate(-45deg)');
      this.setaAberta = false
    }
  }

}
