import { Component, effect, inject, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
// import { SkillChip } from '../../shared/components/skill-chip/skill-chip';
import {MatIconModule} from '@angular/material/icon';
import { AppIcons } from '../../shared/components/app-icons/app-icons';
import { Theme } from '../../core/services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatTabsModule, MatStepperModule, MatButtonModule, MatChipsModule,MatIconModule,AppIcons,CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  imgPath = signal<string>('assets/images/developer-pic.jpg');
  theme = inject(Theme);
  // blendMode = signal<string>('darken');

  constructor(){
    effect(()=>{
      this.imgPath.set(this.theme.isDarkMode() ? 'assets/images/developer-pic-dark-about.png' : 'assets/images/developer-pic.jpg');
      // this.blendMode.update((m)=> m === 'darken' ? 'darken':'lighten');
    })
  }
}
