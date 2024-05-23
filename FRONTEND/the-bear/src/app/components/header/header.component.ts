import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip'; // Import adicionado

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private router: Router) { }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateAndScrollToTop(): void {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  scrollToBottom(): void {
    const currentUrl = this.router.url;

    if (currentUrl === '/' || currentUrl === '/cardapio' || currentUrl === '/feedback' || currentUrl === '/denuncia' || currentUrl === '/adm') {
      this.performScrollToBottom();
    } else {
      this.router.navigate(['/']).then(() => {
        this.performScrollToBottom();
      });
    }
  }

  private performScrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
