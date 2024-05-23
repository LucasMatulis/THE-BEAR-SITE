import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    if (currentUrl !== '/' && currentUrl !== '/cardapio') {
      // Navigate to the root route and then scroll to the bottom after navigation ends
      this.router.navigate(['/']).then(() => {
        this.performScrollToBottom();
      });
    } else {
      // Already on the root route, perform the scroll
      this.performScrollToBottom();
    }
  }

  private performScrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
