import { Component, inject, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { Theme } from '../../core/services/theme';
import { Navigation } from '../../core/services/navigation';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,MatMenuModule,MatDividerModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  themeIcon = signal<string>('brightness_2');
  private themeService = inject(Theme);
  private navService = inject(Navigation);

  onLinkClick(id: string) {
    this.navService.scrollToSection(id);
  }
  toggle(){
    this.themeService.toggleMode();
    this.themeIcon.set(this.themeService.isDark() ? 'brightness_2' : 'brightness_5');
  }
}
