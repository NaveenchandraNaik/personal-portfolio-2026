import { Component, input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'skill-chip',
  imports: [MatChipsModule],
  templateUrl: './skill-chip.html',
  styleUrl: './skill-chip.css',
})
export class SkillChip {
  imgSrc = input<string>();
  altImg = input<string>();
  label = input<string>()
}
