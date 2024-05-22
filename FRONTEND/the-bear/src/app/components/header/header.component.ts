import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  scrollToBottom(): void {
    const currentUrl = this.router.url;

    if (currentUrl !== '/') {
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
