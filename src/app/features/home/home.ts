import { Component, inject, signal,effect } from '@angular/core';
import { ActionButton } from "../../shared/components/action-button/action-button";
import { AppIcons } from '../../shared/components/app-icons/app-icons';
import { Theme } from '../../core/services/theme';
import { Navigation } from '../../core/services/navigation';
// declare var require: any
//   const FileSaver = require('file-saver');
@Component({
  selector: 'app-home',
  imports: [ActionButton, AppIcons],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  imgPath = signal<string>('assets/images/developer-pic.jpg');

 private themeService = inject(Theme);
 private navService = inject(Navigation);

 constructor(){
 effect(()=>{
  this.imgPath.set(this.themeService.isDark() ? 'assets/images/developer-pic-dark.jpg':'assets/images/developer-pic.jpg')
 });

 }

  downloadPdf() {
    // let link = document.createElement("a");
    // link.download = "Cv";
    // link.href = "assets/file/Nc Naik Resume.pdf";
    // link.click();
    window.open('assets/file/NC Naik Resume.pdf', '_blank');
  }
  
  onClick(id: string){
    this.navService.scrollToSection(id);
  }
}

