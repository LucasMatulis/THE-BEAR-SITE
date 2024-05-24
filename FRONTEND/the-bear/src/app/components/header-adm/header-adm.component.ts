import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-adm',
  templateUrl: './header-adm.component.html',
  styleUrls: ['./header-adm.component.css']
})
export class HeaderAdmComponent {
  constructor(private router: Router) { }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateAndScrollToTop(targetUrl: String): void {
    const currentUrl = this.router.url;

    if (currentUrl === targetUrl) {
      // Já estamos na página desejada, recarregue a página
      this.reloadPage();
    } else {
      // Navegue para a página desejada e role para o topo após a navegação
      this.router.navigate([targetUrl]).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  scrollToBottom(): void {
    const currentUrl = this.router.url;

    if (currentUrl !== '/' && currentUrl !== '/cardapio') {
      // Navegue para a rota raiz e, em seguida, role até o final após a navegação
      this.router.navigate(['/']).then(() => {
        this.performScrollToBottom();
      });
    } else {
      // Já está na rota raiz, execute a rolagem
      this.performScrollToBottom();
    }
  }

  private performScrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  private reloadPage(): void {
    window.location.reload();
  }
}
