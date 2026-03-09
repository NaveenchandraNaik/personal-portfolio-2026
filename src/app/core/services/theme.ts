import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  isDark = signal<boolean>(false);

  constructor() {
    if (this.isBrowser) {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        this.enableDarkMode();
      }
    }
  }

  toggleMode() {
    // if (!this.isBrowser) return;
    this.isDark() ? this.enableLightMode() : this.enableDarkMode();
  }

  enableLightMode() {
    document.documentElement.classList.remove('dark-theme');
    // localStorage.removeItem('theme'); 
    localStorage.setItem('theme', 'light');
    this.isDark.set(false);
  }

  enableDarkMode() {
    document.documentElement.classList.add('dark-theme');
    // localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
    this.isDark.set(true);
  }

  isDarkMode() {
   return this.isDark();
  }
}
