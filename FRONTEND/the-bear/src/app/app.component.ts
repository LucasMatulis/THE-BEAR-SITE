import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bar';
  cliente: boolean = true;
  adm: boolean = false;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRoles(event.urlAfterRedirects);
        this.updateEspacamento();
      }
    });
  }

  updateRoles(url: string) {
    const editProdutoRegex = /^\/editProduto\/\d+$/;

    if (url === '/' || url === '/cardapio' || url === '/feedback' || url === '/denuncia' || url === '/adm') {
      this.cliente = true;
      this.adm = false;
    } else if (url === '/cadastro' || url === '/consulta' || editProdutoRegex.test(url) || url === '/denunciaAdm' || url === '/feedbackAdm') {
      this.cliente = false;
      this.adm = true;
    } else {
      this.cliente = false;
      this.adm = false;
    }
  }

  updateEspacamento() {
    const espacamentoElement = this.el.nativeElement.querySelector('#espacamento');
    if (this.cliente === false && this.adm === false) {
      this.renderer.setStyle(espacamentoElement, 'margin-top', '0px');
    } else {
      this.renderer.setStyle(espacamentoElement, 'margin-top', '99px');
    }
  }
}
